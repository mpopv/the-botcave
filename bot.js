
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

var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;
var title = ''; var subtitle = ''; var styles = ''; var selectedStyle = '';
var artcArray = [ ]; var nounArray = [ ]; var plurArray = [ ];
var actnArray = [ ]; var verbArray = [ ]; var adjeArray = [ ];
var maybArray = [ ]; var thngArray = [ ]; var propArray = [ ];
var dice = [ 1, 2, 3 ]; var roll = '';


var Bot = new TwitterBot({
  consumer_key:         process.env.SWTITLEBOT_CONSUMER_KEY,
  consumer_secret:      process.env.SWTITLEBOT_CONSUMER_SECRET,
  access_token:         process.env.SWTITLEBOT_ACCESS_TOKEN,
  access_token_secret:  process.env.SWTITLEBOT_ACCESS_TOKEN_SECRET
});


///////////////// Word Array Bank //////////////////////////////////////////////

// artcArray gives A a 1/2 chance to replace The in The Adjective Noun when the
// noun is nonplural.

artcArray = [ 'The', 'A' ];

// nounArray contains singular nonproper nouns. They may appear in any title
// except Action of Proper.

nounArray = [ 'Empire', 'Jedi', 'Menace', 'Sith', 'Force', 'Womp Rat',
              'High Ground', 'Galaxy', 'Metal Bikini', 'Hutt',
              'Trade Federation', 'Republic', 'Gungan', 'Alliance',
              'Confederacy', 'Vulcan', 'Fleet', 'Rebellion',
              'Lightsaber', 'Dark Jedi', 'Knight', 'Order', 'Prophecy',
              'Chosen One', 'Resistance', 'Senate', 'Trade Negotiation',
              'Plot Hole', 'Marketing Department', 'Star Forge',
              'Wampa', 'Bantha', 'Holiday Special', 'Battlestation',
              'Queen', 'Emperor', 'Chancellor', 'Asteroid Field',
              'Nerf Herder', 'Moof-Milker', 'Spy', 'Princess', 'Moisture Farm',
              'Bounty Hunter', 'Senator', 'Smuggler', 'Wookiee',
              'Scavenger', 'Stormtrooper', 'Clone Trooper', 'Kessel Run',
              'Gundark', 'Rathtar', 'Traitor', 'Spirit', 'Master',
              'Apprentice', 'Commander', 'Smuggler', 'Threat', 'Droid',
              'Franchise', 'Bantha Fodder',
              'Fuzzball', 'Ice Cream Maker', 'Furball', 'Twerp', 'Swindler',
              'Sadly Inevitable Marvel Crossover', 'Melted Helmet',
              'Spoiler Alert', 'Wild Bantha Chase', 'Walking Carpet' ];

// propArray contains proper nouns that appear at the end of Action of Proper.

propArray = [ 'George Lucas', 'JJ Abrams', 'Disney', 'Jar Jar', 'Anakin',
              'Jabba', 'Palpatine', 'Snoke', 'Fett', 'Skywalker', 'Luke',
              'Solo', 'Leia', 'General Organa', 'Jar Jar Binks',
              'Tatooine', 'Jakku', 'Darth Vader',
              'Scum and Villainy', 'Plagueis', 'George Lucas\'s Neckbeard',
              'the First Order', 'Padme', 'Ren', 'Mickey Mouse' ];

// plurArray contains plural nonproper nouns that may randomly replace nounArray
// nouns at the end of The Adjective Noun (via dice roll) and the end of Action
// of the Noun (via maybArray).

plurArray = [ 'Clones', 'Stormtroopers', 'Gungans', 'Midichlorians',
              'Rebels', 'Vulcans', 'Plot Holes', 'Prequels',
              'Trade Negotiations', 'Hutts', 'Droids', 'Sand People',
              'Spaceballs', 'Whills', 'Worlds', 'Stars', 'Sand', 'CGI',
              'Spoilers', 'Toy Sales', 'Senators', 'Scum', 'Ewoks',
              'Poor Writing', 'Poor Acting' ];

// actnArray contains action, state, or status nouns that appear at the
// beginning of Action of the Noun. They can be singular or plural.

actnArray = [ 'Hope', 'Return', 'Attack', 'Revenge', 'Fall', 'Twilight', 'Dawn',
              'Empire', 'Republic', 'Fear', 'Revelation', 'Coarseness',
              'Prophecy', 'Savior', 'Seige', 'Ghost', 'Victory', 'Defeat',
              'Reign', 'Redemption', 'Anguish', 'End', 'Wretched Hive',
              'Origin', 'Servants', 'Weapon', 'Saber', 'Sins', 'Quest',
              'Betrayal', 'Rebirth', 'Order', 'Legacy', 'Legend', 'Secret',
              'Balance', 'Aggression', 'Bargain', 'Army', 'Clones', 'Forge',
              'Exile', 'Battle', 'Courage', 'Conquest', 'Inception', 'Sabotage',
              'Crucible', 'Gauntlet', 'Insurrection', 'Labyrinth', 'Omen',
              'Alliance', 'Rebellion', 'Resistance', 'Chaos', 'Death',
              'Scion', 'Deathknell', 'Arbiter', 'Citadel', 'Progeny',
              'Fortress', 'Battlestation', 'Castle', 'Decimation',
              'Destruction', 'Genesis', 'Harbinger', 'Nemesis', 'Paradox',
              'Vindication', 'Deception', 'Trials', 'Emissary', 'Master',
              'Apprentice', 'Treason', 'Traitor', 'Cry', 'Call', 'Dance',
              'Remnant', 'Commander', 'Conviction', 'Ascension',
              'Fist', 'Starfighters', 'Gambit', 'Profit Margin' ];

// verbArray contains verbs, verb phrases, and prepositional phrases that appear
// at the end of The Noun Verbs. They must be singular.

verbArray = [ 'Strikes Back', 'Awakens', 'Returns', 'Attacks', 'Falls',
              'Arrives', 'Ascends', 'Descends', 'Strikes', 'Crumbles',
              'is Pretty Meh', 'Explodes', 'Underwhelms', 'Goes Public',
              'Appears', 'Looms', 'Runs Way Over Budget', 'Drinks Blue Milk',
              'Has Breakfast', 'Picks Up Some Power Converters', 'Reappears',
              'Bullseyes Womp Rats', 'Disappears', 'is Sold to Disney',
              'Implodes', 'Fails', 'Falls Silent', 'Begins', 'Ends', 'Escapes',
              'Has a Bad Feeling About This', 'Without End',
              'Has a Really Bad Feeling About This', 'Laughs It Up',
              'is NOT a COMMITTEE', 'is Your Father',
              'Will Be With You, Always', 'Goes Into Exile',
              'Gets Proton Torpedoed' ];

// adjeArray contains adjectives that come before nouns in The Adjective Noun.
// They must be compatible with 'A' (rather than 'An').

adjeArray = [ 'New', 'Phantom', 'Dark', 'Fallen', 'Final', 'Rising', 'Risen',
              'Galactic', 'Hidden', 'Secret', 'Sentient', 'Shadowy',
              'Long-Lost', 'Terrible', 'Glorious', 'War-Torn', 'First',
              'Dangerous', 'Cryptic', 'Awesome', 'Lightspeed', 'Ultimate',
              'Grand', 'Ludicrous', 'Chosen', 'Second', 'Primordial',
              'Lost', 'Missing', 'Fatal', 'Deadly', 'Captive', 'Ravaged',
              'Scruffy-Looking', 'Failing', 'Coarse', 'Desolate', 'Criminal',
              'Shrouded', 'Cloaked', 'Traitorous', 'Lethal',
              'Peaceful', 'Galactic', 'Bothan', 'Jedi', 'Sith', 'Vile',
              'Gleaming', 'Fading', 'Burning', 'Hyperspace', 'Coarse',
              'Crazy', 'Malfunctioning', 'Slimy', 'Double-Crossing', 'No-Good',
              'Stuck-Up', 'Half-Witted' ];

// maybArray gives Action of the Noun a 1/3 chance of ending in a plural noun.

maybArray = [ chooseRandom(nounArray), chooseRandom(nounArray),
              chooseRandom(plurArray) ];


///////////////// Roman Numeral Generator //////////////////////////////////////

// Get a random number to be converted to a Roman numeral

function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}

// Call romanize() to output a random Roman numeral

number = getRandomInt(9,50); // <--Adjust these to set numeral range

function romanize (num) {
   if (!+num)
        return false;
    var    digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}


///////////////// Choose Random Element in a Array /////////////////////////////

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}


//////////////////// Episode Title Style Chooser ///////////////////////////////

styles = [ 'theAdjNoun', 'theNounVerbs', 'actnOfTheNoun', 'actnOfPrpr' ];

selectedStyle = chooseRandom(styles);

if (selectedStyle == 'theAdjNoun') { makeTheAdjNoun(); }
else if (selectedStyle == 'theNounVerbs') { makeTheNounVerbs(); }
else if (selectedStyle == 'actnOfTheNoun') { makeActionOfTheNoun(); }
else { makeActionOfPrpr(); }

roll = chooseRandom(dice);


//////////////////// Style 1: The Adjective Noun ///////////////////////////////

// Based on: A New Hope, The Phantom Menace

function makeTheAdjNoun() {
  if (roll == 1 || roll == 2) {
    subtitle = "The " + chooseRandom(adjeArray) + " " + chooseRandom(plurArray);
  } else {
    subtitle = chooseRandom(artcArray) + " " + chooseRandom(adjeArray) + " " + chooseRandom(nounArray);
  }
}


//////////////////// Style 2: The Noun Verbs ///////////////////////////////////

// Based on: The Empire Strikes Back, The Force Awakens

function makeTheNounVerbs() {
  if (roll == 1 || roll == 2) {
    subtitle = chooseRandom(propArray) + " " + chooseRandom(verbArray);
  } else {
    subtitle = "The " + chooseRandom(nounArray) + " " + chooseRandom(verbArray);
  }
}


//////////////////// Style 3: Action of the Noun ///////////////////////////////

// Based on: Return of the Jedi, Attack of the Clones, Revenge of the Sith

function makeActionOfTheNoun() {
  subtitle = chooseRandom(actnArray) + " of the " + chooseRandom(maybArray);
}


//////////////////// Style 4: Action of Proper /////////////////////////////////

// Theoretical style not based on actual titles

function makeActionOfPrpr() {
  subtitle = chooseRandom(actnArray) + " of " + chooseRandom(propArray);
}


//////////////////// Final Assembly ////////////////////////////////////////////

function makeTitle() {
  title = "Star Wars Episode " + romanize(number) + ": " + subtitle;
}

makeTitle();

console.log(title);

Bot.tweet(title);
