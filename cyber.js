
 // MegaCity Police bot
 // @megacitypolice on Twitter

 var Twit = require('twit');
 var TwitterBot = require('node-twitterbot').TwitterBot;

 var Bot = new TwitterBot({
   consumer_key:         process.env.CYBERBOT_CONSUMER_KEY,
   consumer_secret:      process.env.CYBERBOT_CONSUMER_SECRET,
   access_token:         process.env.CYBERBOT_ACCESS_TOKEN,
   access_token_secret:  process.env.CYBERBOT_ACCESS_TOKEN_SECRET
 });


///////////////// Functions ////////////////////////////////////////////////////

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Get a random item from an array;
 function random(someArray) {
   return someArray[Math.floor(Math.random() * someArray.length)];
 }

 // Return the string if passed a string or first item if passed an array
 function checkSing(something) {
   if (something.constructor === Array) { return something[0]; }
   else { return something; }
 }

// Return the string if passed a string
// or second item if passed an array, plus 's'
 function checkPlur(something) {
   if (something.constructor === Array) { return something[1]; }
   else { return something + 's'; }
 }

 // Return the string if passed a string or second item if passed an array
 function checkSecond(something) {
   if (something.constructor === Array) { return something[1]; }
   else { return something; }
 }

 function getSing(something) {
   return checkSing(random(something));
 }

 function getPlur(something) {
   return checkPlur(random(something));
 }

 function getSecond(something) {
   return checkSecond(random(something));
 }

 function getThird(something) {
   return (random(something))[3];
 }

 function nineTenths(something) {
   if (Math.random() >= 0.1 ) { return something; }
   else { return ''; }
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
              'astro', 'titano', 'astral', 'crypto', 'crypto-', 'wiki',
              'razor', 'ice', 'magma', 'lava', 'glitch', 'karma',
              'aero', 'dyno', 'mirror', 'bug', 'cell', 'thorn', 'mine',
              'automa'
            ];

// Job prefixes that can be adjectives modifying a title
var jobPreS = [ 'corporate', 'data', 'cyborg', 'virtual', 'carbon', 'silicon',
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
              'solar', 'Plutonian', 'titan', 'astral', 'Weyland-Yutani',
              'Weyland', 'Yutani', 'mafia', 'isotope', 'flechette', 'ultima',
              'railgun', 'attack', 'fluid', 'matter', 'molecular', 'modem',
              'panther', 'cryonic', 'vat-grown', 'glitch', 'karma',
              'Mercerist', 'aurora', 'shield', 'carapace', 'philotic',
              'psychic', 'ansible', 'Imperial', 'Rebel', 'Resistance',
              'automated'
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
              'physicist', 'titan', 'bruiser', 'raider', 'daemon', 'demon',
              'theologist', 'cowboy', 'paladin', 'warlock', 'shaman',
              'Mercerist', 'wyrm', 'djinn', 'sphere', 'walker',
              'exterminator'
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
                [ 'lizardmen', 'lizardmen' ],
                [ 'snake person', 'snake people' ],
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
                'prophet', 'oracle', 'cleric', 'chimera',
                'monarch', 'legionnaire', 'king', 'queen', 'sheikh', 'jaeger',
                'caliph', 'baron', 'knight', 'ape', 'centaur', 'ogre',
                'apostate', 'heretic', 'redemptionist', 'mammoth', 'titan',
                'bruiser', 'raider', 'marine', 'sergeant', 'avatar',
                'demon', 'daemon', 'denizen', 'kourier', 'gargoyle',
                'mercenary', 'basilisk', 'cowboy', 'paladin', 'warlock',
                'shaman', 'wyrm', 'djinn', 'medium', 'siphon', 'archer',
                'exterminator'
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
                       'anarcho', 'hover', 'bio', 'carbon', 'silicon ',
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
                       'plasmagun ', 'railgun ', 'election ', 'political ',
                       'judicial ', 'legislative ', 'crypto', 'crypto-',
                       'disc ', 'disk ', 'sleep ', 'mind ', 'galvanic ',
                       'consciousness ', 'subconscious ', 'acoustic ',
                       'pre', 'post-', 'uber', 'molecular ', 'aero',
                       'dyno', 'philotic ', 'psychic '
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
                        [ 'CamelCasing', 'CamelCaser' ],
                        [ 'assassination', 'assassin' ],
                        [ 'homicide', 'killer' ],
                        [ 'omnicide', 'omnikiller' ],
                        [ 'tyrannicide', 'tyrantslayer' ],
                        [ 'xenocide', 'xenoslayer' ],
                        [ 'raiding', 'raider' ],
                        [ 'leaking', 'leaker' ],
                        [ 'stim trafficking', 'stimrunner' ],
                        [ 'juice trafficking', 'juicerunner' ],
                        [ 'dust trafficking', 'dustrunner' ],
                        [ 'spice trafficking', 'spicerunner' ],
                        [ 'stim dealing', 'stim slinger' ],
                        [ 'juice dealing', 'juice dealer' ],
                        [ 'dust dealing', 'dust dealer' ],
                        [ 'spice dealing', 'spice dealer' ],
                        [ 'doppelganging', 'doppelganger' ],
                        [ 'raiding', 'raider' ],
                        [ 'mutation', 'mutant' ],
                        [ 'experimentation', 'experimenter' ],
                        [ 'manipulation', 'manipulator' ],
                        [ 'surfing', 'surfer' ],
                        [ 'spearphishing', 'spearphisher' ],
                        [ 'keylogging', 'keylogger' ]
                      ];


////////////////////////////////////////////////////////////////////////////////
///////////////// Groups ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var dangerStates = [ 'mutant', 'bloodthirsty', 'pandimensional', 'solar',
                     'homicidal', 'dimensional', 'stim-addled', 'lunar',
                     'plague-infested', 'gene-enhanced', 'elemental',
                     'zombified', 'cybernetic-enhanced', 'superpowered',
                     'mecha-armored', 'exiled', 'foreign', 'ancient', 'evil',
                     'amoral', 'Cthulhu-worshipping', 'Martian', 'Venusian',
                     'Plutonian'
                   ];

var dangerGroups  = [ 'gang', 'pack', 'band', 'caravan', 'cargo ship',
                      'battlegroup', 'division', 'faction',
                      'freighter', 'mining vessel', 'hovertransport',
                      'battlegang', 'war party', 'group', 'band',
                      'batch', 'guild', 'society',
                      'trade association', 'battalion', 'platoon', 'cabal',
                      'fringe movement', 'splinter group', 'splinter cell',
                      'group', 'cell', 'cult', 'bloodgang', 'colony ship',
                      'teletransport', 'skytaxi', 'horde', 'battlecarrier',
                      'tank division', 'militia faction', 'political party',
                      'religious sect', 'sectarian faction', 'tribe',
                      'resistance group', 'secret order', 'pair',
                      'dark order'
                    ];

var crimeActions = [ 'is committing acts of', 'has been spotted engaging in',
                     'is reportedly committing', 'has committed',
                     'is rumored to be committing', 'was sighted committing',
                     'was spotted committing',
                     'is reportedly committing',
                     'is plotting acts of', 'is planning', 'is plotting',
                     'was discovered committing', 'was caught committing',
                     'is suspected of committing'
                  ];

var warnings = [ 'alert', 'warning', 'caution', 'be advised', 'breaking',
                 'advisory', 'report', 'update'
               ];

var locations = [ 'in Sector 0.3', 'in Sector 8756-Delta', 'in Sector 9450',
                  'in Sector 6477', 'in Null Sector', 'in Sector 2436',
                  'in Sector 3478', 'in Sector 701', 'in Sector 972',
                  'in Echo Sector', 'in Sector 6903', 'in Sector 9834',
                  'in Sector 7', 'in Sector 127.0.0.1', 'in Sector 64a5',
                  'in Sector 86', 'in Sector AA23', 'in Sector 1138',
                  'in Undefined Sector', 'in Error Sector',
                  'in NaN Sector', 'in Segfault Sector',
                  'in the missing sector', 'in the drowned sectors',
                  'in the lost sectors', 'in every sector',
                  'in Sector 327', 'in the Irradiated Sector-Chain',
                  'in the Far Northern Sector-Chain', 'in NullSec',
                  'in Sub-Tropical Sector-Chain B',
                  'in the Grey Sector-Chain', 'in the Pacific Sector-Chain',
                  'in the Crumbling Sector-Chain',
                  'in the Lost Sector-Chain Array',
                  'across the Pan-Continental Sector-Chain Array',
                  'in the outer deathwastes', 'in the near deathwastes',
                  'in the Underspyre', 'in the Midspyre',
                  'in the Upper Spyre', 'in the Far-Upper Spyrepoint',
                  'in the hive depths', 'in the far-deep hive levels',
                  'deep in the lower levels', 'in the far undersewers',
                  'in the Mutant Caverns', 'in the spice mines of Kessel',
                  'in near Earth orbit', 'at the South Pole Colony',
                  'in low Earth orbit', 'at the solarside Lagrange point',
                  'in the exoatmosphere', 'on a stratospheric airplatform',
                  'on the virtuanet', 'on the holonet', 'on the internet',
                  'at a New Delhi holocafe', 'at the World War IV Memorial',
                  'aboard Satellite Station Delta', 'in orbit over Mars',
                  'in Second Life 3',
                  'outside the Western Mars Airlock',
                  'near the Southern Mars Airlock', 'on the outernet',
                  'on the ethernet', 'on the starnet', 'on the spacenet',
                  'on the cybernet', 'on the echonet', 'on the metanet',
                  'on the tetranet', 'on the synthnet', 'on the tachyonet',
                  'on the etherweb', 'on the starweb', 'on the spaceweb',
                  'on the cyberweb', 'on the echoweb', 'on the metaweb',
                  'on the tetraweb', 'on the synthweb', 'on the tachyoweb',
                  'on the darknet', 'on the darkweb', 'inside the darkmind',
                  'in the MagmaCore Colonies', 'on Titan Colony 7',
                  'in the distant past', 'in the far future',
                  'six weeks in the future', 'in the year 432',
                  'on Level 2346', 'on Level 834', 'on Level 61',
                  'on Levels 663 through 669',
                  'in Sector 84, Level 312', 'in Sector 6008, Level 5',
                  'on Level 3425', 'on Level 8214', 'on Level 93',
                  'somewhere near Level 106', 'around Level 938',
                  'on Levels 3301 through 3315', 'in the sewers near Level 239',
                  'in Sector 7654, Level 48', 'in Sector 124, Level 9469',
                  'on Level 435', 'on Level 610', 'on Level 9380',
                  'somewhere near Level 784', 'around Level 7701',
                  'on Levels 9987 through 10004', 'near Level 897',
                  'in Sector 3457, Level 9386', 'in Sector 9854, Level 3256',
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
                  'in World of Warcraft', 'while streaming on Twitch',
                  'near the machine city', 'near the nation of exiled robots',
                  'on an interstellar colony craft', 'in a junk heap',
                  'both inside and outside of Schrödinger\'s Box',
                  'in a Soylent factory', 'in a robotic robot factory factory',
                  'between the six worlds', 'at the edge of known space',
                  'at the event horizon of a black hole',
                  'inside a black hole', 'inside a net paradox',
                  'aboard the Skyforge', 'on Sealand',
                  'in the Coreforge', 'aboard a space elevator',
                  'at a classified location', 'at a classified facility',
                  'at a research facility', 'at a research outpost',
                  'at a sky hotel', 'in onion space',
                  'in Upper Taipei',
                  'at the World Capital', 'inside a world engine',
                  'from a secret base', 'in a secret lair', 'on Isla Nublar',
                  'on the Shadow Wastes', 'on the Dreadplains',
                  'at a Budapest hotel', 'in the mind of the Prime Autarch',
                  'at Jackpoint Six-Four', 'at the Darknet Exchange',
                  'at a rogue data haven',
                  'aboard a floating libertarian island',
                  'at a Congolese server megafarm',
                  'in the Neutral Zone', 'in the Armistice Zone',
                  'in the Protected Zone', 'in the Forbidden Zone',
                  'in the Watcher\'s Domain', 'in the Sixth Fury',
                  'at a Bitcoin mining colony', 'on an asteroid colony',
                  'at an illegal Bitcoin production dungeon',
                  'in the Sultanate of Kinakuta', 'in the Black Chamber',
                  'at a Kinakutan data haven', 'at the Black Sun',
                  'in Greater Hong Kong', 'in Kowloon Walled Metropolis',
                  'on Amchitka', 'in the eye of a nebula hurricane',
                  'at Express Port 142', 'at Express Port 81',
                  'at Express Port 9', 'at Local Port 13', 'at Local Port 55',
                  'at Local Port 223', 'on the Supranet', 'on the Subnet',
                  'in the Googleverse', 'in the Matrix',
                  'in NeurOceania', 'in central ExoPakistan',
                  'in Third Zealand', 'in ReSpain',
                  'in the Twelfth French Republic', 'in Omni-Iceland',
                  'in Mega-Outer Mongolia', 'between the Twin Void Terrors',
                  'close to Holding Sector MV-7', 'on the North Ridge',
                  'at Echo Station 3T8', 'at an Automated Factory',
                  'in the Netsphere', 'at a Tibanna gas colony',
                  'on Level 1313', 'at a rebel base', 'at an Imperial outpost',
                  'aboard a blockade runner'
               ];

////////////////////////////////////////////////////////////////////////////////
///////////////// Names ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var sentences = {
                 innocent: [
                   'released', 'reatomized', 'mind-revived', 'de-marooned',
                   'de-exiled', 'returned to the Prime Dimension',
                   'released from custody',
                   'released from the Exile Orbital Station',
                   'released from Lunar Supermax Prison', 'released from the Siberian Multinational Penitentiary'
                 ],
                 guilty: [
                   'indicted', 'detained', 'captured', 'mind-severed',
                   'quarantined', 'neutralized', 'deatomized',
                   'disintegrated',
                   'neuroisolated', 'imprisoned', 'jailed',
                   'indicted before a grand jury',
                   'sent to a reprogramming facility',
                   'indicted on multiple charges',
                   'assigned a bounty of 10 million credits',
                   'assigned a bounty of 20 million credits',
                   'assigned a bounty of 30 million credits',
                   'assigned a bounty of 100 million credits',
                   'assigned a bounty of 1 billion credits',
                   'assigned a bounty of 100 billion credits',
                   'assigned a bounty of 100 billion credits',
                   'placed on the FBI Most Wanted list',
                   'placed on the MegaCity Police Most Wanted list',
                   'placed on the Pandimensional Force Most Wanted list',
                   'designated a inter-system fugitive',
                   'designated an interdimensional fugitive',
                   'exiled from the Prime Dimension',
                   'exiled from the Core Worlds',
                   'exiled from the Offworld Colonies',
                   'sent to the spice mines of Kessel',
                   'marooned on a prison colony',
                   'marooned in the Outer Reaches',
                   'marooned in a parallel dimension'
                 ]
               };

var verdicts = {
                 innocent: [
                   'after being acquitted of', 'after being exonerated for'
                 ],
                 guilty: [
                   'for', 'on suspicion of', 'after committing',
                   'after allegedly committing', 'after being convicted of',
                   'after being found guilty of'
                 ]
               };

////////////////////////////////////////////////////////////////////////////////
///////////////// Names ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var firstNames = [ 'Pauley', 'Hideo', 'Riviera', 'Henry', 'Linda', 'Molly',
                   'Willis', 'Marcus', 'Sally', 'Johnny', 'Julius', 'Iran',
                   'Dixie', 'McCoy', 'Rick', 'Phil', 'Pris', 'John', 'Roy',
                   'Rachael', 'Antonio', 'Sydney', 'Eldon', 'Sarah', 'Iris',
                   'Meyer', 'Carsten', 'Kevin', 'Lora', 'Sark', 'Tron',
                   'Ram', 'Yori', 'Crom', 'Déjà', 'Switch', 'Cypher', 'Kate',
                   'Aesop', 'Jinteki', 'Sherlock', 'Surge', 'Kati',
                   'Bernice', 'Simone', 'Midori', 'Thomas', 'Tyr', 'Anson',
                   'Escher', 'Sahasrara', 'Paricia', 'Himitsu', 'Eliza',
                   'Elizabeth', 'Fenris', 'Tallie', 'Y.T.', 'May', 'Gemini',
                   'Savoir-faire', 'Caprice', 'Tori', 'Iain', 'Ken',
                   'Markus', 'Valencia', 'Robert', 'Luke', 'Leia', 'Han',
                   'Kylo', 'Ellen', 'Sara', 'River', 'Laura', 'Malcolm',
                   'Ben', 'Leeloo', 'Korben', 'Jean-Baptiste', 'Vito',
                   'Massimo', 'Rico', 'Vienna', 'Paris', 'Cal', 'Spike',
                   'Fink', 'Sabbat', 'Yassa', 'Martin', 'Alex', 'Victor',
                   'Julie', 'Ian', 'Neo', 'Trinity', 'Morpheus', 'Tank',
                   'Apoc', 'Dozer', 'Thadeus', 'Jue', 'Robbie', 'Cis', 'Duo',
                   'Yoko', 'Yuki', 'Ash', 'Ezekiel', 'Niobe', 'Link',
                   'Persephone', 'Zee', 'Seraph', 'Bane', 'Axel', 'Cas',
                   'Ghost', 'Demosthenes', 'Socrates', 'Plato', 'Sati',
                   'Ramachandra', 'Kamala', 'Dizzy', 'Carmen', 'Ace',
                   'Carl', 'Zander', 'Jean', 'Rose', 'Mercury',
                   'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune',
                   'Pluto', 'Juno', 'Minerva', 'Janus', 'Vesta', 'Vishnu',
                   'Tidus', 'Yuna', 'Auron', 'Wakka', 'Lulu', 'Rikku',
                   'Seymour'
                 ];

var lastNames  = [ 'Shaftoe', 'Waterhouse', 'von Hacklheber', 'Bischoff',
                   'Comstock', 'Altamira', 'Turing', 'MacArthur', 'Einstein',
                   'Halaby', 'Kepler', 'Loeb', 'Föhr', 'Cantrell', 'Rife',
                   'Asherah', 'Enzo', 'Tessier-Ashpool', 'Maelcum', 'Batty',
                   'Wintermute', 'Deckard', 'Resch', 'Stratton', 'Isidore',
                   'Rosen', 'Voight-Kampff', 'Sant\'Elia', 'Mead', 'Kubrick',
                   'Vangelis', 'Flynn', 'Baines', 'Dillinger', 'Vu',
                   'McCaffrey', 'Sumer', 'Xanadu', 'Jones', 'Smith', 'Peters',
                   'Mai', 'Diego', 'Li', 'Beale', 'Ruhr', 'Haas-Bioroid',
                   'Burke', 'Wotan', 'Bako', 'Bishop', 'Scheherazade',
                   'Mills', 'Perrault', 'Nisej', 'Hanzō', 'Tenma', 'Stirling',
                   'Estevez', '\'); DROP TABLE users;--', 'Skywalker',
                   'Starkiller', 'Solo', 'Vader', 'Ren', 'Ripley', 'Connor',
                   'Tam', 'Roslin', 'Reynolds', 'Kenobi', 'Dallas',
                   'Emanuel Zorg', 'Cornelius', 'Munro', 'Mactilburgh',
                   'Pacoli', 'Staedert', 'Tudor', 'Plavalaguna', 'Dredd',
                   'Kraken', 'Feyy', 'Angel', 'Povey', 'Pasternak',
                   'Fargo', 'Francisco', 'Bachmann', 'Sinfield', 'Furlong',
                   'Vacendak', 'Redlund', 'McCandless', 'Smith', 'Brown',
                   'Jones', 'Nebuchadnezzar', 'Osiris', 'Rawlins', 'Mifune',
                   'Ballard', 'West', 'Soren', 'Locke', 'Hobbes', 'Hamann',
                   'Flores', 'Ibanez', 'Levy', 'Jenkins', 'Barcalow',
                   'Rasczak', 'Vrataski', 'Farell', 'Brigham', 'Kimmel',
                   'Skinner', 'Takeda'
                 ];

////////////////////////////////////////////////////////////////////////////////
///////////////// Decree ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var decreeActions     = [
                          'is now illegal', 'has been decreed a crime',
                          'has been outlawed', 'has been prohibited',
                          'has been forbidden', 'has been re-outlawed',
                          'has been legalized', 'has been re-legalized',
                          'is now mandatory',
                          'has been decriminalized to a citation',
                          'has been declared a health risk',
                          'has been declared an act of terrorism',
                          'has been declared an act of treason'
                        ];

var decreeModifiers   = [
                          'for medical purposes', 'in all sectors',
                          'without a prescription', 'across the Core Worlds',
                          'across the Offworld Colonies',
                          'across the Prime Dimension', 'while intoxicated',
                          'while driving or operating machinery',
                          'while piloting hovercraft or spacecraft',
                          'for all noncitizens',
                          'while traveling across dimensions',
                          'while on a tourist visa',
                          'while under the age of 18',
                          'while under the age of 21',
                          'without a license', 'without a permit'
                        ];

var decreeAuthorities = [
                          'by the authority of the Prime Autarch',
                          'by order of the World Capital Senate',
                          'by decree of the MegaCity Supreme Court',
                          'by agreement of a coalition of Sector Councils',
                          'according to the terms of a new interdimensional armistice accord',
                          'by order of the MegaCity legislature',
                          'by order of the MegaCity police code'
                        ];

////////////////////////////////////////////////////////////////////////////////
////////////// Tweet Creation //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var compoundTitle;
var adjectiveTitle;
var whichTitle;
var title;
var singTitle;

var uberPref;
var state;
var group;
var crimeAction;
var warning;
var location;

var judgement;
var fate;

var firstName;
var lastName;

var decreeAction;
var decreeModifier;
var decreeAuthority;

function chooseTerms(){

  compoundTitle = getSing(jobPreN) + getPlur(jobSuff);
  adjectiveTitle = getSing(jobPreS) + ' ' + getPlur(jobTtlS);

  compoundSingTitle = getSing(jobPreN) + getSing(jobSuff);
  adjectiveSingTitle = getSing(jobPreS) + ' ' + getSing(jobTtlS);

  whichTitle = [ adjectiveTitle, compoundTitle ];
  whichSingTitle = [ adjectiveSingTitle, compoundSingTitle ];

  title = random( whichTitle );
  singTitle = random( whichSingTitle );

  uberPref = random(crimeUberPrefs) + ' ';
  state = random(dangerStates);
  group = random(dangerGroups);
  crimeAction = random(crimeActions);
  warning = random(warnings).toUpperCase();
  location = random(locations);

  firstName = random(firstNames);
  lastName = random(lastNames);

  decreeAction = random(decreeActions);
  decreeModifier = random(decreeModifiers);
  decreeAuthority = random(decreeAuthorities);

  judgement = (random([0,1,2]) === 0) ? 'innocent' : 'guilty';
  fate = random(sentences[judgement]) + ' ' + random(verdicts[judgement]);


}

var count = 141;
var warningStatement = '';
var captureStatement = '';
var decreeStatement = '';

function buildWarningStatement(){
  while ( count > 140 ){

    chooseTerms();

    warningStatement = warning + ': A ' + group + ' of ' + threeQuarter(state + ' ') + title + ' ' + crimeAction + ' ' + threeQuarter(uberPref) + random(crimePrefixes) + checkSing(random(genericCrimes)) + threeQuarter(' ' + location) + '.';

    count = warningStatement.length;

  }
}

function buildCaptureStatement(){
  while ( count > 140 ){

    chooseTerms();

    var fullTitle = (random([0,1]) === 0) ?
                    singTitle.capitalize() :
                    state.capitalize() + ' ' + singTitle;

    captureStatement = fullTitle + ' ' + firstName + ' ' + lastName + ' has been ' + fate + ' ' + threeQuarter(uberPref) + random(crimePrefixes) + checkSing(random(genericCrimes)) + threeQuarter(' ' + location) + '.';

    count = captureStatement.length;

  }
}

function buildDecreeStatement(){
  while ( count > 140 ){

    chooseTerms();

    decreeStatement = random(crimePrefixes).capitalize() + checkSing(random(genericCrimes)) + ' ' + decreeAction + ' ' + twoThird(random([ decreeModifier, decreeModifier, location ]) + ' ') + decreeAuthority + '.';

    count = decreeStatement.length;

  }
}

var finalStatement;

function chooseStatement(){

    if ( random([0,1,2,3,4,5]) === 0 ){

      buildDecreeStatement();
      finalStatement = decreeStatement;

    }
    else if ( random([0,1,2]) === 0 ){

      buildCaptureStatement();
      finalStatement = captureStatement;

    }
    else {

      buildWarningStatement();
      finalStatement = warningStatement;

    }
}
chooseStatement();

console.log(finalStatement);
console.log(count);

Bot.tweet(finalStatement);
