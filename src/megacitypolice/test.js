const { oneIn } = require("../utils");
const generateCyberText = require("./generate-text");
const generateCyberAd = require("./generate-advertisement");

let generateText = oneIn(8) ? generateCyberAd : generateCyberText;
generateText();
