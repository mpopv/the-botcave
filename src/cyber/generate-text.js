const generateCyberText = () => {
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

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  const random = arr => arr[Math.floor(Math.random() * arr.length)];

  // Return the string if passed a string, or first item if passed an array
  const checkSing = arg => (Array.isArray(arg) ? arg[0] : arg);

  // Return second item if passed array, or string plus 's' if passed string
  const checkPlur = arg => (Array.isArray(arg) ? arg[1] : `${arg}s`);

  // Get a random singular or plural item from an array of strings
  // or arrays with ['octopus', 'octopi'] format
  const getSing = arg => checkSing(random(arg));
  const getPlur = arg => checkPlur(random(arg));

  // Chance to return argument, or empty string
  const threeQuarter = arg => (Math.random() >= 0.25 ? arg : "");
  const twoThird = arg => (Math.random() >= 0.33 ? arg : "");

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
    warning =
      random([0, 1]) === 0
        ? capitalize(random(warnings))
        : random(warnings).toUpperCase();
    location = random(locations);
    bounty = random(bounties);

    firstName = random(firstNames);
    lastName = random(lastNames);
    nickname = capitalize(
      random([getSing(jobTtlS), getSing(jobSuff), getPlur(genericCrimes)])
    );
    fullName =
      random([0, 1, 2, 3]) === 0
        ? `${firstName} "${nickname}" ${lastName}`
        : `${firstName} ${lastName}`;

    decreeAction = random(decreeActions);
    decreeModifier = random(decreeModifiers);
    decreeAuthority = random(decreeAuthorities);

    judgement = random([0, 1, 2, 3, 5]) === 0 ? "innocent" : "guilty";
    fate = random(sentences[judgement]) + " " + random(verdicts[judgement]);
  };

  const buildWarningStatement = () => {
    while (count > 280) {
      chooseTerms();

      warningStatement =
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

      let fullTitle =
        random([0, 1]) === 0
          ? capitalize(singTitle)
          : capitalize(state) + " " + singTitle;

      captureStatement =
        (random([0, 1]) === 0 ? warning + ": " : "") +
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

      decreeStatement =
        (random([0, 1]) === 0 ? warning + ": " : "") +
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

      let fullTitle =
        random([0, 1]) === 0 ? singTitle : state + " " + singTitle;
      let fullCrime =
        threeQuarter(uberPref) +
        random(crimePrefixes) +
        checkSing(random(genericCrimes));
      let finalName =
        random([0, 1]) === 0
          ? `${fullName}, ${fullTitle}`
          : `${capitalize(fullTitle)} ${fullName}`;

      wantedStatement = `WANTED:
${finalName}
For the crime of ${fullCrime}
Last ${random(["seen", "sighted", "spotted"])} ${location}
REWARD: ${bounty}`;

      count = wantedStatement.length;
    }
  };

  const chooseStatement = () => {
    if (random([0, 1, 2, 3]) === 0) {
      buildWantedStatement();
      finalStatement = wantedStatement;
    } else if (random([0, 1, 2, 3, 4]) === 0) {
      buildDecreeStatement();
      finalStatement = decreeStatement;
    } else if (random([0, 1, 2, 3]) === 0) {
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
