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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_47_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTczLFxuICAgICAgICA5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg3LFxuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDczLFxuICAgICAgICAxLFxuICAgICAgICA0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaEVzOFlBbFlkMXJEVm0rRkN1S2JGeGkzckhLaGV3UzZ1QnIyczJCYVJXRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTYyOTQ4MDY5ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ5MUIzMEI3QTMzNEMzMERGRjVCQTdBNDE0MUIyODkyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI5NTIzN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2cFdDTEFiaFR0YUh0YnBlVzNWeElRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU5Mzg0M2E2LTYzNzYtNDQwOS1hMzY3LWRiZjRlNDYxYzBlNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAxNDEsXG4gICAgICAzOCxcbiAgICAgIDIxMixcbiAgICAgIDE5MixcbiAgICAgIDgzLFxuICAgICAgNjMsXG4gICAgICAxODMsXG4gICAgICAxNTgsXG4gICAgICAxODcsXG4gICAgICA5NyxcbiAgICAgIDk0LFxuICAgICAgMTAsXG4gICAgICA1OSxcbiAgICAgIDE2LFxuICAgICAgODksXG4gICAgICAxNzksXG4gICAgICA5MSxcbiAgICAgIDI2LFxuICAgICAgMTQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMTk3LFxuICAgICAgMTE5LFxuICAgICAgMTIyLFxuICAgICAgMTA2LFxuICAgICAgODQsXG4gICAgICAxMTksXG4gICAgICAyNTEsXG4gICAgICA2MSxcbiAgICAgIDIxMyxcbiAgICAgIDk0LFxuICAgICAgMjMyLFxuICAgICAgMjEzLFxuICAgICAgMTA1LFxuICAgICAgMTA1LFxuICAgICAgNDQsXG4gICAgICA5MixcbiAgICAgIDEzNixcbiAgICAgIDEsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxNlFOQVMyWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2Mjk0ODA2OTg4OjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzQ0NDkxMzk2OTE3MTA6NjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTd6eHpnUXZiNm10QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOeUJDNlNtSkFNVFBCTDBOM0hiN0t2cGp5eit2TG5XUEpxRGJIQ25GRVR3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndtNWtYcGQwRTF1dUZjUGU1K2VsUmVPTXlwQzNZNTQ5SzN1S0E4OXk0VzdLcjdMbUFGMDBreVRHdXNjd25OREJKMnlkVkxBSDRVOFdnNThpaElkSUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9Xc3NPTnAvTmxqQkNwOUhDSHFhaGVyRjlhQlVKeDh6RzR1K0R2OFhBWmtBTkhSNlc4aUlvUzBuOTZTdFlKWlFJUFgzdmc2cTg2M2R6U1lhbS82K2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNjI5NDgwNjk4ODo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI5NTIzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU0vSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTS9ILmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
