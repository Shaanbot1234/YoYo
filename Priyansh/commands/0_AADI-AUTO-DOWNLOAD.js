const axios = require('axios');
const fs = require('fs');
const getFBInfo = require("shankar-facebook");

module.exports.config = {
  name: "fbdown",
  version: "1.0",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN",
  description: "Automatically download Facebook videos",
  usePrefix: false,
  commandCategory: "Media",
  usage: " ",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event }) {
  if (event.body !== null && event.isGroup) {
    const facebookLinkRegex = /https:\/\/www\.facebook\.com\/\S+/;
    const link = event.body;

    if (facebookLinkRegex.test(link)) {
      api.setMessageReaction("📥", event.messageID, () => { }, true);
      downloadAndSendFBContent(link, api, event);
    }
  }
};

const downloadAndSendFBContent = async (url, api, event) => {
  const fbvid = './video.mp4'; 
  try {
    const result = await getFBInfo(url);
    let videoData = await axios.get(encodeURI(result.sd), { responseType: 'arraybuffer' });
    fs.writeFileSync(fbvid, Buffer.from(videoData.data, "utf-8"));
    
    api.sendMessage({
      body: "𝖠𝗎𝗍𝗈 𝖣𝗈𝗐𝗇 𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝖵𝗂𝖽𝖾𝗈",
      attachment: fs.createReadStream(fbvid)
    }, event.threadID, () => {
      fs.unlinkSync(fbvid); 
    });
  } catch (e) {
    console.log(e);
    api.sendMessage("❌ | Unable to download the Facebook video.", event.threadID);
  }
};

module.exports.run = async function ({ api, event }) {
  api.sendMessage("📝 | This command automatically downloads Facebook videos.", event.threadID);
};
