const { oneIn } = require("../utils");
const generateCyberText = require("./generate-text");
const generateCyberAd = require("./generate-advertisement");

let generateText = oneIn(10) ? generateCyberAd : generateCyberText;
generateText();
