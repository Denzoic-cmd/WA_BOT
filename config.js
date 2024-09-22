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


global.SESSION_ID = process.env.SESSION_ID ||"SUHAIL_12_31_09_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MixcbiAgICAgICAgMTcwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI2LFxuICAgICAgICA3MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDExLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDg1LFxuICAgICAgICA0OCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg5LFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICA4NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICA5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDc0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDMxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNixcbiAgICAgICAgNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDU2LFxuICAgICAgICA1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODksXG4gICAgICAgIDEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaTQ4eXBwcll5WmRwU3RqcFZYUXp5dGVZVHNVMEZqQkltL1VnSzRNWjU0cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTHAzOXJaRl9USi04RHJabmpyWTBuQVwiLFxuICBcInBob25lSWRcIjogXCI0NmY0Y2E3NC0zNmNmLTRkYjMtYTA1Zi1lYTZlMzkyNTEyNWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAxNSxcbiAgICAgIDE2MyxcbiAgICAgIDgxLFxuICAgICAgMjA0LFxuICAgICAgMTQ4LFxuICAgICAgMjIxLFxuICAgICAgMjIyLFxuICAgICAgODIsXG4gICAgICAxMTYsXG4gICAgICAyMjEsXG4gICAgICAwLFxuICAgICAgMTk3LFxuICAgICAgMjIzLFxuICAgICAgNzgsXG4gICAgICA4NSxcbiAgICAgIDIzOCxcbiAgICAgIDE5NCxcbiAgICAgIDEzMCxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAxNjksXG4gICAgICAxNTcsXG4gICAgICA5LFxuICAgICAgMjYsXG4gICAgICAxMDMsXG4gICAgICAyMTIsXG4gICAgICAxNSxcbiAgICAgIDIwLFxuICAgICAgMjEyLFxuICAgICAgMTA5LFxuICAgICAgMjUwLFxuICAgICAgMjM3LFxuICAgICAgMTAsXG4gICAgICAxMjAsXG4gICAgICAyMTYsXG4gICAgICAyNDcsXG4gICAgICA0MCxcbiAgICAgIDE2MixcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllHMkpZTUpDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI2NDk2ODQ0OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjE0NTAzNTk3MjczMzoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNVHh6dk1FRUtTY3dMY0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFmOERSTWxDbk1HaUlXa2RIbTRNd2laODNlZWl6d2JTME9IRkR6NitsR0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN2NoRUJXTEdDbmRyOVIvMTBjWXc0NnFHMGtTMmhxYkYrS2s3UnlTdmFTdnpiSTRUazg0dFVLbGdYejVxSUJCcThSWCtXZzZQUW9TTDZZZUMxempQQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ2twcUJ3WlRrdG5KQlUvUTdhdHZhem5Id1Q1SjBLZUE3c2lXVG9EL01NK3VXOUs3Q2JMVFBCM0hpQm13ejhack1QMlhyNEhnUHJYSFZ4b3pqQzhFaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNjQ5Njg0NDoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzAwODI5NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJScVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlJxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQXE0WUt6cnQvUnRvNStUZXA4TFh6dktWQ3BqaUNrUDZPRUlUSWFxcUVnVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzE2MjA2Nzg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY4MzAzNjgyODhcIn0iCn0="

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
