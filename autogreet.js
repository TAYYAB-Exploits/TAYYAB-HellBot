// 📁 File: autogreet.js
module.exports = async function greet({ conn, m, args, reply }) {
  const jid = m.key.remoteJid;
  global.autogreet = global.autogreet || {};

  if (!jid.endsWith("@g.us")) {
    return reply(
`〔 🚫 *GROUP ONLY* 〕
┃ ⚠️ This command only works 
┃ inside groups.
╰━━━━━━━━━━━━━━━━━━━╯`
    );
  }

  const current = global.autogreet[jid] === true;
  const mode = (args[0] || "").toLowerCase();

  if (mode === "on") {
    global.autogreet[jid] = true;
    return reply(
`〔 ✅ *AUTO-GREET ENABLED* 〕
┃ 📡 New join/leave messages 
┃     will now be sent.
┃ 
┃ 💜 Powered by: Tayyab Exploits
╰━━━━━━━━━━━━━━━━━╯`
    );
  }

  if (mode === "off") {
    delete global.autogreet[jid];
    return reply(
`〔 ❌ *AUTO-GREET DISABLED* 〕
┃ 🧟 No more join/leave greetings.
┃ 
┃ 💜 Powered by: Tayyab Exploits
╰━━━━━━━━━━━━━━━━━━━╯`
    );
  }

  // No args — just show current status
  const status = current ? "🟢 ENABLED" : "🔴 DISABLED";
  reply(
`〔 📢 *AUTO-GREET STATUS* 〕
┃ Current: ${status}
┃ 
┃ ⚙️ Usage:
┃   .autogreet on   → Enable
┃   .autogreet off  → Disable
╰━━━━━━━━━━━━━━━━━━━╯`
  );
};