const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ilucizr@gmail.com"
global.location="Kolkata,India"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/ILUCI/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Ht3eY7IGn5xFScqyPnrWQH";
global.website=process.env.GURL || "https://chat.whatsapp.com/Ht3eY7IGn5xFScqyPnrWQH" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b40b8bb4a6065fd888924.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ zr²²¹-ᴍᴅ" 


global.devs = "918293838182" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "916296851422";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918293838182";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_17_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNixcbiAgICAgICAgMjQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzLFxuICAgICAgICA0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDU2LFxuICAgICAgICA4NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUzLFxuICAgICAgICA4MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDkyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvY2pBNkVjOGlVUEZlbi9XN3J6OWx1ampBZEVSYTlFdlpTN3hYR2FEYzVrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBTk1SMDNJaVJWYUpDX3JZWTBVX3BBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcxOTI2ZGVkLThhZmMtNDA5OS04NDNmLWE0ZWJhZjkzZDQzZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICAxNjMsXG4gICAgICAxODQsXG4gICAgICAyMDQsXG4gICAgICAxOTcsXG4gICAgICAxMCxcbiAgICAgIDc0LFxuICAgICAgMjUyLFxuICAgICAgMjQyLFxuICAgICAgNjksXG4gICAgICAxNTMsXG4gICAgICAxMTMsXG4gICAgICAxMTUsXG4gICAgICAxMzEsXG4gICAgICA1MyxcbiAgICAgIDE2OSxcbiAgICAgIDE0MCxcbiAgICAgIDY2LFxuICAgICAgMSxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDE5OSxcbiAgICAgIDI0OSxcbiAgICAgIDIwNCxcbiAgICAgIDE3MyxcbiAgICAgIDYsXG4gICAgICAxOCxcbiAgICAgIDY1LFxuICAgICAgMTA2LFxuICAgICAgMjUwLFxuICAgICAgODUsXG4gICAgICAxMTMsXG4gICAgICAxOSxcbiAgICAgIDE0NCxcbiAgICAgIDIwNixcbiAgICAgIDE2MyxcbiAgICAgIDE4NyxcbiAgICAgIDcxLFxuICAgICAgMTM1LFxuICAgICAgMjQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhHRTdRMzVOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTYyOTQ4MDY5ODg6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NDQ0OTEzOTY5MTcxMDo2M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJM3p4emdRdVpTbXRBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk55QkM2U21KQU1UUEJMME4zSGI3S3Zwanl6K3ZMbldQSnFEYkhDbkZFVHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM01pbDc3aWgrVWliRzVKeVdQc2tZUUI2QjFqcHQ3TDFtaWFlOC92OXpOUTVsOStkN0g3T2lmTUY0d3JIY29ZWHFzclNMaG5QS0ZJR2pnOC90WEJMRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibXh2WjFWS0dtSGRGS2NzQnA1bEIvTUpaNndlRW9QaEVxWkYzejdmRTNsY203VHRXbnIrTm5QNlphSlkzRmQxZkZPaFZUSVptdVZoSnc4OXVYdUdyQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2Mjk0ODA2OTg4OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjg5ODUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUlVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFSVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwN3M2WkhiTGU4Q0tUMU1SM1JTanhHRUdXNW9GYzljdFZjdjdkQWI5bWpRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExODYxODUwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMTE5ODE4MDA1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "A17_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ zr²²¹-ᴍᴅ 』```", //*『..』*\n gg.gg/zr-md"),
 
  author : process.env.PACK_AUTHER|| "_*LuciZR*_",
  packname: process.env.PACK_NAME || "_*zr*_",
  botname : process.env.BOT_NAME  || "_*zr-md*_",
  ownername:process.env.OWNER_NAME|| "_*Luci*_",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "_*zr*_"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
