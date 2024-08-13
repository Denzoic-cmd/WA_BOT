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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_55_08_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI2LFxuICAgICAgICA0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY0LFxuICAgICAgICA1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcxLFxuICAgICAgICA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc0LFxuICAgICAgICA0NyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDg1LFxuICAgICAgICAzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NCxcbiAgICAgICAgODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDY5LFxuICAgICAgICA0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIreU1SaHBpN3cxTThTZGtZRjVIaHBKelJNMDZ5UGtKVFFNRmJ4MW9pNHdRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMMGFPanEzTlJaYTlaQ1hBSjJibmpnXCIsXG4gIFwicGhvbmVJZFwiOiBcImI3NDUxZmJiLTg4MDMtNGEzYi1hZjgxLWZkMTAzZjFmYTg0ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAyMDIsXG4gICAgICA2MCxcbiAgICAgIDMzLFxuICAgICAgMjM5LFxuICAgICAgNzMsXG4gICAgICA0NSxcbiAgICAgIDEwMixcbiAgICAgIDE0LFxuICAgICAgMjI3LFxuICAgICAgMTI5LFxuICAgICAgNSxcbiAgICAgIDk4LFxuICAgICAgMTQyLFxuICAgICAgMzksXG4gICAgICAyMTMsXG4gICAgICAyMDIsXG4gICAgICAyOCxcbiAgICAgIDE4OCxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDE4NCxcbiAgICAgIDkyLFxuICAgICAgNTIsXG4gICAgICAyOSxcbiAgICAgIDExOCxcbiAgICAgIDM2LFxuICAgICAgMjM2LFxuICAgICAgOTgsXG4gICAgICA0NSxcbiAgICAgIDE2OSxcbiAgICAgIDI2LFxuICAgICAgNTYsXG4gICAgICAyMzIsXG4gICAgICAxMDYsXG4gICAgICA4OCxcbiAgICAgIDksXG4gICAgICAyMzYsXG4gICAgICAyMTAsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUDVWU1NWNFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjY0OTY4NDQ6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMTQ1MDM1OTcyNzMzOjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ056R25ib0NFSlgwN3JVR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidVFjVDlPaWdNbC84bzB5UVRzRGtWWlR6eEdLL2xxME1ZTWU1WlFJYjJuaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhQ2dBb1BpUWhkK1hVZG03bWFkcU9wTlVoRzFDQTZPcXVYNzFhV0xGRU81cklFLzUyL3NjL1hMeitOTlN3OVRJOUdqQklxNWVSQVJnZGVIcTFxNE1DUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnNVVIaFdERkFUWE1Wb1dQRHljSnEzdUwzUlQ3TkpMS2Y5RFpzZkV3QTZHQnFnNjU0blFueXlLZHQxVGZEYlRELzBrQWI4dllMMUZvRU1OQlMyaFZnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI2NDk2ODQ0OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzU3ODkwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJhd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmF3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQUYxM0tSSGl4eGkzVXpLV3VwSFJZaHBCdVh6NTVlU0JlWFl1SXhOdWZyST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NTg5ODk5MTUsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjQzMjA2NzY2OFwifSIKfQ=="  // PUT your SESSION_ID 


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
