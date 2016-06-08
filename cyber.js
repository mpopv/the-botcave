
 // Untitled Cyperpunk Twitter Bot

 // var Twit = require('twit');
 // var TwitterBot = require('node-twitterbot').TwitterBot;
 //
 // var Bot = new TwitterBot({
 //   consumer_key:         process.env.CYBERBOT_CONSUMER_KEY,
 //   consumer_secret:      process.env.CYBERBOT_CONSUMER_SECRET,
 //   access_token:         process.env.CYBERBOT_ACCESS_TOKEN,
 //   access_token_secret:  process.env.CYBERBOT_ACCESS_TOKEN_SECRET
 // });


///////////////// Choose Random Element in a Array ////////////////////////////

 function random(myArray) {
   return myArray[Math.floor(Math.random() * myArray.length)];
 }

 function check(term) {
   if (term.constructor === Array) { return term[0]; }
   else { return term; }
 }

 function get(something) {
   return check(random(something));
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
var jobPreN = [ 'net', 'neuro', 'techno', 'psyko', 'anarcho', 'hover', 'bio',
              'solo', 'med', 'data', 'cyber', 'arch', 'under', 'sewer', 'hack',
              'deep', 'nano', 'street', 'ex-', 'gene', 'wire', 'web', 'dark',
              'mech', 'armor', 'gun', 'waste', 'tank', 'neo', 'war',
              'echo', 'steel', 'law', 'wild', 'blade', 'blood', 'exo',
              'infra', 'pod', 'chem', 'stim', 'night', 'junk', 'scrap', 'zero',
              'space', 'time', 'mind', 'cryo', 'micro', 'post-',
              'metro', 'hydro', 'geo', 'stealth', 'slum', 'holo', 'contra',
              'drug', 'info', 'meme', 'noo', 'edge', 'rave', 'slip'
            ];

// Job prefixes that can be adjectives modifying a title
var jobPreS = [ 'corporate', 'data', 'cyborg', 'virtual',
              'hacker', 'dread', 'digital', 'street', 'sector', 'contract',
              'nano', 'gene', 'hack', 'virtual', 'net', 'internet', 'dark',
              'void', 'rogue', 'special', 'mech', 'armored', 'weapon',
              'steam', 'zone', 'DNA', 'steel', 'blade', 'blood',
              'neon', 'chemical', 'illegal', 'bounty', 'freelance', 'night',
              'junk', 'trash', 'scrap', 'orbital', 'space', 'time',
              'crystal', 'stealth', 'electronic', 'rust', 'cable',
              'contraband', 'sprawl', 'planetary', 'spyre', 'radar',
              'nuclear', 'hydrogen', 'gravity'
            ];

// Job suffixes
var jobSuff = [ 'mancer', 'runner', 'techie', 'tech', 'terrorist', 'separatist',
              'anarchist', 'hacker', 'junkie', 'courier', 'merc', 'panzer',
              'boy', 'girl', 'surfer', 'cyborg', 'fixer', 'nomad',
              'punk', 'cultist', 'slinger', 'doctor', [ 'thief', 'thieves' ],
              'mage', 'bandit', 'technician', 'shade', 'trader',
              'smuggler', 'keeper', 'medic', 'rat', 'splicer', 'slicer',
              'rebel', 'pilot', 'spacer', 'capitalist', 'communist',
              'socialist', 'nihilist', 'crawler', 'jacker',
              'zealot', 'bot', 'mech', 'smith', 'droid', 'trooper',
              'commando', 'goblin', 'breaker', 'morph', 'hunter',
              'shredder', 'tek', 'lord', 'watcher', 'scanner', 'vulture',
              'sniper', 'wraith', 'priest', 'spider', 'breaker', 'phreaker',
              'pirate', 'pagan'
            ];

// Job titles that can be independent w/ adjective modifier
var jobTtlS = [ 'enforcer', 'scientist', 'psyker', 'anarch', 'fixer', 'hacker',
              'junkie', 'courier', 'agent', 'nomad', 'prince',
              [ 'princess', 'princesses' ], [ 'ronin', 'ronin' ],
              [ 'samurai', 'samurai' ], 'cultist', 'warrior',
              'rebel', 'juggernaut', 'technician', 'trader', 'smuggler',
              'medic', 'drifter', 'splicer', 'slicer', 'marketeer',
              'mechanic', 'engineer', 'zealot', 'correspondent', 'robot',
              'mech', 'droid', 'trooper', 'solider', 'commando', 'cannibal',
              'hunter', 'assassin', 'dealer', 'zombie', 'sniper', 'priest',
              'hound', 'pirate', 'phreaker', 'raver', 'governor'
            ];

var compoundTitle = get(jobPreN) + get(jobSuff);
// console.log('Compound: ' + compoundTitle);

var adjectiveTitle = get(jobPreS) + ' ' + get(jobTtlS);
// console.log('Adjective: ' + adjectiveTitle);

var whichTitle = [ adjectiveTitle, compoundTitle ];
var title = random( whichTitle );


////////////////////////////////////////////////////////////////////////////////
///////////////// Jobs & Titles ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var crimePrefixes  = [ 'net', 'neuro', 'techno', 'psyko',
                       'anarcho', 'hover', 'bio',
                       'data', 'cyber', 'nano', 'street ', 'gene ', 'wire',
                       'web ', 'dark ', 'mech', 'neo', 'war', 'echo',
                       'exo', 'hyper', 'giga', 'mega', 'infra', 'chem',
                       'stim', 'night', 'zero ', 'space ', 'time ', 'mind ',
                       'cryo', 'micro', 'post-', 'metro', 'hydro', 'geo',
                       'stealth ', 'holo', 'contra', 'anti', 'meme ', 'noo',
                       'corporate ', 'data ', 'cyborg ', 'virtual ', 'dread',
                       'digital ', 'nano', 'void', 'rogue ', 'special ',
                       'mech ', 'android ', 'zone ', 'DNA', 'neon ',
                       'chemical ', 'orbital ', 'crystal ', 'electronic ',
                       'planetary ', 'nuclear ', 'hydrogen ', 'gravity ',
                       'thought', 'SQL ', 'Bitcoin ', 'Tamagotchi ',
                       'cranial ', 'reverse ', 'nextlevel ', 'cyberwar ',
                       'solar ', 'lunar ', 'giga ', 'mega ', 'hyper ',
                       'super', 'big data ', 'electro', 'SEO '
                     ];

var genericCrimes   = [ 'perjury', 'arson', 'corruption', 'larceny',
                        'crime', 'hacking', 'phishing', 'phreaking',
                        'injection', 'theft', 'murder', 'terrorism',
                        'activism', 'protesting', 'forgery', 'witchcraft',
                        'vampirism', 'racketeering', 'conspiracy',
                        'immigration', 'emigration', 'espionage', 'extortion',
                        'embezzlement', 'piracy', 'mutiny', 'desertion',
                        'burglarly', 'defamation', 'fraud', 'impersonation',
                        'assault', 'battery', 'jaywalking', 'loitering',
                        'malfeasance', 'intoxication', 'sabotage', 'sedition',
                        'shoplifting', 'blackmail', 'profiteering',
                        'smuggling', 'blockade running', 'resistance',
                        'vandalism', 'trespass', 'treason', 'tampering',
                        'treachery', 'journalism', 'bombing', 'pollution',
                        'littering', 'driving'
                      ];


////////////////////////////////////////////////////////////////////////////////
///////////////// Jobs & Titles ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var dangerStates = [ 'mutant', 'furious', 'vicious', 'rampaging',
                     'raging', 'violent', 'bloodthirsty', 'homicidal',
                     'stim-addled'
                   ];
var state = random(dangerStates);

var dangerGroups = [ 'gang', 'pack', 'band' ];
var group = random(dangerGroups);

var warnings = [ 'alert', 'warning', 'caution', 'be advised', 'breaking' ];
var warning = random(warnings).toUpperCase();

var warningStatement = warning + ': A ' + state + ' ' + group + ' of ' + title + 's have broken into Sector 7, and are committing acts of ' + random(crimePrefixes) + random(genericCrimes) + '.';

console.log(warningStatement);
