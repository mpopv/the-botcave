const { random, oneIn } = require("../utils");
const {
  offworldFirstSentenceParts,
  offworldSecondSentences,
  offworldCallsToAction
} = require("./word-banks/ad-offworld");
const zombieSentences = require("./word-banks/ad-zombie");
const { companySuffixes, companyTypes } = require("./word-banks/ad-company");
const lastNames = require("./word-banks/names-last");

// prettier-ignore
const makeCompany = () => `${random(lastNames)}${oneIn(3) ? ` & ${random(lastNames)}` : ""} ${random(companySuffixes)}${oneIn(2) ? ` ${random(companyTypes)}` : ""}`;

// prettier-ignore
const makeType1 = () => `${random(offworldFirstSentenceParts)} in the Offworld Colonies!
${random(offworldSecondSentences)}
Visit supranet://offworld//fleet.fed ${random(offworldCallsToAction)}`;

// prettier-ignore
const makeType2 = () => `A MESSAGE FROM THE FEDERAL PANDEMIC CONTROL SERVICE
${random(zombieSentences)}
Do your part for Z Virus containment. Report signs of sudden aggression to a Pandemic Control Center.`;

// prettier-ignore
const makeType3 = () => {
  const company = makeCompany();
  const companySlugShort = company.split(' ')[0].replace(/[\W_]+/g,"").toLowerCase();
  return `Flesh and bone is so 2300s.
Upgrade to gleaming megasteel with a ${company} cybernetic augmentation.
Trade in your old limb for a 20% discount!
Visit supranet://augmentation//${companySlugShort}.commerce to learn more.`;
};

// prettier-ignore
const makeType4 = () => {
  const company = makeCompany();
  const companyShort = company.split(' ')[0];
  return `The new 2422 ${companyShort} ${random(['hover', 'space', 'star', 'cloud', 'mecha'])}${random(['flyer', 'car', 'craft'])} is out NOW.
Zero down, zero-percent financing for 12 months.
Hurry - visit your local dealership to test fly one today.
${company} - Luxury. Comfort. Speed.`;
};

// prettier-ignore
const makeType5 = () => {
  return `Quentazam. The first FPCS-approved once-daily pill to reduce the risk of Z Virus infection.
Ask your medtech if Quentazam is right for you.
SIDE EFFECTS INCLUDE NAUSEA, STOMACH BLEEDING, AND TOTAL ORGAN FAILURE. `;
};

// prettier-ignore
const makeType6 = () => {
  const company = makeCompany();
  const companySlugShort = company.split(' ')[0].replace(/[\W_]+/g,"").toLowerCase();
  return `Want to get to the Offworld Colonies FAST?
A ${random(['personal organ', 'neural matter', 'cybernetic limb'])} reverse mortgage from ${company} can be your fast track to blastoff!
Visit supranet://${random([companySlugShort])}.commerce to learn how.`;
};

// prettier-ignore
const makeType7 = () => {
  const company = makeCompany();
  const companySlugShort = company.split(' ')[0].replace(/[\W_]+/g,"").toLowerCase();
  return `${random(['WARNING', 'ALERT', 'ATTENTION'])}: ${random(['Retinal scanners', 'Scanners', 'Chip readers'])} detect you're in default on a loan from ${company}.
Make payments now at supranet://${random([companySlugShort])}.commerce to avoid having your ${random(['spare organs', 'cybernetic parts'])} repossessed by our enforcer-surgeons.`;
};

// prettier-ignore
const makeType8 = () => `Are YOU doing YOUR part?
Join the Federal Mobile Infantry TODAY.
Service guarantees citizenship!
Would you like to know more? Visit supranet://recruitment//mobileinfantry.fed now!`;

const generateCyberAd = () => {
  const adContent = random([
    makeType1,
    makeType2,
    makeType3,
    makeType4,
    makeType5,
    makeType6,
    makeType7,
    makeType8
  ])();
  const finalAd = `--ADVERTISEMENT---------
${adContent}
-------------------------`;

  console.log(finalAd);
  console.log(finalAd.length);

  return finalAd;
};

module.exports = generateCyberAd;
