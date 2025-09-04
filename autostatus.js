// 📁 File: autostatus.js
const fs = require("fs");
const path = require("path");

// 🧼 Clean number from JID
function getCleanNumber(jid = "") {
  return jid.replace(/\D/g, "");
}

// 🔍 Resolve sender number
function resolveSenderNumber(m, conn) {
  let senderJid =
    m.key?.participant ||
    m.message?.extendedTextMessage?.contextInfo?.participant ||
    m.participant ||
    m.sender ||
    (m.key?.fromMe && conn?.user?.id) ||
    m.key?.remoteJid;

  try {
    if (!senderJid && conn?.decodeJid) {
      senderJid = conn.decodeJid(m?.key?.remoteJid);
    }
  } catch {}

  return getCleanNumber(senderJid || "");
}

module.exports = async function ({ conn, m, reply, args, isGroup, jid }) {
  try {
    // ❌ Block in groups — allow only in DM

    const senderNum = resolveSenderNumber(m, conn);
    if (!senderNum) {
      return reply(
`╭━━━〔 ⚠️ *ERROR* 〕━━━╮
┃ ❌ Unable to identify the sender!
╰━━━━━━━━━━━━━━━━━━━╯`
      );
    }

    const toggle = args[0]?.toLowerCase();
    if (!["on", "off"].includes(toggle)) {
      return reply(
`╭〔 👁️ *AUTO-STATUS VIEW* 〕╮
┃ 💡 Usage:
┃   .autostatus on   → Enable
┃   .autostatus off  → Disable
┃ 
┃ 🔮 Bot will auto-view statuses
╰━━━━━━━━━━━━━━━━━━━╯`
      );
    }

    global.autostatus = toggle === "on";
    return reply(
`╭〔 👁️ *AUTO-STATUS VIEW* 〕╮
┃ Status: ${toggle === "on" ? "🟢 ENABLED" : "🔴 DISABLED"}
┃ 
┃ ✨ Now bot will ${toggle === "on" ? "*auto-watch all statuses*" : "*ignore statuses*"}!
┃ 💜 Powered by: Tayyab Exploits
╰━━━━━━━━━━━━━━━━━━━╯`
    );

  } catch (err) {
    console.error("❌ AutoStatus Error:", err.message);
    return reply(
`╭〔 💥 *SYSTEM FAILURE* 〕╮
┃ ❌ Error while toggling AutoStatus!
┃ ⚠️ ${err.message}
╰━━━━━━━━━━━━━━━━━━━╯`
    );
  }
};