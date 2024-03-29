// Ukraine War Map Bot
// @ukrainemapbot on Twitter

const { chromium } = require("playwright-chromium");
const TwitterApi = require("twitter-api-v2").TwitterApi;
const fetch = require("node-fetch");

const url = `https://commons.wikimedia.org/wiki/File:2022_Russian_invasion_of_Ukraine.svg`;
const accountUrl = `https://twitter.com/ukrainemapbot`;
const mapUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/2022_Russian_invasion_of_Ukraine.svg/2199px-2022_Russian_invasion_of_Ukraine.svg.png`;
const chromeUAString = `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36`;

const truncate = (str, n) => {
  return (str.length > n) ? str.substr(0, n - 1) : str;
};

const cleanString = (str) => {
  // Twitter removes the leading http(s):// from links in the tweet text; we need to remove these as well or
  // the bot thinks the last tweeted text doesn't match the last edit description, even if it's the same edit
  const strMinusHttp = str.replace(/http:\/\//g, '');
  const strMinusHttps = strMinusHttp.replace(/https:\/\//g, '');
  const strTruncated = truncate(strMinusHttps, 280);
  return strTruncated;
};

const retry = async (fn, retryDelay = 100, numRetries = 3) => {
    for (let i = 0; i < numRetries; i++) {
      try {
        return await fn();
      } catch (e) {
        if (i === numRetries - 1) throw e;
        await delay(retryDelay);
        retryDelay = retryDelay * 2;
      }
    }
};

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
  await retry(() => page.goto(url), 1000, 10);
  await page.waitForLoadState('networkidle');
  const latestTime = await page.locator('.filehistory-selected').innerText();
  const latestTimeMinusYear = latestTime.split('2022')[0];
  const lastMapDescription = await page.locator('.filehistory > tbody > tr:nth-child(2) td:nth-child(6)').innerText();
  console.log(latestTime);
  console.log(latestTimeMinusYear);
  console.log(lastMapDescription);

  // Get latest tweet
  const account = await context.newPage();
  await retry(() => account.goto(accountUrl), 1000, 10);
  await account.waitForLoadState('networkidle');
  const tweetTextEl = await account.locator('[data-testid="tweet"] >> nth=0').innerText();
  console.log(tweetTextEl);
  const tweetTextArr = tweetTextEl.split(`\n`);
  console.log(tweetTextArr);
  const tweetText = tweetTextArr[4];
  console.log(tweetText);
  const tweetTextTimeHasNoYear = tweetText.split('2022').length === 0;
  const tweetTextTimeMinusYear = tweetText.split('2022')[0];
  console.log(tweetTextTimeHasNoYear);
  console.log(tweetTextTimeMinusYear);

  // Close browser
  await browser.close();

  const cleanMapDescription = cleanString(latestTime + ' ' + lastMapDescription);

  // Tweet new map if there's a new map description
  if (tweetTextTimeHasNoYear || latestTimeMinusYear !== tweetTextTimeMinusYear) {
    const response = await fetch(mapUrl);
    if (response.ok) {
        const buffer = await response.buffer();
        const mediaId = await rwClient.v1.uploadMedia(buffer, { mimeType: 'image/png' });
        console.log(typeof mediaId);
        await rwClient.v2.tweet(cleanMapDescription, { media: { media_ids: [mediaId] } });
    }
  }
})();