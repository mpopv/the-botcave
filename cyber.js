
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


///////////////// Functions ////////////////////////////////////////////////////

 function random(someArray) {
   return someArray[Math.floor(Math.random() * someArray.length)];
 }

 function checkSing(something) {
   if (something.constructor === Array) { return something[0]; }
   else { return something; }
 }

 function checkPlur(something) {
   if (something.constructor === Array) { return something[1]; }
   else { return something + 's'; }
 }

 function getSing(something) {
   return checkSing(random(something));
 }

 function getPlur(something) {
   return checkPlur(random(something));
 }

 function threeQuarter(something) {
   if (Math.random() >= 0.25 ) { return something; }
   else { return ''; }
 }

 function twoThird(something) {
   if (Math.random() >= 0.33 ) { return something; }
   else { return ''; }
 }

 function half(something) {
   if (Math.random() >= 0.5 ) { return something; }
   else { return ''; }
 }

 function third(something) {
   if (Math.random() >= 0.66 ) { return something; }
   else { return ''; }
 }

 function quarter(something) {
   if (Math.random() >= 0.75 ) { return something; }
   else { return ''; }
 }

 function fifth(something) {
   if (Math.random() >= 0.8 ) { return something; }
   else { return ''; }
 }

 function tenth(something) {
   if (Math.random() >= 0.9 ) { return something; }
   else { return ''; }
 }

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
              'drug', 'info', 'meme', 'noo', 'edge', 'rave', 'slip', 'robo',
              'tachyo', 'terra', 'magna', 'shadow', 'bullet', 'chroma',
              'chrono', 'toxo', 'dream', 'mecha', 'retro', 'grid', 'shock',
              'power', 'kill', 'proto', 'synth', 'super-', 'cyber-', 'mech-',
              'psyko-', 'hover-', 'nano-', 'chem-', 'arch-', 'bio-', 'glitter',
              'glimmer', 'stim', 'laser', 'lazer', 'phaser', 'phazer',
              'plasma', 'sym', 'meta', 'tetra', 'terror', 'horror', 'pseudo',
              'quasi-', 'jet', 'nitro', 'petro', 'audio', 'video',
              'anthro', 'swoop', 'whisper', 'dread', 'fear', 'rocket',
              'astro'
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
              'contraband', 'sprawl', 'planetary', 'Spyre', 'radar',
              'nuclear', 'hydrogen', 'gravity', 'ansible', 'drone', 'blaster',
              'shield', 'plasma', 'sentient', 'varelse', 'tachyon',
              'Tellurian', 'Terran', 'cybernetic', 'cyberspace', 'artificial',
              'shadow', 'chromatic', 'toxic', 'keyboard', 'plastic', 'mecha',
              '\'net', 'script', 'JavaScript', 'node', 'spice', 'soma',
              'drug', 'hot pink', 'retro', 'datatape', 'tape', 'lightning',
              'power', 'synth', 'synthetic', 'synthskin', 'glitter', 'glimmer', 'stim', 'evolved', 'computer', 'network', 'laser', 'lazer',
              'phaser', 'phazer', 'aluminum', 'titanium', 'virus', 'viral',
              'malware', 'sym', 'meta', 'security', 'script', 'military',
              'systems', 'nightmare', 'drone', 'AI', 'autonomous',
              'semiautonomous', 'Tumblr', 'Twitter', 'imperial', 'lunar',
              'solar', 'Plutonian'
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
              'pirate', 'pagan', 'blaster', 'decker', 'disrupter',
              'empath', 'esper', 'lander', 'sophont', 'stunner', 'bleeder',
              'booster', 'doc', 'worlder', 'futurist', 'rocketeer', 'zilla',
              'star', 'synth', 'shambler', 'laser', 'lazer', 'phaser',
              'phazer', 'freak', 'jacker', 'worm', 'reaver', 'phantom',
              'banshee', 'colonist', 'replicant', 'miner', 'splitter',
              'khan', 'vagrant', 'monarchaist', 'syndicalist', 'straggler',
              'hound', 'phobe', 'crat', 'tracer', 'spinner', 'dog',
              'scorpion', 'bear', 'shark', [ 'octopus', 'octopi' ],
              'dinosaur', 'fascist', 'jockey', 'racer', 'crafter',
              'psyker', 'runner', 'reaver', 'star', 'prophet', 'cleric',
              'whisper', 'emperor', 'praetor', 'jaeger', 'caliph', 'knight',
              'skater', 'boarder', 'skiier', 'diver', 'naut',
              'physicist'
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
              'hound', 'pirate', 'phreaker', 'raver', 'governor', 'blaster',
              'decker', 'disrupter', 'empath', 'esper', 'flatlander',
              'slugthrower', 'sophont', 'adept', 'mutant', 'berserker',
              'rodent', 'snake', 'slug', 'lizard', 'populist',
              [ 'lizardmen', 'lizardmen' ], [ 'snake person', 'snake people' ],
              'rocketeer', 'dragon', 'terminator', 'predator', 'synth',
              'synthetic', 'synthdroid', 'synthbot', 'synthskin', 'elephant',
              [ 'rhinoceros', 'rhinoceroses' ], 'alligator',
              'slime', 'shambler', 'citizen', 'netizen', 'commander',
              'elemental', 'wizard', 'sorcerer', 'freak', 'virus', 'DDOSer',
              'symlinker', 'spoofer', 'hijacker', 'clickjacker', 'worm',
              'reaver', 'phantom', 'banshee', 'offworld colony escapee',
              'replicant', 'miner', 'gunner', 'traveler', 'wanderer',
              'mongol', 'khan', 'tsar', 'czar', 'vagrant', 'tankbuster',
              'fireteam', 'armorpiercer', 'hound', 'furrie', 'noble',
              'dog', 'cat', 'lion', 'scorpion', 'bear', 'shark',
              [ 'octopus', 'octopi' ], 'manta ray', 'dinosaur', 'fascist',
              'prophet', 'oracle', 'cleric', 'NeoBernieBro',
              'monarch', 'legionnaire', 'king', 'queen', 'sheikh', 'jaeger',
              'caliph', 'baron', 'knight', 'ape', 'centaur', 'ogre',
              'apostate', 'heretic', 'redemptionist', 'mammoth'
            ];

////////////////////////////////////////////////////////////////////////////////
///////////////// Jobs & Titles ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Additional crime prefixes
var crimeUberPrefs = [ 'illegal', 'illicit', 'serial', 'first-degree',
                       'second-degree', 'third-degree', 'aggravated',
                       'spontaneous', 'reckless', 'malicious', 'felony',
                       'misdemeanor', 'grand',
                       'recreational', 'contract'
                     ];

// Standard cyberpunk crime prefixes
var crimePrefixes  = [ 'net', 'neuro', 'techno', 'psyko',
                       'anarcho', 'hover', 'bio',
                       'data', 'cyber', 'nano', 'street ', 'gene ', 'wire',
                       'web ', 'dark ', 'mech', 'neo', 'war', 'echo',
                       'exo', 'hyper', 'giga', 'mega', 'infra', 'chem',
                       'stim', 'night', 'zero ', 'space ', 'time ', 'mind ',
                       'cryo', 'micro', 'post-', 'metro', 'hydro', 'geo',
                       'stealth ', 'holo', 'contra', 'anti', 'meme ', 'noo',
                       'corporate ', 'data ', 'cyborg ', 'virtual ', 'dread ',
                       'digital ', 'nano', 'void', 'rogue ', 'special ',
                       'mech ', 'android ', 'zone ', 'DNA ', 'neon ',
                       'chemical ', 'orbital ', 'crystal ', 'electronic ',
                       'planetary ', 'nuclear ', 'hydrogen ', 'gravity ',
                       'thought', 'SQL ', 'Bitcoin ', 'Tamagotchi ',
                       'cranial ', 'reverse ', 'nextlevel ', 'cyberwar ',
                       'solar ', 'lunar ', 'giga ', 'mega ', 'hyper ',
                       'super', 'big data ', 'electro', 'SEO ', 'Pokémon ',
                       'ATM ', 'bank ', 'proton ', 'electron ', 'neutron ',
                       'ansible ', 'robo', 'robot ', 'droid ', 'android ',
                       'drone ', 'autonomous ', 'blaster ', 'Dyson ',
                       'FTL ', 'genetic ', 'hyperspace ', 'interdimensional ',
                       'jump drive ', 'warp drive ', 'hyperdrive ', 'plasma ',
                       'tachyon ', 'tachyo', 'Tellurian ', 'Terran ',
                       'cybernetic ', 'cyberspace ', 'artificial ', 'shadow',
                       'shadow ', 'arc ', 'chrono', 'chroma', 'toxic ', 'toxo',
                       'mecha', 'spice ', 'soma ', 'drug ', 'datatape ',
                       'tape ', 'retro', 'future ', 'urban ', 'metro',
                       'invisa', 'power', 'kill', 'synth', 'synthetic ',
                       'synthdroid ', 'synthbot ', 'proto', 'glitter',
                       'glimmer', 'stim', 'evolved ', 'computer ',
                       'network ', 'laser', 'laser ', 'lazer',
                       'phaser', 'phaser ', 'phazer', 'aluminum ', 'titanium ',
                       'plasma', 'Van Eck ', 'malware ', 'viral ', 'virus ',
                       'sym', 'meta', 'sym ', 'meta ', 'firewall ', 'fire',
                       'flame', 'mana', 'protonsaber ', 'lasersword ',
                       'plasmagun ', 'railgun ', 'dank', 'butt', 'sleep'
                     ];

// Standard crimes to be modified by prefixes
var genericCrimes   = [ [ 'perjury', 'perjurer' ],
                        [ 'arson', 'arsonist' ],
                        [ 'corruption', 'corruptor' ],
                        [ 'larceny', 'larcenist' ],
                        [ 'crime', 'criminal' ],
                        [ 'hacking', 'hacker' ],
                        [ 'phishing', 'phisher' ],
                        [ 'phreaking', 'phreaker' ],
                        [ 'injection', 'injector' ],
                        [ 'theft', 'thief', 'thieves' ],
                        [ 'murder', 'murderer' ],
                        [ 'terrorism', 'terrorist' ],
                        [ 'activism', 'activist' ],
                        [ 'protesting', 'protestor' ],
                        [ 'forgery', 'forger' ],
                        [ 'witchcraft', 'witch', 'witches' ],
                        [ 'vampirism', 'vampire' ],
                        [ 'racketeering', 'racketeer' ],
                        [ 'conspiracy', 'conspirator' ],
                        [ 'immigration', 'immigrant' ],
                        [ 'emigration', 'emigrant' ],
                        [ 'espionage', 'spy', 'spies' ],
                        [ 'extortion', 'extortionist' ],
                        [ 'embezzlement', 'embezzler' ],
                        [ 'piracy', 'pirate' ],
                        [ 'deviance', 'deviant' ],
                        [ 'mutiny', 'mutineer' ],
                        [ 'military desertion', 'deserter' ],
                        [ 'burglarly', 'burglar' ],
                        [ 'defamation', 'defamer' ],
                        [ 'fraud', 'fraudster' ],
                        [ 'impersonation', 'impersonator' ],
                        [ 'assault', 'assaulter' ],
                        [ 'jaywalking', 'jaywalker' ],
                        [ 'loitering', 'loiterer' ],
                        [ 'malfeasance', 'malfeasant' ],
                        [ 'intoxication', 'drunkard' ],
                        [ 'sabotage', 'sabateur' ],
                        [ 'sedition', 'seditor' ],
                        [ 'shoplifting', 'shoplifter' ],
                        [ 'blackmail', 'blackmailer' ],
                        [ 'profiteering', 'profiteer' ],
                        [ 'smuggling', 'smuggler' ],
                        [ 'blockade running', 'blockade runner' ],
                        [ 'resistance', 'resistance fighter' ],
                        [ 'vandalism', 'vandal' ],
                        [ 'trespass', 'trespasser' ],
                        [ 'treason', 'traitor' ],
                        [ 'truancy', 'truant' ],
                        [ 'tampering', 'tamperer' ],
                        [ 'skimming', 'skimmer' ],
                        [ 'slicing', 'slicer' ],
                        [ 'splicing', 'splicer' ],
                        [ 'cloning', 'cloner' ],
                        [ 'treachery', 'treacherer' ],
                        [ 'journalism', 'journalist' ],
                        [ 'bombing', 'bomber' ],
                        [ 'pollution', 'pollutor' ],
                        [ 'littering', 'litterer' ],
                        [ 'boosting', 'booster' ],
                        [ 'politics', 'politician' ],
                        [ 'running', 'runner' ],
                        [ 'blasting', 'blaster' ],
                        [ 'dancing', 'dancer' ],
                        [ 'raving', 'raver' ],
                        [ 'partying', 'partier' ],
                        [ 'hashing', 'hasher' ],
                        [ 'bruteforcing', 'bruteforcer' ],
                        [ 'scripting', 'script kiddie' ],
                        [ 'hijacking', 'hijacker' ],
                        [ 'clickjacking', 'clickjacker' ],
                        [ 'spoofing', 'spoofer' ],
                        [ 'social engineering', 'social engineer' ],
                        [ 'cache poisoning', 'cache poisoner' ],
                        [ 'symlinking', 'symlinker' ],
                        [ 'code execution', 'code executor' ],
                        [ 'DDOSing', 'DDOSer' ],
                        [ 'libel', 'libeler' ],
                        [ 'regicide', 'kingslayer' ],
                        [ 'deicide', 'godslayer' ],
                        [ 'CamelCasing', 'CamelCaser' ]
                      ];


////////////////////////////////////////////////////////////////////////////////
///////////////// Groups ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var dangerStates = [ 'mutant', 'furious', 'vicious', 'bloodthirsty',
                     'homicidal', 'dimensional', 'stim-addled',
                     'deadly', 'plague-infested', 'enraged',
                     'zombified', 'cybernetic-enhanced', 'superpowered',
                     'mecha-armored', 'lethal', 'crazed', 'conniving',
                     'vengeful', 'exiled', 'foreign', 'ancient', 'evil',
                     'amoral', 'Cthulhu-worshipping'
                   ];

var dangerGroups = [ 'gang', 'pack', 'band', 'caravan', 'cargo ship',
                      'battlegroup', 'division', 'faction',
                      'freighter', 'mining vessel', 'hovertransport',
                      'battlegang', 'war party', 'group', 'band',
                      'batch', 'guild', 'society', 'vast ensemble',
                      'trade association', 'battalion', 'platoon', 'cabal',
                      'fringe movement', 'splinter group', 'splinter cell',
                      'group', 'cell', 'cult', 'bloodgang', 'colony ship',
                      'teletransport', 'skytaxi', 'horde', 'battlecarrier',
                      'tank division', 'militia faction', 'political party',
                      'religious sect', 'sectarian faction', 'tribe',
                      'resistance group', 'secret order'
                   ];

var crimeActions = [ 'is committing acts of', 'has been spotted engaging in',
                     'is reportedly committing', 'has committed',
                     'is rumored to be committing', 'was sighted committing',
                     'was spotted committing',
                     'is reportedly committing', 'has commenced', 'has begun',
                     'is plotting acts of', 'is planning', 'is plotting',
                     'was discovered committing', 'was caught committing'
                  ];

var warnings = [ 'alert', 'warning', 'caution', 'be advised', 'breaking',
                 'advisory', 'report'
               ];

var locations = [ 'in Sector 7', 'in Sector 127.0.0.1', 'in Sector 64a5',
                  'in Sector 86', 'in Sector AA23', 'in Sector 1138',
                  'in Sector 327', 'in the Irradiated Sector-Chain',
                  'in the outer deathwastes', 'in the Underspyre',
                  'in the Upper Spyre', 'in the hive depths',
                  'deep in the lower levels', 'in the far undersewers',
                  'in the Mutant Caverns', 'in the spice mines of Kessel',
                  'at Neo New York Spaceport', 'on the Kansas zombie plains',
                  'in Whoppersconsin, Presented by Burger King®',
                  'in near Earth orbit',
                  'in low Earth orbit', 'at the solarside Lagrange point',
                  'in the exoatmosphere',
                  'on the virtuanet', 'on the holonet',
                  'at a New Delhi holocafe', 'at the World War IV Memorial',
                  'aboard Satellite Station Delta', 'in orbit over Mars',
                  'inside the MindInternet',
                  'outside the Western Mars Airlock',
                  'near the ruins of Trump\'s Wall', 'on the outernet',
                  'on the darknet', 'on the darkweb', 'inside the darkmind',
                  'in the MagmaCore Colonies', 'on Titan Colony 7',
                  'in the distant past', 'in the far future',
                  'six weeks in the future', 'in the year 432',
                  'on Level 2346', 'on Level 834', 'on Level 61',
                  'somewhere near Level 729', 'around Level 1254',
                  'on Levels 663 through 669', 'in the sewers near Level 3114',
                  'in Sector 84, Level 312', 'in Sector 6008, Level 5',
                  'in the cloud tradelanes', 'in the stratospheric tradelanes',
                  'in the orbital tradelanes', 'in the underdark',
                  'in an alley in the underhive', 'in an undersewer cavern',
                  'inside a Net Fortress', 'in a netcavern',
                  'beneath the Artificial Ice Cap', 'in Neo Chernobyl',
                  'in eastern NeoTokyo', 'in a Wakandan mine',
                  'in the Kuiper Belt', 'in the chaos dimension',
                  'from the lair of the Undersewer King',
                  'near the White House', 'beneath the ruins of San Francisco',
                  'in what was once New York', 'beyond the time border',
                  'in the fourth dimension', 'in the second dimension',
                  'aboard a starcarrier', 'aboard a solar freight hauler',
                  'aboard the Genesis Station', 'aboard StarCylinder Epsilon',
                  'in World of Warcraft', 'while streaming on Twitch'
               ];



var compoundTitle;
var adjectiveTitle;
var whichTitle;
var title;

var uberPref;
var state;
var group;
var crimeAction;
var warning;
var location;



function chooseTerms(){

  compoundTitle = getSing(jobPreN) + getPlur(jobSuff);
  adjectiveTitle = getSing(jobPreS) + ' ' + getPlur(jobTtlS);
  whichTitle = [ adjectiveTitle, compoundTitle ];
  title = random( whichTitle );

  uberPref = random(crimeUberPrefs) + ' ';
  state = random(dangerStates);
  group = random(dangerGroups);
  crimeAction = random(crimeActions);
  warning = random(warnings).toUpperCase();
  location = random(locations);

}

var count = 141;
var warningStatement = '';

function buildWarningStatement(){
  while ( count > 140 ){

    chooseTerms();

    warningStatement = warning + ': A ' + group + ' of ' + state + ' ' + title + ' ' + crimeAction + ' ' + half(uberPref) + random(crimePrefixes) + checkSing(random(genericCrimes)) + ' ' + location + '.';

    count = warningStatement.length;

  }
}

buildWarningStatement();
console.log(warningStatement);
console.log(count);
