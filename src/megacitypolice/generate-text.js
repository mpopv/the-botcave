const generateCyberText = () => {
  const {
    oneIn,
    capitalize,
    random,
    checkSing,
    checkPlur,
    getSing,
    getPlur,
    threeQuarter,
    twoThird
  } = require("../utils");
  const banks = `./word-banks`;

  const warnings = require(`${banks}/warnings`);
  const bounties = require(`${banks}/bounties`);

  const jobPreN = require(`${banks}/job-prefixes-no-space`);
  const jobPreS = require(`${banks}/job-prefixes-space`);
  const jobSuff = require(`${banks}/job-suffixes`);
  const jobTtlS = require(`${banks}/job-titles-space`);

  const { crimeUberPrefs, crimePrefixes } = require(`${banks}/crime-prefixes`);
  const { crimeActions, genericCrimes } = require(`${banks}/crimes`);

  const firstNames = require(`${banks}/names-first`);
  const lastNames = require(`${banks}/names-last`);

  const locations = require(`${banks}/locations`);
  const {
    decreeActions,
    decreeModifiers,
    decreeAuthorities
  } = require(`${banks}/decrees`);
  const { dangerStates, dangerGroups } = require(`${banks}/groups`);
  const { sentences, verdicts } = require(`${banks}/prosecutions`);

  let compoundTitle;
  let adjectiveTitle;
  let whichTitle;
  let title;
  let singTitle;

  let uberPref;
  let state;
  let group;
  let crimeAction;
  let warning;
  let location;
  let bounty;

  let judgement;
  let fate;

  let firstName;
  let lastName;
  let nickname;
  let fullName;

  let decreeAction;
  let decreeModifier;
  let decreeAuthority;

  let count = 281;
  let warningStatement = "";
  let captureStatement = "";
  let decreeStatement = "";
  let wantedStatement = "";
  let finalStatement;

  const chooseTerms = () => {
    compoundTitle = getSing(jobPreN) + getPlur(jobSuff);
    adjectiveTitle = getSing(jobPreS) + " " + getPlur(jobTtlS);

    compoundSingTitle = getSing(jobPreN) + getSing(jobSuff);
    adjectiveSingTitle = getSing(jobPreS) + " " + getSing(jobTtlS);

    whichTitle = [adjectiveTitle, compoundTitle];
    whichSingTitle = [adjectiveSingTitle, compoundSingTitle];

    title = random(whichTitle);
    singTitle = random(whichSingTitle);

    uberPref = random(crimeUberPrefs) + " ";
    state = random(dangerStates);
    group = random(dangerGroups);
    crimeAction = random(crimeActions);
    warning = oneIn(2)
      ? capitalize(random(warnings))
      : random(warnings).toUpperCase();
    location = random(locations);
    bounty = random(bounties);

    firstName = random(firstNames);
    lastName = random(lastNames);
    nickname = capitalize(
      random([getSing(jobTtlS), getSing(jobSuff), getPlur(genericCrimes)])
    );
    fullName = oneIn(4)
      ? `${firstName} "${nickname}" ${lastName}`
      : `${firstName} ${lastName}`;

    decreeAction = random(decreeActions);
    decreeModifier = random(decreeModifiers);
    decreeAuthority = random(decreeAuthorities);

    judgement = oneIn(5) ? "innocent" : "guilty";
    fate = random(sentences[judgement]) + " " + random(verdicts[judgement]);
  };

  const buildWarningStatement = () => {
    while (count > 280) {
      chooseTerms();

      const emoji = random([``, ``, `🚨 `]);

      warningStatement =
        emoji +
        warning +
        ": A " +
        group +
        " of " +
        threeQuarter(state + " ") +
        title +
        " " +
        crimeAction +
        " " +
        threeQuarter(uberPref) +
        random(crimePrefixes) +
        checkSing(random(genericCrimes)) +
        threeQuarter(" " + location) +
        ".";

      count = warningStatement.length;
    }
  };

  const buildCaptureStatement = () => {
    while (count > 280) {
      chooseTerms();

      let fullTitle = oneIn(2)
        ? capitalize(singTitle)
        : capitalize(state) + " " + singTitle;

      captureStatement =
        (oneIn(2) ? warning + ": " : "") +
        fullTitle +
        " " +
        fullName +
        " has been " +
        fate +
        " " +
        threeQuarter(uberPref) +
        random(crimePrefixes) +
        checkSing(random(genericCrimes)) +
        threeQuarter(" " + location) +
        ".";

      count = captureStatement.length;
    }
  };

  const buildDecreeStatement = () => {
    while (count > 280) {
      chooseTerms();

      const emoji = random([``, `ℹ `]);

      decreeStatement =
        emoji +
        (oneIn(2) ? warning + ": " : "") +
        capitalize(random(crimePrefixes)) +
        checkSing(random(genericCrimes)) +
        " " +
        decreeAction +
        " " +
        twoThird(random([decreeModifier, decreeModifier, location]) + " ") +
        decreeAuthority +
        ".";

      count = decreeStatement.length;
    }
  };

  const buildWantedStatement = () => {
    while (count > 280) {
      chooseTerms();

      let fullTitle = oneIn(2) ? singTitle : state + " " + singTitle;
      let fullCrime =
        threeQuarter(uberPref) +
        random(crimePrefixes) +
        checkSing(random(genericCrimes));
      let finalName = oneIn(2)
        ? `${fullName}, ${fullTitle}`
        : `${capitalize(fullTitle)} ${fullName}`;

      // prettier-ignore
      wantedStatement = oneIn(2)
        ? `${random([``, ``, `🚨 `])}WANTED:
${finalName}
For the crime of ${fullCrime}
Last ${random(["seen", "sighted", "spotted"])} ${location}
REWARD: ${bounty}`
        : `${random([``, `🚨 `])}WANTED for ${fullCrime.toUpperCase()}: 
${finalName}
Last ${random(["seen", "sighted", "spotted"])} ${location}
REWARD: ${bounty}`;

      count = wantedStatement.length;
    }
  };

  const chooseStatement = () => {
    if (oneIn(4)) {
      buildWantedStatement();
      finalStatement = wantedStatement;
    } else if (oneIn(5)) {
      buildDecreeStatement();
      finalStatement = decreeStatement;
    } else if (oneIn(4)) {
      buildCaptureStatement();
      finalStatement = captureStatement;
    } else {
      buildWarningStatement();
      finalStatement = warningStatement;
    }
  };
  chooseStatement();

  console.log(finalStatement);
  console.log(count);

  return finalStatement;
};

module.exports = generateCyberText;
