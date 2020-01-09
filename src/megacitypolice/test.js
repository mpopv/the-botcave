const { oneIn } = require("../utils");
const generateCyberText = require("./generate-text");
const generateCyberAd = require("./generate-advertisement");

let generateText = oneIn(12) ? generateCyberAd : generateCyberText;
generateText();
