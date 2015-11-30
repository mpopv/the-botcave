// var Twit = require('twit');
var title = '';
var subtitle = 'Attack of the Subtitle';
var nounArray = [ ];
var verbArray = [ ];
var adjArray = [ ];

// insert your twitter app info here
// var T = new Twit({
//   consumer_key:         '',
//   consumer_secret:      '',
//   access_token:         '',
//   access_token_secret:  ''
// });


///////////////// Word Array Bank /////////////////////

articleArray = [
    'The',
    'A'
];

nounArray = [
  'Empire',
  'Jedi',
  'Menace',
  'Sith',
  'Force',
  'Jar Jar',
  'Sand',
  'George Lucas',
  'High Ground',
  'Galaxy',
  'Metal Bikini',
  'Hutt',
  'Federation',
  'Republic'
];

pluralArray = [
  'Clones',
  'Stormtroopers',
  'Gungans',
  'Jedi',
  'Sith',
  'Midichlorians',
  'Stars',
  'Hutts',
  'Rebels'
];

actionArray = [
  'Hope',
  'Return',
  'Attack',
  'Revenge',
  'Fall',
  'Twilight',
  'Dawn',
  'Empire',
  'Republic'
];

verbArray = [
  'Strikes Back',
  'Awakens',
  'Returns',
  'Attacks',
  'Falls'
];

adjArray = [
  'New',
  'Phantom',
  'Dark',
  'Fallen',
  'Final',
  'Rising',
  'Risen',
  'Galactic'
];

thingArray = [
    chooseRandom(nounArray),
    chooseRandom(nounArray),
    chooseRandom(pluralArray)
];

function detectArticle() {

}

///////////////// Roman Numeral Generator ////////////////////

// Get a random number to be converted to a Roman numeral

function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}

// Call romanize() to output a random Roman numeral

number = getRandomInt(9,50);

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


///////////////// Choose Random Element in a Array /////////////////

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}


//////////////////// Episode Title Style Chooser ////////////////////

var styles = [
  'theAdjNoun',
  'theNounVerbs',
  'actionOfTheNoun'
];

function chooseStyle(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

selectedStyle = chooseStyle(styles);

if (selectedStyle == 'theAdjNoun') {
    makeTheAdjNoun();
}
else if (selectedStyle == 'theNounVerbs') {
    makeTheNounVerbs();
}
else {
    makeActionOfTheNoun();
}


//////////////////// Style 1: The Adjective Noun ////////////////////

function makeTheAdjNoun() {
    subtitle = chooseRandom(articleArray) + " " + chooseRandom(adjArray) + " " + chooseRandom(nounArray);
}


//////////////////// Style 2: The Noun Verbs ////////////////////

function makeTheNounVerbs() {
   subtitle = "The " + chooseRandom(nounArray) + " " + chooseRandom(verbArray);
}


//////////////////// Style 3: Action of the Noun ////////////////////

function makeActionOfTheNoun() {
   subtitle = chooseRandom(actionArray) + " of the " + chooseRandom(thingArray);
}


//////////////////// Final Assembly ///////////////////////////

function makeTitle() {
  title = "Star Wars Episode " + romanize(number) + ": " + subtitle;
}

makeTitle();

console.log(title);
