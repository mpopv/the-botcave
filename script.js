
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


////////////////////////////////////////////////////////////////////////////////

// var Twit = require('twit');
var title = ''; var subtitle = ''; var styles = ''; var selectedStyle = '';
var artcArray = [ ]; var nounArray = [ ]; var plurArray = [ ];
var actnArray = [ ]; var verbArray = [ ]; var adjeArray = [ ];
var maybArray = [ ]; var thngArray = [ ]; var propArray = [ ];
var dice = [ 1, 2, 3 ]; var roll = '';

// insert your twitter app info here
// var T = new Twit({
//   consumer_key:         '',
//   consumer_secret:      '',
//   access_token:         '',
//   access_token_secret:  ''
// });


///////////////// Word Array Bank //////////////////////////////////////////////

artcArray = [ 'The', 'A' ];

nounArray = [ 'Empire', 'Jedi', 'Menace', 'Sith', 'Force', 'Sand', 'Womp Rat',
              'High Ground', 'Galaxy', 'Metal Bikini', 'Hutt', 'Exhaust Port',
              'Federation', 'Republic', 'Retcon', 'Gungan', 'Acting Job',
              'Planet', 'Nebula', 'Starship', 'Star Destroyer', 'Alliance',
              'Confederacy', 'Wookiee', 'Droid', 'Princess', 'X-Wing',
              'Vulcan', 'Lightsaber', 'Battle', 'Purge', 'Ghost', 'Dark Jedi',
              'Knight', 'Order', 'Temple', 'Prophecy', 'Chosen One', 'CGI',
              'Plot Hole', 'Marketing Budget', 'Stock Market', 'Star Forge',
              'Senate', 'Trade Negotiation', 'Political Allegory', 'Starkiller',
              'Carbonite', 'Wampa', 'War', 'Ice Cream Maker', 'Holiday Special',
              'Blue Harvest', 'Neckbeard', 'Green Screen', 'Cantina', 'Queen',
              'Emperor', 'Chancellor', 'Asteroid Field', 'Threat', 'Podracing',
              'Hosnian System', 'Outer Rim', 'TIE Fighter' ];

propArray = [ 'George Lucas', 'JJ Abrams', 'Disney', 'Jar Jar', 'Anakin',
              'Jabba the Hutt', 'Palpatine', 'Snoke', 'Leader Snoke',
              'Supreme Leader Snoke', 'Boba Fett', 'Jar Jar Binks', 'Skywalker',
              'Han Solo', 'Solo', 'Leia', 'Princess Leia', 'General Organa',
              'Tatooine', 'Jakku', 'Hosnian Prime', 'Starkiller Base',
              'Coruscant', 'Emperor Palpatine', 'Vader', 'Darth Vader' ];

plurArray = [ 'Clones', 'Stormtroopers', 'Gungans', 'Jedi', 'Sith',
              'Midichlorians', 'Stars', 'Rebels', 'Ancients', 'Forerunners',
              'Vulcans', 'Prophecies', 'Plot Holes', 'Prequels',
              'Trade Negotiations', 'Hutts', 'Droids', 'Sand People',
              'Spaceballs' ];

actnArray = [ 'Hope', 'Return', 'Attack', 'Revenge', 'Fall', 'Twilight', 'Dawn',
              'Empire', 'Republic', 'Fear', 'Assault', 'Revelation', 'Hour',
              'Era', 'Time', 'Darkness', 'Coarseness', 'Prophecy', 'Savior',
              'Emperor', 'Victory', 'Defeat', 'Vanquishing', 'Horror', 'Terror',
              'Reign', 'Awakening', 'Redemption', 'Anguish', 'End', 'Beginning',
              'Warning', 'Howl', 'Threat' ];

verbArray = [ 'Strikes Back', 'Awakens', 'Returns', 'Attacks', 'Falls',
              'Arrives', 'Ascends', 'Descends', 'is Revealed', 'Flops', 'Sucks',
              'is Pretty Meh', 'Explodes', 'Underwhelms', 'Goes Public',
              'Appears', 'Looms', 'Runs Way Over Budget', 'Drinks Blue Milk',
              'Has Breakfast', 'Picks Up Some Power Converters' ];

adjeArray = [ 'New', 'Phantom', 'Dark', 'Fallen', 'Final', 'Rising', 'Risen',
              'Galactic', 'Hidden', 'Secret', 'Holy', 'Sentient',
              'Poorly Written', 'Terrible', 'Piss Poor', 'Record-Breaking',
              'Dangerous', 'Cryptic', 'Totally Awesome', 'Hyperspeed',
              'Grand', 'Ludicrous', 'Chosen' ];

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

styles = [ 'theAdjNoun', 'theNounVerbs', 'actnOfTheNoun' ];

selectedStyle = chooseRandom(styles);

if (selectedStyle == 'theAdjNoun') { makeTheAdjNoun(); }
else if (selectedStyle == 'theNounVerbs') { makeTheNounVerbs(); }
else { makeActionOfTheNoun(); }

roll = chooseRandom(dice);


//////////////////// Style 1: The Adjective Noun ///////////////////////////////

function makeTheAdjNoun() {
  if (roll == 1) {
    subtitle = "The " + chooseRandom(adjeArray) + " " + chooseRandom(plurArray);
  } else {
    subtitle = chooseRandom(artcArray) + " " + chooseRandom(adjeArray) + " " + chooseRandom(nounArray);
  }
}


//////////////////// Style 2: The Noun Verbs ///////////////////////////////////

function makeTheNounVerbs() {
  if (roll == 1) {
    subtitle = chooseRandom(propArray) + " " + chooseRandom(verbArray);
  } else {
    subtitle = "The " + chooseRandom(nounArray) + " " + chooseRandom(verbArray);
  }
}


//////////////////// Style 3: Action of the Noun ///////////////////////////////

function makeActionOfTheNoun() {
  var maybeArticle = [ 'The ', '', '' ];
  if (roll == 1) {
    subtitle = chooseRandom(actnArray) + " of the " + chooseRandom(maybArray);
  } else {
    subtitle = chooseRandom(maybeArticle) + chooseRandom(actnArray) + " of " + chooseRandom(propArray);
  }
}


//////////////////// Final Assembly ////////////////////////////////////////////

function makeTitle() {
  title = "Star Wars Episode " + romanize(number) + ": " + subtitle;
}

makeTitle();

console.log(title);
