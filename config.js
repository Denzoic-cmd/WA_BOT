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


global.SESSION_ID = process.env.SESSION_ID ||"SUHAIL_10_36_10_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk1LFxuICAgICAgICA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE5LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICA1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwLFxuICAgICAgICA5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OSxcbiAgICAgICAgOTksXG4gICAgICAgIDk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNCxcbiAgICAgICAgNixcbiAgICAgICAgMTc0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDY1LFxuICAgICAgICA5OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg5LFxuICAgICAgICAzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk2LFxuICAgICAgICA3NixcbiAgICAgICAgMTA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ1LFxuICAgICAgICAzLFxuICAgICAgICA4NixcbiAgICAgICAgNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExLFxuICAgICAgICAzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicG0zUys0czcxRVY3UlNpZzFleWk3RFNOTWtkeUdQbEQ4WFlRNWZUcE95ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDI2NDk2ODQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4Rjk0QjNGNEJFMzA3OTgxNUVEQkVDQjVFMjhFOTFFQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkxNjE0MDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYm5kU3hKaUJUQkNkWERZa1FLREl6d1wiLFxuICBcInBob25lSWRcIjogXCJmNzFiOTYwNi0zMjg1LTRkNDQtYjhmNC0wZTk3YjAyZmVjY2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICA3LFxuICAgICAgMTgzLFxuICAgICAgNTMsXG4gICAgICAyNDAsXG4gICAgICAyMCxcbiAgICAgIDE0NSxcbiAgICAgIDE5OSxcbiAgICAgIDE2NSxcbiAgICAgIDkwLFxuICAgICAgMzMsXG4gICAgICAxMTMsXG4gICAgICAxMjcsXG4gICAgICAxOTAsXG4gICAgICAxMCxcbiAgICAgIDI4LFxuICAgICAgMzIsXG4gICAgICAxNDQsXG4gICAgICA4MSxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDIwNCxcbiAgICAgIDE1NCxcbiAgICAgIDMxLFxuICAgICAgNSxcbiAgICAgIDI3LFxuICAgICAgMTQ3LFxuICAgICAgMTI3LFxuICAgICAgOTIsXG4gICAgICAxODcsXG4gICAgICAxNjAsXG4gICAgICA0OCxcbiAgICAgIDIxMixcbiAgICAgIDMwLFxuICAgICAgNSxcbiAgICAgIDk2LFxuICAgICAgOTgsXG4gICAgICA2OCxcbiAgICAgIDI0OCxcbiAgICAgIDE1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lIS3I2OEVFTGZSdzdnR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTVZCZFBaTWt3bVdBay9uZVYvSGpDVkR1MVk0SW92K25lb3dDL3hpa1ZoOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3dnZRTHU1UVlBcjdxNWkxNXpTUnJkbEV2bzd6YS9rdi9GOWJkZ05pSmhtZnlMSWllNUI5WVN1T1dQZFpJZm1YUkdPdXkvZTRlakVkVDRxaHRTVGJCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSYmwzSUN2UnBwZUVxcVA3bHA5ak05bW5TNzlMc1dGR2FuOWdzYk5xV1lhbGtjWTVGYy9wb0NVVmFzVkQ4aUladU1TM1Vybjh5eUxGR1JPNXRsSCtnZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjY0OTY4NDQ6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMTQ1MDM1OTcyNzMzOjI5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNjQ5Njg0NDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MTYxNDAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDdHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIN0cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxeDhFYUMwNWk2dFpnUHRIZWNXdXhVSU9mdE1lbzZMcVZlaHQ2YVh0ZGxzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNzMwODc0ODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTA4MzMzNjUzOFwifSIKfQ=="

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
