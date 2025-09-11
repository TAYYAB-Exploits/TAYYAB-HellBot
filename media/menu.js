// 📂 menu.js
// 🌟 Full Stylish Global Menu — TAYYAB HELL-MD

const more = String.fromCharCode(8206)
const readMore = more.repeat(2001)
const moment = require('moment-timezone')

// Dynamic date, time & uptime
const date = moment().tz('Asia/Karachi').format('DD-MMM-YYYY')
const time = moment().tz('Asia/Karachi').format('hh:mm A')
const uptimeSec = process.uptime()
const hours = Math.floor(uptimeSec / 3600)
const minutes = Math.floor((uptimeSec % 3600) / 60)
const seconds = Math.floor(uptimeSec % 60)
const uptimeStr = `${hours}h ${minutes}m ${seconds}s`

// Status box to show at menu start & each category start
const statusBox = `
╭━━〔𝙏𝘼𝙔𝙔𝘼𝘽 𝙃𝙀𝙇𝙇-𝙈𝐃〕━╮
┃ 🔥 Mode: PRIVATE | FULL POWER
┃ 💀 Status: HELL PROTOCOL ACTIVE
┃ 👑 Owner: 𝕋𝔸𝕐𝕐𝔸𝔹 ☠️
┃ ⚡ Version: 1.0.0 (Hell Build)
┃ ⏳ Uptime: ${uptimeStr}
┃ 📅 Date: ${date}
┃ 🕒 Time: ${time}
┃ 📌 Commands: 222+ Loaded
┃ 📱 Device: ANDROID-HELLCORE
╰━━━━━━━━━━━━━━━━━╯
`

global.menu = `
${statusBox}
╔═══❖•⊰ *TAYYAB HELL-MD ALL MENU* ⊱•❖═══╗
║◈ .menu
║◈ .ownermenu
║◈ .downloadmenu
║◈ .groupmenu
║◈ .automenu
║◈ .aimenu
║◈ .githubmenu
║◈ .logomenu
║◈ .toolsmenu
║◈ .textmenu
║◈ .utilitymenu
║◈ .exploitsmenu
║◈ .photomenu
║◈ .reactmenu
║◈ .gamemenu
║◈ .funmenu
║◈ .animemenu
╚═══════════════╝
${readMore}

╔══❖•⊰ 👑 OWNER MENU ⊱•❖══╗
║➊ ☞ Self 🐦‍🔥
║➋ ☞ Public 🐦‍🔥
║➌ ☞ Block 🐦‍🔥
║➍ ☞ Nice 🐦‍🔥
║➎ ☞ Repo 🐦‍🔥
║➏ ☞ Restart 🐦‍🔥
║➐ ☞ Shutdown 🐦‍🔥
║➑ ☞ Setbio 🐦‍🔥
║➒ ☞ Setname 
║➓ ☞ Setpp 🐦‍🔥
║⓫ ☞ Save 🐦‍🔥
║⓬ ☞ Join 🐦‍🔥
║⓭ ☞ Leave 🐦‍🔥
║⓮ ☞ Delaymsg 🐦‍🔥
║⓯ ☞ Numinfo 🐦‍🔥
║⓰ ☞ Del 🐦‍🔥
║⓱ ☞ Reactch 🐦‍🔥
║⓲ ☞ Idcheck 🐦‍🔥
╚════════════════╝
${readMore}

╔═❖•⊰ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 ⊱•❖═╗
║➊ ⟿ 𝙑𝙞𝙙𝙚𝙤 ୧⍤⃝📷  
║➋ ⟿ 𝙑𝙞𝙙𝙚𝙤𝟮 ୧⍤⃝📷  
║➌ ⟿ 𝙈𝙚𝙙𝙞𝙖𝙁𝙞𝙧𝙚 ୧⍤⃝📷  
║➍ ⟿ 𝙎𝙤𝙣𝙜 ୧⍤⃝📷  
║➎ ⟿ 𝙎𝙤𝙣𝙜𝟮 ୧⍤⃝📷  
║➏ ⟿ 𝙋𝙡𝙖𝙮 ୧⍤⃝📷  
║➐ ⟿ 𝙂𝙞𝙩𝙘𝙡𝙤𝙣𝙚 ୧⍤⃝📷  
║➑ ⟿ 𝙏𝙞𝙠𝙏𝙤𝙠 ୧⍤⃝📷  
║➒ ⟿ 𝙄𝙣𝙨𝙩𝙖 ୧⍤⃝📷  
║➓ ⟿ 𝙁𝘽 ୧⍤⃝📷  
║⓫ ⟿ 𝙄𝙈𝙂 ୧⍤⃝📷  
║⓬ ⟿ 𝘼𝙋𝙆 ୧⍤⃝📷  
║⓭ ⟿ 𝙔𝙩𝙢𝙥𝟰 ୧⍤⃝📷  
║⓮ ⟿ 𝙔𝙩𝙢𝙥𝟯 ୧⍤⃝📷  
╚═════════════════╝
${readMore}

╔══❖•⊰ 𝐀𝐔𝐓𝐎 𝐌𝐄𝐍𝐔 ⊱•❖══╗
║➊ ⟿ 𝘼𝙣𝙩𝙞𝙡𝙞𝙣𝙠 🪼  
║➋ ⟿ 𝘼𝙣𝙩𝙞𝙡𝙞𝙣𝙠𝙞𝙘𝙠 🪼  
║➌ ⟿ 𝘼𝙣𝙩𝙞𝙗𝙪𝙜 🪼  
║➍ ⟿ 𝘼𝙣𝙩𝙞𝙙𝙚𝙡𝙚𝙩𝙚 🪼  
║➎ ⟿ 𝘼𝙪𝙩𝙤𝙨𝙩𝙖𝙩𝙪𝙨 🪼  
║➏ ⟿ 𝘼𝙪𝙩𝙤𝙧𝙚𝙖𝙘𝙩 🪼  
║➐ ⟿ 𝘼𝙪𝙩𝙤𝙂𝙧𝙚𝙚𝙩 🪼  
║➑ ⟿ 𝘼𝙪𝙩𝙤𝙏𝙮𝙥𝙞𝙣𝙜 🪼  
║➒ ⟿ 𝘼𝙪𝙩𝙤𝙧𝙚𝙘𝙤𝙧𝙙𝙞𝙣𝙜 🪼  
║➓ ⟿ 𝘼𝙪𝙩𝙤𝙧𝙚𝙖𝙙 🪼  
╚═════════════════╝
${readMore}

╔═❖•⊰ ⚡ 𝐀𝐈 𝐌𝐄𝐍𝐔 ⊱•❖═╗
║➊ ⟿ 𝘾𝙝𝙖𝙩𝙜𝙥𝙩 🥏  
║➋ ⟿ 𝙇𝙇𝙖𝙢𝙖 🥏  
║➌ ⟿ 𝘾𝙡𝙖𝙪𝙙𝙚 🥏  
║➍ ⟿ 𝙈𝙞𝙨𝙩𝙧𝙖𝙡 🥏  
╚════════════════╝
${readMore}

╔═══❖•⊰ 👥 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 ⊱•❖═══╗
║➊ ⟿ 𝙆𝙞𝙘𝙠 ☚⍢⃝☚  
║➋ ⟿ 𝘼𝙙𝙙 ☚⍢⃝☚  
║➌ ⟿ 𝙆𝙞𝙘𝙠𝙖𝙡𝙡 ☚⍢⃝☚  
║➍ ⟿ 𝙊𝙥𝙚𝙣 ☚⍢⃝☚  
║➎ ⟿ 𝘾𝙡𝙤𝙨𝙚 ☚⍢⃝☚  
║➏ ⟿ 𝙏𝙖𝙜𝙖𝙡𝙡 ☚⍢⃝☚  
║➐ ⟿ 𝙏𝙖𝙜𝙖𝙙𝙢𝙞𝙣 ☚⍢⃝☚  
║➑ ⟿ 𝙃𝙞𝙙𝙚𝙩𝙖𝙜 ☚⍢⃝☚  
║➒ ⟿ 𝙇𝙞𝙨𝙩𝙖𝙘𝙩𝙞𝙫𝙚 ☚⍢⃝☚  
║➓ ⟿ 𝘾𝙝𝙖𝙣𝙜𝙚𝙣𝙖𝙢𝙚 ☚⍢⃝☚  
║⓫ ⟿ 𝘾𝙡𝙤𝙨𝙚𝙩𝙞𝙢𝙚 ☚⍢⃝☚  
║⓬ ⟿ 𝙂𝙞𝙣𝙛𝙤 ☚⍢⃝☚  
║⓭ ⟿ 𝙒𝙖𝙧𝙣 ☚⍢⃝☚  
║⓮ ⟿ 𝙂𝙥𝙥 ☚⍢⃝☚  
║⓯ ⟿ 𝙋𝙧𝙤𝙢𝙤𝙩𝙚 ☚⍢⃝☚  
║⓰ ⟿ 𝘿𝙚𝙢𝙤𝙩𝙚 ☚⍢⃝☚  
║⓱ ⟿ 𝙋𝙧𝙤𝙢𝙤𝙩𝙚𝙖𝙡𝙡 ☚⍢⃝☚  
║⓲ ⟿ 𝘿𝙚𝙢𝙤𝙩𝙚𝙖𝙡𝙡 ☚⍢⃝☚  
║⓳ ⟿ 𝘼𝙙𝙢𝙞𝙣𝙠𝙞𝙡𝙡 ☚⍢⃝☚  
║⓴ ⟿ 𝙇𝙚𝙖𝙫𝙚 ☚⍢⃝☚  
╚════════════════════╝
${readMore}

╔═❖•⊰ 💻 𝐆𝐈𝐓𝐇𝐔𝐁 𝐌𝐄𝐍𝐔 ⊱•❖═╗
║➊ ⟿ 𝙂𝙞𝙩𝙃𝙪𝙗 🪔  
║➋ ⟿ 𝙂𝙞𝙩𝙘𝙡𝙤𝙣𝙚 🪔  
║➌ ⟿ 𝙂𝙞𝙩𝙧𝙚𝙥𝙤𝙨 🪔  
║➍ ⟿ 𝙂𝙞𝙩𝙛𝙤𝙡𝙡𝙤𝙬𝙚𝙧𝙨 🪔  
║➎ ⟿ 𝙂𝙞𝙩𝙨𝙩𝙖𝙧𝙧𝙚𝙙 🪔  
║➏ ⟿ 𝙂𝙞𝙩𝙛𝙤𝙡𝙡𝙤𝙬 🪔  
╚═════════════════╝
${readMore}

╔═❖•⊰ 🎨 𝐋𝐎𝐆𝐎 𝐌𝐄𝐍𝐔 ⊱•❖═╗
║➊ ⟿ 𝙇𝙤𝙜𝙤 ୧⍤⃝💐  
║➋ ⟿ 𝙙𝟹𝙘𝙤𝙢𝙞𝙘 ୧⍤⃝💐  
║➌ ⟿ 𝘿𝙧𝙖𝙜𝙤𝙣𝙗𝙖𝙡𝙡 ୧⍤⃝💐  
║➍ ⟿ 𝘿𝙚𝙖𝙙𝙥𝙤𝙤𝙡 ୧⍤⃝💐  
║➎ ⟿ 𝘽𝙡𝙖𝙘𝙠𝙥𝙞𝙣𝙠 ୧⍤⃝💐  
║➏ ⟿ 𝙉𝙚𝙤𝙣𝙡𝙞𝙜𝙝𝙩 ୧⍤⃝💐  
║➐ ⟿ 𝘾𝙖𝙩 ୧⍤⃝💐  
╚════════════╝
${readMore}

╔═══❖•⊰ 🛠️ 𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔 ⊱•❖═══╗
║➊ ⟿ 𝙍𝙚𝙖𝙙𝙢𝙤𝙧𝙚 ☣  
║➋ ⟿ 𝙉𝙞𝙘𝙚 ☣  
║➌ ⟿ 𝙎𝙖𝙮 ☣  
║➍ ⟿ 𝙏𝙏𝙀 ☣  
║➎ ⟿ 𝘾𝙖𝙡𝙘 ☣  
║➏ ⟿ 𝙋𝙤𝙡𝙡 ☣  
║➐ ⟿ 𝙃𝙖𝙘𝙠 ☣  
║➑ ⟿ 𝙈𝙖𝙩𝙧𝙞𝙭 ☣  
║➒ ⟿ 𝙁𝙖𝙣𝙘𝙮 ☣  
║➓ ⟿ 𝘾𝙥𝙥 ☣  
║⓫ ⟿ 𝙄𝙣𝙨𝙪𝙡𝙩 ☣  
║⓬ ⟿ 𝙃𝙖𝙧𝙖𝙢𝙞 ☣  
║⓭ ⟿ 𝙎𝙝𝙖𝙥𝙖𝙧 ☣  
║⓮ ⟿ 𝙃𝙚𝙖𝙧𝙩 ☣  
║⓯ ⟿ 𝘾𝙝𝙚𝙘𝙠𝙢𝙚 ☣  
╚═══════════════╝
${readMore}

╔══❖•⊰ ✍️ 𝐓𝐄𝐗𝐓 𝐄𝐅𝐅𝐄𝐂𝐓 ⊱•❖══╗
║➊ ⟿ 𝙁𝙡𝙞𝙥𝙩𝙚𝙭𝙩 ✏  
║➋ ⟿ 𝙎𝙢𝙖𝙡𝙡𝙘𝙖𝙥𝙨 ✏  
║➌ ⟿ 𝙕𝙖𝙡𝙜𝙤 ✏  
║➍ ⟿ 𝙕𝙖𝙡𝙜𝙤2 ✏  
║➎ ⟿ 𝘽𝙪𝙗𝙗𝙡𝙚 ✏  
║➏ ⟿ 𝙎𝙩𝙧𝙞𝙠𝙚 ✏  
║➐ ⟿ 𝙍𝙚𝙫𝙚𝙧𝙨𝙚 ✏  
║➑ ⟿ 𝙈𝙞𝙧𝙧𝙤𝙧 ✏  
║➒ ⟿ 𝘼𝙣𝙞𝙢𝙖𝙡 ✏  
║➓ ⟿ 𝙏𝙏𝙀 ✏  
╚════════════════╝
${readMore}

╔═❖•⊰ ⚙️ 𝗨𝗧𝗜𝗟𝗜𝗧𝗬 𝗠𝗘𝗡𝗨 ⊱•❖═╗
║➊ ⟿ 𝗣𝗶𝗻𝗴 🔮  
║➋ ⟿ 𝗔𝗹𝗶𝘃𝗲 🔮  
║➌ ⟿ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 🔮  
║➍ ⟿ 𝗢𝘄𝗻𝗲𝗿 🔮  
║➎ ⟿ 𝗕𝗼𝘁𝗻𝗮𝗺𝗲 🔮  
║➏ ⟿ 𝗜𝗻𝘁𝗿𝗼 🔮  
║➐ ⟿ 𝗖𝗵𝗮𝗻𝗻𝗲𝗹 🔮  
║➑ ⟿ 𝗜𝗻𝗳𝗼 🔮  
║➒ ⟿ 𝗛𝗲𝗹𝗽 🔮  
╚═══════════════╝
${readMore}

╔═❖•⊰ 💀 𝗘𝗫𝗣𝗟𝗢𝗜𝗧𝗦 𝗠𝗘𝗡𝗨 ⊱•❖═╗
║➊ ⟿ 𝗫𝗿𝗮𝘆 𓄀  
║➋ ⟿ 𝗗𝗶𝘀𝗸 𓄀  
║➌ ⟿ 𝗚𝗵𝗼𝘀𝘁𝗽𝗶𝗻𝗴 𓄀  
║➍ ⟿ 𝗥𝗼𝗼𝘁𝗺𝗲 𓄀  
║➎ ⟿ 𝗡𝘂𝗺𝗶𝗻𝗳𝗼 𓄀  
║➏ ⟿ 𝗔𝗱𝗺𝗶𝗻𝗸𝗶𝗹𝗹 𓄀  
║➐ ⟿ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿 𓄀  
╚════════════════╝

${readMore}

╔═══❖•⊰ 🖼️ 𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨 ⊱•❖═══╗
║➊ ⟿ 𝗔𝗿𝘁 ୧⍤⃝💐  
║➋ ⟿ 𝗪𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 ୧⍤⃝💐  
║➌ ⟿ 𝗚𝗮𝗺𝗲𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 ୧⍤⃝💐  
║➍ ⟿ 𝗖𝘆𝗯𝗲𝗿 ୧⍤⃝💐  
║➎ ⟿ 𝗚𝗿𝗲𝗺𝗼𝗿𝘆 ୧⍤⃝💐  
║➏ ⟿ 𝗛𝗮𝗰𝗸𝗲𝗿 ୧⍤⃝💐  
║➐ ⟿ 𝗛𝗲𝘀𝘁𝗶𝗮 ୧⍤⃝💐  
║➑ ⟿ 𝗝𝗶𝗯𝗿𝗶𝗹 ୧⍤⃝💐  
║➒ ⟿ 𝗥𝗼𝘀𝗲 ୧⍤⃝💐  
║➓ ⟿ 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆 ୧⍤⃝💐  
║⓫ ⟿ 𝗣𝘂𝗯𝗴 ୧⍤⃝💐  
║⓬ ⟿ 𝗙𝗿𝗲𝗲𝗙𝗶𝗿𝗲 ୧⍤⃝💐  
║⓭ ⟿ 𝗠𝗼𝘂𝗻𝘁𝗮𝗶𝗻 ୧⍤⃝💐  
║⓮ ⟿ 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 ୧⍤⃝💐  
║⓯ ⟿ 𝗗𝗼𝗴 ୧⍤⃝💐  
║⓰ ⟿ 𝗜𝗺𝗴𝗰𝗮𝘁 ୧⍤⃝💐  
╚════════════════╝
${readMore}

╔═❖•⊰ 💫 𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 ⊱•❖═╗
║➊ ⟿ 𝗞𝗶𝗹𝗹 🪅  
║➋ ⟿ 𝗣𝗮𝘁 🪅  
║➌ ⟿ 𝗖𝗿𝘆 🪅  
║➍ ⟿ 𝗛𝘂𝗴 🪅  
║➎ ⟿ 𝗞𝗶𝘀𝘀 🪅  
║➏ ⟿ 𝗦𝗹𝗮𝗽 🪅  
║➐ ⟿ 𝗦𝗮𝗱 🪅  
║➑ ⟿ 𝗕𝗶𝘁𝗲 🪅  
║➒ ⟿ 𝗕𝗮𝗸𝗮 🪅  
║➓ ⟿ 𝗦𝗺𝗶𝗹𝗲 🪅  
║⓫ ⟿ 𝗟𝗼𝘃𝗲 🪅 
╚════════════════╝
${readMore}

╔═❖•⊰ 🎮 𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨 ⊱•❖═╗  
║➊ ⟿ 𝗧𝗶𝗰𝘁𝗮𝗰𝘁𝗼𝗲 ⛟  
║➋ ⟿ 𝗥𝗽𝘀 ⛟  
║➌ ⟿ 𝗙𝗹𝗮𝗴 ⛟  
║➍ ⟿ 𝗠𝗮𝘁𝗵 ⛟  
║➎ ⟿ 𝗚𝘂𝗲𝘀𝘀𝗻𝘂𝗺𝗯𝗲𝗿 ⛟  
║➏ ⟿ 𝗦𝗰𝗿𝗮𝗺𝗯𝗹𝗲 ⛟  
║➐ ⟿ 𝗥𝗶𝗱𝗱𝗹𝗲 ⛟  
║➑ ⟿ 𝗘𝗺𝗼𝗷𝗶 ⛟  
╚═══════════════╝
${readMore}


╔═❖•⊰ 🎉 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 ⊱•❖═╗  
║➊ ⟿ 𝗝𝗼𝗸𝗲 ⛃  
║➋ ⟿ 𝗠𝗲𝗺𝗲 ⛃  
║➌ ⟿ 𝗔𝗻𝗶𝗺𝗲 ⛃  
║➍ ⟿ 𝗤𝘂𝗼𝘁𝗲 ⛃  
║➎ ⟿ 𝗧𝗿𝘂𝘁𝗵𝗼𝗿𝗱𝗮𝗿𝗲 ⛃  
║➏ ⟿ 𝗘𝗶𝗴𝗵𝘁𝗕𝗮𝗹𝗹 ⛃  
║➐ ⟿ 𝗥𝗼𝗮𝘀𝘁 ⛃  
║➑ ⟿ 𝗙𝗮𝗰𝘁 ⛃  
║➒ ⟿ 𝗛𝗶𝘀𝘁𝗼𝗿𝘆𝗳𝗮𝗰𝘁 ⛃  
║➓ ⟿ 𝗖𝗮𝗽𝘁𝗶𝗼𝗻𝘀 ⛃  
║⓫ ⟿ 𝗧𝗿𝗶𝘃𝗶𝗮 ⛃  
╚═════════════════╝
${readMore}

╔═❖•⊰ 🎎 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨 ⊱•❖═╗  
║➊ ⟿ 𝗪𝗮𝗶𝗳𝘂 🌸  
║➋ ⟿ 𝗡𝗲𝗸𝗼 🌸  
║➌ ⟿ 𝗡𝗲𝗸𝗼𝟮 🌸  
║➍ ⟿ 𝗔𝗸𝗶𝘆𝗮𝗺𝗮 🌸  
║➎ ⟿ 𝗔𝘀𝘂𝗻𝗮 🌸  
║➏ ⟿ 𝗔𝘆𝘂𝘇𝗮𝘄𝗮 🌸  
║➐ ⟿ 𝗕𝗼𝗿𝘂𝘁𝗼 🌸  
║➑ ⟿ 𝗔𝗻𝗮 🌸  
║➒ ⟿ 𝗔𝗿𝘁 🌸  
║➓ ⟿ 𝗕𝗧𝗦 🌸  
║⓫ ⟿ 𝗖𝗮𝗿𝘁𝗼𝗼𝗻 🌸  
║⓬ ⟿ 𝗖𝗵𝗶𝗵𝗼 🌸  
║⓭ ⟿ 𝗖𝗵𝗶𝘁𝗼𝗴𝗲 🌸  
║⓮ ⟿ 𝗖𝗼𝘀𝗽𝗹𝗮𝘆 🌸  
║⓯ ⟿ 𝗖𝗼𝘀𝗽𝗹𝗮𝘆𝗹𝗼𝗹𝗶 🌸  
║⓰ ⟿ 𝗖𝗼𝘀𝗽𝗹𝗮𝘆𝘀𝗮𝗴𝗶𝗿𝗶 🌸  
║⓱ ⟿ 𝗖𝘆𝗯𝗲𝗿 🌸  
║⓲ ⟿ 𝗗𝗲𝗶𝗱𝗮𝗿𝗮 🌸  
║⓳ ⟿ 𝗗𝗼𝗿𝗮𝗲𝗺𝗼𝗻 🌸  
║⓴ ⟿ 𝗘𝗹𝗮𝗶𝗻𝗮 🌸  
║㉑ ⟿ 𝗘𝗺𝗶𝗹𝗶𝗮 🌸  
║㉒ ⟿ 𝗘𝗿𝘇𝗮 🌸  
║㉓ ⟿ 𝗘𝘅𝗼 🌸  
║㉔ ⟿ 𝗚𝗮𝗺𝗲𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 🌸  
║㉕ ⟿ 𝗛𝗶𝗻𝗮𝘁𝗮 🌸  
║㉖ ⟿ 𝗛𝘂𝘀𝗯𝘂 🌸  
║㉗ ⟿ 𝗜𝘁𝗮𝗰𝗵𝗶 🌸  
║㉘ ⟿ 𝗜𝘁𝗮𝗰𝗵𝗶𝘂𝗰𝗵𝗶𝗵𝗮 🌸  
║㉙ ⟿ 𝗜𝘁𝗼𝗿𝗶 🌸  
║㉚ ⟿ 𝗝𝘀𝗷 🌸  
║㉛ ⟿ 𝗠𝗶𝗸𝗮𝘀𝗮 🌸  
║㉜ ⟿ 𝗡𝗲𝘇𝘂𝗸𝗼 🌸  
║㉝ ⟿ 𝗬𝘂𝗺𝗲𝗸𝗼 🌸  
║㉞ ⟿ 𝗭𝗲𝗿𝗼𝘁𝘄𝗼 🌸  
║㉟ ⟿ 𝗞𝗶𝘁𝘀𝘂𝗻𝗲 🌸  
║㊱ ⟿ 𝗞𝘂𝗿𝘂𝗺𝗶 🌸  
║㊲ ⟿ 𝗕𝗹𝘂𝘀𝗵 🌸  
║㊳ ⟿ 𝗥𝗲𝗺 🌸  
║㊴ ⟿ 𝗔𝗻𝗶𝗺𝗲𝗵𝘂𝗴 🌸  
║㊵ ⟿ 𝗔𝗻𝗶𝗺𝗲𝗸𝗶𝘀𝘀 🌸  
║㊶ ⟿ 𝗖𝘂𝗱𝗱𝗹𝗲 🌸  
║㊷ ⟿ 𝗔𝗻𝗶𝗺𝗲𝗴𝗶𝗿𝗹 🌸  
║㊸ ⟿ 𝗦𝗵𝗶𝗻𝗼𝗯𝘂 🌸  
║㊹ ⟿ 𝗠𝗲𝗴𝘂𝗺𝗶𝗻 🌸  
║㊺ ⟿ 𝗟𝘂𝗳𝗳𝘆 🌸  
╚═════════════════╝

*『𝙄𝙛 𝙮𝙤𝙪 𝙘𝙖𝙣'𝙩 𝙝𝙖𝙣𝙙𝙡𝙚 𝙩𝙝𝙚 𝙝𝙚𝙖𝙩... 𝙙𝙤𝙣'𝙩 𝙩𝙤𝙪𝙘𝙝 𝙩𝙝𝙚 𝙛𝙞𝙧𝙚. 🔥*
*𝙎𝙞𝙜𝙣𝙞𝙣𝙜 𝙤𝙛𝙛 𝙬𝙞𝙩𝙝 𝙖 𝙗𝙪𝙧𝙣... 𝙩𝙝𝙞𝙨 𝙞𝙨 𝙃𝙀𝙇𝙇. 🚀』*
${readMore}
`


// 📂 menu.js
// 🌟 Full Stylish Global Menus — TAYYAB HELL-MD

// ================== OWNER MENU ==================
global.ownermenu = `
${statusBox}
╔══❖•⊰ 👑 OWNER MENU ⊱•❖══╗
║1. Self ✅
║2. Public ✅
║3. Block ✅
║4. Nice ✅
║5. Repo ✅
║6. Restart ✅
║7. Shutdown ✅
║8. Setbio ✅
║9. Setname ✅
║10. Setpp ✅
║11. Save ✅
║12. Join ✅
║13. Leave ✅
║14. Delaymsg ✅
║15. Numinfo ✅
║16. Del ✅
║17. Reactch ✅
║18. Idcheck ✅
╚══════════════╝
`


// ================== DOWNLOAD MENU ==================
global.downloadmenu = `
${statusBox}
╔══❖•⊰ 📥 DOWNLOAD MENU ⊱•❖══╗
║1. Video ✅
║2. Video2 ✅
║3. MediaFire ✅
║4. Song ✅
║5. Song2 ✅
║6. Play ✅
║7. Gitclone ✅
║8. TikTok ✅
║9. Insta ✅
║10. FB ✅
║11. IMG ✅
║12. APK ✅
║13. Ytmp4 ✅
║14. Ytmp3 ✅
╚═══════════╝
`

// ================== AUTO MENU ==================
global.automenu = `
${statusBox}
╔══❖•⊰ 🤖 AUTO MENU ⊱•❖══╗
║1. Antilink ✅
║2. Antilinkick ✅
║3. Antibug ✅
║4. Antidelete ✅
║5. Autostatus ✅
║6. Autoreact ✅
║7. AutoGreet ✅
║8. AutoTyping ✅
║9. Autorecording ✅
║10. Autoread ✅
╚═══════════════╝
`


// ================== AI MENU ==================
global.aimenu = `
${statusBox}
╔══❖•⊰ ⚡ AI MENU ⊱•❖═╗
║1. Chatgpt ✅
║2. LLama ✅
║3. Claude ✅
║4. Mistral ✅
╚═════════╝
`

// ================== GROUP MENU ==================
global.groupmenu = `
${statusBox}
╔═❖•⊰ 👥 GROUP MENU ⊱•❖══╗
║1. Kick ✅
║2. Add ✅
║3. Kickall ✅
║4. Open ✅
║5. Close ✅
║6. Tagall ✅
║7. Tagadmin ✅
║8. Hidetag ✅
║9. Listactive ✅
║10. Changename ✅
║11. Closetime ✅
║12. Ginfo ✅
║13. Warn ✅
║14. Gpp ✅
║15. Promote ✅
║16. Demote ✅
║17. Promoteall ✅
║18. Demoteall ✅
║19. Adminkill ✅
║20. Leave ✅
╚═══════════════╝
`


// ================== GITHUB MENU ==================
global.githubmenu = `
${statusBox}
╔═❖•⊰ 💻 GITHUB MENU ⊱•❖═╗
║1. GitHub ✅
║2. Gitclone ✅
║3. Gitrepos ✅
║4. Gitfollowers ✅
║5. Gitstarred ✅
║6. Gitfollow ✅
╚═════════════╝
`

// ================== LOGO MENU ==================
global.logomenu = `
${statusBox}
╔═❖•⊰ 🎨 LOGO MENU ⊱•❖═╗
║1. Logo ✅
║2. d3comic ✅
║3. Dragonball ✅
║4. Deadpool ✅
║5. Blackpink ✅
║6. Neonlight ✅
║7. Cat ✅
╚═════════════╝
`


// ================== TOOLS MENU ==================
global.toolsmenu = `
${statusBox}
╔═❖•⊰ 🛠️ TOOLS MENU ⊱•❖═╗
║1. Readmore ✅
║2. Nice ✅
║3. Say ✅
║4. TTE ✅
║5. Calc ✅
║6. Poll ✅
║7. Hack ✅
║8. Matrix ✅
║9. Fancy ✅
║10. Cpp ✅
║11. Insult ✅
║12. Harami ✅
║13. Shapar ✅
║14. Heart ✅
║15. Checkme ✅
╚═════════════╝
`


// ================== TEXT MENU ==================
global.textmenu = `
${statusBox}
╔═❖•⊰ ✍️ TEXT EFFECT ⊱•❖═╗
║1. Fliptext ✅
║2. Smallcaps ✅
║3. Zalgo ✅
║4. Zalgo2 ✅
║5. Bubble ✅
║6. Strike ✅
║7. Reverse ✅
║8. Mirror ✅
║9. Animal ✅
║10. TTE ✅
╚═══════════╝
`

// ================== UTILITY MENU ==================
global.utilitymenu = `
${statusBox}
╔═❖•⊰ ⚙️ UTILITY MENU ⊱•❖═╗
║1. Ping ✅
║2. Alive ✅
║3. Runtime ✅
║4. Owner ✅
║5. Botname ✅
║6. Intro ✅
║7. Channel ✅
║8. Info ✅
║9. Help ✅
╚════════════╝
`

// ================== EXPLOITS MENU ==================
global.exploitsmenu = `
${statusBox}
╔═❖•⊰ 💀 EXPLOITS MENU ⊱•❖═╗
║1. Xray ✅
║2. Disk ✅
║3. Ghostping ✅
║4. Rootme ✅
║5. Numinfo ✅
║6. Adminkill ✅
║7. Weather ✅
╚══════════╝
`


// ================== PHOTO MENU ==================
global.photomenu = `
${statusBox}
╔❖•⊰ 🖼️ PHOTO MENU ⊱•❖╗
║1. Art ✅
║2. Wallpaper ✅
║3. Gamewallpaper ✅
║4. Cyber ✅
║5. Gremory ✅
║6. Hacker ✅
║7. Hestia ✅
║8. Jibril ✅
║9. Rose ✅
║10. Technology ✅
║11. Pubg ✅
║12. FreeFire ✅
║13. Mountain ✅
║14. Islamic ✅
║15. Dog ✅
║16. Imgcat ✅
╚════════════╝
`

// ================== REACTION MENU ==================
global.reactmenu = `
${statusBox}
╔═❖•⊰ 💫 REACTION MENU ⊱•❖╗
║1. Kill ✅
║2. Pat ✅
║3. Cry ✅
║4. Hug ✅
║5. Kiss ✅
║6. Slap ✅
║7. Sad ✅
║8. Bite ✅
║9. Baka ✅
║10. Smile ✅
║11. Love ✅
╚═══════════╝
`

// ================== GAME MENU ==================
global.gamemenu = `
${statusBox}
╔═══❖•⊰ 🎮 GAME MENU ⊱•❖═══╗
║1. Tictactoe ✅
║2. Rps ✅
║3. Flag ✅
║4. Math ✅
║5. Guessnumber ✅
║6. Scramble ✅
║7. Riddle ✅
║8. Emoji ✅
╚══════════════╝
`


// ================== FUN MENU ==================
global.funmenu = `
${statusBox}
╔═❖•⊰ 🎉 FUN MENU ⊱•❖══╗
║1. Joke ✅
║2. Meme ✅
║3. Anime ✅
║4. Quote ✅
║5. Truthordare ✅
║6. EightBall ✅
║7. Roast ✅
║8. Fact ✅
║9. Historyfact ✅
║10. Captions ✅
║11. Trivia ✅
╚═══════════════╝
`

// ================== ANIME MENU ==================
global.animemenu = `
${statusBox}
╔═══❖•⊰ 🎎 ANIME MENU ⊱•❖═══╗
║1. Waifu ✅
║2. Neko ✅
║3. Neko2 ✅
║4. Akiyama ✅
║5. Asuna ✅
║6. Ayuzawa ✅
║7. Boruto ✅
║8. Ana ✅
║9. Art ✅
║10. BTS ✅
║11. Cartoon ✅
║12. Chiho ✅
║13. Chitoge ✅
║14. Cosplay ✅
║15. Cosplayloli ✅
║16. Cosplaysagiri ✅
║17. Cyber ✅
║18. Deidara ✅
║19. Doraemon ✅
║20. Elaina ✅
║21. Emilia ✅
║22. Erza ✅
║23. Exo ✅
║24. Gamewallpaper ✅
║25. Hinata ✅
║26. Husbu ✅
║27. Itachi ✅
║28. Itachiuchiha ✅
║29. Itori ✅
║30. Jsj ✅
║31. Mikasa ✅
║32. Nezuko ✅
║33. Yumeko ✅
║34. Zerotwo ✅
║35. Kitsune ✅
║36. Kurumi ✅
║37. Blush ✅
║38. Rem ✅
║39. Animehug ✅
║40. Animekiss ✅
║41. Cuddle ✅
║42. Animegirl ✅
║43. Shinobu ✅
║44. Megumin ✅
║45. Luffy ✅
╚═════════════════╝
`
module.exports = {
  menu: global.menu,
  ownermenu: global.ownermenu,
  downloadmenu: global.downloadmenu,
  automenu: global.automenu,
  aimenu: global.aimenu,
  groupmenu: global.groupmenu,
  githubmenu: global.githubmenu,
  logomenu: global.logomenu,
  toolsmenu: global.toolsmenu,
  textmenu: global.textmenu,
  utilitymenu: global.utilitymenu,
  exploitsmenu: global.exploitsmenu,
  photomenu: global.photomenu,
  reactmenu: global.reactmenu,
  gamemenu: global.gamemenu,
  funmenu: global.funmenu,
  animemenu: global.animemenu
}