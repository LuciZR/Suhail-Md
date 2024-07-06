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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_35_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgyLFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNixcbiAgICAgICAgMjM2LFxuICAgICAgICA0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU2LFxuICAgICAgICA5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzLFxuICAgICAgICA1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0LFxuICAgICAgICA4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzksXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI4LFxuICAgICAgICA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NixcbiAgICAgICAgMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDczLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyLFxuICAgICAgICA0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTksXG4gICAgICAgIDU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICA3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNixcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJXaDd5MURaN3NBVHhIajhYbWNZNGRyWFBMT1NUK1B3WEpWNis5ZUgrRUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk90ekxSSE1TUjVhaFNqYllxcDlhNXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2UxNjY4OTgtZWRmNS00M2FlLTg4MzEtYzVhNTU1ZjRkYzAxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDkzLFxuICAgICAgMTg0LFxuICAgICAgNDQsXG4gICAgICAxLFxuICAgICAgNjMsXG4gICAgICAyMDQsXG4gICAgICAxNzAsXG4gICAgICAxNzAsXG4gICAgICAxNzcsXG4gICAgICAyNDMsXG4gICAgICA4NixcbiAgICAgIDQ3LFxuICAgICAgNTEsXG4gICAgICA2MyxcbiAgICAgIDYxLFxuICAgICAgMTY4LFxuICAgICAgMjYsXG4gICAgICAxNzQsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICA1OCxcbiAgICAgIDIxOCxcbiAgICAgIDgsXG4gICAgICAyMjQsXG4gICAgICA1NSxcbiAgICAgIDEwMCxcbiAgICAgIDE5OCxcbiAgICAgIDIxLFxuICAgICAgMjAyLFxuICAgICAgMjAyLFxuICAgICAgMTg3LFxuICAgICAgMTY5LFxuICAgICAgMjM1LFxuICAgICAgMTgyLFxuICAgICAgMTA4LFxuICAgICAgMTMxLFxuICAgICAgMjA1LFxuICAgICAgMzksXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVROUktaNlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODI5MzgzODE4MjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImx1Y2lcIixcbiAgICBcImxpZFwiOiBcIjEzMzU0ODE5OTY3MDAxNToyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLVGh1eU1Rb2VlanRBWVlCQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjI1M3JVRFBzNG9CTG4wZU5rN28xYzhJUWNyWWw3NTBGWkdDaDV3RnVyUVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiKzRBQjJna3ZSWWhNYXp5Zmg1YlhKclVvdm83OW5SNTlCbUFpUVhLWllNRUcwNWptRmxQTTJxUWtzOUZuTUU4bUNhNkxyTVZheGFCZlRiSnorL0NqRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUTFsOWJpa1V3dVhVOUNBUGgwaWJuMjk3ZVdUUEVkdW5jc29WbU4ybDFjVWNDQjRJeWluMkJkZUgrbDVqSkN4bmNucWZ5d2h0SjlzK0pFL3B1RGhKQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4MjkzODM4MTgyOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI1MTMwMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJzalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnNqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTW5udmZsNnlvVWNHeFI5TmRscitJRU5xRmRrUDBXRS84TkZRQWV1TmtGdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NDM3OTQyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
