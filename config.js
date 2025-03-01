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


global.SESSION_ID = process.env.SESSION_ID ||"SUHAIL_04_11_03_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTksXG4gICAgICAgIDMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDk3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY1LFxuICAgICAgICA1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgNjksXG4gICAgICAgIDg0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDMzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA3NixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMixcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMixcbiAgICAgICAgMTk1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBUG9RSXNnQXphUjZRUXROLytMbFNCcUF6ai8wNEhwcUNodFJaZHlFS28wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMjY0OTY4NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ0Njk3QTJGQjIzNzVEMUNBNDg1NjhEODVGN0I5MzYyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MDgwMjI3OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMjY0OTY4NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJBQ0RBNEIyMjE0RTAwNDY5NkMzRUFFQTI1MURDOTQ3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MDgwMjI4MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWQlI1bzNfaVJ0aXQtZFNVaXlfUEx3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjgwNDgwNmJjLWRkMDAtNDZlMS05MmVhLTVhNDBjNzRjMDliN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICAxNyxcbiAgICAgIDE0LFxuICAgICAgMTAzLFxuICAgICAgMjQ3LFxuICAgICAgMjQsXG4gICAgICAyMTMsXG4gICAgICAxMjMsXG4gICAgICA0NCxcbiAgICAgIDc1LFxuICAgICAgNSxcbiAgICAgIDE0MCxcbiAgICAgIDEyMyxcbiAgICAgIDI0MyxcbiAgICAgIDk3LFxuICAgICAgMTE1LFxuICAgICAgMjIzLFxuICAgICAgMTk0LFxuICAgICAgMjAsXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgOTIsXG4gICAgICAxNSxcbiAgICAgIDEzMCxcbiAgICAgIDEwNCxcbiAgICAgIDEzNSxcbiAgICAgIDIzMCxcbiAgICAgIDE3NCxcbiAgICAgIDI1MyxcbiAgICAgIDM0LFxuICAgICAgOCxcbiAgICAgIDQ5LFxuICAgICAgNTIsXG4gICAgICAxNjIsXG4gICAgICAxMTcsXG4gICAgICAyMzksXG4gICAgICAxMTcsXG4gICAgICA2NSxcbiAgICAgIDI3LFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkNWUU45S0pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjY0OTY4NDQ6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMTQ1MDM1OTcyNzMzOjQzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkHCsEzigKJPwrBO4oCiRVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00rSG1mOERFTjZSaXI0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ0FVdkNTR2xoTTFQczY0YjN1OHJFQzFrNmZvRXVKWSs0UXpjWE13Mjh3QT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzcXJsOWNmMXNKaUlVREpvR1ZIUmIrQ0NjTWMvcDdNR3I0Ry85enlpV09kSmFOSVptSmVBMVZ4dDJKNjhJdlVhOUNjcVl2YVpnL3diZ0JoaWlmU2NEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoQTNGY2NzUVlVOVpjcTNCRm4rT0ZBMGNEaHJrc2JLWlFCcmVTblgvd2xVbEhlV2x4VUY3OW9vcFZveE5Ga0VwMm93ZkNhSjVRYVFyZVZqamo0UTlBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI2NDk2ODQ0OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDA4MDIyNzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFN0NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU3Qy5qc29uIjogIntcImtleURhdGFcIjpcIk9vaFhETnV6cWd1RkI4QkU3UEdFQzFLZkZOZHE0THFIeEFnOCt0NGdQRDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3MjA1NTI0NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQwODAyMjc5ODQ5XCJ9Igp9"
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
