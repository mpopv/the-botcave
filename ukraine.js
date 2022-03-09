// Ukraine War Map Bot
// @ukrainemapbot on Twitter

const { chromium } = require("playwright-chromium");
const TwitterApi = require("twitter-api-v2").TwitterApi;
const fetch = require("node-fetch");

const url = `https://commons.wikimedia.org/wiki/File:2022_Russian_invasion_of_Ukraine.svg`;
const accountUrl = `https://twitter.com/ukrainemapbot`;
const mapUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/2022_Russian_invasion_of_Ukraine.svg/2199px-2022_Russian_invasion_of_Ukraine.svg.png`;
const chromeUAString = `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36`;

const client = new TwitterApi({
    appKey: process.env.UKRAINEMAPBOT_API_KEY,
    appSecret: process.env.UKRAINEMAPBOT_API_KEY_SECRET,
    accessToken: process.env.UKRAINEMAPBOT_ACCESS_TOKEN,
    accessSecret: process.env.UKRAINEMAPBOT_ACCESS_TOKEN_SECRET,
});
const rwClient = client.readWrite;

(async () => {
  // Open browser
  const browser = await chromium.launch({ args: ["--no-sandbox"] });
  const context = await browser.newContext({ userAgent: chromeUAString });

  // Get latest map + description
  const page = await context.newPage();
  await page.goto(url);
  await page.waitForLoadState('networkidle');
  const lastMapDescription = await page.locator('.filehistory > tbody > tr:nth-child(2) td:nth-child(6)').innerText();
  console.log(lastMapDescription);

  // Get latest tweet
  const account = await context.newPage();
  await account.goto(accountUrl);
  await account.waitForLoadState('networkidle');
  const tweetTextEl = await account.locator('[data-testid="tweet"] >> nth=0').innerText();
  const tweetTextArr = tweetTextEl.split(`\n`);
  const tweetText = tweetTextArr[tweetTextArr.length -1];
  console.log(tweetText);

  // Close browser
  await browser.close();

  // Tweet new map if there's a new map description
  if (tweetText !== lastMapDescription) {
    const response = await fetch(mapUrl);
    if (response.ok) {
        const buffer = await response.buffer();
        const mediaId = await rwClient.v1.uploadMedia(buffer, { mimeType: 'image/png' });
        console.log(typeof mediaId);
        await rwClient.v2.tweet(lastMapDescription, { media: { media_ids: [mediaId] } });
    }
  }
})();