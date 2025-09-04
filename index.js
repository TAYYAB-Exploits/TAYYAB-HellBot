const fs = require("fs");
const readline = require("readline");
const P = require("pino");
const { 
  default: makeWASocket, 
  useMultiFileAuthState, 
  fetchLatestBaileysVersion, 
  DisconnectReason 
} = require("@whiskeysockets/baileys");

const { handleCommand } = require("./menu/case");
const { loadSettings } = require("./settings");
const { storeMessage, handleMessageRevocation } = require("./antidelete");
const AntiLinkKick = require("./antilinkick.js");
const { antibugHandler } = require("./antibug.js"); // ✅ import correct function

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("auth_info");
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({ version, auth: state, logger: P({ level: "fatal" }) });

  const settings = typeof loadSettings === 'function' ? loadSettings() : {};
  let ownerRaw = settings.ownerNumber?.[0] || "92300xxxxxxx";
  const ownerJid = ownerRaw.includes("@s.whatsapp.net") ? ownerRaw : ownerRaw + "@s.whatsapp.net";

  global.sock = sock;
  global.settings = settings;
  global.signature = settings.signature || "> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓";
  global.owner = ownerJid;
  global.ownerNumber = ownerRaw;

  // ✅ Flags
  global.antilink = {};
  global.antilinkick = {};
  global.antibug = false;
  global.autogreet = {};
  global.autotyping = false;
  global.autoreact = false;
  global.autostatus = false;

  console.log("✅ BOT OWNER:", global.owner);

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "open") {  
      console.log("✅ [BOT ONLINE] Connected to WhatsApp!");  
      rl.close();  
    }  

    if (connection === "close") {  
      const shouldReconnect = (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut);  
      console.log("❌ Disconnected. Reconnecting:", shouldReconnect);  
      if (shouldReconnect) startBot();  
    }
  });

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];
    const jid = msg.key.remoteJid;
    const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text || "";

    // ✅ AntiDelete
    if (settings.ANTIDELETE === true) {  
      try {  
        if (msg.message) storeMessage(msg);  
        if (msg.message?.protocolMessage?.type === 0) {  
          await handleMessageRevocation(sock, msg);  
          return;  
        }  
      } catch (err) {  
        console.error("❌ AntiDelete Error:", err.message);  
      }  
    }  

    // ✅ AutoTyping
    if (global.autotyping && jid !== "status@broadcast") {  
      try {  
        await sock.sendPresenceUpdate('composing', jid);  
        await new Promise(res => setTimeout(res, 2000));  
      } catch (err) {  
        console.error("❌ AutoTyping Error:", err.message);  
      }  
    }  

    // ✅ AutoReact
    if (global.autoreact && jid !== "status@broadcast") {
      try {
        const hearts = [
          "❤️","☣️","🅣","🧡","💛","💚","💙","💜",
          "🖤","🤍","🤎","💕","💞","💓",
          "💗","💖","💘","💝","🇵🇰","♥️"
        ];
        const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
        await sock.sendMessage(jid, { react: { text: randomHeart, key: msg.key } });
      } catch (err) {
        console.error("❌ AutoReact Error:", err.message);
      }
    }  

    // ✅ AutoStatus View
    if (global.autostatus && jid === "status@broadcast") {  
      try {  
        await sock.readMessages([{  
          remoteJid: jid,  
          id: msg.key.id,  
          participant: msg.key.participant || msg.participant  
        }]);  
        console.log(`👁️ Status Seen: ${msg.key.participant || "Unknown"}`);  
      } catch (err) {  
        console.error("❌ AutoStatus View Error:", err.message);  
      }  
      return;  
    }  

    // ✅ Antilink
    if (
      jid.endsWith("@g.us") &&
      global.antilink[jid] === true &&
      /(chat\.whatsapp\.com|t\.me|discord\.gg|wa\.me|bit\.ly|youtu\.be|https?:\/\/)/i.test(text) &&
      !msg.key.fromMe
    ) {
      try {
        await sock.sendMessage(jid, {  
          delete: { remoteJid: jid, fromMe: false, id: msg.key.id, participant: msg.key.participant || msg.participant }  
        });  
        
      } catch (err) {
        console.error("❌ Antilink Delete Error:", err.message);
      }
    }

    // ✅ AntilinkKick
    if (
      jid.endsWith("@g.us") &&
      global.antilinkick[jid] === true &&
      /(chat\.whatsapp\.com|t\.me|discord\.gg|wa\.me|bit\.ly|youtu\.be|https?:\/\/)/i.test(text) &&
      !msg.key.fromMe
    ) {
      try {
        await AntiLinkKick.checkAntilinkKick({ conn: sock, m: msg });
        
      } catch (err) {
        console.error("❌ AntilinkKick Error:", err.message || err);
      }
    }

    // ✅ AntiBug
    if (global.antibug === true && !msg.key.fromMe) {
      try {
        const isBug = await antibugHandler({ conn: sock, m: msg }); // ✅ FIX
        if (isBug) {
          
          return;
        }
      } catch (err) {
        console.error("❌ AntiBug Error:", err.message || err);
      }
    }

    // ✅ Command handler
    try {  
      await handleCommand(sock, msg, {});  
    } catch (err) {  
      console.error("❌ Command error:", err.message || err);  
    }
  });

  // ✅ AutoGreet
  sock.ev.on("group-participants.update", async (update) => {
    const { id, participants, action } = update;
    if (!global.autogreet?.[id]) return;

    try {
      const metadata = await sock.groupMetadata(id);
      const memberCount = metadata.participants.length;
      const groupName = metadata.subject || "Unnamed Group";
      const groupDesc = metadata.desc?.toString() || "No description set.";

      for (const user of participants) {
        const tag = `@${user.split("@")[0]}`;
        let message = "";

        if (action === "add") {
          message = `
┏━━━🔥༺ 𓆩💀𓆪 ༻🔥━━━┓
   💠 *WELCOME TO HELL* 💠
┗━━━🔥༺ 𓆩💀𓆪 ༻🔥━━━┛

👹 *Hey ${tag}, Welcome to*  
『 ${groupName} 』

⚡ *Current Members:* ${memberCount}  
📜 *Group Description:*  
『 ${groupDesc} 』

💀 *Attitude ON, Rules OFF*  
👾 *TAYYAB HELL-MD welcomes you with POWER* ⚡
          `;
        } else if (action === "remove") {
          message = `
┏━━━💔༺ 𓆩☠️𓆪 ༻💔━━━┓
   ❌ *GOODBYE WARRIOR* ❌
┗━━━💔༺ 𓆩☠️𓆪 ༻💔━━━┛

💔 ${tag} *has left the battlefield...*  
⚡ *Now only ${memberCount - 1} members remain in ${groupName}*  
☠️ *Hell doesn’t forget easily...*  
          `;
        }

        if (message) {
          await sock.sendMessage(id, { text: message, mentions: [user] });
        }
      }
    } catch (err) {
      console.error("❌ AutoGreet Error:", err.message);
    }
  });

  // ✅ Pairing code
  if (!state.creds?.registered) {
    const phoneNumber = await question("📱 Enter your WhatsApp number (with country code): ");
    await sock.requestPairingCode(phoneNumber.trim());

    setTimeout(() => {  
      const code = sock.authState.creds?.pairingCode;  
      if (code) {  
        console.log("\n🔗 Pair this device using this code in WhatsApp:\n");  
        console.log("   " + code + "\n");  
        console.log("Go to WhatsApp → Linked Devices → Link with code.");  
      } else {  
        console.log("❌ Pairing code not found.");  
      }  
    }, 1000);
  }
}

startBot();