// MegaCity Police bot
// @megacitypolice on Twitter

const { TwitterBot } = require("node-twitterbot");
const generateCyberText = require("./src/megacitypolice/generate-text");

const Bot = new TwitterBot({
  consumer_key: process.env.CYBERBOT_CONSUMER_KEY,
  consumer_secret: process.env.CYBERBOT_CONSUMER_SECRET,
  access_token: process.env.CYBERBOT_ACCESS_TOKEN,
  access_token_secret: process.env.CYBERBOT_ACCESS_TOKEN_SECRET
});

const cyberText = generateCyberText();

Bot.tweet(cyberText);
