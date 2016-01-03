
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

nounArray = [ 'Empire', 'Jedi', 'Menace', 'Sith', 'Force', 'Womp Rat',
              'High Ground', 'Galaxy', 'Metal Bikini', 'Hutt', 'Outpost',
              'Federation', 'Republic', 'Gungan', 'Precedent', 'Armistice',
              'Planet', 'Alliance', 'Undertaking', 'Council', 'Temple',
              'Confederacy', 'Princess', 'Vulcan', 'Fleet', 'Rebellion',
              'Lightsaber', 'Dark Jedi', 'Knight', 'Order', 'Prophecy',
              'Chosen One', 'Night', 'Darkness', 'Resistance',
              'Plot Hole', 'Marketing Department', 'Star Forge', 'Force',
              'Senate', 'Trade Negotiation', 'Starkiller', 'Insurgency',
              'Wampa', 'War', 'Holiday Special', 'Battlestation',
              'Queen', 'Eclipse', 'Penumbra', 'Apocalypse', 'Cataclysm',
              'Emperor', 'Chancellor', 'Asteroid Field', 'Threat',
              'Nerf Herder', 'Moof-Milker', 'Spy', 'Prince',
              'Smuggler', 'Threat', 'Droid', 'Conquest', 'Trap', 'Admiral',
              'Bounty Hunter', 'Senator', 'Hunter', 'Moisture Farm',
              'Scavenger', 'Stormtrooper', 'Clone Trooper', 'Kessel Run',
              'Gundark', 'Rathtar', 'Chaos', 'Black Hole' ];

propArray = [ 'George Lucas', 'JJ Abrams', 'Disney', 'Jar Jar', 'Anakin', 'Padme',
              'Jabba', 'Palpatine', 'Snoke', 'Fett', 'Skywalker', 'Luke',
              'Solo', 'Leia', 'General Organa', 'Jar Jar Binks',
              'Tatooine', 'Jakku', 'Hosnian Prime', 'Starkiller Base',
              'Coruscant', 'Vader', 'Darth Vader', 'Cloud City', 'Yavin',
              'Scum and Villainy', 'Plagueis', 'George Lucas\'s Neckbeard',
              'First Order' ];

plurArray = [ 'Clones', 'Stormtroopers', 'Gungans', 'Jedi', 'Sith',
              'Midichlorians', 'Rebels', 'Ancients', 'Forerunners',
              'Vulcans', 'Prophecies', 'Plot Holes', 'Prequels',
              'Trade Negotiations', 'Hutts', 'Droids', 'Sand People',
              'Spaceballs', 'Whills', 'Worlds', 'Stars', 'Sand', 'CGI',
              'Spoilers', 'Carbonite', 'Toy Sales', 'Senators', 'Parsecs',
              'Gundarks', 'Rathtars' ];

actnArray = [ 'Hope', 'Return', 'Attack', 'Revenge', 'Fall', 'Twilight', 'Dawn',
              'Empire', 'Republic', 'Fear', 'Revelation', 'Hour',
              'Era', 'Time', 'Darkness', 'Coarseness', 'Prophecy', 'Savior',
              'Emperor', 'Victory', 'Defeat', 'Vanquishing', 'Horror', 'Terror',
              'Reign', 'Awakening', 'Redemption', 'Anguish', 'End',
              'Warning', 'Howl', 'Threat', 'Wretched Hive', 'Origin',
              'Ultimatum', 'Chronicle', 'Journal', 'Saber', 'Homecoming', 'Age',
              'Sector', 'System', 'Sins', 'Quest', 'Voice', 'Waking', 'Tales',
              'Betrayal', 'Endgame', 'Aftermath', 'Reunion', 'Rebirth',
              'Legacy', 'Legend', 'Legends', 'Power', 'Secrets', 'Secret',
              'Seige', 'Ghosts', 'Ghost', 'Requiem', 'Death',
              'Order', 'Tale', 'Vector', 'Servant', 'Servants', 'Mark',
              'Balance', 'Breath', 'Allure', 'Aggression', 'Bargain', 'Deal',
              'Exile', 'Battle', 'Courage', 'Campaign', 'Conquest', 'Betrayal',
              'Squadron', 'Battalion', 'Army', 'Clones', 'Scheme', 'Forge',
              'Crucible', 'Gauntlet', 'Hunt', 'Crash', 'Nest', 'Insurrection',
              'Alliance', 'Rebellion', 'Resistance', 'Chaos' ];

verbArray = [ 'Strikes Back', 'Awakens', 'Returns', 'Attacks', 'Falls',
              'Arrives', 'Ascends', 'Descends', 'Strikes', 'Crumbles',
              'is Pretty Meh', 'Explodes', 'Underwhelms', 'Goes Public',
              'Appears', 'Looms', 'Runs Way Over Budget', 'Drinks Blue Milk',
              'Has Breakfast', 'Picks Up Some Power Converters', 'Reappears',
              'Bullseyes Womp Rats', 'Disappears', 'is Sold to Disney',
              'Begins', 'Ends', 'Escapes', 'Burns', 'Rages', 'of the Dead',
              'Implodes', 'in Distress', 'on Fire',  'of Fire', 'of Shadow',
              'Endures', 'Ascendant', 'in Decline', 'of the Darkness',
              'of the Light', 'in the Clouds', 'Among the Stars',
              'Forged by Darkness', 'Fails', 'Falls Silent', 'Lurks',
              'Has a Bad Feeling About This' ];

adjeArray = [ 'New', 'Phantom', 'Dark', 'Fallen', 'Final', 'Rising', 'Risen',
              'Galactic', 'Hidden', 'Secret', 'Sentient', 'Shadowy',
              'Long-Lost', 'Terrible', 'Glorious', 'War-Torn', 'First',
              'Dangerous', 'Cryptic', 'Awesome', 'Lightspeed', 'Ultimate',
              'Grand', 'Ludicrous', 'Chosen', 'Second', 'Primordial',
              'Lost', 'Missing', 'Fatal', 'Deadly', 'Captive', 'Ravaged',
              'Scruffy-Looking', 'Failing', 'Coarse', 'Desolate', 'Criminal',
              'Shrouded', 'Cloaked', 'Traitorous', 'Barren', 'Lethal',
              'Peaceful', 'Galactic', 'Bothan', 'Jedi', 'Sith', 'Vile',
              'Awakened', 'Gleaming', 'Fading', 'Burning', 'Hyperspace' ];

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

styles = [ 'theAdjNoun', 'theNounVerbs', 'actnOfTheNoun', 'actnOfTheNoun', 'actnOfPrpr' ];

selectedStyle = chooseRandom(styles);

if (selectedStyle == 'theAdjNoun') { makeTheAdjNoun(); }
else if (selectedStyle == 'theNounVerbs') { makeTheNounVerbs(); }
else if (selectedStyle == 'actnOfTheNoun') { makeActionOfTheNoun(); }
else { makeActionOfPrpr(); }

roll = chooseRandom(dice);


//////////////////// Style 1: The Adjective Noun ///////////////////////////////

function makeTheAdjNoun() {
  if (roll == 1 || roll == 2) {
    subtitle = "The " + chooseRandom(adjeArray) + " " + chooseRandom(plurArray);
  } else {
    subtitle = chooseRandom(artcArray) + " " + chooseRandom(adjeArray) + " " + chooseRandom(nounArray);
  }
}


//////////////////// Style 2: The Noun Verbs ///////////////////////////////////

function makeTheNounVerbs() {
  if (roll == 1 || roll == 2) {
    subtitle = chooseRandom(propArray) + " " + chooseRandom(verbArray);
  } else {
    subtitle = "The " + chooseRandom(nounArray) + " " + chooseRandom(verbArray);
  }
}


//////////////////// Style 3: Action of the Noun ///////////////////////////////

function makeActionOfTheNoun() {
  subtitle = chooseRandom(actnArray) + " of the " + chooseRandom(maybArray);
}


//////////////////// Style 4: Action of Proper ///////////////////////////////

function makeActionOfPrpr() {
  subtitle = chooseRandom(actnArray) + " of " + chooseRandom(propArray);
}


//////////////////// Final Assembly ////////////////////////////////////////////

function makeTitle() {
  title = "Star Wars Episode " + romanize(number) + ": " + subtitle;
}

makeTitle();

console.log(title);
