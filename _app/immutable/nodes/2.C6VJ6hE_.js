import{s as Wa,n as Oe,x as ee,c as Ka,o as Ya}from"../chunks/scheduler.CkfNxMIO.js";import{S as Ia,i as Ga,e as y,s as I,c as k,a as E,y as Be,f as G,d as m,k as l,g as p,h as g,z as Va,A as va,t as H,b as P,j as je,B as wa,C as Da,D as Qa,E as Xa,l as Ze,o as Za,m as ga,H as Ja,u as $a,F as en,v as an,w as nn,x as tn,q as rn,n as Pe}from"../chunks/index.Cg1qE1rz.js";import{b as He,a as sn,c as cn,g as on}from"../chunks/entry.BF4AInjL.js";import{p as ln}from"../chunks/stores.DRXCOJZd.js";const dn=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ea(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}const mn=!1,zn=Object.freeze(Object.defineProperty({__proto__:null,ssr:mn},Symbol.toStringTag,{value:"Module"})),za=[-1,1,2,3,5,8,13],hn=13,Ea="shield-dmg",ae="max-life",Ce="area-dmg",na="bow-dmg",se="channel-dmg",We="chaos-res",Ue="cold-res",Ke="dodge-atk",Ie="fire-res",ce="heralds",$="inc-attack-dmg",pe="inc-crit-chance",ne="inc-non-dmg-ailments",Ae="inc-phys-dmg",Me="projectile-dmg",oe="spell-dmg",le="totem",ye="traps-and-mines",Re="two-handed-melee-dmg",ia="inc-cold-dmg",_e="inc-minion-life",Q="curse-effect",ke="phys-dot",ta="axe-and-sword-dmg",Ge="fire-dot",xe="brand-dmg",Se="dot",ve="inc-minion-dmg",Ve="lightning-res",ie="max-mana",we="dual-wield-dmg",Le="es",Te="inc-ele-dmg",ra="inc-fire-dmg",De="inc-warcry",Ee="inc-chaos-dmg",X="aura-effect",sa="minion-dmg-heralds",ca="dagger-and-claw",Ye="life-mana-flask",be="armour",te="block-atk",Qe="block-spell",ba="flask-duration",Xe="chaos-dot",oa="wand-dmg",la="mace-and-staff-dmg",da="inc-lightning-dmg",ze="evasion",Oa={adr:{key:"adr",searchStat:"4022743870",name:"Adrenaline",description:`8% increased maximum Life
6% increased Attack Speed while Leeching`,image:ae},adg:{key:"adg",searchStat:"1625939562",image:Ea,name:"Advance Guard",description:`Attack Skills deal 30% increased Damage while holding a Shield
5% increased Movement Speed while holding a Shield
Ignore all Movement Penalties from Armour`},aer:{key:"aer",searchStat:"3848677307",name:"Aerialist",image:Ke,description:`+10% chance to Suppress Spell Damage
5% increased Dexterity`},ard:{key:"ard",searchStat:"4120556534",name:"Aerodynamics",image:Me,description:`10% increased Projectile Damage
10% increased Projectile Speed
Projectiles Pierce an additional Target`},aod:{key:"aod",searchStat:"3122491961",image:ce,name:"Agent of Destruction",description:`25% increased Elemental Damage while affected by a Herald
10% chance to Freeze, Shock and Ignite while affected by a Herald`},agd:{key:"agd",searchStat:"4154008618",name:"Aggressive Defence",image:$,description:`Fortifying Hits grant 60% increased Fortification
30% increased Fortification Duration
20% increased Damage with Attack Skills while Fortified`},alc:{key:"alc",searchStat:"2912949210",name:"Alchemist",image:Ue,description:`+20% to Cold Resistance
8% increased Attack and Cast Speed
20% increased Life Recovery from Flasks`},ane:{key:"ane",searchStat:"957679205",name:"Ancestral Echo",image:le,description:`20% increased Totem Placement speed
10% increased Attack and Cast Speed if you've summoned a Totem Recently`},ang:{key:"ang",searchStat:"2387747995",name:"Ancestral Guidance",image:le,description:`Totems' Action Speed cannot be modified to below Base Value
Totems Regenerate 2% of Life per second`},ani:{key:"ani",searchStat:"77045106",name:"Ancestral Inspiration",image:le,description:`Gain Arcane Surge when you Summon a Totem
Spells cast by Totems deal 25% increased Damage`},anm:{key:"anm",searchStat:"3998316",name:"Ancestral Might",image:le,description:`15% increased Totem Life
30% increased Totem Duration
30% increased Totem Damage if you haven't Summoned a Totem in the past 2 seconds`},anp:{key:"anp",searchStat:"3746703776",name:"Ancestral Preservation",image:le,description:`Totems have 15% additional Physical Damage Reduction
Totems gain +25% to Chaos Resistance
Totems gain +20% to all Elemental Resistances`},anr:{key:"anr",searchStat:"3294884567",name:"Ancestral Reach",image:le,description:`25% increased Totem Damage
25% increased Totem Placement speed
25% increased Totem Placement range`},ant:{key:"ant",searchStat:"2622946553",name:"Antifreeze",image:Ue,description:`+20% to Cold Resistance
30% chance to Avoid being Frozen
+1% to maximum Cold Resistance`},anv:{key:"anv",searchStat:"774369953",name:"Antivenom",image:We,description:`+23% to Chaos Resistance
30% chance to Avoid being Poisoned
+1% to maximum Chaos Resistance`},ara:{key:"ara",searchStat:"393565679",name:"Arcane Adept",image:se,description:`Channelling Skills deal 20% increased Damage
5% increased Attack and Cast Speed while Channelling
Gain Arcane Surge after Channelling for 1 second`},arh:{key:"arh",searchStat:"3901992019",name:"Arcane Heroism",image:oe,description:`10% chance to gain Arcane Surge when you Hit a Unique enemy
30% increased Effect of Arcane Surge on you`},arp:{key:"arp",searchStat:"2043503530",image:ye,name:"Arcane Pyrotechnics",description:`20% increased Trap Damage
20% increased Mine Damage
Gain Arcane Surge when your Trap is Triggered by an Enemy
Gain Arcane Surge when your Mine is Detonated targeting an Enemy`},ars:{key:"ars",searchStat:"3212859169",name:"Arcing Shot",image:na,description:`Arrows gain Damage as they travel farther, dealing up to 50% increased Damage with Hits to targets
Arrows gain Critical Strike Chance as they travel farther, up to 100% increased Critical Strike Chance`},asd:{key:"asd",searchStat:"4222265138",name:"Assert Dominance",image:Ce,description:"25% increased Area of Effect if you've Killed at least 5 Enemies Recently"},asa:{key:"asa",searchStat:"2428334013",name:"Astonishing Affliction",image:ne,description:`20% increased Effect of Non-Damaging Ailments
20% increased Damage with Hits and Ailments against Enemies affected by Ailments
20% increased Duration of Elemental Ailments on Enemies`},bop:{key:"bop",searchStat:"3084359503",name:"Basics of Pain",image:pe,description:`20% increased Damage
30% increased Critical Strike Chance`},bat:{key:"bat",searchStat:"4188581520",name:"Battle-Hardened",image:Ae,description:`35% increased Physical Damage
30% increased Evasion Rating and Armour`},bad:{key:"bad",searchStat:"1499057234",name:"Battlefield Dominator",image:Re,description:`15% increased Area of Effect if you've Stunned an Enemy with a Two Handed Melee Weapon Recently
Attacks with Two Handed Weapons deal 25% increased Damage with Hits and Ailments
10% reduced Enemy Stun Threshold`},bsm:{key:"bsm",searchStat:"1127706436",name:"Blacksmith",image:Ie,description:`+20% to Fire Resistance
25% increased Armour
0.4% of Fire Damage Leeched as Life`},bls:{key:"bls",searchStat:"1085167979",name:"Blanketed Snow",image:ia,description:"Damage Penetrates 10% Cold Resistance against Chilled Enemies"},bfr:{key:"bfr",searchStat:"693808153",name:"Blast-Freeze",image:ne,description:`20% increased Cold Damage
Freezes you inflict spread to other Enemies within 1.2 metres`},ble:{key:"ble",searchStat:"775689239",name:"Blessed",image:We,description:`+13% to Chaos Resistance
6% increased maximum Life
10% increased maximum Mana`},blr:{key:"blr",searchStat:"1424794574",name:"Blessed Rebirth",image:_e,description:`Minions have 20% increased maximum Life
Minions created Recently cannot be Damaged`},blc:{key:"blc",searchStat:"3758712376",name:"Blizzard Caller",image:Q,description:`Frostbite can affect Hexproof Enemies
30% increased Duration of Freezes you inflict on Cursed Enemies`},bla:{key:"bla",searchStat:"2284771334",name:"Blood Artist",image:ke,description:`+20 to Strength
+6% to Physical Damage over Time Multiplier if you've Spent Life Recently`},bsc:{key:"bsc",searchStat:"3967765261",name:"Bloodscent",image:ta,description:"Gain 2 Rage on Hit with Axes or Swords"},blo:{key:"blo",searchStat:"1612414696",name:"Blowback",image:Ge,description:`Ignites you inflict deal Damage 8% faster
10% chance to Ignite`},bod:{key:"bod",searchStat:"791125124",name:"Bodyguards",image:_e,description:`Minions have 10% increased maximum Life
Minions have 10% chance to Knock Enemies Back on Hit with Attacks`},boc:{key:"boc",searchStat:"2449392400",name:"Born of Chaos",image:We,description:"+3% to maximum Chaos Resistance"},brl:{key:"brl",searchStat:"3198006994",name:"Brand Loyalty",image:xe,description:"Enemies take 3% increased Damage for each of your Brands Attached to them"},bfp:{key:"bfp",searchStat:"3250272113",name:"Brewed for Potency",image:Se,description:`24% increased Damage over Time
20% increased Life and Mana Recovery from Flasks
10% increased Flask Charges gained`},bro:{key:"bro",searchStat:"2205982416",name:"Broadside",image:na,description:"Bow Skills have 25% increased Area of Effect"},bwd:{key:"bwd",searchStat:"2900833792",name:"Brush with Death",image:Se,description:`+5% to Damage over Time Multiplier
Recover 1% of Life on Kill
Recover 1% of Energy Shield on Kill`},bri:{key:"bri",searchStat:"2068574831",name:"Brutal Infamy",image:Re,description:`Attacks with Two Handed Melee Weapons deal 20% increased Damage with Hits and Ailments
40% increased Damage with Hits and Ailments against Unique Enemies`},bup:{key:"bup",searchStat:"2008682345",name:"Burden Projection",image:oe,description:`30% increased Spell Damage
8% chance to Knock Enemies Back on Hit with Spell Damage`},bub:{key:"bub",searchStat:"4199056048",name:"Burning Bright",image:Ge,description:`25% increased Burning Damage
8% increased Area of Effect`},cal:{key:"cal",searchStat:"3359207393",name:"Calamitous",image:$,description:`30% increased Elemental Damage with Attack Skills
10% chance to Freeze, Shock and Ignite
15% increased Effect of Non-Damaging Ailments`},ctts:{key:"ctts",searchStat:"3317068522",name:"Call to the Slaughter",image:ve,description:`Minions deal 15% increased Damage
Minions created Recently have 30% increased Movement Speed
Minions created Recently have 10% increased Attack and Cast Speed`},cap:{key:"cap",searchStat:"4025536654",name:"Capacitor",image:Ve,description:`30% reduced Effect of Shock on you
Unaffected by Shocked Ground
You cannot be Shocked if you've been Shocked Recently`},cah:{key:"cah",searchStat:"456502758",name:"Careful Handling",image:ye,description:`15% increased Trap Damage
15% increased Mine Damage
4% increased maximum Life
6% increased maximum Mana`},chp:{key:"chp",searchStat:"2834490860",name:"Chilling Presence",image:ne,description:`Nearby Enemies are Chilled
`},cha:{key:"cha",searchStat:"968069586",name:"Chip Away",image:xe,description:`Brand Recall has 4% increased Cooldown Recovery Rate per Brand, up to a maximum of 40%
Brand Recall grants 20% increased Brand Attachment range to recalled Brands`},cio:{key:"cio",searchStat:"2129392647",image:Se,name:"Circling Oblivion",description:`25% increased Damage over Time
15% increased Duration of Ailments on Enemies`},cop:{key:"cop",searchStat:"684087686",name:"Clarity of Purpose",image:ie,description:`15% increased maximum Mana
30% increased Mana Regeneration Rate`},coc:{key:"coc",searchStat:"1274505521",name:"Cold Conduction",image:ne,description:`25% increased Effect of Lightning Ailments you inflict on Chilled Enemies
25% increased Effect of Cold Ailments you inflict on Shocked Enemies`},cttc:{key:"cttc",searchStat:"744783843",name:"Cold to the Core",image:ia,description:`1% increased Cold Damage per 25 Strength
1% increased Cold Damage per 25 Dexterity
1% increased Cold Damage per 25 Intelligence`},cok:{key:"cok",searchStat:"836566759",name:"Cold-Blooded Killer",image:ia,description:`+5% to Cold Damage over Time Multiplier
Recover 2% of Life on Killing a Chilled Enemy`},cor:{key:"cor",searchStat:"3122505794",name:"Combat Rhythm",image:we,description:`10% increased Attack Speed if you've Hit with your Main Hand Weapon Recently
10% increased Movement Speed if you've Hit with your Off Hand Weapon Recently`},coi:{key:"coi",searchStat:"4018305528",name:"Compound Injury",image:ke,description:"35% increased Damage with Bleeding you inflict on Maimed Enemies"},cow:{key:"cow",searchStat:"4105031548",name:"Conjured Wall",image:oe,description:`25% increased Spell Damage
+8% Chance to Block Spell Damage if you've Cast a Spell Recently`},coe:{key:"coe",searchStat:"2083777017",name:"Conservation of Energy",image:Le,description:`10% increased maximum Energy Shield
0.3% of Spell Damage Leeched as Energy Shield`},coa:{key:"coa",searchStat:"2938895712",name:"Cooked Alive",image:Ge,description:`15% chance to Ignite
Enemies Ignited by you have -5% to Fire Resistance`},cre:{key:"cre",searchStat:"1777139212",name:"Corrosive Elements",image:Te,description:`Fire Skills have a 25% chance to apply Fire Exposure on Hit
Cold Skills have a 25% chance to apply Cold Exposure on Hit
Lightning Skills have a 25% chance to apply Lightning Exposure on Hit
15% increased Elemental Damage`},crm:{key:"crm",searchStat:"1153801980",name:"Cremator",image:ra,description:`30% increased Fire Damage
Ignited Enemies Killed by your Hits are destroyed`},crw:{key:"crw",searchStat:"1821748178",name:"Cry Wolf",image:De,description:`Exerted Attacks deal 30% increased Damage
20% increased total Power counted by Warcries`},cul:{key:"cul",searchStat:"2026112251",name:"Cult-Leader",image:ce,description:"Minions deal 35% increased Damage while you are affected by a Herald"},dri:{key:"dri",searchStat:"2534405517",name:"Daring Ideas",image:ie,description:`18% increased maximum Mana
0.4% of Attack Damage Leeched as Mana`},dai:{key:"dai",searchStat:"1603621602",name:"Dark Ideation",image:Ee,description:"2% increased Chaos Damage per 100 maximum Mana, up to a maximum of 80%"},dkm:{key:"dkm",searchStat:"3784610129",name:"Dark Messenger",image:ce,description:`Herald Skills deal 20% increased Damage
Herald Skills have 25% increased Area of Effect`},dam:{key:"dam",searchStat:"846491278",name:"Darting Movements",image:Ke,description:`+12% chance to Suppress Spell Damage while moving
3% increased Movement Speed`},der:{key:"der",searchStat:"1013470938",name:"Deadly Repartee",image:we,description:`Attack Skills deal 25% increased Damage while Dual Wielding
+6% Chance to Block Attack Damage while Dual Wielding
30% increased Attack Critical Strike Chance while Dual Wielding`},dec:{key:"dec",searchStat:"1703766309",name:"Deep Chill",image:ne,description:`+5% to Cold Damage over Time Multiplier
30% increased Effect of Cold Ailments`},dea:{key:"dea",searchStat:"3860179422",name:"Destructive Aspect",image:X,description:`Pride has 50% increased Mana Reservation Efficiency
12% increased Area of Effect of Aura Skills`},dev:{key:"dev",searchStat:"3711553948",name:"Devastator",image:$,description:`20% increased Attack Damage
20% increased Damage with Ailments from Attack Skills
Enemies Killed with Attack Hits have a 15% chance to Explode, dealing a tenth of their Life as Physical Damage`},dis:{key:"dis",searchStat:"3177526694",name:"Disciples",image:sa,description:`Minions deal 20% increased Damage while you are affected by a Herald
Summoned Sentinels have 25% increased Cooldown Recovery Rate`},div:{key:"div",searchStat:"183591019",name:"Disease Vector",image:ca,description:`+6% to Damage over Time Multiplier for Poison while wielding a Claw or Dagger
Enemies Poisoned by you cannot Regenerate Life`},did:{key:"did",searchStat:"3206911230",name:"Disorienting Display",image:Te,description:`25% increased Elemental Damage
10% chance to Blind nearby Enemies when you use an Elemental Skill`},diw:{key:"diw",searchStat:"3351136461",name:"Disorienting Wounds",image:ke,description:`25% increased Damage with Bleeding
25% chance to Blind with Hits against Bleeding Enemies`},dip:{key:"dip",searchStat:"3652138990",name:"Distilled Perfection",image:Ye,description:`25% increased Life Recovery from Flasks
25% increased Mana Recovery from Flasks
10% increased Flask Effect Duration`},doa:{key:"doa",searchStat:"1381945089",name:"Doedre's Apathy",image:Q,description:`Temporal Chains can affect Hexproof Enemies
Enemies you Curse are Unnerved`},dog:{key:"dog",searchStat:"2695848124",name:"Doedre's Gluttony",image:Q,description:`Punishment can affect Hexproof Enemies
You have Culling Strike against Cursed Enemies`},dos:{key:"dos",searchStat:"462115791",name:"Doedre's Spite",image:Q,description:`Enfeeble can affect Hexproof Enemies
35% increased Critical Strike Chance against Cursed Enemies`},dol:{key:"dol",searchStat:"228455793",name:"Doryani's Lesson",image:Te,description:`25% increased Elemental Damage
0.2% of Elemental Damage Leeched as Life`},drh:{key:"drh",searchStat:"1038955006",name:"Dragon Hunter",image:be,description:`+20% to Fire Resistance
30% increased Armour
15% chance to Defend with 200% of Armour`},drm:{key:"drm",searchStat:"3087667389",name:"Dread March",image:_e,description:`Minions have 10% increased maximum Life
Minions have 10% additional Physical Damage Reduction
Minions have +10% to Chaos Resistance
Minions have 10% increased Movement Speed`},dtd:{key:"dtd",searchStat:"1911162866",name:"Drive the Destruction",image:$,description:`0.8% of Attack Damage Leeched as Life
25% increased Attack Damage when on Full Life
Attacks have 10% chance to Maim on Hit`},eli:{key:"eli",searchStat:"3737604164",name:"Eldritch Inspiration",image:Ee,description:`20% increased Chaos Damage
16% increased maximum Mana
20% increased Mana Regeneration Rate`},elp:{key:"elp",searchStat:"3950683692",name:"Electric Presence",image:X,description:`Wrath has 50% increased Mana Reservation Efficiency
20% increased Effect of Lightning Ailments`},elf:{key:"elf",searchStat:"289714529",name:"Elegant Form",image:Ke,description:`+10% chance to Suppress Spell Damage
20% chance to Avoid Elemental Ailments`},eme:{key:"eme",searchStat:"2032453153",name:"Empowered Envoy",image:ce,description:`Herald Skills deal 40% increased Damage
20% increased Effect of Herald Buffs on you`},end:{key:"end",searchStat:"2150878631",name:"Endbringer",image:ce,description:`20% increased Damage while affected by a Herald
5% increased Damage for each Herald affecting you`},enc:{key:"enc",searchStat:"2043284086",name:"Enduring Composure",image:be,description:`30% increased Armour
Gain 1 Endurance Charge every second if you've been Hit Recently`},enf:{key:"enf",searchStat:"2522970386",name:"Enduring Focus",image:se,description:`Channelling Skills deal 25% increased Damage
25% chance to gain an Endurance Charge each second while Channelling`},enw:{key:"enw",searchStat:"252724319",name:"Enduring Ward",image:te,description:`20% chance to gain an Endurance Charge when you Block
+10% Chance to Block Attack Damage while at Maximum Endurance Charges`},efn:{key:"efn",searchStat:"2195518432",name:"Energy From Naught",image:Le,description:`+70 to maximum Energy Shield
15% increased Energy Shield Recharge Rate`},esr:{key:"esr",searchStat:"1096136223",name:"Essence Rush",image:oe,description:`0.3% of Spell Damage Leeched as Energy Shield
5% increased Attack and Cast Speed while Leeching Energy Shield
40% increased Damage while Leeching Energy Shield`},ets:{key:"ets",searchStat:"2144634814",name:"Eternal Suffering",image:Ee,description:`25% increased Chaos Damage
50% chance to inflict Withered for two seconds on Hit if there are 5 or fewer Withered Debuffs on Enemy`},eve:{key:"eve",searchStat:"4291066912",name:"Evil Eye",image:Q,description:"Enemies you Curse take 6% increased Damage"},exm:{key:"exm",searchStat:"394918362",name:"Expansive Might",image:la,description:`Mace, Sceptre or Staff Attacks deal 20% increased Damage with Hits and Ailments
10% increased Area of Effect per second you've been stationary, up to a maximum of 50%`},exp:{key:"exp",searchStat:"2020075345",name:"Expendability",image:ye,description:"10% chance to throw up to 1 additional Trap or Mine"},exs:{key:"exs",searchStat:"2084371547",name:"Expert Sabotage",image:ye,description:`Mines have a 10% chance to be Detonated an Additional Time
Mines have 20% increased Detonation Speed`},exw:{key:"exw",searchStat:"50129423",name:"Exploit Weakness",image:Q,description:`Vulnerability can affect Hexproof Enemies
Recover 2% of Life when you Kill a Cursed Enemy`},exf:{key:"exf",searchStat:"2017927451",name:"Explosive Force",image:oa,description:`Gain 10% of Wand Physical Damage as Extra Chaos Damage
Enemies Killed with Wand Hits have a 10% chance to Explode, dealing a quarter of their Life as Chaos Damage`},ext:{key:"ext",searchStat:"131358113",name:"Exposure Therapy",image:Se,description:`+5% to Damage over Time Multiplier
+30% Chaos Resistance against Damage Over Time`},eots:{key:"eots",searchStat:"3818661553",name:"Eye of the Storm",image:pe,description:`40% increased Critical Strike Chance
+10% to Damage over Time Multiplier for Ignite from Critical Strikes
20% increased Effect of non-Damaging Ailments you inflict with Critical Strikes`},ete:{key:"ete",searchStat:"392942015",name:"Eye to Eye",image:Me,description:`25% increased Projectile Damage
Projectiles deal 35% increased Damage with Hits against nearby Enemies`},fob:{key:"fob",searchStat:"2484082827",name:"Fan of Blades",image:ca,description:`Attack Skills fire an additional Projectile while wielding a Claw or Dagger
20% increased Projectile Attack Damage with Claws or Daggers`},fnf:{key:"fnf",searchStat:"2918755450",name:"Fan the Flames",image:Ge,description:"Ignites you inflict spread to other Enemies within a Radius of 1.5 metres"},fas:{key:"fas",searchStat:"37078857",name:"Fasting",image:ba,description:`20% increased Flask Charges gained
10% increased Movement Speed while under no Flask Effects`},few:{key:"few",searchStat:"3134222965",name:"Fearsome Warrior",image:Re,description:`Attacks with Two Handed Melee Weapons deal 25% increased Damage with Hits and Ailments
8% increased Area of Effect
25% chance to Intimidate nearby Enemies for 4 seconds on Melee Kill`},fof:{key:"fof",searchStat:"2396755365",name:"Feast of Flesh",image:ae,description:`8% increased maximum Life
0.4% of Attack Damage Leeched as Life
Gain 10 Life per Enemy Hit with Attacks`},fef:{key:"fef",searchStat:"383245807",name:"Feasting Fiends",image:_e,description:`Minions have 10% increased maximum Life
Minions deal 10% increased Damage
Minions Leech 0.4% of Damage as Life`},ftf:{key:"ftf",searchStat:"3944525413",name:"Feed the Fury",image:$,description:`0.4% of Attack Damage Leeched as Life
30% increased Damage while Leeching
15% increased Attack Speed while Leeching`},fet:{key:"fet",searchStat:"1353571444",name:"Fettle",image:ae,description:`10% increased maximum Life
+20 to maximum Life`},fia:{key:"fia",searchStat:"3188756614",name:"Fire Attunement",image:Ie,description:`30% reduced Ignite Duration on you
Unaffected by Burning Ground
You cannot be Ignited if you've been Ignited Recently`},fls:{key:"fls",searchStat:"982290947",name:"Flexible Sentry",image:Qe,description:`+4% Chance to Block Attack Damage
4% Chance to Block Spell Damage
25% reduced Elemental Ailment Duration on you
25% reduced Effect of Chill and Shock on you`},fol:{key:"fol",searchStat:"2350430215",name:"Flow of Life",image:Se,description:`24% increased Damage over Time
4% increased maximum Life
Regenerate 0.6% of Life per second`},flt:{key:"flt",searchStat:"3984980429",name:"Follow-Through",image:Me,description:"Projectiles deal 15% increased Damage with Hits and Ailments for each remaining Chain"},fom:{key:"fom",searchStat:"1904581068",name:"Force Multiplier",image:Ae,description:`25% increased Physical Damage
5% chance to deal Double Damage`},fra:{key:"fra",searchStat:"792262925",name:"Frantic Aspect",image:X,description:`Haste has 50% increased Mana Reservation Efficiency
Debuffs on you expire 10% faster`},fuf:{key:"fuf",searchStat:"3599340381",name:"Fuel the Fight",image:$,description:`8% increased Attack Speed
0.4% of Attack Damage Leeched as Mana
20% increased Damage while Leeching`},fua:{key:"fua",searchStat:"3415827027",image:Ae,name:"Furious Assault",description:`25% increased Physical Damage
8% increased Attack and Cast Speed`},gen:{key:"gen",searchStat:"2763732093",name:"Genius",image:ie,description:`8% increased maximum Mana
5% increased Intelligence`},glf:{key:"glf",searchStat:"1591995797",name:"Gladiator's Fortitude",image:Ea,description:`Attack Skills deal 25% increased Damage while holding a Shield
5% increased maximum Life`},gre:{key:"gre",searchStat:"1903496649",name:"Graceful Execution",image:Re,description:`+15 to Dexterity and Intelligence
5% increased Attack Speed with Two Handed Melee Weapons
15% increased Accuracy Rating with Two Handed Melee Weapons
25% increased Critical Strike Chance with Two Handed Melee Weapons`},grd:{key:"grd",searchStat:"2350900742",name:"Grand Design",image:xe,description:`20% increased Brand Damage
10% increased Brand Attachment range
Brand Skills have 10% increased Duration`},gro:{key:"gro",searchStat:"2194205899",name:"Grim Oath",image:Ae,description:"Gain 10% of Physical Damage as Extra Chaos Damage"},gut:{key:"gut",searchStat:"1882129725",name:"Guerilla Tactics",image:ye,description:`20% increased Trap Damage
20% increased Mine Damage
10% increased Trap Throwing Speed
10% increased Mine Throwing Speed
5% increased Movement Speed if you've thrown a Trap or Mine Recently`},hae:{key:"hae",searchStat:"72129119",name:"Haemorrhage",image:ke,description:`30% increased Critical Strike Chance
+10% to Damage over Time Multiplier for Ailments from Critical Strikes`},has:{key:"has",image:De,searchStat:"1080363357",name:"Haunting Shout",description:"Enemies Taunted by your Warcries are Intimidated"},hoi:{key:"hoi",searchStat:"1483358825",name:"Heart of Iron",image:be,description:"Gain 10% of Maximum Life as Extra Armour"},heh:{key:"heh",searchStat:"3640252904",name:"Heavy Hitter",image:$,description:`30% increased Attack Damage
30% increased Damage with Ailments from Attack Skills
10% reduced Enemy Stun Threshold
20% chance to double Stun Duration`},her:{key:"her",searchStat:"3274270612",name:"Heraldry",image:ce,description:`Nearby Enemies have Fire Exposure while you are affected by Herald of Ash
Nearby Enemies have Cold Exposure while you are affected by Herald of Ice
Nearby Enemies have Lightning Exposure while you are affected by Herald of Thunder`},heb:{key:"heb",searchStat:"2341828832",name:"Hex Breaker",image:se,description:`Remove a Curse after Channelling for 2 seconds
8% increased Attack and Cast Speed while Channelling`},hib:{key:"hib",searchStat:"2294919888",name:"Hibernator",image:Ue,description:`30% reduced Freeze Duration on you
30% reduced Effect of Chill on you
Unaffected by Chilled Ground
You cannot be Frozen if you've been Frozen Recently`},har:{key:"har",searchStat:"2665170385",name:"Hit and Run",image:we,description:`Attack Skills deal 25% increased Damage while Dual Wielding
+10% chance to Suppress Spell Damage if you've Hit an Enemy Recently`},hoh:{key:"hoh",searchStat:"3667965781",name:"Holistic Health",image:ae,description:`8% increased maximum Life
10% increased maximum Mana`},hoc:{key:"hoc",searchStat:"3898572660",name:"Holy Conquest",image:xe,description:`25% increased Brand Damage
Brands have 25% increased Area of Effect if 50% of Attached Duration expired`},hom:{key:"hom",searchStat:"555800967",name:"Hound's Mark",image:Q,description:`20% increased Effect of your Marks
20% increased Damage with Hits and Ailments against Marked Enemy`},huc:{key:"huc",searchStat:"3467711950",name:"Hulking Corpses",image:_e,description:`Minions have 25% increased maximum Life
Raised Zombies have 5% chance to Taunt Enemies on Hit`},imp:{key:"imp",searchStat:"810219447",name:"Improvisor",image:ie,description:`6% increased Attack Speed
10% increased maximum Mana
Gain 3 Mana per Enemy Hit with Attacks`},ink:{key:"ink",searchStat:"3904970959",name:"Insatiable Killer",image:we,description:`Attack Skills deal 20% increased Damage while Dual Wielding
5% increased Attack Speed while Dual Wielding
5% chance to gain a Frenzy Charge on Kill while Dual Wielding`},ino:{key:"ino",searchStat:"3872380586",name:"Inspired Oppression",image:ne,description:`10% increased Effect of Non-Damaging Ailments
20% increased Elemental Damage
30% increased Mana Regeneration Rate if you have Frozen an Enemy Recently
30% increased Mana Regeneration Rate if you have Shocked an Enemy Recently`},ins:{key:"ins",searchStat:"212648555",name:"Insulated",image:Ve,description:`+20% to Lightning Resistance
30% chance to Avoid being Shocked
+1% to maximum Lightning Resistance`},int:{key:"int",searchStat:"1309218394",name:"Introspection",image:X,description:"Auras from your Skills have 10% increased Effect on you"},inp:{key:"inp",searchStat:"2262034536",name:"Invigorating Portents",image:sa,description:`Minions deal 20% increased Damage while you are affected by a Herald
Minions have 10% increased Movement Speed for each Herald affecting you`},irb:{key:"irb",searchStat:"3258653591",name:"Iron Breaker",image:Ae,description:`Hits have 50% chance to ignore Enemy Physical Damage Reduction
30% increased Physical Damage`},lai:{key:"lai",searchStat:"426715778",name:"Lasting Impression",image:ce,description:`Herald Skills deal 50% increased Damage over Time
30% increased Damage over Time while affected by a Herald`},lbe:{key:"lbe",searchStat:"2195406641",name:"Lead By Example",image:De,description:`+10 to Strength and Dexterity
When you Warcry, you and nearby Allies gain Onslaught for 4 seconds`},lfd:{key:"lfd",searchStat:"2337273077",name:"Life from Death",image:_e,description:`Minions have 15% increased maximum Life
Regenerate 2% of Life per second if a Minion has Died Recently
Minions Recover 4% of Life on Minion Death`},lii:{key:"lii",searchStat:"1094635162",name:"Liquid Inspiration",image:ie,description:`15% increased maximum Mana
20% increased Mana Recovery from Flasks
25% chance to gain a Power Charge when you use a Mana Flask`},lod:{key:"lod",searchStat:"2055715585",name:"Lord of Drought",image:Q,description:`Flammability can affect Hexproof Enemies
30% increased Damage with Ignites inflicted on Cursed Enemies`},lot:{key:"lot",searchStat:"3989400244",name:"Low Tolerance",image:Xe,description:"Poisons you inflict on non-Poisoned Enemies deal 300% increased Damage"},mab:{key:"mab",searchStat:"684155617",name:"Mage Bane",image:we,description:`Attack Skills deal 20% increased Damage while Dual Wielding
20% chance to gain a Power Charge when you Block
+6% Chance to Block Spell Damage while Dual Wielding`},mah:{key:"mah",searchStat:"2118664144",name:"Mage Hunter",image:Qe,description:`20% increased Spell Damage
6% Chance to Block Spell Damage
20% chance to gain a Power Charge when you Block`},mag:{key:"mag",searchStat:"2886441936",name:"Magnifier",image:Ce,description:`10% increased Area of Effect
+10% to Critical Strike Multiplier`},mam:{key:"mam",searchStat:"1015189426",name:"Martial Mastery",image:Re,description:`+20 to Strength
10% increased Attack Speed with Two Handed Melee Weapons
10% increased Attack Speed if you have at least 600 Strength`},mmo:{key:"mmo",searchStat:"2978494217",name:"Martial Momentum",image:we,description:`8% increased Attack Speed while Dual Wielding
16% increased Accuracy Rating while Dual Wielding
32% increased Damage if you've used a Travel Skill Recently`},map:{key:"map",searchStat:"1152182658",name:"Martial Prowess",image:$,description:`20% increased Attack Damage
6% increased Attack Speed
15% increased Global Accuracy Rating
20% increased Damage with Ailments from Attack Skills`},moc:{key:"moc",searchStat:"3257074218",name:"Master of Command",image:X,description:`Banner Skills have 20% increased Area of Effect
Banner Skills have 10% increased Aura Effect`},mof:{key:"mof",searchStat:"1462135249",name:"Master of Fire",image:ra,description:`Nearby Enemies have Fire Exposure
`},motm:{key:"motm",searchStat:"185592058",name:"Master of the Maelstrom",image:Q,description:`Elemental Weakness can affect Hexproof Enemies
+1% to all maximum Elemental Resistances if you have Killed a Cursed Enemy Recently`},mtf:{key:"mtf",searchStat:"3585232432",name:"Master the Fundamentals",image:Ae,description:`35% increased Physical Damage
35% reduced Elemental Damage
+10% to all Elemental Resistances`},mew:{key:"mew",searchStat:"4291434923",name:"Mender's Wellspring",image:Ye,description:`25% increased Life Recovery from Flasks
Life Flasks gain 1 Charge every 3 seconds
Remove Bleeding when you use a Life Flask`},mil:{key:"mil",searchStat:"4154709486",name:"Militarism",image:be,description:`8% increased maximum Life
30% increased Armour`},min:{key:"min",searchStat:"2595115995",name:"Mindfulness",image:ie,description:`15% increased maximum Mana
80% increased Mana Regeneration Rate while stationary`},mie:{key:"mie",searchStat:"3832665876",name:"Misery Everlasting",image:Q,description:`Despair can affect Hexproof Enemies
Recover 2% of Energy Shield when you Kill a Cursed Enemy`},mob:{key:"mob",searchStat:"1048879642",name:"Mob Mentality",image:De,description:`Exerted Attacks deal 25% increased Damage
Warcries have 5% Chance to grant an Endurance, Frenzy or Power Charge per Power`},mom:{key:"mom",searchStat:"3875792669",name:"Molten One's Mark",description:`+2% to maximum Fire Resistance
Regenerate 1% of Life per second`,image:Ie},moa:{key:"moa",searchStat:"3881737087",name:"Mortifying Aspect",image:X,description:`Malevolence has 50% increased Mana Reservation Efficiency
+11% to Chaos Resistance`},myw:{key:"myw",searchStat:"2314111938",name:"Mystical Ward",image:Qe,description:`6% Chance to Block Spell Damage
Regenerate 1.5% of Energy Shield per second
0.3% of Spell Damage Leeched as Energy Shield`},nav:{key:"nav",searchStat:"510654792",name:"Natural Vigour",image:ze,description:`8% increased maximum Life
30% increased Evasion Rating`},non:{key:"non",searchStat:"731840035",name:"Non-Flammable",image:Ie,description:`+20% to Fire Resistance
30% chance to Avoid being Ignited
+1% to maximum Fire Resistance`},nue:{key:"nue",searchStat:"1028754276",name:"Numbing Elixir",image:Ye,description:`40% reduced Effect of Curses on you during Effect of any Mana Flask
40% reduced Effect of Non-Damaging Ailments on you during Effect of any Life Flask`},owts:{key:"owts",searchStat:"1976069869",name:"One with the Shield",image:te,description:`Recover 50 Life when you Block
50% increased Defences from Equipped Shield
+6% Chance to Block Attack Damage while holding a Shield`},ope:{key:"ope",searchStat:"633943719",name:"Openness",image:ie,description:`+30 to maximum Mana
20% increased maximum Mana`},opf:{key:"opf",searchStat:"4281625943",name:"Opportunistic Fusilade",image:oa,description:`35% increased Damage with Wands if you've dealt a Critical Strike Recently
50% increased Critical Strike Chance with Wands`},old:{key:"old",searchStat:"2250169390",name:"Overlord",image:la,description:`Melee Hits with Maces, Sceptres or Staves Fortify for 6 seconds
30% increased Damage with Maces, Sceptres or Staves`},ove:{key:"ove",searchStat:"3777170562",name:"Overshock",image:ne,description:`30% increased Lightning Damage
40% increased Effect of Lightning Ailments`},ovm:{key:"ovm",searchStat:"770408103",name:"Overwhelming Malice",image:pe,description:"10% chance to gain Unholy Might for 4 seconds on Critical Strike"},par:{key:"par",searchStat:"4272503233",name:"Paralysis",image:da,description:`30% increased Lightning Damage
Lightning Skills have 10% reduced Enemy Stun Threshold
10% chance to double Stun Duration`},pac:{key:"pac",searchStat:"1734275536",name:"Peace Amidst Chaos",image:ae,description:`8% increased maximum Life
Regenerate 2% of Life per second while stationary
20% increased Armour while stationary`},pev:{key:"pev",searchStat:"1722821275",name:"Peak Vigour",image:ae,description:`8% increased maximum Life
20% increased Life Recovery from Flasks`},phl:{key:"phl",searchStat:"3057154383",name:"Phlebotomist",image:ke,description:`20% increased Critical Strike Chance
+6% to Physical Damage over Time Multiplier if you've dealt a Critical Strike Recently`},poa:{key:"poa",searchStat:"1005475168",name:"Powerful Assault",image:Ce,description:`20% increased Area Damage
Area Skills have 10% chance to Knock Enemies Back on Hit`},pow:{key:"pow",searchStat:"164032122",name:"Powerful Ward",image:Qe,description:`20% chance to gain a Power Charge when you Block
+10% Chance to Block Spell Damage while at Maximum Power Charges`},prc:{key:"prc",searchStat:"3435403756",name:"Practiced Caster",image:oe,description:`20% increased Spell Damage
5% increased Cast Speed
35% chance to Ignore Stuns while Casting`},prf:{key:"prf",searchStat:"2913581789",name:"Precise Focus",image:se,description:`30% increased Critical Strike Chance while Channelling
+20% to Critical Strike Multiplier if you've been Channelling for at least 1 second`},prr:{key:"prr",searchStat:"2335364359",name:"Precise Retaliation",image:te,description:`+30% to Critical Strike Multiplier if you have Blocked Recently
60% increased Critical Strike Chance if you haven't Blocked Recently`},prp:{key:"prp",searchStat:"3391925584",name:"Pressure Points",image:pe,description:`30% increased Critical Strike Chance
Your Critical Strikes have a 5% chance to deal Double Damage`},prb:{key:"prb",searchStat:"622362787",name:"Primordial Bond",image:ve,description:`10% increased Damage per Summoned Golem
40% increased Effect of Buffs granted by your Golems
Golems have 25% increased Maximum Life`},pmc:{key:"pmc",searchStat:"3492924480",name:"Prismatic Carapace",image:be,description:`+1% to all maximum Elemental Resistances
30% increased Armour`},pmd:{key:"pmd",searchStat:"1149662934",name:"Prismatic Dance",image:ze,description:`+1% to all maximum Elemental Resistances
30% increased Evasion Rating`},prh:{key:"prh",searchStat:"2342448236",name:"Prismatic Heart",image:Te,description:`30% increased Elemental Damage
+10% to all Elemental Resistances`},prd:{key:"prd",searchStat:"1705633890",name:"Prodigious Defence",image:te,description:`+4% Chance to Block Attack Damage
4% Chance to Block Spell Damage
30% increased Attack Damage while holding a Shield`},pro:{key:"pro",searchStat:"814369372",name:"Provocateur",image:De,description:`40% increased Critical Strike Chance against Taunted Enemies
+10% to Critical Strike Multiplier against Taunted Enemies`},pay:{key:"pay",searchStat:"1507409483",name:"Pure Agony",image:sa,description:`Minions deal 20% increased Damage while you are affected by a Herald
+5 to Maximum Virulence`},pua:{key:"pua",searchStat:"3509724289",name:"Pure Aptitude",image:Ve,description:`+20 to Intelligence
Purity of Lightning has 80% increased Mana Reservation Efficiency
15% increased Energy Shield Recharge Rate`},pug:{key:"pug",searchStat:"1621496909",name:"Pure Guile",image:X,description:`+20 to Dexterity
Purity of Ice has 80% increased Mana Reservation Efficiency
5% chance to Blind Enemies on Hit`},pum:{key:"pum",searchStat:"2372915005",name:"Pure Might",image:Ie,description:`+20 to Strength
Purity of Fire has 80% increased Mana Reservation Efficiency
40% increased Stun and Block Recovery`},puh:{key:"puh",searchStat:"507505131",name:"Purposeful Harbinger",image:X,description:`Auras from your Skills have 8% increased Effect on you for
each Herald affecting you, up to 40%`},qug:{key:"qug",searchStat:"1626818279",name:"Quick Getaway",image:pe,description:`5% increased Attack and Cast Speed
25% increased Critical Strike Chance
5% increased Movement Speed if you've dealt a Critical Strike Recently`},qad:{key:"qad",searchStat:"2169345147",name:"Quick and Deadly",image:we,description:`60% increased Main Hand Attack Damage while wielding two different Weapon Types
30% increased Off Hand Attack Speed while wielding two different Weapon Types`},rab:{key:"rab",searchStat:"4288473380",name:"Rattling Bellow",image:De,description:`+20 to Strength
Exerted Attacks have 8% chance to deal Double Damage`},rap:{key:"rap",searchStat:"1038897629",name:"Raze and Pillage",image:ve,description:`Minions gain 6% of Physical Damage as Extra Fire Damage
Minions have 20% chance to Ignite
Minions deal 20% increased Damage with Hits and Ailments against Ignited Enemies`},rea:{key:"rea",searchStat:"845306697",name:"Readiness",image:ze,description:`30% increased Evasion Rating if you haven't been Hit Recently
30% chance to Avoid Bleeding
30% chance to Avoid being Impaled`},rem:{key:"rem",searchStat:"691431951",name:"Remarkable",image:xe,description:`8% increased Cast Speed with Brand Skills
Skills which create Brands have 35% chance to create an additional Brand`},rnd:{key:"rnd",searchStat:"4263287206",name:"Rend",image:ke,description:`+5% to Physical Damage over Time Multiplier
20% increased Bleeding Duration`},ren:{key:"ren",searchStat:"3607300552",name:"Renewal",image:ve,description:`Minions have 5% chance to deal Double Damage while they are on Full Life
Minions Regenerate 1% of Life per second`},rrrrrrrr:{key:"rrrrrrrr",searchStat:"2233272527",name:"Repeater",image:Me,description:`30% increased Projectile Damage
8% increased Attack and Cast Speed`},rep:{key:"rep",searchStat:"1496043857",name:"Replenishing Presence",image:X,description:`Non-Curse Aura Skills have 20% increased Duration
You and nearby Allies Regenerate 1.00% of Life per second`},rip:{key:"rip",searchStat:"2620267328",name:"Righteous Path",image:X,description:`Zealotry has 50% increased Mana Reservation Efficiency
10% increased Effect of Consecrated Ground you create`},riq:{key:"riq",searchStat:"254194892",name:"Riot Queller",image:te,description:`+6% Chance to Block Attack Damage
Enemies Taunted by you take 6% increased Damage`},rot:{key:"rot",searchStat:"713945233",name:"Rot-Resistant",image:We,description:`+13% to Chaos Resistance
Regenerate 1.2% of Life per second
Regenerate 0.6% of Energy Shield per second
Regenerate 0.3% of Mana per second`},ror:{key:"ror",searchStat:"2478282326",name:"Rote Reinforcement",image:te,description:`+20 to maximum Life
+6% Chance to Block Attack Damage
20% chance to gain an Endurance Charge when you Block`},roc:{key:"roc",searchStat:"2289610642",name:"Rotten Claws",image:ve,description:"Minions have a 12% chance to Impale on Hit with Attacks"},rut:{key:"rut",searchStat:"1488030420",name:"Run Through",image:ta,description:`15% increased Physical Damage with Axes or Swords
10% chance to Impale Enemies on Hit with Axes or Swords
10% increased Impale Effect
Axe or Sword Attacks deal 15% increased Damage with Ailments`},sad:{key:"sad",searchStat:"3638731729",name:"Sadist",image:Te,description:`15% increased Elemental Damage if you've Chilled an Enemy Recently
25% increased Elemental Damage if you've Shocked an Enemy Recently
20% increased Elemental Damage if you've Ignited an Enemy Recently`},sag:{key:"sag",searchStat:"478147593",name:"Sage",image:Ve,description:`+20% to Lightning Resistance
20% increased Mana Regeneration Rate
Regenerate 1.5% of Life per second`},sap:{key:"sap",searchStat:"715786975",name:"Sap Psyche",image:oe,description:`20% increased Spell Damage
30% increased Mana Regeneration Rate
Regenerate 1% of Energy Shield per second if you've Cursed an Enemy Recently`},sar:{key:"sar",searchStat:"4222635921",name:"Savage Response",image:pe,description:`30% increased Critical Strike Chance
+30% to Critical Strike Multiplier if you've taken a Savage Hit Recently`},stm:{key:"stm",searchStat:"3539175001",name:"Savour the Moment",image:Le,description:`10% increased maximum Energy Shield
Regenerate 3.00% of Energy Shield per second while stationary`},sci:{key:"sci",searchStat:"2589589781",name:"Scintillating Idea",image:ie,description:`20% increased maximum Mana
Damage Penetrates 5% Lightning Resistance`},sem:{key:"sem",searchStat:"876846990",name:"Seal Mender",image:oe,description:"Skills Supported by Unleash have 30% increased Seal gain frequency"},ssk:{key:"ssk",searchStat:"2773515950",name:"Second Skin",image:be,description:`+4% Chance to Block Attack Damage
4% Chance to Block Spell Damage
30% increased Armour`},ser:{key:"ser",searchStat:"2261237498",name:"Seeker Runes",image:xe,description:`25% increased Brand Damage
Unattached Brands gain 20% increased Brand Attachment Range per second, up to 100%`},sel:{key:"sel",searchStat:"3025453294",name:"Self-Control",image:Le,description:`Discipline has 80% increased Mana Reservation Efficiency
25% increased Mana Regeneration Rate`},sep:{key:"sep",searchStat:"2644533453",image:ce,name:"Self-Fulfilling Prophecy",description:`+15% to Critical Strike Multiplier if you dealt a Critical Strike with a Herald Skill Recently
+1% to Critical Strike Chance of Herald Skills`},ses:{key:"ses",searchStat:"4290522695",name:"Septic Spells",image:Xe,description:`20% chance to Poison on Hit with Spell Damage
Spell Skills have +5% to Damage over Time Multiplier for Poison
5% increased Cast Speed`},saf:{key:"saf",searchStat:"1101250813",name:"Set and Forget",image:ye,description:`25% increased Trap Damage
40% increased Trap Trigger Area of Effect
Skills used by Traps have 15% increased Area of Effect`},shs:{key:"shs",searchStat:"1476913894",name:"Shifting Shadow",image:ze,description:`+20 to Dexterity
10% chance to Blind Enemies on Hit
20% increased Evasion Rating`},shb:{key:"shb",searchStat:"2783012144",image:Me,name:"Shrieking Bolts",description:`35% increased Projectile Damage
10% chance to Taunt Enemies on Projectile Hit`},ska:{key:"ska",searchStat:"1290215329",name:"Skeletal Atrophy",image:ve,description:`Summoned Skeletons have 30% of Physical Damage Converted to Chaos Damage
Summoned Skeletons have 10% chance to Wither Enemies for 2 seconds on Hit`},sku:{key:"sku",searchStat:"315697256",name:"Skullbreaker",image:pe,description:`+15% to Critical Strike Multiplier
8% reduced Enemy Stun Threshold`},sls:{key:"sls",searchStat:"3993957711",name:"Sleepless Sentries",image:le,description:`20% increased Totem Duration
You have Onslaught if you've Summoned a Totem Recently`},stw:{key:"stw",searchStat:"540300548",name:"Smite the Weak",image:$,description:`Attacks have 10% chance to Maim on Hit
40% increased Attack Damage against Maimed Enemies`},smr:{key:"smr",searchStat:"2322980282",name:"Smoking Remains",image:ra,description:`35% increased Fire Damage
10% chance to create a Smoke Cloud on Kill`},sns:{key:"sns",searchStat:"3319205340",name:"Snaring Spirits",image:le,description:`30% increased Totem Damage
Totems Hinder Enemies near them when Summoned`},sno:{key:"sno",searchStat:"1595367309",name:"Snowstorm",image:da,description:"Gain 8% of Lightning Damage as Extra Cold Damage against Chilled Enemies"},spr:{key:"spr",searchStat:"4235300427",name:"Special Reserve",image:Ye,description:`Regenerate 2% of Life per second during any Flask Effect
20% increased Damage during any Flask Effect`},spc:{key:"spc",searchStat:"3372255769",name:"Spiked Concoction",image:ba,description:`Gain Alchemist's Genius when you use a Flask
5% increased Attack and Cast Speed during any Flask Effect`},spp:{key:"spp",searchStat:"1134501245",name:"Spiteful Presence",image:X,description:`Hatred has 50% increased Mana Reservation Efficiency
20% increased Effect of Cold Ailments`},spb:{key:"spb",searchStat:"3603695769",name:"Spring Back",image:Le,description:`10% increased maximum Energy Shield
5% faster start of Energy Shield Recharge`},stt:{key:"stt",searchStat:"3500334379",name:"Steady Torment",image:Xe,description:`+6% to Damage over Time Multiplier for Bleeding you inflict on Poisoned Enemies
+6% to Damage over Time Multiplier for Poison you inflict on Bleeding Enemies
15% increased Bleeding Duration
15% increased Poison Duration`},stf:{key:"stf",searchStat:"1088949570",name:"Stoic Focus",image:se,description:`Channelling Skills deal 25% increased Damage
+5% Chance to Block Attack Damage while Channelling
+5% Chance to Block Spell Damage while Channelling`},std:{key:"std",searchStat:"2087561637",name:"Storm Drinker",image:da,description:`Damage Penetrates 8% Lightning Resistance
0.5% of Lightning Damage Leeched as Energy Shield`},sth:{key:"sth",searchStat:"1122051203",name:"Storm's Hand",image:oa,description:`Gain 10% of Wand Physical Damage as Extra Lightning Damage
25% of Wand Physical Damage converted to Lightning Damage`},sto:{key:"sto",searchStat:"889728548",name:"Stormrider",image:ne,description:`10% chance to gain a Power Charge when you Shock a Chilled Enemy
25% increased Cold Damage with Hits against Shocked Enemies
25% increased Lightning Damage with Hits against Chilled Enemies`},str:{key:"str",searchStat:"1397498432",name:"Streamlined",image:Me,description:`20% increased Projectile Damage
20% increased Projectile Speed`},stl:{key:"stl",searchStat:"282062371",name:"Strike Leader",image:te,description:`+4% Chance to Block Attack Damage
Attack Skills deal 30% increased Damage while holding a Shield
+0.2 metres to Melee Strike Range while Holding a Shield`},sts:{key:"sts",searchStat:"2383914651",name:"Stubborn Student",image:ie,description:`15% increased maximum Mana
20% increased Armour
+1 Armour per 10 Unreserved Maximum Mana`},sod:{key:"sod",searchStat:"3202667190",name:"Student of Decay",image:We,description:`+13% to Chaos Resistance
25% increased Damage over Time`},suf:{key:"suf",searchStat:"2251304016",name:"Sublime Form",image:ze,description:`Grace has 50% increased Mana Reservation Efficiency
+10% to all Elemental Resistances`},sbs:{key:"sbs",searchStat:"1364858171",name:"Sublime Sensation",image:ae,description:`8% increased maximum Life
10% increased maximum Energy Shield`},sfs:{key:"sfs",searchStat:"3410752193",name:"Surefooted Striker",image:Re,description:`5% chance to deal Double Damage if you've dealt a Critical Strike with a Two Handed Melee Weapon Recently
40% increased Critical Strike Chance with Two Handed Melee Weapons`},suv:{key:"suv",searchStat:"2410501331",name:"Surging Vitality",image:ae,description:`8% increased maximum Life
Every 4 seconds, Regenerate 10% of Life over one second`},sus:{key:"sus",searchStat:"3051562738",name:"Surprise Sabotage",image:ye,description:`+8% to Critical Strike Multiplier with Traps
+8% to Critical Strike Multiplier with Mines
Trap Damage Penetrates 4% Elemental Resistances
Mine Damage Penetrates 4% Elemental Resistances`},tea:{key:"tea",searchStat:"2631806437",name:"Tempered Arrowheads",image:na,description:`Bow Skills have +6% to Damage over Time Multiplier
Bow Skills have 10% increased Skill Effect Duration
10% increased Duration of Ailments inflicted while wielding a Bow`},tts:{key:"tts",searchStat:"348883745",name:"Tempt the Storm",image:Q,description:`Conductivity can affect Hexproof Enemies
30% increased Effect of Shocks you inflict on Cursed Enemies`},tha:{key:"tha",searchStat:"177215332",name:"Thaumophage",image:oe,description:`0.6% of Spell Damage Leeched as Energy Shield
25% increased Spell Damage while on Full Energy Shield
10% chance to Hinder Enemies on Hit with Spells`},thu:{key:"thu",searchStat:"1741700339",name:"Thunderstruck",image:ne,description:`20% increased Lightning Damage
30% increased Critical Strike Chance
Your Critical Strikes Knock Back Shocked Enemies`},tis:{key:"tis",searchStat:"2930275641",name:"Titanic Swings",image:Ce,description:`15% increased Area of Effect while wielding a Two Handed Melee Weapon
20% increased Area Damage while wielding a Two Handed Melee Weapon`},toc:{key:"toc",searchStat:"2780712583",name:"Touch of Cruelty",image:Ee,description:`Chaos Spells have 10% chance to Hinder Enemies on Hit
Enemies Hindered by you take 10% increased Chaos Damage`},tot:{key:"tot",searchStat:"3536778624",name:"Towering Threat",image:Ce,description:`10% increased Area of Effect
8% increased maximum Life`},unc:{key:"unc",searchStat:"382360671",name:"Uncompromising",image:be,description:`Determination has 50% increased Mana Reservation Efficiency
20% increased Stun Threshold`},uhg:{key:"uhg",searchStat:"4186213466",name:"Unholy Grace",image:Ee,description:`30% increased Chaos Damage
10% increased Attack and Cast Speed`},unf:{key:"unf",searchStat:"1570474940",name:"Unrestrained Focus",image:se,description:`Unaffected by Chill while Channelling
Channelling Skills have 8% increased Attack and Cast Speed`},usg:{key:"usg",searchStat:"729163974",name:"Unspeakable Gifts",image:Ee,description:"Enemies you Kill have a 10% chance to Explode, dealing a quarter of their maximum Life as Chaos Damage"},unt:{key:"unt",searchStat:"2758966888",name:"Untouchable",image:Ke,description:`+10% chance to Suppress Spell Damage
30% increased Evasion Rating`},uwf:{key:"uwf",searchStat:"367638058",name:"Unwavering Focus",image:se,description:`Channelling Skills deal 30% increased Damage
50% chance to Avoid being Stunned while Channelling`},une:{key:"une",searchStat:"2788982914",name:"Unwaveringly Evil",image:Xe,description:`30% increased Chaos Damage
Chaos Skills ignore interruption from Stuns`},vap:{key:"vap",searchStat:"1996576560",name:"Vast Power",image:Ce,description:`3% increased Area of Effect per Power Charge, up to a maximum of 50%
20% increased Area Damage`},ved:{key:"ved",searchStat:"664010431",image:te,name:"Veteran Defender",description:`+15 to all Attributes
60% increased Defences from Equipped Shield
+15% Elemental Resistances while holding a Shield`},vib:{key:"vib",searchStat:"882876854",name:"Vicious Bite",image:ve,description:`Minions have +15% to Critical Strike Multiplier
Minions have 30% increased Critical Strike Chance`},vig:{key:"vig",searchStat:"4054656914",name:"Vicious Guard",image:te,description:`+6% Chance to Block Attack Damage
Regenerate 1.5% of Life per second
0.4% of Attack Damage Leeched as Life`},vis:{key:"vis",searchStat:"567971948",name:"Vicious Skewering",image:$,description:`15% increased Effect of Impales inflicted by Hits that also inflict Bleeding
10% chance to Impale Enemies on Hit with Attacks
Attacks have 10% chance to cause Bleeding`},vim:{key:"vim",searchStat:"1936135020",name:"Victim Maker",image:Q,description:`Curse Skills have 8% increased Cast Speed
Enemies Cursed by you have Malediction if 33% of Curse Duration expired`},vir:{key:"vir",searchStat:"647201233",name:"Vile Reinvigoration",image:Se,description:`24% increased Damage over Time
6% increased maximum Energy Shield
Regenerate 2% of Energy Shield per second if you've Killed an Enemy Recently`},vif:{key:"vif",searchStat:"2134141047",name:"Vital Focus",image:se,description:`Regenerate 1.5% of Life per second while Channelling
Channelling Skills deal 30% increased Damage`},vih:{key:"vih",searchStat:"3957006524",name:"Vivid Hues",image:ke,description:`20% increased Damage with Bleeding
2% of Attack Damage Leeched as Life against Bleeding Enemies
20% increased total Recovery per second from Life Leech`},vop:{key:"vop",searchStat:"2350668735",name:"Volatile Presence",image:X,description:`Anger has 50% increased Mana Reservation Efficiency
20% increased Duration of Fire Ailments`},wom:{key:"wom",searchStat:"1363668533",name:"Wall of Muscle",image:ae,description:`6% increased maximum Life
5% increased Strength`},wac:{key:"wac",searchStat:"578355556",name:"Warning Call",image:De,description:"Gain 25% increased Armour per 5 Power for 8 seconds when you Warcry, up to a maximum of 100%"},waa:{key:"waa",searchStat:"2066820199",name:"Wasting Affliction",image:Se,description:`20% increased Damage with Ailments
Damaging Ailments deal damage 5% faster`},wea:{key:"wea",searchStat:"2244243943",name:"Weight Advantage",image:la,description:`+20 to Strength
Mace, Sceptre or Staff Attacks deal 30% increased Damage with Hits and Ailments
4% chance to deal Double Damage while wielding a Mace, Sceptre or Staff`},wkp:{key:"wkp",searchStat:"1616734644",name:"Wicked Pall",image:Ee,description:`30% increased Chaos Damage
5% increased Skill Effect Duration`},wid:{key:"wid",searchStat:"1678643716",image:Te,name:"Widespread Destruction",description:`20% increased Elemental Damage
6% increased Area of Effect`},wis:{key:"wis",searchStat:"1162352537",name:"Will Shaper",image:Le,description:"Gain 5% of Maximum Mana as Extra Maximum Energy Shield"},win:{key:"win",searchStat:"1938661964",name:"Wind-up",image:ca,description:`10% chance to gain a Power Charge on Non-Critical Strike with a Claw or Dagger
+15% to Critical Strike Multiplier with Claws or Daggers`},wpr:{key:"wpr",searchStat:"755881431",name:"Winter Prowler",image:Ue,description:`+2% to maximum Cold Resistance
10% increased Life Recovery from Flasks`},wiz:{key:"wiz",searchStat:"3078065247",name:"Wizardry",image:Ve,description:`+2% to maximum Lightning Resistance
8% increased maximum Mana`},woa:{key:"woa",searchStat:"69078820",name:"Wound Aggravation",image:ta,description:`20% increased Physical Damage with Axes or Swords
Axe or Sword Attacks deal 20% increased Damage with Ailments
+5% to Physical Damage over Time Multiplier while wielding an Axe or Sword`},wif:{key:"wif",searchStat:"241783558",name:"Wrapped in Flame",image:Ge,description:`20% increased Fire Damage
5% chance to Cover Enemies in Ash on Hit while you are Burning
Cannot be Chilled while Burning`}},gn=Object.values(Oa),fn=Oa,Je=gn;function $e(i){const e=new URLSearchParams;return i.search&&e.set("search",i.search),i.view==="selected"&&e.set("view","selected"),Array.from(i.modWeights.entries()).sort(([n],[a])=>n<a?-1:1).forEach(([n,a])=>{a!==null&&e.set(n,`${a}`)}),e}function un(i){const e=parseInt(i);return za.includes(e)?e:null}function pn(i){let e="";return i.startsWith("http")?e=new URL(i).search:e=i.replace(/^\?/,""),new URLSearchParams(e)}function ma(i){const e=pn(i),n={search:e.get("search")??"",modWeights:new Map,view:e.get("view")==="selected"?"selected":"search"};for(const[a,t]of e.entries())if(fn[a]){const r=un(t);r!==null&&n.modWeights.set(a,r)}return n}function ja(i,e,n){const a=$e(i);return n===null||a.get(e)===`${n}`?a.delete(e):n!==null&&a.set(e,`${n}`),a.toString()}function yn(i,e){const n=i.filter(s=>{const o=e.modWeights.get(s.key);return o!==void 0&&o!==-1}),a=i.filter(s=>e.modWeights.get(s.key)===-1);return{stats:[{type:"weight",filters:i.filter(s=>{const o=e.modWeights.get(s.key);return!!o&&o>0}).map(s=>({disabled:!1,id:"explicit.stat_"+s.searchStat,value:{weight:e.modWeights.get(s.key)}})),disabled:!1,value:{min:1}},{type:"count",filters:n.map(s=>({disabled:e.modWeights.get(s.key)!==hn,id:"explicit.stat_"+s.searchStat})),disabled:!1,value:{min:1}},{type:"not",disabled:a.length===0,filters:a.map(s=>({disabled:!1,id:"explicit.stat_"+s.searchStat}))},{filters:[{id:"explicit.stat_3086156145",value:{min:4,max:4},disabled:!1}],disabled:!1,type:"and"}],status:{option:"online"}}}function kn(i,e){const n="https://pathofexile.com/trade/search?q=",a=yn(i,e),t=JSON.stringify({query:{...a,filters:{type_filters:{filters:{category:{option:"jewel.cluster"},rarity:{option:"unique"}}}}},sort:{"statgroup.0":"desc"}});return n+encodeURIComponent(t)}function Sn(i){return i.startsWith("-")||i.startsWith("!")}const vn=i=>{const e=/([!-])?"([^"]+)"|(\S+)/g,n=[];let a;for(;(a=e.exec(i))!==null;){let t=a[2]||a[3];t&&(!Sn(t)&&a[1]==="-"&&(t="-"+t),n.push(t))}return n};function Na(i){return vn((i||"").trim().toLowerCase()).filter(t=>{const r=!!t.match(/[a-zA-Z0-9]{1,}/);return t.length>0&&r}).map(t=>(t=t.replace(/"/g,""),t.startsWith("-")||t.startsWith("!")?{phrase:t.slice(1),wanted:!1}:{phrase:t,wanted:!0}))}function wn(i,e){const n=Na(e);return i.filter(a=>{for(const t of n){const r=a.name.toLowerCase().includes(t.phrase),s=a.description.toLowerCase().includes(t.phrase);if((r||s)!==t.wanted)return!1}return!0})}function Dn(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var qa={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(i){(function(){var e={}.hasOwnProperty;function n(){for(var r="",s=0;s<arguments.length;s++){var o=arguments[s];o&&(r=t(r,a(o)))}return r}function a(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return n.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var s="";for(var o in r)e.call(r,o)&&r[o]&&(s=t(s,o));return s}function t(r,s){return s?r?r+" "+s:r+s:r}i.exports?(n.default=n,i.exports=n):window.classNames=n})()})(qa);var En=qa.exports;const de=Dn(En);function Ca(i,e,n){const a=i.slice();return a[3]=e[n].href,a[4]=e[n].weight,a[5]=e[n].active,a[7]=n,a}function bn(i){let e=i[4]+"",n;return{c(){n=H(e)},l(a){n=P(a,e)},m(a,t){p(a,n,t)},p(a,t){t&1&&e!==(e=a[4]+"")&&je(n,e)},d(a){a&&m(n)}}}function Cn(i){let e,n;return{c(){e=wa("svg"),n=wa("path"),this.h()},l(a){e=Da(a,"svg",{"aria-hidden":!0,viewBox:!0,width:!0,height:!0});var t=E(e);n=Da(t,"path",{fill:!0,d:!0}),E(n).forEach(m),t.forEach(m),this.h()},h(){l(n,"fill","currentColor"),l(n,"d","M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"),l(e,"aria-hidden","true"),l(e,"viewBox","0 0 512 512"),l(e,"width","16"),l(e,"height","16")},m(a,t){p(a,e,t),g(e,n)},p:Oe,d(a){a&&m(e)}}}function Aa(i){let e,n,a,t;function r(c,h){return c[4]===-1?Cn:bn}let s=r(i),o=s(i);return{c(){e=y("a"),o.c(),n=I(),this.h()},l(c){e=k(c,"A",{href:!0,class:!0});var h=E(e);o.l(h),n=G(h),h.forEach(m),this.h()},h(){l(e,"href",a=i[3]),l(e,"class",t=ee(de("px-3 py-1 flex items-center text-xs font-medium focus:z-10 focus:ring-2 border-gray-700",{active:i[5],excluded:i[4]===-1,regular:i[4]>-1,"rounded-l-md":i[7]===0,"rounded-r-md":i[7]===i[0].length-1}))+" svelte-pda6l7"),va(e,"active",i[5])},m(c,h){p(c,e,h),o.m(e,null),g(e,n)},p(c,h){s===(s=r(c))&&o?o.p(c,h):(o.d(1),o=s(c),o&&(o.c(),o.m(e,n))),h&1&&a!==(a=c[3])&&l(e,"href",a),h&1&&t!==(t=ee(de("px-3 py-1 flex items-center text-xs font-medium focus:z-10 focus:ring-2 border-gray-700",{active:c[5],excluded:c[4]===-1,regular:c[4]>-1,"rounded-l-md":c[7]===0,"rounded-r-md":c[7]===c[0].length-1}))+" svelte-pda6l7")&&l(e,"class",t),h&1&&va(e,"active",c[5])},d(c){c&&m(e),o.d()}}}function An(i){let e,n,a,t="Weight:",r,s=ea(i[0]),o=[];for(let c=0;c<s.length;c+=1)o[c]=Aa(Ca(i,s,c));return{c(){e=y("div"),n=y("div"),a=y("span"),a.textContent=t,r=I();for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=k(c,"DIV",{class:!0});var h=E(e);n=k(h,"DIV",{class:!0,role:!0});var f=E(n);a=k(f,"SPAN",{class:!0,"data-svelte-h":!0}),Be(a)!=="svelte-f8vpuo"&&(a.textContent=t),r=G(f);for(let u=0;u<o.length;u+=1)o[u].l(f);f.forEach(m),h.forEach(m),this.h()},h(){l(a,"class","text-xs me-1 flex items-center pb-1/2"),l(n,"class","flex rounded-md shadow-sm"),l(n,"role","group"),l(e,"class","flex items-center")},m(c,h){p(c,e,h),g(e,n),g(n,a),g(n,r);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(n,null)},p(c,[h]){if(h&1){s=ea(c[0]);let f;for(f=0;f<s.length;f+=1){const u=Ca(c,s,f);o[f]?o[f].p(u,h):(o[f]=Aa(u),o[f].c(),o[f].m(n,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=s.length}},i:Oe,o:Oe,d(c){c&&m(e),Va(o,c)}}}function Mn(i,e,n){let a,{mod:t}=e,{state:r}=e;return i.$$set=s=>{"mod"in s&&n(1,t=s.mod),"state"in s&&n(2,r=s.state)},i.$$.update=()=>{i.$$.dirty&6&&n(0,a=za.map(s=>{let o=r.modWeights.get(t.key);return{active:s===o,weight:s,href:He+"/?"+ja(r,t.key,s)}}))},[a,t,r]}class Rn extends Ia{constructor(e){super(),Ga(this,e,Mn,An,Wa,{mod:1,state:2})}}const{document:ha}=dn;function Ma(i,e,n){const a=i.slice();return a[18]=e[n],a}function Ra(i){let e,n;return{c(){e=y("a"),n=H("X"),this.h()},l(a){e=k(a,"A",{class:!0,href:!0});var t=E(e);n=P(t,"X"),t.forEach(m),this.h()},h(){l(e,"class","absolute right-0 top-0 h-full text-gray-600 px-2 flex items-center"),l(e,"href",i[4])},m(a,t){p(a,e,t),g(e,n)},p(a,t){t&16&&l(e,"href",a[4])},d(a){a&&m(e)}}}function _n(i){let e,n=i[5].length+"",a,t,r=Je.length+"",s,o;return{c(){e=H("Showing "),a=H(n),t=H(" of "),s=H(r),o=H(" mods.")},l(c){e=P(c,"Showing "),a=P(c,n),t=P(c," of "),s=P(c,r),o=P(c," mods.")},m(c,h){p(c,e,h),p(c,a,h),p(c,t,h),p(c,s,h),p(c,o,h)},p(c,h){h&32&&n!==(n=c[5].length+"")&&je(a,n)},d(c){c&&(m(e),m(a),m(t),m(s),m(o))}}}function xn(i){let e,n,a=i[6]&&_a(i);return{c(){e=H("Showing "),a&&a.c(),n=Pe()},l(t){e=P(t,"Showing "),a&&a.l(t),n=Pe()},m(t,r){p(t,e,r),a&&a.m(t,r),p(t,n,r)},p(t,r){t[6]?a?a.p(t,r):(a=_a(t),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},d(t){t&&(m(e),m(n)),a&&a.d(t)}}}function _a(i){let e,n,a,t=i[6]!==1&&xa();return{c(){e=H(i[6]),n=H(" selected mod"),t&&t.c(),a=Pe()},l(r){e=P(r,i[6]),n=P(r," selected mod"),t&&t.l(r),a=Pe()},m(r,s){p(r,e,s),p(r,n,s),t&&t.m(r,s),p(r,a,s)},p(r,s){s&64&&je(e,r[6]),r[6]!==1?t||(t=xa(),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},d(r){r&&(m(e),m(n),m(a)),t&&t.d(r)}}}function xa(i){let e;return{c(){e=H("s")},l(n){e=P(n,"s")},m(n,a){p(n,e,a)},d(n){n&&m(e)}}}function Ln(i){let e;return{c(){e=H("View all mods")},l(n){e=P(n,"View all mods")},m(n,a){p(n,e,a)},p:Oe,d(n){n&&m(e)}}}function Tn(i){let e,n,a,t,r=i[6]!==1&&La();return{c(){e=H("View "),n=H(i[6]),a=H(" selected mod"),r&&r.c(),t=Pe()},l(s){e=P(s,"View "),n=P(s,i[6]),a=P(s," selected mod"),r&&r.l(s),t=Pe()},m(s,o){p(s,e,o),p(s,n,o),p(s,a,o),r&&r.m(s,o),p(s,t,o)},p(s,o){o&64&&je(n,s[6]),s[6]!==1?r||(r=La(),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},d(s){s&&(m(e),m(n),m(a),m(t)),r&&r.d(s)}}}function La(i){let e;return{c(){e=H("s")},l(n){e=P(n,"s")},m(n,a){p(n,e,a)},d(n){n&&m(e)}}}function Ta(i){let e,n,a,t,r,s=i[18].name+"",o,c,h,f,u,B,F=i[7](i[18].description)+"",j,J,K,M,Y,C,N,w,R,_,x,q,L;return x=new Rn({props:{mod:i[18],state:i[0]}}),{c(){e=y("div"),n=y("div"),a=y("div"),t=y("h3"),r=y("a"),o=H(s),f=I(),u=y("div"),B=new Ja(!1),J=I(),K=y("div"),M=y("a"),Y=y("div"),C=I(),N=y("div"),_=I(),$a(x.$$.fragment),this.h()},l(v){e=k(v,"DIV",{class:!0});var T=E(e);n=k(T,"DIV",{class:!0});var b=E(n);a=k(b,"DIV",{class:!0});var me=E(a);t=k(me,"H3",{class:!0});var he=E(t);r=k(he,"A",{href:!0});var U=E(r);o=P(U,s),U.forEach(m),he.forEach(m),f=G(me),u=k(me,"DIV",{class:!0});var Fe=E(u);B=en(Fe,!1),Fe.forEach(m),me.forEach(m),J=G(b),K=k(b,"DIV",{});var ge=E(K);M=k(ge,"A",{href:!0,class:!0});var W=E(M);Y=k(W,"DIV",{class:!0,style:!0}),E(Y).forEach(m),C=G(W),N=k(W,"DIV",{class:!0,style:!0}),E(N).forEach(m),W.forEach(m),ge.forEach(m),b.forEach(m),_=G(T),an(x.$$.fragment,T),T.forEach(m),this.h()},h(){l(r,"href",c=i[18].href),l(t,"class",h=ee(de("text-xl font-semibold mb-1 ",{"line-through":i[0].modWeights.get(i[18].key)===-1}))+" svelte-px2vto"),B.a=null,l(u,"class",j=ee(de("flex gap-1.5 flex-col ",{"line-through":i[0].modWeights.get(i[18].key)===-1}))+" svelte-px2vto"),l(a,"class","pe-1"),l(Y,"class","absolute bg-center bg-contain z-10 bg-no-repeat w-full h-full top-0 left-0"),l(Y,"style","background-image: url(./notables/frame.png)"),l(N,"class","relative bg-center z-0 bg-no-repeat w-16 h-16 top-0 left-0"),l(N,"style",w=`background-size: 71% auto; background-image: url(./notables/${i[18].image}.png)`),l(M,"href",R=i[18].href),l(M,"class","relative"),l(n,"class","grid grid-cols-[1fr_min-content] mb-3"),l(e,"class",q=ee(de("border-2 rounded px-3 py-3 mb-4 ",{"border-blue-200 text-white bg-slate-800":i[0].modWeights.has(i[18].key),"border-gray-800 text-gray-300":!i[0].modWeights.has(i[18].key)}))+" svelte-px2vto")},m(v,T){p(v,e,T),g(e,n),g(n,a),g(a,t),g(t,r),g(r,o),g(a,f),g(a,u),B.m(F,u),g(n,J),g(n,K),g(K,M),g(M,Y),g(M,C),g(M,N),g(e,_),nn(x,e,null),L=!0},p(v,T){(!L||T&32)&&s!==(s=v[18].name+"")&&je(o,s),(!L||T&32&&c!==(c=v[18].href))&&l(r,"href",c),(!L||T&33&&h!==(h=ee(de("text-xl font-semibold mb-1 ",{"line-through":v[0].modWeights.get(v[18].key)===-1}))+" svelte-px2vto"))&&l(t,"class",h),(!L||T&32)&&F!==(F=v[7](v[18].description)+"")&&B.p(F),(!L||T&33&&j!==(j=ee(de("flex gap-1.5 flex-col ",{"line-through":v[0].modWeights.get(v[18].key)===-1}))+" svelte-px2vto"))&&l(u,"class",j),(!L||T&32&&w!==(w=`background-size: 71% auto; background-image: url(./notables/${v[18].image}.png)`))&&l(N,"style",w),(!L||T&32&&R!==(R=v[18].href))&&l(M,"href",R);const b={};T&32&&(b.mod=v[18]),T&1&&(b.state=v[0]),x.$set(b),(!L||T&33&&q!==(q=ee(de("border-2 rounded px-3 py-3 mb-4 ",{"border-blue-200 text-white bg-slate-800":v[0].modWeights.has(v[18].key),"border-gray-800 text-gray-300":!v[0].modWeights.has(v[18].key)}))+" svelte-px2vto"))&&l(e,"class",q)},i(v){L||(Ze(x.$$.fragment,v),L=!0)},o(v){ga(x.$$.fragment,v),L=!1},d(v){v&&m(e),tn(x)}}}function Ha(i){let e,n="No mods selected.";return{c(){e=y("div"),e.textContent=n,this.h()},l(a){e=k(a,"DIV",{class:!0,"data-svelte-h":!0}),Be(e)!=="svelte-1hseqev"&&(e.textContent=n),this.h()},h(){l(e,"class","text-center text-gray-400")},m(a,t){p(a,e,t)},d(a){a&&m(e)}}}function Pa(i){let e,n="No mods found.";return{c(){e=y("div"),e.textContent=n,this.h()},l(a){e=k(a,"DIV",{class:!0,"data-svelte-h":!0}),Be(e)!=="svelte-m0goju"&&(e.textContent=n),this.h()},h(){l(e,"class","text-center text-gray-400")},m(a,t){p(a,e,t)},d(a){a&&m(e)}}}function Ba(i){let e,n="Clear All Selections";return{c(){e=y("a"),e.textContent=n,this.h()},l(a){e=k(a,"A",{class:!0,href:!0,"data-svelte-h":!0}),Be(e)!=="svelte-y0370s"&&(e.textContent=n),this.h()},h(){l(e,"class","text-red-300"),l(e,"href","/"+He)},m(a,t){p(a,e,t)},d(a){a&&m(e)}}}function Hn(i){let e,n="Open Trade Link";return{c(){e=y("button"),e.textContent=n,this.h()},l(a){e=k(a,"BUTTON",{class:!0,"data-svelte-h":!0}),Be(e)!=="svelte-1u1abfs"&&(e.textContent=n),this.h()},h(){e.disabled=!0,l(e,"class","trade-link svelte-px2vto")},m(a,t){p(a,e,t)},p:Oe,d(a){a&&m(e)}}}function Pn(i){let e,n;return{c(){e=y("a"),n=H("Open Trade Link"),this.h()},l(a){e=k(a,"A",{href:!0,target:!0,class:!0});var t=E(e);n=P(t,"Open Trade Link"),t.forEach(m),this.h()},h(){l(e,"href",i[2]),l(e,"target","_blank"),l(e,"class","trade-link svelte-px2vto")},m(a,t){p(a,e,t),g(e,n)},p(a,t){t&4&&l(e,"href",a[2])},d(a){a&&m(e)}}}function Bn(i){let e,n,a,t,r="Megalomaniac Trade Search Tool",s,o,c,h,f,u,B,F,j,J,K,M,Y,C,N,w,R,_,x,q,L,v,T,b=i[1]&&Ra(i);function me(d,S){return d[0].view==="selected"?xn:_n}let he=me(i),U=he(i);function Fe(d,S){return d[0].view==="search"?Tn:Ln}let ge=Fe(i),W=ge(i),fe=ea(i[5]),A=[];for(let d=0;d<fe.length;d+=1)A[d]=Ta(Ma(i,fe,d));const Ua=d=>ga(A[d],1,1,()=>{A[d]=null});let V=i[0].view==="selected"&&i[6]===0&&Ha(),z=i[0].view==="search"&&i[5].length===0&&Pa(),O=i[0].view==="selected"&&i[6]>1&&Ba();function fa(d,S){return d[6]>0?Pn:Hn}let Ne=fa(i),Z=Ne(i);return{c(){e=y("meta"),n=I(),a=y("div"),t=y("h1"),t.textContent=r,s=I(),o=y("form"),c=y("input"),u=I(),b&&b.c(),B=I(),F=y("div"),j=y("div"),U.c(),J=I(),K=y("div"),M=y("a"),W.c(),Y=I(),C=y("div");for(let d=0;d<A.length;d+=1)A[d].c();N=I(),V&&V.c(),w=I(),z&&z.c(),R=I(),O&&O.c(),_=I(),x=y("div"),q=y("section"),Z.c(),this.h()},l(d){const S=Qa("svelte-kvfzwq",ha.head);e=k(S,"META",{name:!0,content:!0}),S.forEach(m),n=G(d),a=k(d,"DIV",{class:!0});var D=E(a);t=k(D,"H1",{class:!0,"data-svelte-h":!0}),Be(t)!=="svelte-1uzh36l"&&(t.textContent=r),s=G(D),o=k(D,"FORM",{method:!0,action:!0,class:!0});var ue=E(o);c=k(ue,"INPUT",{class:!0,autocomplete:!0,spellcheck:!0,type:!0,name:!0,placeholder:!0}),u=G(ue),b&&b.l(ue),ue.forEach(m),B=G(D),F=k(D,"DIV",{class:!0});var qe=E(F);j=k(qe,"DIV",{});var ua=E(j);U.l(ua),ua.forEach(m),J=G(qe),K=k(qe,"DIV",{});var pa=E(K);M=k(pa,"A",{class:!0,href:!0});var ya=E(M);W.l(ya),ya.forEach(m),pa.forEach(m),qe.forEach(m),D.forEach(m),Y=G(d),C=k(d,"DIV",{class:!0});var re=E(C);for(let aa=0;aa<A.length;aa+=1)A[aa].l(re);N=G(re),V&&V.l(re),w=G(re),z&&z.l(re),R=G(re),O&&O.l(re),re.forEach(m),_=G(d),x=k(d,"DIV",{id:!0,class:!0});var ka=E(x);q=k(ka,"SECTION",{class:!0});var Sa=E(q);Z.l(Sa),Sa.forEach(m),ka.forEach(m),this.h()},h(){ha.title="Megalomaniac Trade Search - Path of Exile Tool",l(e,"name","description"),l(e,"content","Find the perfect Megalomaniac for your build."),l(t,"class","text-2xl bold mb-1"),c.disabled=h=i[0].view!=="search",l(c,"class",f=ee("outline-none w-full text-gray-800 ps-2 pe-8 py-1 "+(i[0].view==="selected"?"opacity-50":""))+" svelte-px2vto"),l(c,"autocomplete","off"),l(c,"spellcheck","false"),c.value=i[1],l(c,"type","text"),l(c,"name","search"),l(c,"placeholder","Search"),l(o,"method","GET"),l(o,"action","/"),l(o,"class","relative"),l(M,"class","text-cyan-300 hover:text-cyan-200 cursor-pointer"),l(M,"href",i[3]),l(F,"class","text-sm text-gray-300 py-2 flex justify-between"),l(a,"class","top-0 sticky bg-slate-900 z-30"),l(C,"class",""),l(q,"class","max-w-2xl w-full py-3 px-2"),l(x,"id","footer"),l(x,"class","fixed bottom-0 z-30 left-0 w-full bg-gray-700 flex justify-center")},m(d,S){g(ha.head,e),p(d,n,S),p(d,a,S),g(a,t),g(a,s),g(a,o),g(o,c),g(o,u),b&&b.m(o,null),g(a,B),g(a,F),g(F,j),U.m(j,null),g(F,J),g(F,K),g(K,M),W.m(M,null),p(d,Y,S),p(d,C,S);for(let D=0;D<A.length;D+=1)A[D]&&A[D].m(C,null);g(C,N),V&&V.m(C,null),g(C,w),z&&z.m(C,null),g(C,R),O&&O.m(C,null),p(d,_,S),p(d,x,S),g(x,q),Z.m(q,null),L=!0,v||(T=Xa(c,"input",i[8]),v=!0)},p(d,[S]){if((!L||S&1&&h!==(h=d[0].view!=="search"))&&(c.disabled=h),(!L||S&1&&f!==(f=ee("outline-none w-full text-gray-800 ps-2 pe-8 py-1 "+(d[0].view==="selected"?"opacity-50":""))+" svelte-px2vto"))&&l(c,"class",f),(!L||S&2&&c.value!==d[1])&&(c.value=d[1]),d[1]?b?b.p(d,S):(b=Ra(d),b.c(),b.m(o,null)):b&&(b.d(1),b=null),he===(he=me(d))&&U?U.p(d,S):(U.d(1),U=he(d),U&&(U.c(),U.m(j,null))),ge===(ge=Fe(d))&&W?W.p(d,S):(W.d(1),W=ge(d),W&&(W.c(),W.m(M,null))),(!L||S&8)&&l(M,"href",d[3]),S&161){fe=ea(d[5]);let D;for(D=0;D<fe.length;D+=1){const ue=Ma(d,fe,D);A[D]?(A[D].p(ue,S),Ze(A[D],1)):(A[D]=Ta(ue),A[D].c(),Ze(A[D],1),A[D].m(C,N))}for(rn(),D=fe.length;D<A.length;D+=1)Ua(D);Za()}d[0].view==="selected"&&d[6]===0?V||(V=Ha(),V.c(),V.m(C,w)):V&&(V.d(1),V=null),d[0].view==="search"&&d[5].length===0?z||(z=Pa(),z.c(),z.m(C,R)):z&&(z.d(1),z=null),d[0].view==="selected"&&d[6]>1?O||(O=Ba(),O.c(),O.m(C,null)):O&&(O.d(1),O=null),Ne===(Ne=fa(d))&&Z?Z.p(d,S):(Z.d(1),Z=Ne(d),Z&&(Z.c(),Z.m(q,null)))},i(d){if(!L){for(let S=0;S<fe.length;S+=1)Ze(A[S]);L=!0}},o(d){A=A.filter(Boolean);for(let S=0;S<A.length;S+=1)ga(A[S]);L=!1},d(d){d&&(m(n),m(a),m(Y),m(C),m(_),m(x)),m(e),b&&b.d(),U.d(),W.d(),Va(A,d),V&&V.d(),z&&z.d(),O&&O.d(),Z.d(),v=!1,T()}}}function Fa(i){return[i.search,i.view].join("-")}function Fn(i,e,n){let a,t,r,s,o,c,h;Ka(i,ln,w=>n(15,h=w));let f=window.location.search,u=ma(f),B=u.search,F,j,J=Fa(u);function K(w){return console.log("searchPieces",c),"<div>"+w.split(/\n/g).map(R=>(c.length&&c.forEach(_=>{_.wanted&&(R=R.replace(new RegExp(_.phrase,"gi"),x=>'<span class="text-yellow-400">'+x+"</span>"))}),R)).join("</div><div>")+"</div>"}let M=0;sn(()=>{M=window.scrollY}),Ya(()=>{document.querySelector('input[name="search"]').focus()});function Y(){f=window.location.search;const w=ma(f);n(0,u=w),n(1,B=w.search);const R=Fa(w);R!==J?window.scrollTo(0,0):window.scrollTo(0,M),J=R}cn(()=>{Y()});function C(w){let R;return w.view==="selected"?R=Je.filter(_=>!!w.modWeights.get(_.key)):R=wn(Je,w.search).map(_=>_),R.map(_=>{const x=w.modWeights.get(_.key),q=He+"/?"+ja(u,_.key,x||5);return{..._,href:q}})}function N(w){clearTimeout(j),j=setTimeout(()=>{const R=w.target;n(1,B=R.value),n(0,u.search=B,u),n(5,t=C(u)),clearTimeout(F),B.length&&window.scrollTo(0,0),F=setTimeout(()=>{const _=ma(h.url.searchParams.toString());_.search=B,on(He+"/?"+$e(_),{noScroll:!0,keepFocus:!0})},250)},25)}return i.$$.update=()=>{i.$$.dirty&1&&n(6,a=Array.from(u.modWeights.values()).filter(w=>!!w).length),i.$$.dirty&1&&n(5,t=C(u)),i.$$.dirty&1&&n(4,r=He+"/?"+$e({...u,search:""}).toString()),i.$$.dirty&1&&n(3,s=He+"/?"+$e({...u,view:u.view==="selected"?"search":"selected"}).toString()),i.$$.dirty&1&&n(2,o=kn(Je,u)),i.$$.dirty&1&&(c=Na(u.search))},[u,B,o,s,r,t,a,K,N]}class On extends Ia{constructor(e){super(),Ga(this,e,Fn,Bn,Wa,{})}}export{On as component,zn as universal};
