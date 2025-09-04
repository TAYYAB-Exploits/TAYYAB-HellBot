// 📂 File: antidelete.js
// 🛡️ Ultra Pro Max Anti-Delete System — TAYYAB HELL-MD

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "delete.json");
const toggleFile = path.join(__dirname, "antidelete.json");

// ✅ Load or initialize toggles
let toggles = {};
if (fs.existsSync(toggleFile)) {
  toggles = JSON.parse(fs.readFileSync(toggleFile));
}

// ✅ Save toggle settings
function saveToggles() {
  fs.writeFileSync(toggleFile, JSON.stringify(toggles, null, 2));
}

// ✅ Auto-reset deleted messages file when bot starts
if (fs.existsSync(filePath)) {
  fs.unlinkSync(filePath);
}

const deletedMessages = new Map();
let botId = null; // 🔥 Bot ki apni ID save karne ke liye

// ✅ Set Bot ID from connection
function setBotId(sock) {
  if (sock && sock.user && sock.user.id) {
    botId = sock.user.id.split(":")[0] + "@s.whatsapp.net";
  }
}

// ✅ Store message (skip bot’s own)
function storeMessage(msg) {
  const jid = msg.key.remoteJid;
  const id = msg.key.id;

  if (!jid || !id || !msg.message) return;

  // ⛔ Agar sender bot khud hai to skip
  const sender = msg.key.participant || msg.key.remoteJid;
  if (msg.key.fromMe || sender === botId) return;

  if (!deletedMessages.has(jid)) {
    deletedMessages.set(jid, new Map());
  }

  deletedMessages.get(jid).set(id, msg);

  // ✅ Save current messages to file
  const storedData = {};
  for (const [jidKey, msgMap] of deletedMessages.entries()) {
    storedData[jidKey] = {};
    for (const [msgId, messageData] of msgMap.entries()) {
      storedData[jidKey][msgId] = {
        key: messageData.key,
        message: messageData.message,
        pushName: messageData.pushName
      };
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(storedData, null, 2));
}

// ✅ TOGGLE Command
async function toggleAntidelete({ conn, m, args, reply, jid }) {
  const option = (args[0] || "").toLowerCase();
  if (!["on", "off"].includes(option)) {
    return reply(
`〔 ✨ *ＡＮＴＩ－ＤＥＬＥＴＥ* ✨ 〕
┃ 🛡️ Usage:
┃    🌸 *.antidelete on*   → 𝘌𝘯𝘢𝘣𝘭𝘦
┃    🌸 *.antidelete off*  → 𝘋𝘪𝘴𝘢𝘣𝘭𝘦
┃ 
┃ 💡 𝘛𝘩𝘪𝘴 𝘸𝘪𝘭𝘭 𝘴𝘢𝘷𝘦 & 𝘳𝘦𝘤𝘰𝘷𝘦𝘳
┃    𝘢𝘯𝘺 𝘥𝘦𝘭𝘦𝘵𝘦𝘥 𝘮𝘦𝘴𝘴𝘢𝘨𝘦𝘴 💬
╰━━━━━━━━━━━━━━━━━━╯`
    );
  }

  const enabled = option === "on";
  toggles[jid] = enabled;
  saveToggles();

  return reply(
`〔 💖 *ＡＮＴＩ－ＤＥＬＥＴＥ ＳＴＡＴＵＳ* 💖 〕
┃ 🔰 𝘗𝘳𝘰𝘵𝘦𝘤𝘵𝘪𝘰𝘯: *${enabled ? "ＥＮＡＢＬＥＤ ✅" : "ＤＩＳＡＢＬＥＤ ❌"}*
┃ 📌 𝘈𝘱𝘱𝘭𝘪𝘦𝘴 𝘵𝘰: *𝘛𝘩𝘪𝘴 𝘊𝘩𝘢𝘵*
┃ 
┃ 👑 𝑺𝒆𝒄𝒖𝒓𝒆𝒅 𝒃𝒚: ✨ 𝑻𝒂𝒚𝒚𝒂𝒃 𝑴𝑫 ✨
╰━━━━━━━━━━━━━━━━━━╯`
  );
}

// ✅ Handle Message Revocation
async function handleMessageRevocation(sock, msg) {
  const jid = msg.key.remoteJid;
  const id = msg.message?.protocolMessage?.key?.id;

  if (!jid || !id || !deletedMessages.has(jid)) return;

  // ✅ Respect toggle setting
  if (!toggles[jid]) return;

  const storedMsg = deletedMessages.get(jid).get(id);
  if (!storedMsg) return;

  // ⛔ Agar deleted msg bot ka khud ka tha to skip
  const sender = storedMsg.key.participant || storedMsg.key.remoteJid;
  if (storedMsg.key.fromMe || sender === botId) {
    deletedMessages.get(jid).delete(id);
    return;
  }

  const senderName = storedMsg.pushName || sender || "𝑺𝒐𝒎𝒆𝒐𝒏𝒆";
  const messageContent = extractMessageContent(storedMsg);

  const infoText = 
`〔 ⚠️ *ＡＮＴＩ－ＤＥＬＥＴＥ ＤＥＴＥＣＴＥＤ* ⚠️ 〕
┃ 👤 𝘚𝘦𝘯𝘥𝘦𝘳: *${senderName}*
┃ 🗑️ 𝘋𝘦𝘭𝘦𝘵𝘦𝘥 𝘮𝘴𝘨 𝘳𝘦𝘤𝘰𝘷𝘦𝘳𝘦𝘥 ✨
┃ 
┃ 💌 𝑺𝒆𝒄𝒖𝒓𝒆𝒅 𝒃𝒚 𝑻𝒂𝒚𝒚𝒂𝒃 𝑴𝑫
╰━━━━━━━━━━━━━━━━━━╯`;

  if (messageContent.text) {
    await sock.sendMessage(jid, {
      text: `${infoText}\n\n🌸 *Message:* ${messageContent.text}`,
      mentions: [sender]
    });
  } else if (messageContent.media) {
    await sock.sendMessage(jid, {
      caption: infoText,
      [messageContent.type]: messageContent.media,
      mentions: [sender]
    });
  }

  deletedMessages.get(jid).delete(id);

  // ✅ Save again after removal
  const storedData = {};
  for (const [jidKey, msgMap] of deletedMessages.entries()) {
    storedData[jidKey] = {};
    for (const [msgId, messageData] of msgMap.entries()) {
      storedData[jidKey][msgId] = {
        key: messageData.key,
        message: messageData.message,
        pushName: messageData.pushName
      };
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(storedData, null, 2));
}

// ✅ Extract message content
function extractMessageContent(msg) {
  const message = msg.message;

  if (!message) return { text: null };
  if (message.conversation) return { text: message.conversation };
  if (message.extendedTextMessage?.text) return { text: message.extendedTextMessage.text };
  if (message.imageMessage) return { type: "image", media: message.imageMessage };
  if (message.videoMessage) return { type: "video", media: message.videoMessage };
  if (message.stickerMessage) return { type: "sticker", media: message.stickerMessage };

  return { text: null };
}

module.exports = {
  storeMessage,
  handleMessageRevocation,
  toggleAntidelete,
  setBotId
};