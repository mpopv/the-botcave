const { random, oneIn, capitalize } = require("../utils");
const {
  types,
  qualifiers,
  sideEffectsNormal,
  sideEffectsWild,
  frequencies,
  conditions,
  prefixes
} = require("./word-banks/drugs");
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
const makeAdOffworldColonies = () => `${random(offworldFirstSentenceParts)} in the Offworld Colonies!
${random(offworldSecondSentences)}
Visit supranet://offworld//fleet.fed ${random(offworldCallsToAction)}`;

// prettier-ignore
const makeAdZombie = () => `A MESSAGE FROM THE FEDERAL PANDEMIC CONTROL SERVICE
${random(zombieSentences)}
Do your part for Z Virus containment. Report signs of sudden aggression to a Pandemic Control Center.`;

// prettier-ignore
const makeAdCyberLimb = () => {
  const company = makeCompany();
  const companySlugShort = company.split(' ')[0].replace(/[\W_]+/g,"").toLowerCase();
  return `Flesh and bone is so 2300s.
Upgrade to gleaming megasteel with a ${company} cybernetic augmentation.
Trade in your old limb for a 20% discount!
Visit supranet://augmentation//${companySlugShort}.commerce to learn more.`;
};

// prettier-ignore
const makeAdFlyingCar = () => {
  const company = makeCompany();
  const vehicle = `${random(['hover', 'space', 'star', 'cloud', 'mecha'])}${random(['flyer', 'car', 'craft'])}`;
  const companyShort = company.split(' ')[0];
  return `The new 2422 ${companyShort} ${vehicle} is out NOW.
Zero down, zero-percent financing for 12 months.
Hurry - visit your local dealership to test fly one today.
${company} - Luxury. Comfort. Speed.`;
};

// prettier-ignore
const makeAdPharma = () => {
  const part = () => random(prefixes);
  const maybePart = () => oneIn(2) ? random(prefixes) : '';
  const drugName = 
    capitalize(
      `${part()}${part()}${maybePart()}${maybePart()}`
    );
  const maybeCapitalize = str => oneIn(2) ? capitalize(str) : str;
  return `${drugName}. ${random(qualifiers)} ${random(frequencies)} ${random(types)} to ${random(conditions)}.
Ask your medtech if ${drugName} is right for you.
${maybeCapitalize(`Side effects include ${random(sideEffectsNormal)}, ${random(sideEffectsNormal)}, and ${random(sideEffectsWild)}`)}.`;
};

// prettier-ignore
const makeAdReverseMortgage = () => {
  const company = makeCompany();
  const companySlugShort = company.split(' ')[0].replace(/[\W_]+/g,"").toLowerCase();
  return `Want to get to the Offworld Colonies FAST?
A ${random(['personal organ', 'neural matter', 'cybernetic limb'])} reverse mortgage from ${company} can be your fast track to blastoff!
Visit supranet://${random([companySlugShort])}.commerce to learn how.`;
};

// prettier-ignore
const makeAdDebtCollector = () => {
  const company = makeCompany();
  const companySlugShort = company.split(' ')[0].replace(/[\W_]+/g,"").toLowerCase();
  return `${random(['WARNING', 'ALERT', 'ATTENTION'])}: ${random(['Retinal scanners', 'Personal data algorithms', 'Cybernetic implant scanners', 'Enforcement satellites'])} detect you're in default on a loan from ${company}.
Make payments now at supranet://${random([companySlugShort])}.commerce to avoid having your ${random(['spare organs', 'cybernetic parts'])} repossessed by our enforcer-surgeons.`;
};

// prettier-ignore
const makeAdStarshipTroopers = () => `Are YOU doing YOUR part?
Join the Federal Mobile Infantry TODAY.
Service guarantees citizenship!
Would you like to know more? Visit supranet://recruitment//mobileinfantry.fed now!`;

const generateCyberAd = () => {
  let finalAd;
  let count = 281;

  while (count > 280) {
    const adContent = random([
      ...Array(10).fill(makeAdPharma),
      ...Array(4).fill(makeAdReverseMortgage),
      ...Array(4).fill(makeAdDebtCollector),
      ...Array(2).fill(makeAdOffworldColonies),
      ...Array(2).fill(makeAdZombie),
      ...Array(2).fill(makeAdCyberLimb),
      makeAdFlyingCar,
      makeAdStarshipTroopers
    ])();
    finalAd = `--ADVERTISEMENT---------
${adContent}`;
    count = finalAd.length;
  }

  console.log(finalAd);
  console.log(finalAd.length);

  return finalAd;
};

module.exports = generateCyberAd;
