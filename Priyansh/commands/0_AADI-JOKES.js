const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Jokes",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "AADI BABU",
  description: "aadi bot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["पप्पू - 'मैं फैल होना चाहता है'दोस्त- क्यों? पप्पू - पापा ने कहा है  फर्स्ट आया तो साइंस, सेकंड आया तो आर्ट्स, फैल हुआ तो शादी करूँगा तेरी" , "दवा और दारु में क्या अंतर है ? दवा एक गर्लफ्रेंड है जिसकी एक्सपायरी डेट आ जाती है पर दारू एक बीवी की तरह होती है जितनी पुरानी होती है उतना सर चढ़ कर बोलती है." , "लड़किया -बचपन में पापा की परी, शादी के बाद घर की रानी लड़के- पहले माँ -बाप से पीटते थे, शादी के बाद बीवी से" , "जैसे जैसे हिन्दुस्तान तरक्की की और बढ़ता जा रहा हे वेसे वेसे लड़कियों की DP में ब्राइटनेस बढ़ती जा रही हे" , "जैसे-जैसे … सर्दियाँ आ रहीं हैं … वैसे-वैसे सुबह के टाइम… बिस्तर का… गुरुत्वाकर्षण बल भी बढ़ता जा रहा है………!!एग्जाम चाहे जैसे जाएं खत्म होने की ख़ुशी तो होती ही है " , "सन्डे का दिन भी 24 घण्टे का होता है पर आपको 12 घण्टे का महसूस होगा अगर आप बेरोजगार नही है " , "सर्दी भगाने का अचूक नुस्खा. गले पर whisky की मालिश करें... भीतर की तरफ से." , "जब कोई सुन्दर युवती, बिलकुल बिंदास होकर, आपकी बगल वाली सीट पर आकर बैठ जाए.....तो समझ जाईये कि,अब आप युवा नहीं रहे.." , "जरूरी नही लड़का आवारगी की वजह से फेल हो रहा हो हर बार ... हो सकता है वो डिप्टी सीएम की तैयारी कर रहा हो ।" , "बीवी कई साल से शराब सिगरेट छोड़ने कह रही है,जो हम नहीं छोड़ पा रहे..और कुछ बेवकूफ बीवी के कहने पर देश छोड़ने तैयार हो गए.." , "ससुर- अरे दामाद जी अचानक कैसे आना हुआ वो भी परिवार के साथ दामाद- वो सोचा आजकल सब अपना पुरस्कार लौटा रहे है तो मैं भी.." , "दुनिया के दो ऐसे प्राणी बताओ जिन्हें ठण्ड नहीं लगती.... 1. पेंगुइन और दूसरा  2. शादी में आई औरते..." , "इश्क़ वो है..जिसमें डूबा लड़का 100 रूपये पाने पर, बीयर गटकने की जगह अपनी छमिया सै बतियाने के लिए टॉकटाइम का जुगाड़ करता है..!" , "कुछ लौंडे ये सोच कर परेशान हैं की मोदी कोहिनूर लेने लंदन क्यों गए हैं ?जब कि भारत के लगभग सभी मेडिकल स्टोर में कोहिनूर मिल जाता है !" , "आजकल किसी रिलेशनशिप के बर्बाद होने में...दूरियों का कम...2G इंटरनेट का ज्यादा हाथ होता है...!!!" , "पता नही कुछ लड़के इन बेचारी लड़कियों से Breakup कैसे कर लेते है?मेरे जैसा बन्दा तो यही सोचे भगवान बस सेट कराये जा, सबको हैंडल कर लूंगा" , "जिस भी कपल को हंसते-मुस्कुराते बातें करते देखता हूँ, मन में बस एक ही खयाल आता है उसकी बीबी 'नई' है या उसकी 'नहीं' है" , "कौन कहता है के दुनिया आपकी परवाह नहीं करती कभी दिन में हेड लाइट जला के बाईक चला कर तो देखो...कम से कम 100 log टोकेंग...!!!" , "भगवान ने हर किसी इंसान को अलग बनाया है, लेकिन जब तक चीन की बारी आई वह थक चुका था -और कॉपी पेस्ट कॉपी पेस्ट करके सबको निपटा दिया " , "देर रात को अक्सर 3 तरह के लोग जागते है। 1- दिलजले 2- मनचले 3- मोहब्बत की तलाश वाले। मैं?सालो मैं दिनभर सोता हु,बेरोजगारी भी कोई चीज है।" , "आज का हिंदी ज्ञान :Air Hostess = हवाई सुंदरी Nurse = दवाई सुंदरी Lady Teacher = पढ़ाई सुंदरी Maid = सफ़ाई सुंदरी Wife - लड़ाई सुंदरी" , "भक्त : बाबा मेरी शादी नहीं हो रही.! निर्मल बाबा : तस्वीर किसकी रखते हो जेब में.? भक्त :नरेन्द्र मोदी की.!निर्मल बाबा : दिग्विजय सिंह की तस्वीर रखा करो जेब में !कृपा वहीं रूकी हुई है.!" , "भारत एकमात्र ऐसा देश है जहां,घर से बाहर रहने पर आवारा कहते हैं, और घर के अन्दर रहने पर निकम्मा।"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };
  
   mess = "{name}"
  
  if (event.body.indexOf("joke") == 0 || (event.body.indexOf("Joke") == 0)) {
    var msg = {
      body: `${name} \n____________________________________\n\n\n${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }