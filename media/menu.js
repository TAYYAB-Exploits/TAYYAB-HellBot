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

╔═❖•⊰ 💻 GITHUB MENU ⊱•❖═╗
║1. GitHub ✅
║2. Gitclone ✅
║3. Gitrepos ✅
║4. Gitfollowers ✅
║5. Gitstarred ✅
║6. Gitfollow ✅
╚═══════════════╝
${readMore}

╔═❖•⊰ 🎨 LOGO MENU ⊱•❖╗
║1. Logo ✅
║2. d3comic ✅
║3. Dragonball ✅
║4. Deadpool ✅
║5. Blackpink ✅
║6. Neonlight ✅
║7. Cat ✅
╚═════════╝
${readMore}

╔═══❖•⊰ 🛠️ TOOLS MENU ⊱•❖═══╗
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
╚═══════════════╝
${readMore}

╔══❖•⊰ ✍️ TEXT EFFECT ⊱•❖══╗
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
╚════════════════╝
${readMore}

╔═══❖•⊰ ⚙️ UTILITY MENU ⊱•❖═══╗
║1. Ping ✅
║2. Alive ✅
║3. Runtime ✅
║4. Owner ✅
║5. Botname ✅
║6. Intro ✅
║7. Channel ✅
║8. Info ✅
║9. Help ✅
╚═════════════════╝
${readMore}

╔═══❖•⊰ 💀 EXPLOITS MENU ⊱•❖═══╗
║1. Xray ✅
║2. Disk ✅
║3. Ghostping ✅
║4. Rootme ✅
║5. Numinfo ✅
║6. Adminkill ✅
║7. Weather ✅
╚══════════════════╝
${readMore}

╔═══❖•⊰ 🖼️ PHOTO MENU ⊱•❖═══╗
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
╚════════════════╝
${readMore}

╔═══❖•⊰ 💫 REACTION MENU ⊱•❖═══╗
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
╚═══════════════╝
${readMore}

╔═══❖•⊰ 🎮 GAME MENU ⊱•❖═══╗
║1. Tictactoe ✅
║2. Rps ✅
║3. Flag ✅
║4. Math ✅
║5. Guessnumber ✅
║6. Scramble ✅
║7. Riddle ✅
║8. Emoji ✅
╚═══════════════╝
${readMore}

╔═══❖•⊰ 🎉 FUN MENU ⊱•❖═══╗
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
${readMore}

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