
const fs = require("fs");
module.exports.config = {
	name: "hello",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "hello", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Helo")==0 || event.body.indexOf("helo")==0 || event.body.indexOf("Hello")==0 || event.body.indexOf("hello")==0) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/assalam.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
