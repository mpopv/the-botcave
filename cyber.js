// MegaCity Police bot
// @megacitypolice on Twitter

const { oneIn } = require("./src/utils");
const { TwitterBot } = require("node-twitterbot");
const generateCyberText = require("./src/megacitypolice/generate-text");
const generateCyberAd = require("./src/megacitypolice/generate-advertisement");

const Bot = new TwitterBot({
  consumer_key: process.env.CYBERBOT_CONSUMER_KEY,
  consumer_secret: process.env.CYBERBOT_CONSUMER_SECRET,
  access_token: process.env.CYBERBOT_ACCESS_TOKEN,
  access_token_secret: process.env.CYBERBOT_ACCESS_TOKEN_SECRET
});

const generateText = oneIn(12) ? generateCyberAd : generateCyberText;
const cyberText = generateText();

Bot.tweet(cyberText);
