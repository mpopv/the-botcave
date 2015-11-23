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

nounArray = [
  'Hope',
  'Empire',
  'Return',
  'Jedi',
  'Menace',
  'Attack',
  'Clone',
  'Revenge',
  'Sith',
  'Force'
];

verbArray = [
  'Strikes Back',
  'Awakens'
]

adjArray = [
  'New',
  'Phantom'
]

///////////////// Roman Numeral Generator ////////////////////

// Get a random number to be converted to a Roman numeral
function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}

// Determines the range of the numerals output by romanize(number)
number = getRandomInt(9,50);

// Call romanize(number) to output a random Roman numeral
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

//////////////////// Episode Title Generator ////////////////////

var words = [
  'Subtitle 1',
  'Subtitle 2',
  'Subtitle 3'
];

function findWord(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

subtitle = findWord(words);


//////////////////// Final Assembly ///////////////////////////

function makeTitle() {
  title = "Star Wars Episode " + romanize(number) + ": " + subtitle;
}

makeTitle();

console.log(title);
