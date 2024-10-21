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


global.SESSION_ID = process.env.SESSION_ID ||"SUHAIL_11_41_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDc2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQwLFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgODQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAyLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDY3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDczLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMixcbiAgICAgICAgMjM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzLFxuICAgICAgICAwLFxuICAgICAgICA4NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFuTFVJeWM5SEQzYmUxNEFWZzhxNVRDcndLeUZXZFJ3K3pnMDVmaHVPems9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAyNjQ5Njg0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTQ5QzQxQkQ4MDYxOTg5NThDMkFBQkIxNTg4RTc1MENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NTEwODcyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVoVGNQdUx2UWgyRkJxLXZXR1JYckFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWEwNTMyMzAtZWNjMC00NTNmLWJkNGYtNTMwNzA1OTFmODY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgMTQ1LFxuICAgICAgNjksXG4gICAgICAxNDksXG4gICAgICAyNDcsXG4gICAgICA4MCxcbiAgICAgIDIzMixcbiAgICAgIDc1LFxuICAgICAgMjAxLFxuICAgICAgMjU0LFxuICAgICAgNTEsXG4gICAgICA2LFxuICAgICAgMTQsXG4gICAgICAzOSxcbiAgICAgIDE1MixcbiAgICAgIDE1NCxcbiAgICAgIDEwNSxcbiAgICAgIDkzLFxuICAgICAgMTYwLFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDg0LFxuICAgICAgNjAsXG4gICAgICAxOTcsXG4gICAgICAyMDAsXG4gICAgICA2MCxcbiAgICAgIDE5NyxcbiAgICAgIDIyLFxuICAgICAgMTAyLFxuICAgICAgMTY1LFxuICAgICAgNDMsXG4gICAgICA4LFxuICAgICAgMjE0LFxuICAgICAgMjYsXG4gICAgICAxNzEsXG4gICAgICAxNjIsXG4gICAgICAyMTgsXG4gICAgICAzNixcbiAgICAgIDIyOSxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lIS3I2OEVFTkg3MkxnR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTVZCZFBaTWt3bVdBay9uZVYvSGpDVkR1MVk0SW92K25lb3dDL3hpa1ZoOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJld3dxSERYUGl2VU9FUFZ0MTVtWWIwenJYeFlRRzNCVjNLWmVqRWYrckd6cjc1eGZnUXRuMDlxdXpEOGo3UUFsWjdHY0xqaXZtZXFUaEhsS0s3T3hBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQbGg4clk4ZlFkQ1B5UndGQXRIaGlKbjE2Z2RWVWZreklXYnNvZ0dFZU8wdWluUkVyZGZ4cXJRYW1jTmlVL2NCNU9UL1ZFMjV4Y2pZRE14WExDZkFqQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjY0OTY4NDQ6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMTQ1MDM1OTcyNzMzOjMwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNjQ5Njg0NDozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NTEwODY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDdHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIN0cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxeDhFYUMwNWk2dFpnUHRIZWNXdXhVSU9mdE1lbzZMcVZlaHQ2YVh0ZGxzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNzMwODc0ODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUg3SC5qc29uIjogIntcImtleURhdGFcIjpcIlVaZ3ZGUmJXYlFtNDVBTlh3MDZGYWdiMUxLOXp3MDA4YktFcys5KzVtOU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE3MzA4NzQ4OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5NTEwNzg0MDMzXCJ9Igp9"

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
