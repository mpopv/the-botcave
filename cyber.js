
 // Untitled Cyperpunk Twitter Bot

 var Twit = require('twit');
 var TwitterBot = require('node-twitterbot').TwitterBot;
 var title = ''; var subtitle = ''; var styles = ''; var selectedStyle = '';
 var artcArray = [ ]; var nounArray = [ ]; var plurArray = [ ];
 var actnArray = [ ]; var verbArray = [ ]; var adjeArray = [ ];
 var maybArray = [ ]; var thngArray = [ ];
 var dice = [ 1, 2, 3 ]; var roll = '';


 var Bot = new TwitterBot({
   consumer_key:         process.env.CYBERBOT_CONSUMER_KEY,
   consumer_secret:      process.env.CYBERBOT_CONSUMER_SECRET,
   access_token:         process.env.CYBERBOT_ACCESS_TOKEN,
   access_token_secret:  process.env.CYBERBOT_ACCESS_TOKEN_SECRET
 });

 ///////////////// Choose Random Element in a Array ////////////////////////////

 function chooseRandom(myArray) {
   return myArray[Math.floor(Math.random() * myArray.length)];
 }

var jobPreN;
var jobPreS;
var jobSuff;
var jobTtlS;
var corps;

// Job Prefixes that can be attached as a compound word
jobPreN =   [ 'net', 'neuro', 'techno', 'psyko', 'anarcho', 'hover', 'bio',
              'solo', 'med', 'data', 'cyber', 'arch', 'under', 'sewer'
            ];

// Job prefixes that can be adjectives modifying a title
jobPreS =   [ 'corporate', 'data', 'cyborg', 'grand', 'low', 'virtual',
              'hacker'
            ];

// Job suffixes
jobSuff =   [ 'mancer', 'runner', 'techie', 'tech', 'terrorist', 'separatist',
              'anarchist', 'hacker', 'junkie', 'courier', 'merc', 'panzer',
              'boy', 'girl', 'nerd', 'surfer', 'cyborg', 'fixer', 'nomad'
            ];

// Job titles that can be independent w/ adjective modifier
jobTtlS =   [ 'enforcer', 'scientist', 'psyker', 'anarch', 'fixer', 'hacker',
              'junkie', 'courier', 'agent', 'nomad', 'prince',
              [ 'princess', 'princesses' ]
            ];

// Corporations
corps =     [ 'Infocomp', 'IEC', 'EBM', 'Biotechnica', 'Arasaka',
              'Lazarus', 'Petrochem', 'Raven Microcybernetics',
              'Mitsubishi-Sugo', 'SovOil', 'Zetatech', 'Militech',
            ];
