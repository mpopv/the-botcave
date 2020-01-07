const { oneIn } = require("../utils");
const generateCyberText = require("./generate-text");
const generateCyberAd = require("./generate-advertisement");

let generateText = oneIn(6) ? generateCyberAd : generateCyberText;
generateText();
