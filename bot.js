// Star Wars Titlebot
// @mswtitlebot on Twitter

const { TwitterBot } = require("node-twitterbot");
const generateStarWarsText = require("./src/swtitlebot/generate-text");

const Bot = new TwitterBot({
  consumer_key: process.env.SWTITLEBOT_CONSUMER_KEY,
  consumer_secret: process.env.SWTITLEBOT_CONSUMER_SECRET,
  access_token: process.env.SWTITLEBOT_ACCESS_TOKEN,
  access_token_secret: process.env.SWTITLEBOT_ACCESS_TOKEN_SECRET
});

const title = generateStarWarsText();

Bot.tweet(title);
