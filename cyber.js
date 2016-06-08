
 // Untitled Cyperpunk Twitter Bot

 var Twit = require('twit');
 var TwitterBot = require('node-twitterbot').TwitterBot;

 var Bot = new TwitterBot({
   consumer_key:         process.env.CYBERBOT_CONSUMER_KEY,
   consumer_secret:      process.env.CYBERBOT_CONSUMER_SECRET,
   access_token:         process.env.CYBERBOT_ACCESS_TOKEN,
   access_token_secret:  process.env.CYBERBOT_ACCESS_TOKEN_SECRET
 });


///////////////// Choose Random Element in a Array ////////////////////////////

 function random(myArray) {
   return myArray[Math.floor(Math.random() * myArray.length)];
 }

var jobPreN;
var jobPreS;
var jobSuff;
var jobTtlS;
var corps;


////////////////////////////////////////////////////////////////////////////////
///////////////// Jobs & Titles ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// Job Prefixes that can be attached as a compound word
jobPreN =   [ 'net', 'neuro', 'techno', 'psyko', 'anarcho', 'hover', 'bio',
              'solo', 'med', 'data', 'cyber', 'arch', 'under', 'sewer', 'hack'
              'deep', 'nano', 'street', 'ex-', 'gene', 'wire', 'web', 'dark',
              'mech', 'armor', 'gun', 'waste', 'tube', 'tank', 'neo', 'war',
              'slag', 'echo', 'steel', 'law', 'wild', 'blade', 'blood', 'exo'
            ];

// Job prefixes that can be adjectives modifying a title
jobPreS =   [ 'corporate', 'data', 'cyborg', 'grand', 'low', 'virtual',
              'hacker', 'dread', 'digital', 'street', 'sector', 'contract',
              'nano', 'gene', 'hack', 'virtual', 'net', 'internet', 'dark',
              'void', 'rogue', 'special', 'mech', 'armored', 'weapon',
              'steam', 'zone', 'slag', 'DNA', 'steel', 'blade', 'blood'
            ];

// Job suffixes
jobSuff =   [ 'mancer', 'runner', 'techie', 'tech', 'terrorist', 'separatist',
              'anarchist', 'hacker', 'junkie', 'courier', 'merc', 'panzer',
              'boy', 'girl', 'nerd', 'surfer', 'cyborg', 'fixer', 'nomad',
              'punk', 'cultist', 'slinger', 'doctor', [ 'thief', 'thieves' ],
              'mage', 'bandit', 'technician', 'shade', 'trader',
              'smuggler', 'keeper', 'medic', 'rat', 'splicer', 'slicer',
              'rebel', 'pilot', 'spacer', 'capitalist', 'communist',
              'socialist', 'libertarian', 'nihilist', 'crawler', 'jacker',
              'zealot', 'bot', 'mech', 'smith', 'droid', 'trooper',
              'commando', 'goblin', 'breaker', 'morph'
            ];

// Job titles that can be independent w/ adjective modifier
jobTtlS =   [ 'enforcer', 'scientist', 'psyker', 'anarch', 'fixer', 'hacker',
              'junkie', 'courier', 'agent', 'nomad', 'prince',
              [ 'princess', 'princesses' ], [ 'ronin', 'ronin' ],
              [ 'samurai', 'samurai' ], 'blackhat', 'whitehat', 'cultist',
              'rebel', 'juggernaut', 'technician', 'trader', 'smuggler',
              'medic', 'drifter', 'splicer', 'slicer', 'marketeer',
              'mechanic', 'engineer', 'zealot', 'correspondent', 'robot',
              'mech', 'droid', 'trooper', 'solider', 'commando', 'cannibal',
              'goblin', 'ghost'
            ];

var compoundTitle = random(jobPreN) + random(jobSuff);
console.log('Compound: ' + compoundTitle);

var adjectiveTitle = random(jobPreS) + random(jobTtlS);
console.log('Adjective: ' + adjectiveTitle);
