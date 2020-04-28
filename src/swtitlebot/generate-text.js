//        ________________.  ___     ._______
//       /                | /   \    |   _   \
//      |   (-----|  |----`/  ^  \   |  |_)  |
//       \   \    |  |    /  /_\  \  |      /
//  .-----)   |   |  |   /  _____  \ |  |\  \-------.
//  |________/    |__|  /__/     \__\| _| `.________|
//   ____    __    ____  ___     .______    ________.
//   \   \  /  \  /   / /   \    |   _  \  /        |
//    \   \/    \/   / /  ^  \   |  |_)  ||   (-----`
//     \            / /  /_\  \  |      /  \   \
//      \    /\    / /  _____  \ |  |\  \---)   |
//       \__/  \__/ /__/     \__\|__| `._______/
//
//          ___ _ ___ _    ____ ___  ____ ___
//           |  |  |  |    |___ |__] |  |  |
//           |  |  |  |___ |___ |__] |__|  |
//
//               @SWTitlebot on Twitter
//
//

////////////////////////////////////////////////////////////////////////////////

const { oneIn, random } = require("../utils");
const randomRomanNumberal = require("./random-roman-numeral");
const nounArray = require("./word-banks/singular-nouns");
const plurArray = require("./word-banks/plural-nouns");
const actnArray = require("./word-banks/action-nouns");
const verbArray = require("./word-banks/verbs");
const adjeArray = require("./word-banks/adjectives");
const nameArray = require("./word-banks/names");

// Gives a 1/2 chance to replace The in
// The Adjective Noun when the noun is singular.
const artcArray = ["The", "A"];

// maybArray gives Action of the Noun a 1/3 chance of ending in a plural noun.
const maybArray = [random(nounArray), random(nounArray), random(plurArray)];

const generateStarWarsText = () => {
  const numeral = randomRomanNumberal(10, 50);

  // Based on: A New Hope, The Phantom Menace, The Last Jedi
  const makeTheAdjNoun = () =>
    oneIn(3)
      ? `${random(artcArray)} ${random(adjeArray)} ${random(nounArray)}`
      : `The ${random(adjeArray)} ${random(plurArray)}`;

  // Based on: The Empire Strikes Back, The Force Awakens
  const makeTheNounVerbs = () =>
    `The ${random(nounArray)} ${random(verbArray)}`;

  // Based on: Return of the Jedi, Attack of the Clones, Revenge of the Sith
  const makeActionOfTheNoun = () =>
    `${random(actnArray)} of the ${random(maybArray)}`;

  // Based on: The Rise of Skywalker
  const makeTheActionOfName = () =>
    `The ${random(actnArray)} of ${random(nameArray)}`;

  const subtitle = random([
    makeTheAdjNoun,
    makeTheAdjNoun,
    makeTheAdjNoun,
    makeTheNounVerbs,
    makeTheNounVerbs,
    makeActionOfTheNoun,
    makeActionOfTheNoun,
    makeActionOfTheNoun,
    makeTheActionOfName,
  ])();
  const title = `Star Wars Episode ${numeral}: ${subtitle}`;

  console.log(title);

  return title;
};

module.exports = generateStarWarsText;
