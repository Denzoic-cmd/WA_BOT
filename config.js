const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="aliuyusuf641@gmail.com"
global.location="Oyo, Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 ALONE(•-•)" 


global.devs = "2347026496844" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347026496844";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347026496844,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_09_42_09_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkwLFxuICAgICAgICA3MixcbiAgICAgICAgNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUyLFxuICAgICAgICA4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDksXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgMjA4LFxuICAgICAgICAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk2LFxuICAgICAgICA1MyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NixcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgODcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMixcbiAgICAgICAgMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MixcbiAgICAgICAgMjUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk4LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgODksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTksXG4gICAgICAgIDM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0LFxuICAgICAgICA0NixcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTHJUaGFaMENoS3VqMlFwVzdNMXFQeS9kc1JYVENQV3ZRR29kMWY4MlBodz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDI2NDk2ODQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2QTFENjdERjBEOTM4M0E2RDMyRTkxMDhGMkNEM0VBNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjYwNDc3MzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia2RYMEpXTnBSc2FsRlhZUkVTU2dlUVwiLFxuICBcInBob25lSWRcIjogXCI1ZmVhYzM3ZS0xYmMyLTRlOTQtOTM0NC1kNzI1YzczMmY3NTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICAyNDksXG4gICAgICAyMjcsXG4gICAgICAyMTEsXG4gICAgICA4MSxcbiAgICAgIDE3MixcbiAgICAgIDE3LFxuICAgICAgMTg5LFxuICAgICAgNzAsXG4gICAgICAxNjQsXG4gICAgICAzMSxcbiAgICAgIDc3LFxuICAgICAgMjExLFxuICAgICAgMjMzLFxuICAgICAgNjksXG4gICAgICAxNDQsXG4gICAgICA5OSxcbiAgICAgIDUsXG4gICAgICAxMzcsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQxLFxuICAgICAgMjMwLFxuICAgICAgMTA0LFxuICAgICAgMjI1LFxuICAgICAgMjMzLFxuICAgICAgMTYwLFxuICAgICAgMjE3LFxuICAgICAgMTE0LFxuICAgICAgOTIsXG4gICAgICAxNzYsXG4gICAgICAyMjMsXG4gICAgICAxNixcbiAgICAgIDI4LFxuICAgICAgMjEyLFxuICAgICAgNyxcbiAgICAgIDgsXG4gICAgICAyMzcsXG4gICAgICAxNzcsXG4gICAgICA0MCxcbiAgICAgIDIyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOTVc0UE1NWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAyNjQ5Njg0NDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIxNDUwMzU5NzI3MzM6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT21oMzlvQ0VPZkxoYmNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvN0JBdVc0Y1N3N2o0NUVPUElZK1BTeHFxV3lXYy9PdDlzYU9BVG1zWUd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk92bjJQaGgwL0EzQUhoK1dMbXZGS0JkVHcvNUJpOEt3ZFFxaFM0clR1MWxtSnpscmhnVGJlQ1FlVnZoMFVFQlcwd250czBhUXU1SnRqR2Fzc2tsTEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlB2ZEdpWWR1Q1g4NnRqYk0vVThXTFhNZjhNeVpMVXplS3BsTmw2bzBWbE9YRDZ2ZDlOWnpTb0dOV1UzSm1kQldIUC9aQURlVnQzNStvbVhvQmk1dGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjY0OTY4NDQ6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjA0NzcyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUljaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWNoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMERkV1RYc0JZOU1YTDRjend0TVl3MGtQUjY5ckM1emJYanRCMVBEY0hwWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MjcxNzU0MDEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjA0NzY3Nzc2MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 Alone(•-•) 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔻𝔸ℝ𝕋𝕆ℕ 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝔻€NNIS",
  packname: process.env.PACK_NAME || "𝔻€NNIS",
  botname : process.env.BOT_NAME  || "𝔻€NNIS(•-•)B©T",
  ownername:process.env.OWNER_NAME|| "𝔻€NNIS",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔻€ℕℕI$"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
