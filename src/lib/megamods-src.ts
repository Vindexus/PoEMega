/**
 * This was the original file I used to create the big list of mods.
 * I got a list of trade mods from Trade API, a list of names from poedb.tw, and the description
 * from the HTML of the poewiki.net
 *
 * If you know of a place where I can find easy to use JSON of PoE data let me know cause it's gotta
 * be out there! I just couldn't find it easily.
 * - Vindexus
 */

/*
import type {Mod} from "./mega";

const tradeMods = [
	{
		"id": "explicit.stat_2342448236",
		"text": "1 Added Passive Skill is Prismatic Heart",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1152182658",
		"text": "1 Added Passive Skill is Martial Prowess",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3599340381",
		"text": "1 Added Passive Skill is Fuel the Fight",
		"type": "explicit",
		key: 'fuf',
	},
	{
		"id": "explicit.stat_1911162866",
		"text": "1 Added Passive Skill is Drive the Destruction",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_540300548",
		"text": "1 Added Passive Skill is Smite the Weak",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1678643716",
		"text": "1 Added Passive Skill is Widespread Destruction",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_131358113",
		"text": "1 Added Passive Skill is Exposure Therapy",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3944525413",
		"text": "1 Added Passive Skill is Feed the Fury",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3640252904",
		"text": "1 Added Passive Skill is Heavy Hitter",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2129392647",
		"text": "1 Added Passive Skill is Circling Oblivion",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3359207393",
		"text": "1 Added Passive Skill is Calamitous",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2620267328",
		"text": "1 Added Passive Skill is Righteous Path",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3206911230",
		"text": "1 Added Passive Skill is Disorienting Display",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3250272113",
		"text": "1 Added Passive Skill is Brewed for Potency",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3435403756",
		"text": "1 Added Passive Skill is Practiced Caster",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3607300552",
		"text": "1 Added Passive Skill is Renewal",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_383245807",
		"text": "1 Added Passive Skill is Feasting Fiends",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2233272527",
		"text": "1 Added Passive Skill is Repeater",
		"type": "explicit",
		key: 'rrrrrrrr',
	},
	{
		"id": "explicit.stat_1397498432",
		"text": "1 Added Passive Skill is Streamlined",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2886441936",
		"text": "1 Added Passive Skill is Magnifier",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1703766309",
		"text": "1 Added Passive Skill is Deep Chill",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_72129119",
		"text": "1 Added Passive Skill is Haemorrhage",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1134501245",
		"text": "1 Added Passive Skill is Spiteful Presence",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3391925584",
		"text": "1 Added Passive Skill is Pressure Points",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3258653591",
		"text": "1 Added Passive Skill is Iron Breaker",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1882129725",
		"text": "1 Added Passive Skill is Guerilla Tactics",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4186213466",
		"text": "1 Added Passive Skill is Unholy Grace",
		"type": "explicit",
		key: 'uhg',
	},
	{
		"id": "explicit.stat_2780712583",
		"text": "1 Added Passive Skill is Touch of Cruelty",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2032453153",
		"text": "1 Added Passive Skill is Empowered Envoy",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_228455793",
		"text": "1 Added Passive Skill is Doryani's Lesson",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3202667190",
		"text": "1 Added Passive Skill is Student of Decay",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_567971948",
		"text": "1 Added Passive Skill is Vicious Skewering",
		"type": "explicit",
		key: 'vis'
	},
	{
		"id": "explicit.stat_4105031548",
		"text": "1 Added Passive Skill is Conjured Wall",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2289610642",
		"text": "1 Added Passive Skill is Rotten Claws",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4188581520",
		"text": "1 Added Passive Skill is Battle-Hardened",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3638731729",
		"text": "1 Added Passive Skill is Sadist",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3415827027",
		"text": "1 Added Passive Skill is Furious Assault",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_507505131",
		"text": "1 Added Passive Skill is Purposeful Harbinger",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3317068522",
		"text": "1 Added Passive Skill is Call to the Slaughter",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3818661553",
		"text": "1 Added Passive Skill is Eye of the Storm",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1595367309",
		"text": "1 Added Passive Skill is Snowstorm",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1996576560",
		"text": "1 Added Passive Skill is Vast Power",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3122491961",
		"text": "1 Added Passive Skill is Agent of Destruction",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3652138990",
		"text": "1 Added Passive Skill is Distilled Perfection",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_647201233",
		"text": "1 Added Passive Skill is Vile Reinvigoration",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2788982914",
		"text": "1 Added Passive Skill is Unwaveringly Evil",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4199056048",
		"text": "1 Added Passive Skill is Burning Bright",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1096136223",
		"text": "1 Added Passive Skill is Essence Rush",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1626818279",
		"text": "1 Added Passive Skill is Quick Getaway",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3087667389",
		"text": "1 Added Passive Skill is Dread March",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_177215332",
		"text": "1 Added Passive Skill is Thaumophage",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2930275641",
		"text": "1 Added Passive Skill is Titanic Swings",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1153801980",
		"text": "1 Added Passive Skill is Cremator",
		"type": "explicit",
		key: 'crm',
	},
	{
		"id": "explicit.stat_1496043857",
		"text": "1 Added Passive Skill is Replenishing Presence",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4154008618",
		"text": "1 Added Passive Skill is Aggressive Defence",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2350430215",
		"text": "1 Added Passive Skill is Flow of Life",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3084359503",
		"text": "1 Added Passive Skill is Basics of Pain",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2026112251",
		"text": "1 Added Passive Skill is Cult-Leader",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_69078820",
		"text": "1 Added Passive Skill is Wound Aggravation",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1616734644",
		"text": "1 Added Passive Skill is Wicked Pall",
		"type": "explicit",
		key: 'wkp'
	},
	{
		"id": "explicit.stat_1088949570",
		"text": "1 Added Passive Skill is Stoic Focus",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2087561637",
		"text": "1 Added Passive Skill is Storm Drinker",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_392942015",
		"text": "1 Added Passive Skill is Eye to Eye",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3198006994",
		"text": "1 Added Passive Skill is Brand Loyalty",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2589589781",
		"text": "1 Added Passive Skill is Scintillating Idea",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1722821275",
		"text": "1 Added Passive Skill is Peak Vigour",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2322980282",
		"text": "1 Added Passive Skill is Smoking Remains",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2335364359",
		"text": "1 Added Passive Skill is Precise Retaliation",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_478147593",
		"text": "1 Added Passive Skill is Sage",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3372255769",
		"text": "1 Added Passive Skill is Spiked Concoction",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2150878631",
		"text": "1 Added Passive Skill is Endbringer",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1309218394",
		"text": "1 Added Passive Skill is Introspection",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_814369372",
		"text": "1 Added Passive Skill is Provocateur",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2773515950",
		"text": "1 Added Passive Skill is Second Skin",
		"type": "explicit",
		key: 'ssk',
	},
	{
		"id": "explicit.stat_37078857",
		"text": "1 Added Passive Skill is Fasting",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3536778624",
		"text": "1 Added Passive Skill is Towering Threat",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_382360671",
		"text": "1 Added Passive Skill is Uncompromising",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3777170562",
		"text": "1 Added Passive Skill is Overshock",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_889728548",
		"text": "1 Added Passive Skill is Stormrider",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4288473380",
		"text": "1 Added Passive Skill is Rattling Bellow",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2251304016",
		"text": "1 Added Passive Skill is Sublime Form",
		"type": "explicit",
		"key": "suf"
	},
	{
		"id": "explicit.stat_1005475168",
		"text": "1 Added Passive Skill is Powerful Assault",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2008682345",
		"text": "1 Added Passive Skill is Burden Projection",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2350668735",
		"text": "1 Added Passive Skill is Volatile Presence",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1705633890",
		"text": "1 Added Passive Skill is Prodigious Defence",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_282062371",
		"text": "1 Added Passive Skill is Strike Leader",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2665170385",
		"text": "1 Added Passive Skill is Hit and Run",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3025453294",
		"text": "1 Added Passive Skill is Self-Control",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_836566759",
		"text": "1 Added Passive Skill is Cold-Blooded Killer",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2428334013",
		"text": "1 Added Passive Skill is Astonishing Affliction",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2195518432",
		"text": "1 Added Passive Skill is Energy From Naught",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2066820199",
		"text": "1 Added Passive Skill is Wasting Affliction",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1904581068",
		"text": "1 Added Passive Skill is Force Multiplier",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2758966888",
		"text": "1 Added Passive Skill is Untouchable",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1903496649",
		"text": "1 Added Passive Skill is Graceful Execution",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1013470938",
		"text": "1 Added Passive Skill is Deadly Repartee",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4054656914",
		"text": "1 Added Passive Skill is Vicious Guard",
		"type": "explicit",
		key: 'vig'
	},
	{
		"id": "explicit.stat_3711553948",
		"text": "1 Added Passive Skill is Devastator",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3784610129",
		"text": "1 Added Passive Skill is Dark Messenger",
		"type": "explicit",
		key: 'dkm',
	},
	{
		"id": "explicit.stat_693808153",
		"text": "1 Added Passive Skill is Blast-Freeze",
		"type": "explicit",
		key: 'bfr',
	},
	{
		"id": "explicit.stat_3585232432",
		"text": "1 Added Passive Skill is Master the Fundamentals",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2900833792",
		"text": "1 Added Passive Skill is Brush with Death",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_982290947",
		"text": "1 Added Passive Skill is Flexible Sentry",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2262034536",
		"text": "1 Added Passive Skill is Invigorating Portents",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2084371547",
		"text": "1 Added Passive Skill is Expert Sabotage",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1364858171",
		"text": "1 Added Passive Skill is Sublime Sensation",
		"type": "explicit",
		"key": "sbs"
	},
	{
		"id": "explicit.stat_1777139212",
		"text": "1 Added Passive Skill is Corrosive Elements",
		"type": "explicit",
		key: 'cre',
	},
	{
		"id": "explicit.stat_957679205",
		"text": "1 Added Passive Skill is Ancestral Echo",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3274270612",
		"text": "1 Added Passive Skill is Heraldry",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2410501331",
		"text": "1 Added Passive Skill is Surging Vitality",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3901992019",
		"text": "1 Added Passive Skill is Arcane Heroism",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1101250813",
		"text": "1 Added Passive Skill is Set and Forget",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_770408103",
		"text": "1 Added Passive Skill is Overwhelming Malice",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4281625943",
		"text": "1 Added Passive Skill is Opportunistic Fusilade",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4272503233",
		"text": "1 Added Passive Skill is Paralysis",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1038955006",
		"text": "1 Added Passive Skill is Dragon Hunter",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4222265138",
		"text": "1 Added Passive Skill is Assert Dominance",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_791125124",
		"text": "1 Added Passive Skill is Bodyguards",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2314111938",
		"text": "1 Added Passive Skill is Mystical Ward",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4235300427",
		"text": "1 Added Passive Skill is Special Reserve",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1085167979",
		"text": "1 Added Passive Skill is Blanketed Snow",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_715786975",
		"text": "1 Added Passive Skill is Sap Psyche",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1499057234",
		"text": "1 Added Passive Skill is Battlefield Dominator",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4120556534",
		"text": "1 Added Passive Skill is Aerodynamics",
		"type": "explicit",
		key: 'ard',
	},
	{
		"id": "explicit.stat_3294884567",
		"text": "1 Added Passive Skill is Ancestral Reach",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3603695769",
		"text": "1 Added Passive Skill is Spring Back",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_394918362",
		"text": "1 Added Passive Skill is Expansive Might",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1015189426",
		"text": "1 Added Passive Skill is Martial Mastery",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2644533453",
		"text": "1 Added Passive Skill is Self-Fulfilling Prophecy",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3509724289",
		"text": "1 Added Passive Skill is Pure Aptitude",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3872380586",
		"text": "1 Added Passive Skill is Inspired Oppression",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_77045106",
		"text": "1 Added Passive Skill is Ancestral Inspiration",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3467711950",
		"text": "1 Added Passive Skill is Hulking Corpses",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3212859169",
		"text": "1 Added Passive Skill is Arcing Shot",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_289714529",
		"text": "1 Added Passive Skill is Elegant Form",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_684087686",
		"text": "1 Added Passive Skill is Clarity of Purpose",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1038897629",
		"text": "1 Added Passive Skill is Raze and Pillage",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_664010431",
		"text": "1 Added Passive Skill is Veteran Defender",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2912949210",
		"text": "1 Added Passive Skill is Alchemist",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2631806437",
		"text": "1 Added Passive Skill is Tempered Arrowheads",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2244243943",
		"text": "1 Added Passive Skill is Weight Advantage",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4291066912",
		"text": "1 Added Passive Skill is Evil Eye",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_462115791",
		"text": "1 Added Passive Skill is Doedre's Spite",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2783012144",
		"text": "1 Added Passive Skill is Shrieking Bolts",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1290215329",
		"text": "1 Added Passive Skill is Skeletal Atrophy",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_426715778",
		"text": "1 Added Passive Skill is Lasting Impression",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_622362787",
		"text": "1 Added Passive Skill is Primordial Bond",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3904970959",
		"text": "1 Added Passive Skill is Insatiable Killer",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3998316",
		"text": "1 Added Passive Skill is Ancestral Might",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1080363357",
		"text": "1 Added Passive Skill is Haunting Shout",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1353571444",
		"text": "1 Added Passive Skill is Fettle",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2337273077",
		"text": "1 Added Passive Skill is Life from Death",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2913581789",
		"text": "1 Added Passive Skill is Precise Focus",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3898572660",
		"text": "1 Added Passive Skill is Holy Conquest",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1625939562",
		"text": "1 Added Passive Skill is Advance Guard",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3950683692",
		"text": "1 Added Passive Skill is Electric Presence",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3539175001",
		"text": "1 Added Passive Skill is Savour the Moment",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2350900742",
		"text": "1 Added Passive Skill is Grand Design",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2144634814",
		"text": "1 Added Passive Skill is Eternal Suffering",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3410752193",
		"text": "1 Added Passive Skill is Surefooted Striker",
		"type": "explicit",
		key: 'sfs',
	},
	{
		"id": "explicit.stat_1612414696",
		"text": "1 Added Passive Skill is Blowback",
		"type": "explicit",
		key: 'blo',
	},
	{
		"id": "explicit.stat_578355556",
		"text": "1 Added Passive Skill is Warning Call",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1094635162",
		"text": "1 Added Passive Skill is Liquid Inspiration",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2194205899",
		"text": "1 Added Passive Skill is Grim Oath",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2372915005",
		"text": "1 Added Passive Skill is Pure Might",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_510654792",
		"text": "1 Added Passive Skill is Natural Vigour",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_774369953",
		"text": "1 Added Passive Skill is Antivenom",
		"type": "explicit",
		"key": "anv"
	},
	{
		"id": "explicit.stat_183591019",
		"text": "1 Added Passive Skill is Disease Vector",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1028754276",
		"text": "1 Added Passive Skill is Numbing Elixir",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_50129423",
		"text": "1 Added Passive Skill is Exploit Weakness",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2043503530",
		"text": "1 Added Passive Skill is Arcane Pyrotechnics",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3051562738",
		"text": "1 Added Passive Skill is Surprise Sabotage",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2118664144",
		"text": "1 Added Passive Skill is Mage Hunter",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2043284086",
		"text": "1 Added Passive Skill is Enduring Composure",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3758712376",
		"text": "1 Added Passive Skill is Blizzard Caller",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3832665876",
		"text": "1 Added Passive Skill is Misery Everlasting",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1734275536",
		"text": "1 Added Passive Skill is Peace Amidst Chaos",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1122051203",
		"text": "1 Added Passive Skill is Storm's Hand",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2195406641",
		"text": "1 Added Passive Skill is Lead By Example",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_212648555",
		"text": "1 Added Passive Skill is Insulated",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3860179422",
		"text": "1 Added Passive Skill is Destructive Aspect",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2134141047",
		"text": "1 Added Passive Skill is Vital Focus",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2020075345",
		"text": "1 Added Passive Skill is Expendability",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_744783843",
		"text": "1 Added Passive Skill is Cold to the Core",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3667965781",
		"text": "1 Added Passive Skill is Holistic Health",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_348883745",
		"text": "1 Added Passive Skill is Tempt the Storm",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1570474940",
		"text": "1 Added Passive Skill is Unrestrained Focus",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1621496909",
		"text": "1 Added Passive Skill is Pure Guile",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2383914651",
		"text": "1 Added Passive Skill is Stubborn Student",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4222635921",
		"text": "1 Added Passive Skill is Savage Response",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1741700339",
		"text": "1 Added Passive Skill is Thunderstruck",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1483358825",
		"text": "1 Added Passive Skill is Heart of Iron",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3319205340",
		"text": "1 Added Passive Skill is Snaring Spirits",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_456502758",
		"text": "1 Added Passive Skill is Careful Handling",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2595115995",
		"text": "1 Added Passive Skill is Mindfulness",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_845306697",
		"text": "1 Added Passive Skill is Readiness",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_691431951",
		"text": "1 Added Passive Skill is Remarkable",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1048879642",
		"text": "1 Added Passive Skill is Mob Mentality",
		"type": "explicit",
		key: 'mob'
	},
	{
		"id": "explicit.stat_713945233",
		"text": "1 Added Passive Skill is Rot-Resistant",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1274505521",
		"text": "1 Added Passive Skill is Cold Conduction",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3177526694",
		"text": "1 Added Passive Skill is Disciples",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2534405517",
		"text": "1 Added Passive Skill is Daring Ideas",
		"type": "explicit",
		key: 'dri',
	},
	{
		"id": "explicit.stat_2205982416",
		"text": "1 Added Passive Skill is Broadside",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3257074218",
		"text": "1 Added Passive Skill is Master of Command",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_315697256",
		"text": "1 Added Passive Skill is Skullbreaker",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3122505794",
		"text": "1 Added Passive Skill is Combat Rhythm",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3492924480",
		"text": "1 Added Passive Skill is Prismatic Carapace",
		"type": "explicit",
		key: 'pmc',
	},
	{
		"id": "explicit.stat_2261237498",
		"text": "1 Added Passive Skill is Seeker Runes",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2938895712",
		"text": "1 Added Passive Skill is Cooked Alive",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1976069869",
		"text": "1 Added Passive Skill is One with the Shield",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_393565679",
		"text": "1 Added Passive Skill is Arcane Adept",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1462135249",
		"text": "1 Added Passive Skill is Master of Fire",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_608164368",
		"text": "1 Added Passive Skill is Wish for Death",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4154709486",
		"text": "1 Added Passive Skill is Militarism",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2978494217",
		"text": "1 Added Passive Skill is Martial Momentum",
		"type": "explicit",
		key: 'mmo',
	},
	{
		"id": "explicit.stat_882876854",
		"text": "1 Added Passive Skill is Vicious Bite",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3057154383",
		"text": "1 Added Passive Skill is Phlebotomist",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_846491278",
		"text": "1 Added Passive Skill is Darting Movements",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2017927451",
		"text": "1 Added Passive Skill is Explosive Force",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1591995797",
		"text": "1 Added Passive Skill is Gladiator's Fortitude",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3875792669",
		"text": "1 Added Passive Skill is Molten One's Mark",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4290522695",
		"text": "1 Added Passive Skill is Septic Spells",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_876846990",
		"text": "1 Added Passive Skill is Seal Mender",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_968069586",
		"text": "1 Added Passive Skill is Chip Away",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2250169390",
		"text": "1 Added Passive Skill is Overlord",
		"type": "explicit",
		key: 'old',
	},
	{
		"id": "explicit.stat_3134222965",
		"text": "1 Added Passive Skill is Fearsome Warrior",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4291434923",
		"text": "1 Added Passive Skill is Mender's Wellspring",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1821748178",
		"text": "1 Added Passive Skill is Cry Wolf",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2294919888",
		"text": "1 Added Passive Skill is Hibernator",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4018305528",
		"text": "1 Added Passive Skill is Compound Injury",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1603621602",
		"text": "1 Added Passive Skill is Dark Ideation",
		"type": "explicit",

	},
	{
		"id": "explicit.stat_775689239",
		"text": "1 Added Passive Skill is Blessed",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3993957711",
		"text": "1 Added Passive Skill is Sleepless Sentries",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2449392400",
		"text": "1 Added Passive Skill is Born of Chaos",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3737604164",
		"text": "1 Added Passive Skill is Eldritch Inspiration",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2068574831",
		"text": "1 Added Passive Skill is Brutal Infamy",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1162352537",
		"text": "1 Added Passive Skill is Will Shaper",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2622946553",
		"text": "1 Added Passive Skill is Antifreeze",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3989400244",
		"text": "1 Added Passive Skill is Low Tolerance",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1507409483",
		"text": "1 Added Passive Skill is Pure Agony",
		"type": "explicit",
		key: 'pay'
	},
	{
		"id": "explicit.stat_410939404",
		"text": "1 Added Passive Skill is Deep Cuts",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_367638058",
		"text": "1 Added Passive Skill is Unwavering Focus",
		"type": "explicit",
		key: 'uwf'
	},
	{
		"id": "explicit.stat_2484082827",
		"text": "1 Added Passive Skill is Fan of Blades",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_729163974",
		"text": "1 Added Passive Skill is Unspeakable Gifts",
		"type": "explicit",
		key: 'usg',
	},
	{
		"id": "explicit.stat_4263287206",
		"text": "1 Added Passive Skill is Rend",
		"type": "explicit",
		key: 'rnd'
	},
	{
		"id": "explicit.stat_1363668533",
		"text": "1 Added Passive Skill is Wall of Muscle",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_684155617",
		"text": "1 Added Passive Skill is Mage Bane",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_731840035",
		"text": "1 Added Passive Skill is Non-Flammable",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3984980429",
		"text": "1 Added Passive Skill is Follow-Through",
		"type": "explicit",
		key: 'flt',
	},
	{
		"id": "explicit.stat_241783558",
		"text": "1 Added Passive Skill is Wrapped in Flame",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1936135020",
		"text": "1 Added Passive Skill is Victim Maker",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1476913894",
		"text": "1 Added Passive Skill is Shifting Shadow",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1488030420",
		"text": "1 Added Passive Skill is Run Through",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_792262925",
		"text": "1 Added Passive Skill is Frantic Aspect",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2834490860",
		"text": "1 Added Passive Skill is Chilling Presence",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_633943719",
		"text": "1 Added Passive Skill is Openness",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4025536654",
		"text": "1 Added Passive Skill is Capacitor",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3746703776",
		"text": "1 Added Passive Skill is Ancestral Preservation",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2522970386",
		"text": "1 Added Passive Skill is Enduring Focus",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1424794574",
		"text": "1 Added Passive Skill is Blessed Rebirth",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3188756614",
		"text": "1 Added Passive Skill is Fire Attunement",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3351136461",
		"text": "1 Added Passive Skill is Disorienting Wounds",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1127706436",
		"text": "1 Added Passive Skill is Blacksmith",
		"type": "explicit",
		key: 'bsm',
	},
	{
		"id": "explicit.stat_3078065247",
		"text": "1 Added Passive Skill is Wizardry",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2918755450",
		"text": "1 Added Passive Skill is Fan the Flames",
		"type": "explicit",
		key: 'fnf',
	},
	{
		"id": "explicit.stat_2387747995",
		"text": "1 Added Passive Skill is Ancestral Guidance",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2055715585",
		"text": "1 Added Passive Skill is Lord of Drought",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1938661964",
		"text": "1 Added Passive Skill is Wind-up",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3500334379",
		"text": "1 Added Passive Skill is Steady Torment",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2169345147",
		"text": "1 Added Passive Skill is Quick and Deadly",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2396755365",
		"text": "1 Added Passive Skill is Feast of Flesh",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2341828832",
		"text": "1 Added Passive Skill is Hex Breaker",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2478282326",
		"text": "1 Added Passive Skill is Rote Reinforcement",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_555800967",
		"text": "1 Added Passive Skill is Hound's Mark",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3881737087",
		"text": "1 Added Passive Skill is Mortifying Aspect",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2083777017",
		"text": "1 Added Passive Skill is Conservation of Energy",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2771217016",
		"text": "1 Added Passive Skill is Master of Fear",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3848677307",
		"text": "1 Added Passive Skill is Aerialist",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_4022743870",
		"text": "1 Added Passive Skill is Adrenaline",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3967765261",
		"text": "1 Added Passive Skill is Bloodscent",
		"type": "explicit",
		key: 'bsc',
	},
	{
		"id": "explicit.stat_3957006524",
		"text": "1 Added Passive Skill is Vivid Hues",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2763732093",
		"text": "1 Added Passive Skill is Genius",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_810219447",
		"text": "1 Added Passive Skill is Improvisor",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_164032122",
		"text": "1 Added Passive Skill is Powerful Ward",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_185592058",
		"text": "1 Added Passive Skill is Master of the Maelstrom",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1381945089",
		"text": "1 Added Passive Skill is Doedre's Apathy",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_252724319",
		"text": "1 Added Passive Skill is Enduring Ward",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2454339320",
		"text": "1 Added Passive Skill is Forbidden Words",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2284771334",
		"text": "1 Added Passive Skill is Blood Artist",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1149662934",
		"text": "1 Added Passive Skill is Prismatic Dance",
		"type": "explicit",
		key: 'pmd',
	},
	{
		"id": "explicit.stat_2695848124",
		"text": "1 Added Passive Skill is Doedre's Gluttony",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_755881431",
		"text": "1 Added Passive Skill is Winter Prowler",
		"type": "explicit",
		key: 'wpr'
	},
	{
		"id": "explicit.stat_254194892",
		"text": "1 Added Passive Skill is Riot Queller",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3226074658",
		"text": "1 Added Passive Skill is Supercharge",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1722480396",
		"text": "1 Added Passive Skill is No Witnesses",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_2785835061",
		"text": "1 Added Passive Skill is Intensity",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_1543731719",
		"text": "1 Added Passive Skill is Gladiatorial Combat",
		"type": "explicit"
	},
	{
		"id": "explicit.stat_3930242735",
		"text": "1 Added Passive Skill is Confident Combatant",
		"type": "explicit"
	}
]

const descriptions = new Map([
	[
		"Adrenaline",
		"8% increased maximum Life\n6% increased Attack Speed while Leeching"
	],
	[
		"Advance Guard",
		"Attack Skills deal 30% increased Damage while holding a Shield\n5% increased Movement Speed while holding a Shield\nIgnore all Movement Penalties from Armour"
	],
	[
		"Aerialist",
		"+10% chance to Suppress Spell Damage\n5% increased Dexterity"
	],
	[
		"Aerodynamics",
		"10% increased Projectile Damage\n10% increased Projectile Speed\nProjectiles Pierce an additional Target"
	],
	[
		"Agent of Destruction",
		"25% increased Elemental Damage while affected by a Herald\n10% chance to Freeze, Shock and Ignite while affected by a Herald"
	],
	[
		"Aggressive Defence",
		"Fortifying Hits grant 60% increased Fortification\n30% increased Fortification Duration\n20% increased Damage with Attack Skills while Fortified"
	],
	[
		"Alchemist",
		"+20% to Cold Resistance\n8% increased Attack and Cast Speed\n20% increased Life Recovery from Flasks"
	],
	[
		"Ancestral Echo",
		"20% increased Totem Placement speed\n10% increased Attack and Cast Speed if you've summoned a Totem Recently"
	],
	[
		"Ancestral Guidance",
		"Totems' Action Speed cannot be modified to below Base Value\nTotems Regenerate 2% of Life per second"
	],
	[
		"Ancestral Inspiration",
		"Gain Arcane Surge when you Summon a Totem\nSpells cast by Totems deal 25% increased Damage"
	],
	[
		"Ancestral Might",
		"15% increased Totem Life\n30% increased Totem Duration\n30% increased Totem Damage if you haven't Summoned a Totem in the past 2 seconds"
	],
	[
		"Ancestral Preservation",
		"Totems have 15% additional Physical Damage Reduction\nTotems gain +25% to Chaos Resistance\nTotems gain +20% to all Elemental Resistances"
	],
	[
		"Ancestral Reach",
		"25% increased Totem Damage\n25% increased Totem Placement speed\n25% increased Totem Placement range"
	],
	[
		"Antifreeze",
		"+20% to Cold Resistance\n30% chance to Avoid being Frozen\n+1% to maximum Cold Resistance"
	],
	[
		"Antivenom",
		"+23% to Chaos Resistance\n30% chance to Avoid being Poisoned\n+1% to maximum Chaos Resistance"
	],
	[
		"Arcane Adept",
		"Channelling Skills deal 20% increased Damage\n5% increased Attack and Cast Speed while Channelling\nGain Arcane Surge after Channelling for 1 second"
	],
	[
		"Arcane Heroism",
		"10% chance to gain Arcane Surge when you Hit a Unique enemy\n30% increased Effect of Arcane Surge on you"
	],
	[
		"Arcane Pyrotechnics",
		"20% increased Trap Damage\n20% increased Mine Damage\nGain Arcane Surge when your Trap is Triggered by an Enemy\nGain Arcane Surge when your Mine is Detonated targeting an Enemy"
	],
	[
		"Arcing Shot",
		"Arrows gain Damage as they travel farther, dealing up to 50% increased Damage with Hits to targets\nArrows gain Critical Strike Chance as they travel farther, up to 100% increased Critical Strike Chance"
	],
	[
		"Assert Dominance",
		"25% increased Area of Effect if you've Killed at least 5 Enemies Recently"
	],
	[
		"Astonishing Affliction",
		"20% increased Effect of Non-Damaging Ailments\n20% increased Damage with Hits and Ailments against Enemies affected by Ailments\n20% increased Duration of Elemental Ailments on Enemies"
	],
	[
		"Basics of Pain",
		"20% increased Damage\n30% increased Critical Strike Chance"
	],
	[
		"Battle-Hardened",
		"35% increased Physical Damage\n30% increased Evasion Rating and Armour"
	],
	[
		"Battlefield Dominator",
		"15% increased Area of Effect if you've Stunned an Enemy with a Two Handed Melee Weapon Recently\nAttacks with Two Handed Weapons deal 25% increased Damage with Hits and Ailments\n10% reduced Enemy Stun Threshold"
	],
	[
		"Blacksmith",
		"+20% to Fire Resistance\n25% increased Armour\n0.4% of Fire Damage Leeched as Life"
	],
	[
		"Blanketed Snow",
		"Damage Penetrates 10% Cold Resistance against Chilled Enemies"
	],
	[
		"Blast-Freeze",
		"20% increased Cold Damage\nFreezes you inflict spread to other Enemies within 1.2 metres"
	],
	[
		"Blessed",
		"+13% to Chaos Resistance\n6% increased maximum Life\n10% increased maximum Mana"
	],
	[
		"Blessed Rebirth",
		"Minions have 20% increased maximum Life\nMinions created Recently cannot be Damaged"
	],
	[
		"Blizzard Caller",
		"Frostbite can affect Hexproof Enemies\n30% increased Duration of Freezes you inflict on Cursed Enemies"
	],
	[
		"Blood Artist",
		"+20 to Strength\n+6% to Physical Damage over Time Multiplier if you've Spent Life Recently"
	],
	[
		"Bloodscent",
		"Gain 2 Rage on Hit with Axes or Swords"
	],
	[
		"Blowback",
		"Ignites you inflict deal Damage 8% faster\n10% chance to Ignite"
	],
	[
		"Bodyguards",
		"Minions have 10% increased maximum Life\nMinions have 10% chance to Knock Enemies Back on Hit with Attacks"
	],
	[
		"Born of Chaos",
		"+3% to maximum Chaos Resistance"
	],
	[
		"Brand Loyalty",
		"Enemies take 3% increased Damage for each of your Brands Attached to them"
	],
	[
		"Brewed for Potency",
		"24% increased Damage over Time\n20% increased Life and Mana Recovery from Flasks\n10% increased Flask Charges gained"
	],
	[
		"Broadside",
		"Bow Skills have 25% increased Area of Effect"
	],
	[
		"Brush with Death",
		"+5% to Damage over Time Multiplier\nRecover 1% of Life on Kill\nRecover 1% of Energy Shield on Kill"
	],
	[
		"Brutal Infamy",
		"Attacks with Two Handed Melee Weapons deal 20% increased Damage with Hits and Ailments\n40% increased Damage with Hits and Ailments against Unique Enemies"
	],
	[
		"Burden Projection",
		"30% increased Spell Damage\n8% chance to Knock Enemies Back on Hit with Spell Damage"
	],
	[
		"Burning Bright",
		"25% increased Burning Damage\n8% increased Area of Effect"
	],
	[
		"Calamitous",
		"30% increased Elemental Damage with Attack Skills\n10% chance to Freeze, Shock and Ignite\n15% increased Effect of Non-Damaging Ailments"
	],
	[
		"Call to the Slaughter",
		"Minions deal 15% increased Damage\nMinions created Recently have 30% increased Movement Speed\nMinions created Recently have 10% increased Attack and Cast Speed"
	],
	[
		"Capacitor",
		"30% reduced Effect of Shock on you\nUnaffected by Shocked Ground\nYou cannot be Shocked if you've been Shocked Recently"
	],
	[
		"Careful Handling",
		"15% increased Trap Damage\n15% increased Mine Damage\n4% increased maximum Life\n6% increased maximum Mana"
	],
	[
		"Chilling Presence",
		"Nearby Enemies are Chilled\n"
	],
	[
		"Chip Away",
		"Brand Recall has 4% increased Cooldown Recovery Rate per Brand, up to a maximum of 40%\nBrand Recall grants 20% increased Brand Attachment range to recalled Brands"
	],
	[
		"Circling Oblivion",
		"25% increased Damage over Time\n15% increased Duration of Ailments on Enemies"
	],
	[
		"Clarity of Purpose",
		"15% increased maximum Mana\n30% increased Mana Regeneration Rate"
	],
	[
		"Cold Conduction",
		"25% increased Effect of Lightning Ailments you inflict on Chilled Enemies\n25% increased Effect of Cold Ailments you inflict on Shocked Enemies"
	],
	[
		"Cold to the Core",
		"1% increased Cold Damage per 25 Strength\n1% increased Cold Damage per 25 Dexterity\n1% increased Cold Damage per 25 Intelligence"
	],
	[
		"Cold-Blooded Killer",
		"+5% to Cold Damage over Time Multiplier\nRecover 2% of Life on Killing a Chilled Enemy"
	],
	[
		"Combat Rhythm",
		"10% increased Attack Speed if you've Hit with your Main Hand Weapon Recently\n10% increased Movement Speed if you've Hit with your Off Hand Weapon Recently"
	],
	[
		"Compound Injury",
		"35% increased Damage with Bleeding you inflict on Maimed Enemies"
	],
	[
		"Conjured Wall",
		"25% increased Spell Damage\n+8% Chance to Block Spell Damage if you've Cast a Spell Recently"
	],
	[
		"Conservation of Energy",
		"10% increased maximum Energy Shield\n0.3% of Spell Damage Leeched as Energy Shield"
	],
	[
		"Cooked Alive",
		"15% chance to Ignite\nEnemies Ignited by you have -5% to Fire Resistance"
	],
	[
		"Corrosive Elements",
		"Fire Skills have a 25% chance to apply Fire Exposure on Hit\nCold Skills have a 25% chance to apply Cold Exposure on Hit\nLightning Skills have a 25% chance to apply Lightning Exposure on Hit\n15% increased Elemental Damage"
	],
	[
		"Cremator",
		"30% increased Fire Damage\nIgnited Enemies Killed by your Hits are destroyed"
	],
	[
		"Cry Wolf",
		"Exerted Attacks deal 30% increased Damage\n20% increased total Power counted by Warcries"
	],
	[
		"Cult-Leader",
		"Minions deal 35% increased Damage while you are affected by a Herald"
	],
	[
		"Daring Ideas",
		"18% increased maximum Mana\n0.4% of Attack Damage Leeched as Mana"
	],
	[
		"Dark Ideation",
		"2% increased Chaos Damage per 100 maximum Mana, up to a maximum of 80%"
	],
	[
		"Dark Messenger",
		"Herald Skills deal 20% increased Damage\nHerald Skills have 25% increased Area of Effect"
	],
	[
		"Darting Movements",
		"+12% chance to Suppress Spell Damage while moving\n3% increased Movement Speed"
	],
	[
		"Deadly Repartee",
		"Attack Skills deal 25% increased Damage while Dual Wielding\n+6% Chance to Block Attack Damage while Dual Wielding\n30% increased Attack Critical Strike Chance while Dual Wielding"
	],
	[
		"Deep Chill",
		"+5% to Cold Damage over Time Multiplier\n30% increased Effect of Cold Ailments"
	],
	[
		"Destructive Aspect",
		"Pride has 50% increased Mana Reservation Efficiency\n12% increased Area of Effect of Aura Skills"
	],
	[
		"Devastator",
		"20% increased Attack Damage\n20% increased Damage with Ailments from Attack Skills\nEnemies Killed with Attack Hits have a 15% chance to Explode, dealing a tenth of their Life as Physical Damage"
	],
	[
		"Disciples",
		"Minions deal 20% increased Damage while you are affected by a Herald\nSummoned Sentinels have 25% increased Cooldown Recovery Rate"
	],
	[
		"Disease Vector",
		"+6% to Damage over Time Multiplier for Poison while wielding a Claw or Dagger\nEnemies Poisoned by you cannot Regenerate Life"
	],
	[
		"Disorienting Display",
		"25% increased Elemental Damage\n10% chance to Blind nearby Enemies when you use an Elemental Skill"
	],
	[
		"Disorienting Wounds",
		"25% increased Damage with Bleeding\n25% chance to Blind with Hits against Bleeding Enemies"
	],
	[
		"Distilled Perfection",
		"25% increased Life Recovery from Flasks\n25% increased Mana Recovery from Flasks\n10% increased Flask Effect Duration"
	],
	[
		"Doedre's Apathy",
		"Temporal Chains can affect Hexproof Enemies\nEnemies you Curse are Unnerved"
	],
	[
		"Doedre's Gluttony",
		"Punishment can affect Hexproof Enemies\nYou have Culling Strike against Cursed Enemies"
	],
	[
		"Doedre's Spite",
		"Enfeeble can affect Hexproof Enemies\n35% increased Critical Strike Chance against Cursed Enemies"
	],
	[
		"Doryani's Lesson",
		"25% increased Elemental Damage\n0.2% of Elemental Damage Leeched as Life"
	],
	[
		"Dragon Hunter",
		"+20% to Fire Resistance\n30% increased Armour\n15% chance to Defend with 200% of Armour"
	],
	[
		"Dread March",
		"Minions have 10% increased maximum Life\nMinions have 10% additional Physical Damage Reduction\nMinions have +10% to Chaos Resistance\nMinions have 10% increased Movement Speed"
	],
	[
		"Drive the Destruction",
		"0.8% of Attack Damage Leeched as Life\n25% increased Attack Damage when on Full Life\nAttacks have 10% chance to Maim on Hit"
	],
	[
		"Eldritch Inspiration",
		"20% increased Chaos Damage\n16% increased maximum Mana\n20% increased Mana Regeneration Rate"
	],
	[
		"Electric Presence",
		"Wrath has 50% increased Mana Reservation Efficiency\n20% increased Effect of Lightning Ailments"
	],
	[
		"Elegant Form",
		"+10% chance to Suppress Spell Damage\n20% chance to Avoid Elemental Ailments"
	],
	[
		"Empowered Envoy",
		"Herald Skills deal 40% increased Damage\n20% increased Effect of Herald Buffs on you"
	],
	[
		"Endbringer",
		"20% increased Damage while affected by a Herald\n5% increased Damage for each Herald affecting you"
	],
	[
		"Enduring Composure",
		"30% increased Armour\nGain 1 Endurance Charge every second if you've been Hit Recently"
	],
	[
		"Enduring Focus",
		"Channelling Skills deal 25% increased Damage\n25% chance to gain an Endurance Charge each second while Channelling"
	],
	[
		"Enduring Ward",
		"20% chance to gain an Endurance Charge when you Block\n+10% Chance to Block Attack Damage while at Maximum Endurance Charges"
	],
	[
		"Energy From Naught",
		"+70 to maximum Energy Shield\n15% increased Energy Shield Recharge Rate"
	],
	[
		"Essence Rush",
		"0.3% of Spell Damage Leeched as Energy Shield\n5% increased Attack and Cast Speed while Leeching Energy Shield\n40% increased Damage while Leeching Energy Shield"
	],
	[
		"Eternal Suffering",
		"25% increased Chaos Damage\n50% chance to inflict Withered for two seconds on Hit if there are 5 or fewer Withered Debuffs on Enemy"
	],
	[
		"Evil Eye",
		"Enemies you Curse take 6% increased Damage"
	],
	[
		"Expansive Might",
		"Mace, Sceptre or Staff Attacks deal 20% increased Damage with Hits and Ailments\n10% increased Area of Effect per second you've been stationary, up to a maximum of 50%"
	],
	[
		"Expendability",
		"10% chance to throw up to 1 additional Trap or Mine"
	],
	[
		"Expert Sabotage",
		"Mines have a 10% chance to be Detonated an Additional Time\nMines have 20% increased Detonation Speed"
	],
	[
		"Exploit Weakness",
		"Vulnerability can affect Hexproof Enemies\nRecover 2% of Life when you Kill a Cursed Enemy"
	],
	[
		"Explosive Force",
		"Gain 10% of Wand Physical Damage as Extra Chaos Damage\nEnemies Killed with Wand Hits have a 10% chance to Explode, dealing a quarter of their Life as Chaos Damage"
	],
	[
		"Exposure Therapy",
		"+5% to Damage over Time Multiplier\n+30% Chaos Resistance against Damage Over Time"
	],
	[
		"Eye of the Storm",
		"40% increased Critical Strike Chance\n+10% to Damage over Time Multiplier for Ignite from Critical Strikes\n20% increased Effect of non-Damaging Ailments you inflict with Critical Strikes"
	],
	[
		"Eye to Eye",
		"25% increased Projectile Damage\nProjectiles deal 35% increased Damage with Hits against nearby Enemies"
	],
	[
		"Fan of Blades",
		"Attack Skills fire an additional Projectile while wielding a Claw or Dagger\n20% increased Projectile Attack Damage with Claws or Daggers"
	],
	[
		"Fan the Flames",
		"Ignites you inflict spread to other Enemies within a Radius of 1.5 metres"
	],
	[
		"Fasting",
		"20% increased Flask Charges gained\n10% increased Movement Speed while under no Flask Effects"
	],
	[
		"Fearsome Warrior",
		"Attacks with Two Handed Melee Weapons deal 25% increased Damage with Hits and Ailments\n8% increased Area of Effect\n25% chance to Intimidate nearby Enemies for 4 seconds on Melee Kill"
	],
	[
		"Feast of Flesh",
		"8% increased maximum Life\n0.4% of Attack Damage Leeched as Life\nGain 10 Life per Enemy Hit with Attacks"
	],
	[
		"Feasting Fiends",
		"Minions have 10% increased maximum Life\nMinions deal 10% increased Damage\nMinions Leech 0.4% of Damage as Life"
	],
	[
		"Feed the Fury",
		"0.4% of Attack Damage Leeched as Life\n30% increased Damage while Leeching\n15% increased Attack Speed while Leeching"
	],
	[
		"Fettle",
		"10% increased maximum Life\n+20 to maximum Life"
	],
	[
		"Fire Attunement",
		"30% reduced Ignite Duration on you\nUnaffected by Burning Ground\nYou cannot be Ignited if you've been Ignited Recently"
	],
	[
		"Flexible Sentry",
		"+4% Chance to Block Attack Damage\n4% Chance to Block Spell Damage\n25% reduced Elemental Ailment Duration on you\n25% reduced Effect of Chill and Shock on you"
	],
	[
		"Flow of Life",
		"24% increased Damage over Time\n4% increased maximum Life\nRegenerate 0.6% of Life per second"
	],
	[
		"Follow-Through",
		"Projectiles deal 15% increased Damage with Hits and Ailments for each remaining Chain"
	],
	[
		"Force Multiplier",
		"25% increased Physical Damage\n5% chance to deal Double Damage"
	],
	[
		"Frantic Aspect",
		"Haste has 50% increased Mana Reservation Efficiency\nDebuffs on you expire 10% faster"
	],
	[
		"Fuel the Fight",
		"8% increased Attack Speed\n0.4% of Attack Damage Leeched as Mana\n20% increased Damage while Leeching"
	],
	[
		"Furious Assault",
		"25% increased Physical Damage\n8% increased Attack and Cast Speed"
	],
	[
		"Genius",
		"8% increased maximum Mana\n5% increased Intelligence"
	],
	[
		"Gladiator's Fortitude",
		"Attack Skills deal 25% increased Damage while holding a Shield\n5% increased maximum Life"
	],
	[
		"Graceful Execution",
		"+15 to Dexterity and Intelligence\n5% increased Attack Speed with Two Handed Melee Weapons\n15% increased Accuracy Rating with Two Handed Melee Weapons\n25% increased Critical Strike Chance with Two Handed Melee Weapons"
	],
	[
		"Grand Design",
		"20% increased Brand Damage\n10% increased Brand Attachment range\nBrand Skills have 10% increased Duration"
	],
	[
		"Grim Oath",
		"Gain 10% of Physical Damage as Extra Chaos Damage"
	],
	[
		"Guerilla Tactics",
		"20% increased Trap Damage\n20% increased Mine Damage\n10% increased Trap Throwing Speed\n10% increased Mine Throwing Speed\n5% increased Movement Speed if you've thrown a Trap or Mine Recently"
	],
	[
		"Haemorrhage",
		"30% increased Critical Strike Chance\n+10% to Damage over Time Multiplier for Ailments from Critical Strikes"
	],
	[
		"Haunting Shout",
		"Enemies Taunted by your Warcries are Intimidated"
	],
	[
		"Heart of Iron",
		"Gain 10% of Maximum Life as Extra Armour"
	],
	[
		"Heavy Hitter",
		"30% increased Attack Damage\n30% increased Damage with Ailments from Attack Skills\n10% reduced Enemy Stun Threshold\n20% chance to double Stun Duration"
	],
	[
		"Heraldry",
		"Nearby Enemies have Fire Exposure while you are affected by Herald of Ash\nNearby Enemies have Cold Exposure while you are affected by Herald of Ice\nNearby Enemies have Lightning Exposure while you are affected by Herald of Thunder"
	],
	[
		"Hex Breaker",
		"Remove a Curse after Channelling for 2 seconds\n8% increased Attack and Cast Speed while Channelling"
	],
	[
		"Hibernator",
		"30% reduced Freeze Duration on you\n30% reduced Effect of Chill on you\nUnaffected by Chilled Ground\nYou cannot be Frozen if you've been Frozen Recently"
	],
	[
		"Hit and Run",
		"Attack Skills deal 25% increased Damage while Dual Wielding\n+10% chance to Suppress Spell Damage if you've Hit an Enemy Recently"
	],
	[
		"Holistic Health",
		"8% increased maximum Life\n10% increased maximum Mana"
	],
	[
		"Holy Conquest",
		"25% increased Brand Damage\nBrands have 25% increased Area of Effect if 50% of Attached Duration expired"
	],
	[
		"Hound's Mark",
		"20% increased Effect of your Marks\n20% increased Damage with Hits and Ailments against Marked Enemy"
	],
	[
		"Hulking Corpses",
		"Minions have 25% increased maximum Life\nRaised Zombies have 5% chance to Taunt Enemies on Hit"
	],
	[
		"Improvisor",
		"6% increased Attack Speed\n10% increased maximum Mana\nGain 3 Mana per Enemy Hit with Attacks"
	],
	[
		"Insatiable Killer",
		"Attack Skills deal 20% increased Damage while Dual Wielding\n5% increased Attack Speed while Dual Wielding\n5% chance to gain a Frenzy Charge on Kill while Dual Wielding"
	],
	[
		"Inspired Oppression",
		"10% increased Effect of Non-Damaging Ailments\n20% increased Elemental Damage\n30% increased Mana Regeneration Rate if you have Frozen an Enemy Recently\n30% increased Mana Regeneration Rate if you have Shocked an Enemy Recently"
	],
	[
		"Insulated",
		"+20% to Lightning Resistance\n30% chance to Avoid being Shocked\n+1% to maximum Lightning Resistance"
	],
	[
		"Introspection",
		"Auras from your Skills have 10% increased Effect on you"
	],
	[
		"Invigorating Portents",
		"Minions deal 20% increased Damage while you are affected by a Herald\nMinions have 10% increased Movement Speed for each Herald affecting you"
	],
	[
		"Iron Breaker",
		"Hits have 50% chance to ignore Enemy Physical Damage Reduction\n30% increased Physical Damage"
	],
	[
		"Lasting Impression",
		"Herald Skills deal 50% increased Damage over Time\n30% increased Damage over Time while affected by a Herald"
	],
	[
		"Lead By Example",
		"+10 to Strength and Dexterity\nWhen you Warcry, you and nearby Allies gain Onslaught for 4 seconds"
	],
	[
		"Life from Death",
		"Minions have 15% increased maximum Life\nRegenerate 2% of Life per second if a Minion has Died Recently\nMinions Recover 4% of Life on Minion Death"
	],
	[
		"Liquid Inspiration",
		"15% increased maximum Mana\n20% increased Mana Recovery from Flasks\n25% chance to gain a Power Charge when you use a Mana Flask"
	],
	[
		"Lord of Drought",
		"Flammability can affect Hexproof Enemies\n30% increased Damage with Ignites inflicted on Cursed Enemies"
	],
	[
		"Low Tolerance",
		"Poisons you inflict on non-Poisoned Enemies deal 300% increased Damage"
	],
	[
		"Mage Bane",
		"Attack Skills deal 20% increased Damage while Dual Wielding\n20% chance to gain a Power Charge when you Block\n+6% Chance to Block Spell Damage while Dual Wielding"
	],
	[
		"Mage Hunter",
		"20% increased Spell Damage\n6% Chance to Block Spell Damage\n20% chance to gain a Power Charge when you Block"
	],
	[
		"Magnifier",
		"10% increased Area of Effect\n+10% to Critical Strike Multiplier"
	],
	[
		"Martial Mastery",
		"+20 to Strength\n10% increased Attack Speed with Two Handed Melee Weapons\n10% increased Attack Speed if you have at least 600 Strength"
	],
	[
		"Martial Momentum",
		"8% increased Attack Speed while Dual Wielding\n16% increased Accuracy Rating while Dual Wielding\n32% increased Damage if you've used a Travel Skill Recently"
	],
	[
		"Martial Prowess",
		"20% increased Attack Damage\n6% increased Attack Speed\n15% increased Global Accuracy Rating\n20% increased Damage with Ailments from Attack Skills"
	],
	[
		"Master of Command",
		"Banner Skills have 20% increased Area of Effect\nBanner Skills have 10% increased Aura Effect"
	],
	[
		"Master of Fire",
		"Nearby Enemies have Fire Exposure\n"
	],
	[
		"Master of the Maelstrom",
		"Elemental Weakness can affect Hexproof Enemies\n+1% to all maximum Elemental Resistances if you have Killed a Cursed Enemy Recently"
	],
	[
		"Master the Fundamentals",
		"35% increased Physical Damage\n35% reduced Elemental Damage\n+10% to all Elemental Resistances"
	],
	[
		"Mender's Wellspring",
		"25% increased Life Recovery from Flasks\nLife Flasks gain 1 Charge every 3 seconds\nRemove Bleeding when you use a Life Flask"
	],
	[
		"Militarism",
		"8% increased maximum Life\n30% increased Armour"
	],
	[
		"Mindfulness",
		"15% increased maximum Mana\n80% increased Mana Regeneration Rate while stationary"
	],
	[
		"Misery Everlasting",
		"Despair can affect Hexproof Enemies\nRecover 2% of Energy Shield when you Kill a Cursed Enemy"
	],
	[
		"Mob Mentality",
		"Exerted Attacks deal 25% increased Damage\nWarcries have 5% Chance to grant an Endurance, Frenzy or Power Charge per Power"
	],
	[
		"Molten One's Mark",
		"+2% to maximum Fire Resistance\nRegenerate 1% of Life per second"
	],
	[
		"Mortifying Aspect",
		"Malevolence has 50% increased Mana Reservation Efficiency\n+11% to Chaos Resistance"
	],
	[
		"Mystical Ward",
		"6% Chance to Block Spell Damage\nRegenerate 1.5% of Energy Shield per second\n0.3% of Spell Damage Leeched as Energy Shield"
	],
	[
		"Natural Vigour",
		"8% increased maximum Life\n30% increased Evasion Rating"
	],
	[
		"Non-Flammable",
		"+20% to Fire Resistance\n30% chance to Avoid being Ignited\n+1% to maximum Fire Resistance"
	],
	[
		"Numbing Elixir",
		"40% reduced Effect of Curses on you during Effect of any Mana Flask\n40% reduced Effect of Non-Damaging Ailments on you during Effect of any Life Flask"
	],
	[
		"One with the Shield",
		"Recover 50 Life when you Block\n50% increased Defences from Equipped Shield\n+6% Chance to Block Attack Damage while holding a Shield"
	],
	[
		"Openness",
		"+30 to maximum Mana\n20% increased maximum Mana"
	],
	[
		"Opportunistic Fusilade",
		"35% increased Damage with Wands if you've dealt a Critical Strike Recently\n50% increased Critical Strike Chance with Wands"
	],
	[
		"Overlord",
		"Melee Hits with Maces, Sceptres or Staves Fortify for 6 seconds\n30% increased Damage with Maces, Sceptres or Staves"
	],
	[
		"Overshock",
		"30% increased Lightning Damage\n40% increased Effect of Lightning Ailments"
	],
	[
		"Overwhelming Malice",
		"10% chance to gain Unholy Might for 4 seconds on Critical Strike"
	],
	[
		"Paralysis",
		"30% increased Lightning Damage\nLightning Skills have 10% reduced Enemy Stun Threshold\n10% chance to double Stun Duration"
	],
	[
		"Peace Amidst Chaos",
		"8% increased maximum Life\nRegenerate 2% of Life per second while stationary\n20% increased Armour while stationary"
	],
	[
		"Peak Vigour",
		"8% increased maximum Life\n20% increased Life Recovery from Flasks"
	],
	[
		"Phlebotomist",
		"20% increased Critical Strike Chance\n+6% to Physical Damage over Time Multiplier if you've dealt a Critical Strike Recently"
	],
	[
		"Powerful Assault",
		"20% increased Area Damage\nArea Skills have 10% chance to Knock Enemies Back on Hit"
	],
	[
		"Powerful Ward",
		"20% chance to gain a Power Charge when you Block\n+10% Chance to Block Spell Damage while at Maximum Power Charges"
	],
	[
		"Practiced Caster",
		"20% increased Spell Damage\n5% increased Cast Speed\n35% chance to Ignore Stuns while Casting"
	],
	[
		"Precise Focus",
		"30% increased Critical Strike Chance while Channelling\n+20% to Critical Strike Multiplier if you've been Channelling for at least 1 second"
	],
	[
		"Precise Retaliation",
		"+30% to Critical Strike Multiplier if you have Blocked Recently\n60% increased Critical Strike Chance if you haven't Blocked Recently"
	],
	[
		"Pressure Points",
		"30% increased Critical Strike Chance\nYour Critical Strikes have a 5% chance to deal Double Damage"
	],
	[
		"Primordial Bond",
		"10% increased Damage per Summoned Golem\n40% increased Effect of Buffs granted by your Golems\nGolems have 25% increased Maximum Life"
	],
	[
		"Prismatic Carapace",
		"+1% to all maximum Elemental Resistances\n30% increased Armour"
	],
	[
		"Prismatic Dance",
		"+1% to all maximum Elemental Resistances\n30% increased Evasion Rating"
	],
	[
		"Prismatic Heart",
		"30% increased Elemental Damage\n+10% to all Elemental Resistances"
	],
	[
		"Prodigious Defence",
		"+4% Chance to Block Attack Damage\n4% Chance to Block Spell Damage\n30% increased Attack Damage while holding a Shield"
	],
	[
		"Provocateur",
		"40% increased Critical Strike Chance against Taunted Enemies\n+10% to Critical Strike Multiplier against Taunted Enemies"
	],
	[
		"Pure Agony",
		"Minions deal 20% increased Damage while you are affected by a Herald\n+5 to Maximum Virulence"
	],
	[
		"Pure Aptitude",
		"+20 to Intelligence\nPurity of Lightning has 80% increased Mana Reservation Efficiency\n15% increased Energy Shield Recharge Rate"
	],
	[
		"Pure Guile",
		"+20 to Dexterity\nPurity of Ice has 80% increased Mana Reservation Efficiency\n5% chance to Blind Enemies on Hit"
	],
	[
		"Pure Might",
		"+20 to Strength\nPurity of Fire has 80% increased Mana Reservation Efficiency\n40% increased Stun and Block Recovery"
	],
	[
		"Purposeful Harbinger",
		"Auras from your Skills have 8% increased Effect on you for\neach Herald affecting you, up to 40%"
	],
	[
		"Quick and Deadly",
		"60% increased Main Hand Attack Damage while wielding two different Weapon Types\n30% increased Off Hand Attack Speed while wielding two different Weapon Types"
	],
	[
		"Quick Getaway",
		"5% increased Attack and Cast Speed\n25% increased Critical Strike Chance\n5% increased Movement Speed if you've dealt a Critical Strike Recently"
	],
	[
		"Rattling Bellow",
		"+20 to Strength\nExerted Attacks have 8% chance to deal Double Damage"
	],
	[
		"Raze and Pillage",
		"Minions gain 6% of Physical Damage as Extra Fire Damage\nMinions have 20% chance to Ignite\nMinions deal 20% increased Damage with Hits and Ailments against Ignited Enemies"
	],
	[
		"Readiness",
		"30% increased Evasion Rating if you haven't been Hit Recently\n30% chance to Avoid Bleeding\n30% chance to Avoid being Impaled"
	],
	[
		"Remarkable",
		"8% increased Cast Speed with Brand Skills\nSkills which create Brands have 35% chance to create an additional Brand"
	],
	[
		"Rend",
		"+5% to Physical Damage over Time Multiplier\n20% increased Bleeding Duration"
	],
	[
		"Renewal",
		"Minions have 5% chance to deal Double Damage while they are on Full Life\nMinions Regenerate 1% of Life per second"
	],
	[
		"Repeater",
		"30% increased Projectile Damage\n8% increased Attack and Cast Speed"
	],
	[
		"Replenishing Presence",
		"Non-Curse Aura Skills have 20% increased Duration\nYou and nearby Allies Regenerate 1.00% of Life per second"
	],
	[
		"Righteous Path",
		"Zealotry has 50% increased Mana Reservation Efficiency\n10% increased Effect of Consecrated Ground you create"
	],
	[
		"Riot Queller",
		"+6% Chance to Block Attack Damage\nEnemies Taunted by you take 6% increased Damage"
	],
	[
		"Rot-Resistant",
		"+13% to Chaos Resistance\nRegenerate 1.2% of Life per second\nRegenerate 0.6% of Energy Shield per second\nRegenerate 0.3% of Mana per second"
	],
	[
		"Rote Reinforcement",
		"+20 to maximum Life\n+6% Chance to Block Attack Damage\n20% chance to gain an Endurance Charge when you Block"
	],
	[
		"Rotten Claws",
		"Minions have a 12% chance to Impale on Hit with Attacks"
	],
	[
		"Run Through",
		"15% increased Physical Damage with Axes or Swords\n10% chance to Impale Enemies on Hit with Axes or Swords\n10% increased Impale Effect\nAxe or Sword Attacks deal 15% increased Damage with Ailments"
	],
	[
		"Sadist",
		"15% increased Elemental Damage if you've Chilled an Enemy Recently\n25% increased Elemental Damage if you've Shocked an Enemy Recently\n20% increased Elemental Damage if you've Ignited an Enemy Recently"
	],
	[
		"Sage",
		"+20% to Lightning Resistance\n20% increased Mana Regeneration Rate\nRegenerate 1.5% of Life per second"
	],
	[
		"Sap Psyche",
		"20% increased Spell Damage\n30% increased Mana Regeneration Rate\nRegenerate 1% of Energy Shield per second if you've Cursed an Enemy Recently"
	],
	[
		"Savage Response",
		"30% increased Critical Strike Chance\n+30% to Critical Strike Multiplier if you've taken a Savage Hit Recently"
	],
	[
		"Savour the Moment",
		"10% increased maximum Energy Shield\nRegenerate 3.00% of Energy Shield per second while stationary"
	],
	[
		"Scintillating Idea",
		"20% increased maximum Mana\nDamage Penetrates 5% Lightning Resistance"
	],
	[
		"Seal Mender",
		"Skills Supported by Unleash have 30% increased Seal gain frequency"
	],
	[
		"Second Skin",
		"+4% Chance to Block Attack Damage\n4% Chance to Block Spell Damage\n30% increased Armour"
	],
	[
		"Seeker Runes",
		"25% increased Brand Damage\nUnattached Brands gain 20% increased Brand Attachment Range per second, up to 100%"
	],
	[
		"Self-Control",
		"Discipline has 80% increased Mana Reservation Efficiency\n25% increased Mana Regeneration Rate"
	],
	[
		"Self-Fulfilling Prophecy",
		"+15% to Critical Strike Multiplier if you dealt a Critical Strike with a Herald Skill Recently\n+1% to Critical Strike Chance of Herald Skills"
	],
	[
		"Septic Spells",
		"20% chance to Poison on Hit with Spell Damage\nSpell Skills have +5% to Damage over Time Multiplier for Poison\n5% increased Cast Speed"
	],
	[
		"Set and Forget",
		"25% increased Trap Damage\n40% increased Trap Trigger Area of Effect\nSkills used by Traps have 15% increased Area of Effect"
	],
	[
		"Shifting Shadow",
		"+20 to Dexterity\n10% chance to Blind Enemies on Hit\n20% increased Evasion Rating"
	],
	[
		"Shrieking Bolts",
		"35% increased Projectile Damage\n10% chance to Taunt Enemies on Projectile Hit"
	],
	[
		"Skeletal Atrophy",
		"Summoned Skeletons have 30% of Physical Damage Converted to Chaos Damage\nSummoned Skeletons have 10% chance to Wither Enemies for 2 seconds on Hit"
	],
	[
		"Skullbreaker",
		"+15% to Critical Strike Multiplier\n8% reduced Enemy Stun Threshold"
	],
	[
		"Sleepless Sentries",
		"20% increased Totem Duration\nYou have Onslaught if you've Summoned a Totem Recently"
	],
	[
		"Smite the Weak",
		"Attacks have 10% chance to Maim on Hit\n40% increased Attack Damage against Maimed Enemies"
	],
	[
		"Smoking Remains",
		"35% increased Fire Damage\n10% chance to create a Smoke Cloud on Kill"
	],
	[
		"Snaring Spirits",
		"30% increased Totem Damage\nTotems Hinder Enemies near them when Summoned"
	],
	[
		"Snowstorm",
		"Gain 8% of Lightning Damage as Extra Cold Damage against Chilled Enemies"
	],
	[
		"Special Reserve",
		"Regenerate 2% of Life per second during any Flask Effect\n20% increased Damage during any Flask Effect"
	],
	[
		"Spiked Concoction",
		"Gain Alchemist's Genius when you use a Flask\n5% increased Attack and Cast Speed during any Flask Effect"
	],
	[
		"Spiteful Presence",
		"Hatred has 50% increased Mana Reservation Efficiency\n20% increased Effect of Cold Ailments"
	],
	[
		"Spring Back",
		"10% increased maximum Energy Shield\n5% faster start of Energy Shield Recharge"
	],
	[
		"Steady Torment",
		"+6% to Damage over Time Multiplier for Bleeding you inflict on Poisoned Enemies\n+6% to Damage over Time Multiplier for Poison you inflict on Bleeding Enemies\n15% increased Bleeding Duration\n15% increased Poison Duration"
	],
	[
		"Stoic Focus",
		"Channelling Skills deal 25% increased Damage\n+5% Chance to Block Attack Damage while Channelling\n+5% Chance to Block Spell Damage while Channelling"
	],
	[
		"Storm Drinker",
		"Damage Penetrates 8% Lightning Resistance\n0.5% of Lightning Damage Leeched as Energy Shield"
	],
	[
		"Storm's Hand",
		"Gain 10% of Wand Physical Damage as Extra Lightning Damage\n25% of Wand Physical Damage converted to Lightning Damage"
	],
	[
		"Stormrider",
		"10% chance to gain a Power Charge when you Shock a Chilled Enemy\n25% increased Cold Damage with Hits against Shocked Enemies\n25% increased Lightning Damage with Hits against Chilled Enemies"
	],
	[
		"Streamlined",
		"20% increased Projectile Damage\n20% increased Projectile Speed"
	],
	[
		"Strike Leader",
		"+4% Chance to Block Attack Damage\nAttack Skills deal 30% increased Damage while holding a Shield\n+0.2 metres to Melee Strike Range while Holding a Shield"
	],
	[
		"Stubborn Student",
		"15% increased maximum Mana\n20% increased Armour\n+1 Armour per 10 Unreserved Maximum Mana"
	],
	[
		"Student of Decay",
		"+13% to Chaos Resistance\n25% increased Damage over Time"
	],
	[
		"Sublime Form",
		"Grace has 50% increased Mana Reservation Efficiency\n+10% to all Elemental Resistances"
	],
	[
		"Sublime Sensation",
		"8% increased maximum Life\n10% increased maximum Energy Shield"
	],
	[
		"Surefooted Striker",
		"5% chance to deal Double Damage if you've dealt a Critical Strike with a Two Handed Melee Weapon Recently\n40% increased Critical Strike Chance with Two Handed Melee Weapons"
	],
	[
		"Surging Vitality",
		"8% increased maximum Life\nEvery 4 seconds, Regenerate 10% of Life over one second"
	],
	[
		"Surprise Sabotage",
		"+8% to Critical Strike Multiplier with Traps\n+8% to Critical Strike Multiplier with Mines\nTrap Damage Penetrates 4% Elemental Resistances\nMine Damage Penetrates 4% Elemental Resistances"
	],
	[
		"Tempered Arrowheads",
		"Bow Skills have +6% to Damage over Time Multiplier\nBow Skills have 10% increased Skill Effect Duration\n10% increased Duration of Ailments inflicted while wielding a Bow"
	],
	[
		"Tempt the Storm",
		"Conductivity can affect Hexproof Enemies\n30% increased Effect of Shocks you inflict on Cursed Enemies"
	],
	[
		"Thaumophage",
		"0.6% of Spell Damage Leeched as Energy Shield\n25% increased Spell Damage while on Full Energy Shield\n10% chance to Hinder Enemies on Hit with Spells"
	],
	[
		"Thunderstruck",
		"20% increased Lightning Damage\n30% increased Critical Strike Chance\nYour Critical Strikes Knock Back Shocked Enemies"
	],
	[
		"Titanic Swings",
		"15% increased Area of Effect while wielding a Two Handed Melee Weapon\n20% increased Area Damage while wielding a Two Handed Melee Weapon"
	],
	[
		"Touch of Cruelty",
		"Chaos Spells have 10% chance to Hinder Enemies on Hit\nEnemies Hindered by you take 10% increased Chaos Damage"
	],
	[
		"Towering Threat",
		"10% increased Area of Effect\n8% increased maximum Life"
	],
	[
		"Uncompromising",
		"Determination has 50% increased Mana Reservation Efficiency\n20% increased Stun Threshold"
	],
	[
		"Unholy Grace",
		"30% increased Chaos Damage\n10% increased Attack and Cast Speed"
	],
	[
		"Unrestrained Focus",
		"Unaffected by Chill while Channelling\nChannelling Skills have 8% increased Attack and Cast Speed"
	],
	[
		"Unspeakable Gifts",
		"Enemies you Kill have a 10% chance to Explode, dealing a quarter of their maximum Life as Chaos Damage"
	],
	[
		"Untouchable",
		"+10% chance to Suppress Spell Damage\n30% increased Evasion Rating"
	],
	[
		"Unwavering Focus",
		"Channelling Skills deal 30% increased Damage\n50% chance to Avoid being Stunned while Channelling"
	],
	[
		"Unwaveringly Evil",
		"30% increased Chaos Damage\nChaos Skills ignore interruption from Stuns"
	],
	[
		"Vast Power",
		"3% increased Area of Effect per Power Charge, up to a maximum of 50%\n20% increased Area Damage"
	],
	[
		"Veteran Defender",
		"+15 to all Attributes\n60% increased Defences from Equipped Shield\n+15% Elemental Resistances while holding a Shield"
	],
	[
		"Vicious Bite",
		"Minions have +15% to Critical Strike Multiplier\nMinions have 30% increased Critical Strike Chance"
	],
	[
		"Vicious Guard",
		"+6% Chance to Block Attack Damage\nRegenerate 1.5% of Life per second\n0.4% of Attack Damage Leeched as Life"
	],
	[
		"Vicious Skewering",
		"15% increased Effect of Impales inflicted by Hits that also inflict Bleeding\n10% chance to Impale Enemies on Hit with Attacks\nAttacks have 10% chance to cause Bleeding"
	],
	[
		"Victim Maker",
		"Curse Skills have 8% increased Cast Speed\nEnemies Cursed by you have Malediction if 33% of Curse Duration expired"
	],
	[
		"Vile Reinvigoration",
		"24% increased Damage over Time\n6% increased maximum Energy Shield\nRegenerate 2% of Energy Shield per second if you've Killed an Enemy Recently"
	],
	[
		"Vital Focus",
		"Regenerate 1.5% of Life per second while Channelling\nChannelling Skills deal 30% increased Damage"
	],
	[
		"Vivid Hues",
		"20% increased Damage with Bleeding\n2% of Attack Damage Leeched as Life against Bleeding Enemies\n20% increased total Recovery per second from Life Leech"
	],
	[
		"Volatile Presence",
		"Anger has 50% increased Mana Reservation Efficiency\n20% increased Duration of Fire Ailments"
	],
	[
		"Wall of Muscle",
		"6% increased maximum Life\n5% increased Strength"
	],
	[
		"Warning Call",
		"Gain 25% increased Armour per 5 Power for 8 seconds when you Warcry, up to a maximum of 100%"
	],
	[
		"Wasting Affliction",
		"20% increased Damage with Ailments\nDamaging Ailments deal damage 5% faster"
	],
	[
		"Weight Advantage",
		"+20 to Strength\nMace, Sceptre or Staff Attacks deal 30% increased Damage with Hits and Ailments\n4% chance to deal Double Damage while wielding a Mace, Sceptre or Staff"
	],
	[
		"Wicked Pall",
		"30% increased Chaos Damage\n5% increased Skill Effect Duration"
	],
	[
		"Widespread Destruction",
		"20% increased Elemental Damage\n6% increased Area of Effect"
	],
	[
		"Will Shaper",
		"Gain 5% of Maximum Mana as Extra Maximum Energy Shield"
	],
	[
		"Wind-up",
		"10% chance to gain a Power Charge on Non-Critical Strike with a Claw or Dagger\n+15% to Critical Strike Multiplier with Claws or Daggers"
	],
	[
		"Winter Prowler",
		"+2% to maximum Cold Resistance\n10% increased Life Recovery from Flasks"
	],
	[
		"Wizardry",
		"+2% to maximum Lightning Resistance\n8% increased maximum Mana"
	],
	[
		"Wound Aggravation",
		"20% increased Physical Damage with Axes or Swords\nAxe or Sword Attacks deal 20% increased Damage with Ailments\n+5% to Physical Damage over Time Multiplier while wielding an Axe or Sword"
	],
	[
		"Wrapped in Flame",
		"20% increased Fire Damage\n5% chance to Cover Enemies in Ash on Hit while you are Burning\nCannot be Chilled while Burning"
	]
])

export const mods : Mod[] = tradeMods.map((def) : Mod => {
	const name = def.text.replace('1 Added Passive Skill is ', '')
	let key = def.key || ''
	if (!key) {
		const words = name.toLowerCase().split(' ')
		if (words.length === 1) {
			key = words[0].slice(0, 3)
		}
		else if (words.length === 2) {
			key = words[0].slice(0,2) + words[1].slice(0,1)
		}
		else {
			key = words.map(x => x.slice(0,1).toLowerCase()).join('')
		}
	}
	return {
		key: key,
		searchStat: def.id.replace('explicit.stat_', ''),
		name,
		description: descriptions.get(name) || '',
		type: def.type,
	}
}).filter((mod: Mod) => {
	if (!mod.description) {
		console.log(mod.name, 'has no description')
		return false
	}

	return true
}).sort((a: Mod, b: Mod) => {
	return a.name < b.name ? -1 : 1
})


let dupes = 0
const set = new Map()
mods.forEach((mod: Mod) => {
	if (set.has(mod.key)) {
		const existing = set.get(mod.key)
		console.log(`%c${mod.key}%c${existing}%c${mod.name}`, 'margin-right: 5px; color: red', 'margin-right: 5px; color: green', 'margin-right: 5px; color: pink')
		dupes++
	}
	set.set(mod.key, mod.name)
})
console.log('Found a dupe', dupes, 'times')

if (dupes === 0) {
	const final = {}
	mods.forEach((mod: Mod) => {
		final[mod.key] = mod
	})
	console.log('Here you go!')
	console.log(final)
}
else {
	console.log('got dupes')
}

*/
