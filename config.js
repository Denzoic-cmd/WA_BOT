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


global.SESSION_ID = process.env.SESSION_ID ||"SUHAIL_12_42_04_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MixcbiAgICAgICAgMTU3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDc3LFxuICAgICAgICAzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIxLFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxOUxIK0x2WXRUUm4zOFloOGwxZE44K2FLSEMvZEcveDFaK2VxTnBOVUwwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMjY0OTY4NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE2OERGNzVDRjhDRkE4Q0Y3MjI3MzM4OThEMEExMzcxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NTkzMDU2NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrTmEzbnBfblFOQ0VNTlhySWg1THRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjllMGE5YjNjLTMwMWMtNDFjNC1iMzQ3LTYxYThlNWJmN2MyMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDIyNixcbiAgICAgIDEyLFxuICAgICAgMjA4LFxuICAgICAgMjI2LFxuICAgICAgNDYsXG4gICAgICAxODUsXG4gICAgICA0NSxcbiAgICAgIDExMSxcbiAgICAgIDMzLFxuICAgICAgODAsXG4gICAgICA5NyxcbiAgICAgIDg2LFxuICAgICAgMjQsXG4gICAgICA2OCxcbiAgICAgIDI0NyxcbiAgICAgIDE4OSxcbiAgICAgIDQyLFxuICAgICAgNzYsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICA0NyxcbiAgICAgIDEwMixcbiAgICAgIDE3NCxcbiAgICAgIDE5OSxcbiAgICAgIDI0LFxuICAgICAgNTAsXG4gICAgICA2NCxcbiAgICAgIDE4MixcbiAgICAgIDQsXG4gICAgICAyMjAsXG4gICAgICA3MyxcbiAgICAgIDEyNixcbiAgICAgIDIxNSxcbiAgICAgIDIyMyxcbiAgICAgIDE0LFxuICAgICAgMTE3LFxuICAgICAgMTY0LFxuICAgICAgMTQ3LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlg2QUsxQTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjY0OTY4NDQ6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMTQ1MDM1OTcyNzMzOjQ4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05LSG1mOERFTDZTdzhBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ0FVdkNTR2xoTTFQczY0YjN1OHJFQzFrNmZvRXVKWSs0UXpjWE13Mjh3QT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxaUVWTS95QjlORGpTakNwMjJzaDhTT0RNSm1nb3RsR2dZQzJGSjVES080VWxuOVBzbmpRSklpNHpNeTNhQkcvRmRmcFBpNGlkQmhQL3d5Vm1wampDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzZHE5WEZYYnM1TFVhUGJFak9SRjRvUkQ3bG9yRDd2YzlwWDBFdi90aTg2VkM1dDVxMGhyMXZzU1NUNXBGQVJzem9ML0dPOEhJTGpuN09nbnFGZHNDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI2NDk2ODQ0OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU5MzA1NjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNTHVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1MdS5qc29uIjogIntcImtleURhdGFcIjpcIkdHcEthdThqUGExU3BsbmpaV0JpMmRXVUw5MFlTbDN4VENmV3R2TFBtMjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3MjA1NTI0OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTkzMDUwODk1OVwifSIKfQ==" ,

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
