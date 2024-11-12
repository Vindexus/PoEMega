import{s as Wa,n as Ge,x as J,c as Ya,o as Qa}from"../chunks/scheduler.CkfNxMIO.js";import{S as Ia,i as Ga,e as w,s as P,c as D,a as M,y as Te,f as B,d as m,k as l,g as p,h as u,z as Va,A as va,t as T,b as H,j as Ve,B as wa,C as Da,D as Xa,E as Za,l as Xe,o as Ja,m as ha,H as $a,u as en,F as an,v as nn,w as tn,x as rn,q as sn,n as Le}from"../chunks/index.Cg1qE1rz.js";import{b as xe,a as cn,c as on,g as ln}from"../chunks/entry.BsbaRrb3.js";import{p as dn}from"../chunks/stores.B_MNgehS.js";const mn=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function $e(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}const hn=!1,jn=Object.freeze(Object.defineProperty({__proto__:null,ssr:hn},Symbol.toStringTag,{value:"Module"})),za=[-1,1,2,3,5,8,13],gn=13,Ea="shield-dmg",$="max-life",De="area-dmg",aa="bow-dmg",re="channel-dmg",Pe="chaos-res",qe="cold-res",Ue="dodge-atk",Be="fire-res",se="heralds",Z="inc-attack-dmg",ge="inc-crit-chance",ee="inc-non-dmg-ailments",Ee="inc-phys-dmg",be="projectile-dmg",ce="spell-dmg",oe="totem",fe="traps-and-mines",Ce="two-handed-melee-dmg",na="inc-cold-dmg",Ae="inc-minion-life",j="curse-effect",ue="phys-dot",ia="axe-and-sword-dmg",Fe="fire-dot",Me="brand-dmg",pe="dot",ye="inc-minion-dmg",We="lightning-res",ae="max-mana",Se="dual-wield-dmg",Re="es",_e="inc-ele-dmg",ta="inc-fire-dmg",ke="inc-warcry",ve="inc-chaos-dmg",N="aura-effect",ra="minion-dmg-heralds",sa="dagger-and-claw",Ke="life-mana-flask",we="armour",ne="block-atk",Ye="block-spell",ba="flask-duration",Qe="chaos-dot",ca="wand-dmg",oa="mace-and-staff-dmg",la="inc-lightning-dmg",Ie="evasion",Oa={adr:{key:"adr",searchStat:"4022743870",name:"Adrenaline",description:`8% increased maximum Life
6% increased Attack Speed while Leeching`,image:$},adg:{key:"adg",searchStat:"1625939562",image:Ea,name:"Advance Guard",description:`Attack Skills deal 30% increased Damage while holding a Shield
5% increased Movement Speed while holding a Shield
Ignore all Movement Penalties from Armour`},aer:{key:"aer",searchStat:"3848677307",name:"Aerialist",image:Ue,description:`+10% chance to Suppress Spell Damage
5% increased Dexterity`},ard:{key:"ard",searchStat:"4120556534",name:"Aerodynamics",image:be,description:`10% increased Projectile Damage
10% increased Projectile Speed
Projectiles Pierce an additional Target`},aod:{key:"aod",searchStat:"3122491961",image:se,name:"Agent of Destruction",description:`25% increased Elemental Damage while affected by a Herald
10% chance to Freeze, Shock and Ignite while affected by a Herald`},agd:{key:"agd",searchStat:"4154008618",name:"Aggressive Defence",image:Z,description:`Fortifying Hits grant 60% increased Fortification
30% increased Fortification Duration
20% increased Damage with Attack Skills while Fortified`},alc:{key:"alc",searchStat:"2912949210",name:"Alchemist",image:qe,description:`+20% to Cold Resistance
8% increased Attack and Cast Speed
20% increased Life Recovery from Flasks`},ane:{key:"ane",searchStat:"957679205",name:"Ancestral Echo",image:oe,description:`20% increased Totem Placement speed
10% increased Attack and Cast Speed if you've summoned a Totem Recently`},ang:{key:"ang",searchStat:"2387747995",name:"Ancestral Guidance",image:oe,description:`Totems' Action Speed cannot be modified to below Base Value
Totems Regenerate 2% of Life per second`},ani:{key:"ani",searchStat:"77045106",name:"Ancestral Inspiration",image:oe,description:`Gain Arcane Surge when you Summon a Totem
Spells cast by Totems deal 25% increased Damage`},anm:{key:"anm",searchStat:"3998316",name:"Ancestral Might",image:oe,description:`15% increased Totem Life
30% increased Totem Duration
30% increased Totem Damage if you haven't Summoned a Totem in the past 2 seconds`},anp:{key:"anp",searchStat:"3746703776",name:"Ancestral Preservation",image:oe,description:`Totems have 15% additional Physical Damage Reduction
Totems gain +25% to Chaos Resistance
Totems gain +20% to all Elemental Resistances`},anr:{key:"anr",searchStat:"3294884567",name:"Ancestral Reach",image:oe,description:`25% increased Totem Damage
25% increased Totem Placement speed
25% increased Totem Placement range`},ant:{key:"ant",searchStat:"2622946553",name:"Antifreeze",image:qe,description:`+20% to Cold Resistance
30% chance to Avoid being Frozen
+1% to maximum Cold Resistance`},anv:{key:"anv",searchStat:"774369953",name:"Antivenom",image:Pe,description:`+23% to Chaos Resistance
30% chance to Avoid being Poisoned
+1% to maximum Chaos Resistance`},ara:{key:"ara",searchStat:"393565679",name:"Arcane Adept",image:re,description:`Channelling Skills deal 20% increased Damage
5% increased Attack and Cast Speed while Channelling
Gain Arcane Surge after Channelling for 1 second`},arh:{key:"arh",searchStat:"3901992019",name:"Arcane Heroism",image:ce,description:`10% chance to gain Arcane Surge when you Hit a Unique enemy
30% increased Effect of Arcane Surge on you`},arp:{key:"arp",searchStat:"2043503530",image:fe,name:"Arcane Pyrotechnics",description:`20% increased Trap Damage
20% increased Mine Damage
Gain Arcane Surge when your Trap is Triggered by an Enemy
Gain Arcane Surge when your Mine is Detonated targeting an Enemy`},ars:{key:"ars",searchStat:"3212859169",name:"Arcing Shot",image:aa,description:`Arrows gain Damage as they travel farther, dealing up to 50% increased Damage with Hits to targets
Arrows gain Critical Strike Chance as they travel farther, up to 100% increased Critical Strike Chance`},asd:{key:"asd",searchStat:"4222265138",name:"Assert Dominance",image:De,description:"25% increased Area of Effect if you've Killed at least 5 Enemies Recently"},asa:{key:"asa",searchStat:"2428334013",name:"Astonishing Affliction",image:ee,description:`20% increased Effect of Non-Damaging Ailments
20% increased Damage with Hits and Ailments against Enemies affected by Ailments
20% increased Duration of Elemental Ailments on Enemies`},bop:{key:"bop",searchStat:"3084359503",name:"Basics of Pain",image:ge,description:`20% increased Damage
30% increased Critical Strike Chance`},bat:{key:"bat",searchStat:"4188581520",name:"Battle-Hardened",image:Ee,description:`35% increased Physical Damage
30% increased Evasion Rating and Armour`},bad:{key:"bad",searchStat:"1499057234",name:"Battlefield Dominator",image:Ce,description:`15% increased Area of Effect if you've Stunned an Enemy with a Two Handed Melee Weapon Recently
Attacks with Two Handed Weapons deal 25% increased Damage with Hits and Ailments
10% reduced Enemy Stun Threshold`},bsm:{key:"bsm",searchStat:"1127706436",name:"Blacksmith",image:Be,description:`+20% to Fire Resistance
25% increased Armour
0.4% of Fire Damage Leeched as Life`},bls:{key:"bls",searchStat:"1085167979",name:"Blanketed Snow",image:na,description:"Damage Penetrates 10% Cold Resistance against Chilled Enemies"},bfr:{key:"bfr",searchStat:"693808153",name:"Blast-Freeze",image:ee,description:`20% increased Cold Damage
Freezes you inflict spread to other Enemies within 1.2 metres`},ble:{key:"ble",searchStat:"775689239",name:"Blessed",image:Pe,description:`+13% to Chaos Resistance
6% increased maximum Life
10% increased maximum Mana`},blr:{key:"blr",searchStat:"1424794574",name:"Blessed Rebirth",image:Ae,description:`Minions have 20% increased maximum Life
Minions created Recently cannot be Damaged`},blc:{key:"blc",searchStat:"3758712376",name:"Blizzard Caller",image:j,description:`Frostbite can affect Hexproof Enemies
30% increased Duration of Freezes you inflict on Cursed Enemies`},bla:{key:"bla",searchStat:"2284771334",name:"Blood Artist",image:ue,description:`+20 to Strength
+6% to Physical Damage over Time Multiplier if you've Spent Life Recently`},bsc:{key:"bsc",searchStat:"3967765261",name:"Bloodscent",image:ia,description:"Gain 2 Rage on Hit with Axes or Swords"},blo:{key:"blo",searchStat:"1612414696",name:"Blowback",image:Fe,description:`Ignites you inflict deal Damage 8% faster
10% chance to Ignite`},bod:{key:"bod",searchStat:"791125124",name:"Bodyguards",image:Ae,description:`Minions have 10% increased maximum Life
Minions have 10% chance to Knock Enemies Back on Hit with Attacks`},boc:{key:"boc",searchStat:"2449392400",name:"Born of Chaos",image:Pe,description:"+3% to maximum Chaos Resistance"},brl:{key:"brl",searchStat:"3198006994",name:"Brand Loyalty",image:Me,description:"Enemies take 3% increased Damage for each of your Brands Attached to them"},bfp:{key:"bfp",searchStat:"3250272113",name:"Brewed for Potency",image:pe,description:`24% increased Damage over Time
20% increased Life and Mana Recovery from Flasks
10% increased Flask Charges gained`},bro:{key:"bro",searchStat:"2205982416",name:"Broadside",image:aa,description:"Bow Skills have 25% increased Area of Effect"},bwd:{key:"bwd",searchStat:"2900833792",name:"Brush with Death",image:pe,description:`+5% to Damage over Time Multiplier
Recover 1% of Life on Kill
Recover 1% of Energy Shield on Kill`},bri:{key:"bri",searchStat:"2068574831",name:"Brutal Infamy",image:Ce,description:`Attacks with Two Handed Melee Weapons deal 20% increased Damage with Hits and Ailments
40% increased Damage with Hits and Ailments against Unique Enemies`},bup:{key:"bup",searchStat:"2008682345",name:"Burden Projection",image:ce,description:`30% increased Spell Damage
8% chance to Knock Enemies Back on Hit with Spell Damage`},bub:{key:"bub",searchStat:"4199056048",name:"Burning Bright",image:Fe,description:`25% increased Burning Damage
8% increased Area of Effect`},cal:{key:"cal",searchStat:"3359207393",name:"Calamitous",image:Z,description:`30% increased Elemental Damage with Attack Skills
10% chance to Freeze, Shock and Ignite
15% increased Effect of Non-Damaging Ailments`},ctts:{key:"ctts",searchStat:"3317068522",name:"Call to the Slaughter",image:ye,description:`Minions deal 15% increased Damage
Minions created Recently have 30% increased Movement Speed
Minions created Recently have 10% increased Attack and Cast Speed`},cap:{key:"cap",searchStat:"4025536654",name:"Capacitor",image:We,description:`30% reduced Effect of Shock on you
Unaffected by Shocked Ground
You cannot be Shocked if you've been Shocked Recently`},cah:{key:"cah",searchStat:"456502758",name:"Careful Handling",image:fe,description:`15% increased Trap Damage
15% increased Mine Damage
4% increased maximum Life
6% increased maximum Mana`},chp:{key:"chp",searchStat:"2834490860",name:"Chilling Presence",image:ee,description:`Nearby Enemies are Chilled
`},cha:{key:"cha",searchStat:"968069586",name:"Chip Away",image:Me,description:`Brand Recall has 4% increased Cooldown Recovery Rate per Brand, up to a maximum of 40%
Brand Recall grants 20% increased Brand Attachment range to recalled Brands`},cio:{key:"cio",searchStat:"2129392647",image:pe,name:"Circling Oblivion",description:`25% increased Damage over Time
15% increased Duration of Ailments on Enemies`},cop:{key:"cop",searchStat:"684087686",name:"Clarity of Purpose",image:ae,description:`15% increased maximum Mana
30% increased Mana Regeneration Rate`},coc:{key:"coc",searchStat:"1274505521",name:"Cold Conduction",image:ee,description:`25% increased Effect of Lightning Ailments you inflict on Chilled Enemies
25% increased Effect of Cold Ailments you inflict on Shocked Enemies`},cttc:{key:"cttc",searchStat:"744783843",name:"Cold to the Core",image:na,description:`1% increased Cold Damage per 25 Strength
1% increased Cold Damage per 25 Dexterity
1% increased Cold Damage per 25 Intelligence`},cok:{key:"cok",searchStat:"836566759",name:"Cold-Blooded Killer",image:na,description:`+5% to Cold Damage over Time Multiplier
Recover 2% of Life on Killing a Chilled Enemy`},cor:{key:"cor",searchStat:"3122505794",name:"Combat Rhythm",image:Se,description:`10% increased Attack Speed if you've Hit with your Main Hand Weapon Recently
10% increased Movement Speed if you've Hit with your Off Hand Weapon Recently`},coi:{key:"coi",searchStat:"4018305528",name:"Compound Injury",image:ue,description:"35% increased Damage with Bleeding you inflict on Maimed Enemies"},cow:{key:"cow",searchStat:"4105031548",name:"Conjured Wall",image:ce,description:`25% increased Spell Damage
+8% Chance to Block Spell Damage if you've Cast a Spell Recently`},coe:{key:"coe",searchStat:"2083777017",name:"Conservation of Energy",image:Re,description:`10% increased maximum Energy Shield
0.3% of Spell Damage Leeched as Energy Shield`},coa:{key:"coa",searchStat:"2938895712",name:"Cooked Alive",image:Fe,description:`15% chance to Ignite
Enemies Ignited by you have -5% to Fire Resistance`},cre:{key:"cre",searchStat:"1777139212",name:"Corrosive Elements",image:_e,description:`Fire Skills have a 25% chance to apply Fire Exposure on Hit
Cold Skills have a 25% chance to apply Cold Exposure on Hit
Lightning Skills have a 25% chance to apply Lightning Exposure on Hit
15% increased Elemental Damage`},crm:{key:"crm",searchStat:"1153801980",name:"Cremator",image:ta,description:`30% increased Fire Damage
Ignited Enemies Killed by your Hits are destroyed`},crw:{key:"crw",searchStat:"1821748178",name:"Cry Wolf",image:ke,description:`Exerted Attacks deal 30% increased Damage
20% increased total Power counted by Warcries`},cul:{key:"cul",searchStat:"2026112251",name:"Cult-Leader",image:se,description:"Minions deal 35% increased Damage while you are affected by a Herald"},dri:{key:"dri",searchStat:"2534405517",name:"Daring Ideas",image:ae,description:`18% increased maximum Mana
0.4% of Attack Damage Leeched as Mana`},dai:{key:"dai",searchStat:"1603621602",name:"Dark Ideation",image:ve,description:"2% increased Chaos Damage per 100 maximum Mana, up to a maximum of 80%"},dkm:{key:"dkm",searchStat:"3784610129",name:"Dark Messenger",image:se,description:`Herald Skills deal 20% increased Damage
Herald Skills have 25% increased Area of Effect`},dam:{key:"dam",searchStat:"846491278",name:"Darting Movements",image:Ue,description:`+12% chance to Suppress Spell Damage while moving
3% increased Movement Speed`},der:{key:"der",searchStat:"1013470938",name:"Deadly Repartee",image:Se,description:`Attack Skills deal 25% increased Damage while Dual Wielding
+6% Chance to Block Attack Damage while Dual Wielding
30% increased Attack Critical Strike Chance while Dual Wielding`},dec:{key:"dec",searchStat:"1703766309",name:"Deep Chill",image:ee,description:`+5% to Cold Damage over Time Multiplier
30% increased Effect of Cold Ailments`},dea:{key:"dea",searchStat:"3860179422",name:"Destructive Aspect",image:N,description:`Pride has 50% increased Mana Reservation Efficiency
12% increased Area of Effect of Aura Skills`},dev:{key:"dev",searchStat:"3711553948",name:"Devastator",image:Z,description:`20% increased Attack Damage
20% increased Damage with Ailments from Attack Skills
Enemies Killed with Attack Hits have a 15% chance to Explode, dealing a tenth of their Life as Physical Damage`},dis:{key:"dis",searchStat:"3177526694",name:"Disciples",image:ra,description:`Minions deal 20% increased Damage while you are affected by a Herald
Summoned Sentinels have 25% increased Cooldown Recovery Rate`},div:{key:"div",searchStat:"183591019",name:"Disease Vector",image:sa,description:`+6% to Damage over Time Multiplier for Poison while wielding a Claw or Dagger
Enemies Poisoned by you cannot Regenerate Life`},did:{key:"did",searchStat:"3206911230",name:"Disorienting Display",image:_e,description:`25% increased Elemental Damage
10% chance to Blind nearby Enemies when you use an Elemental Skill`},diw:{key:"diw",searchStat:"3351136461",name:"Disorienting Wounds",image:ue,description:`25% increased Damage with Bleeding
25% chance to Blind with Hits against Bleeding Enemies`},dip:{key:"dip",searchStat:"3652138990",name:"Distilled Perfection",image:Ke,description:`25% increased Life Recovery from Flasks
25% increased Mana Recovery from Flasks
10% increased Flask Effect Duration`},doa:{key:"doa",searchStat:"1381945089",name:"Doedre's Apathy",image:j,description:`Temporal Chains can affect Hexproof Enemies
Enemies you Curse are Unnerved`},dog:{key:"dog",searchStat:"2695848124",name:"Doedre's Gluttony",image:j,description:`Punishment can affect Hexproof Enemies
You have Culling Strike against Cursed Enemies`},dos:{key:"dos",searchStat:"462115791",name:"Doedre's Spite",image:j,description:`Enfeeble can affect Hexproof Enemies
35% increased Critical Strike Chance against Cursed Enemies`},dol:{key:"dol",searchStat:"228455793",name:"Doryani's Lesson",image:_e,description:`25% increased Elemental Damage
0.2% of Elemental Damage Leeched as Life`},drh:{key:"drh",searchStat:"1038955006",name:"Dragon Hunter",image:we,description:`+20% to Fire Resistance
30% increased Armour
15% chance to Defend with 200% of Armour`},drm:{key:"drm",searchStat:"3087667389",name:"Dread March",image:Ae,description:`Minions have 10% increased maximum Life
Minions have 10% additional Physical Damage Reduction
Minions have +10% to Chaos Resistance
Minions have 10% increased Movement Speed`},dtd:{key:"dtd",searchStat:"1911162866",name:"Drive the Destruction",image:Z,description:`0.8% of Attack Damage Leeched as Life
25% increased Attack Damage when on Full Life
Attacks have 10% chance to Maim on Hit`},eli:{key:"eli",searchStat:"3737604164",name:"Eldritch Inspiration",image:ve,description:`20% increased Chaos Damage
16% increased maximum Mana
20% increased Mana Regeneration Rate`},elp:{key:"elp",searchStat:"3950683692",name:"Electric Presence",image:N,description:`Wrath has 50% increased Mana Reservation Efficiency
20% increased Effect of Lightning Ailments`},elf:{key:"elf",searchStat:"289714529",name:"Elegant Form",image:Ue,description:`+10% chance to Suppress Spell Damage
20% chance to Avoid Elemental Ailments`},eme:{key:"eme",searchStat:"2032453153",name:"Empowered Envoy",image:se,description:`Herald Skills deal 40% increased Damage
20% increased Effect of Herald Buffs on you`},end:{key:"end",searchStat:"2150878631",name:"Endbringer",image:se,description:`20% increased Damage while affected by a Herald
5% increased Damage for each Herald affecting you`},enc:{key:"enc",searchStat:"2043284086",name:"Enduring Composure",image:we,description:`30% increased Armour
Gain 1 Endurance Charge every second if you've been Hit Recently`},enf:{key:"enf",searchStat:"2522970386",name:"Enduring Focus",image:re,description:`Channelling Skills deal 25% increased Damage
25% chance to gain an Endurance Charge each second while Channelling`},enw:{key:"enw",searchStat:"252724319",name:"Enduring Ward",image:ne,description:`20% chance to gain an Endurance Charge when you Block
+10% Chance to Block Attack Damage while at Maximum Endurance Charges`},efn:{key:"efn",searchStat:"2195518432",name:"Energy From Naught",image:Re,description:`+70 to maximum Energy Shield
15% increased Energy Shield Recharge Rate`},esr:{key:"esr",searchStat:"1096136223",name:"Essence Rush",image:ce,description:`0.3% of Spell Damage Leeched as Energy Shield
5% increased Attack and Cast Speed while Leeching Energy Shield
40% increased Damage while Leeching Energy Shield`},ets:{key:"ets",searchStat:"2144634814",name:"Eternal Suffering",image:ve,description:`25% increased Chaos Damage
50% chance to inflict Withered for two seconds on Hit if there are 5 or fewer Withered Debuffs on Enemy`},eve:{key:"eve",searchStat:"4291066912",name:"Evil Eye",image:j,description:"Enemies you Curse take 6% increased Damage"},exm:{key:"exm",searchStat:"394918362",name:"Expansive Might",image:oa,description:`Mace, Sceptre or Staff Attacks deal 20% increased Damage with Hits and Ailments
10% increased Area of Effect per second you've been stationary, up to a maximum of 50%`},exp:{key:"exp",searchStat:"2020075345",name:"Expendability",image:fe,description:"10% chance to throw up to 1 additional Trap or Mine"},exs:{key:"exs",searchStat:"2084371547",name:"Expert Sabotage",image:fe,description:`Mines have a 10% chance to be Detonated an Additional Time
Mines have 20% increased Detonation Speed`},exw:{key:"exw",searchStat:"50129423",name:"Exploit Weakness",image:j,description:`Vulnerability can affect Hexproof Enemies
Recover 2% of Life when you Kill a Cursed Enemy`},exf:{key:"exf",searchStat:"2017927451",name:"Explosive Force",image:ca,description:`Gain 10% of Wand Physical Damage as Extra Chaos Damage
Enemies Killed with Wand Hits have a 10% chance to Explode, dealing a quarter of their Life as Chaos Damage`},ext:{key:"ext",searchStat:"131358113",name:"Exposure Therapy",image:pe,description:`+5% to Damage over Time Multiplier
+30% Chaos Resistance against Damage Over Time`},eots:{key:"eots",searchStat:"3818661553",name:"Eye of the Storm",image:ge,description:`40% increased Critical Strike Chance
+10% to Damage over Time Multiplier for Ignite from Critical Strikes
20% increased Effect of non-Damaging Ailments you inflict with Critical Strikes`},ete:{key:"ete",searchStat:"392942015",name:"Eye to Eye",image:be,description:`25% increased Projectile Damage
Projectiles deal 35% increased Damage with Hits against nearby Enemies`},fob:{key:"fob",searchStat:"2484082827",name:"Fan of Blades",image:sa,description:`Attack Skills fire an additional Projectile while wielding a Claw or Dagger
20% increased Projectile Attack Damage with Claws or Daggers`},fnf:{key:"fnf",searchStat:"2918755450",name:"Fan the Flames",image:Fe,description:"Ignites you inflict spread to other Enemies within a Radius of 1.5 metres"},fas:{key:"fas",searchStat:"37078857",name:"Fasting",image:ba,description:`20% increased Flask Charges gained
10% increased Movement Speed while under no Flask Effects`},few:{key:"few",searchStat:"3134222965",name:"Fearsome Warrior",image:Ce,description:`Attacks with Two Handed Melee Weapons deal 25% increased Damage with Hits and Ailments
8% increased Area of Effect
25% chance to Intimidate nearby Enemies for 4 seconds on Melee Kill`},fof:{key:"fof",searchStat:"2396755365",name:"Feast of Flesh",image:$,description:`8% increased maximum Life
0.4% of Attack Damage Leeched as Life
Gain 10 Life per Enemy Hit with Attacks`},fef:{key:"fef",searchStat:"383245807",name:"Feasting Fiends",image:Ae,description:`Minions have 10% increased maximum Life
Minions deal 10% increased Damage
Minions Leech 0.4% of Damage as Life`},ftf:{key:"ftf",searchStat:"3944525413",name:"Feed the Fury",image:Z,description:`0.4% of Attack Damage Leeched as Life
30% increased Damage while Leeching
15% increased Attack Speed while Leeching`},fet:{key:"fet",searchStat:"1353571444",name:"Fettle",image:$,description:`10% increased maximum Life
+20 to maximum Life`},fia:{key:"fia",searchStat:"3188756614",name:"Fire Attunement",image:Be,description:`30% reduced Ignite Duration on you
Unaffected by Burning Ground
You cannot be Ignited if you've been Ignited Recently`},fls:{key:"fls",searchStat:"982290947",name:"Flexible Sentry",image:Ye,description:`+4% Chance to Block Attack Damage
4% Chance to Block Spell Damage
25% reduced Elemental Ailment Duration on you
25% reduced Effect of Chill and Shock on you`},fol:{key:"fol",searchStat:"2350430215",name:"Flow of Life",image:pe,description:`24% increased Damage over Time
4% increased maximum Life
Regenerate 0.6% of Life per second`},flt:{key:"flt",searchStat:"3984980429",name:"Follow-Through",image:be,description:"Projectiles deal 15% increased Damage with Hits and Ailments for each remaining Chain"},fom:{key:"fom",searchStat:"1904581068",name:"Force Multiplier",image:Ee,description:`25% increased Physical Damage
5% chance to deal Double Damage`},fra:{key:"fra",searchStat:"792262925",name:"Frantic Aspect",image:N,description:`Haste has 50% increased Mana Reservation Efficiency
Debuffs on you expire 10% faster`},fuf:{key:"fuf",searchStat:"3599340381",name:"Fuel the Fight",image:Z,description:`8% increased Attack Speed
0.4% of Attack Damage Leeched as Mana
20% increased Damage while Leeching`},fua:{key:"fua",searchStat:"3415827027",image:Ee,name:"Furious Assault",description:`25% increased Physical Damage
8% increased Attack and Cast Speed`},gen:{key:"gen",searchStat:"2763732093",name:"Genius",image:ae,description:`8% increased maximum Mana
5% increased Intelligence`},glf:{key:"glf",searchStat:"1591995797",name:"Gladiator's Fortitude",image:Ea,description:`Attack Skills deal 25% increased Damage while holding a Shield
5% increased maximum Life`},gre:{key:"gre",searchStat:"1903496649",name:"Graceful Execution",image:Ce,description:`+15 to Dexterity and Intelligence
5% increased Attack Speed with Two Handed Melee Weapons
15% increased Accuracy Rating with Two Handed Melee Weapons
25% increased Critical Strike Chance with Two Handed Melee Weapons`},grd:{key:"grd",searchStat:"2350900742",name:"Grand Design",image:Me,description:`20% increased Brand Damage
10% increased Brand Attachment range
Brand Skills have 10% increased Duration`},gro:{key:"gro",searchStat:"2194205899",name:"Grim Oath",image:Ee,description:"Gain 10% of Physical Damage as Extra Chaos Damage"},gut:{key:"gut",searchStat:"1882129725",name:"Guerilla Tactics",image:fe,description:`20% increased Trap Damage
20% increased Mine Damage
10% increased Trap Throwing Speed
10% increased Mine Throwing Speed
5% increased Movement Speed if you've thrown a Trap or Mine Recently`},hae:{key:"hae",searchStat:"72129119",name:"Haemorrhage",image:ue,description:`30% increased Critical Strike Chance
+10% to Damage over Time Multiplier for Ailments from Critical Strikes`},has:{key:"has",image:ke,searchStat:"1080363357",name:"Haunting Shout",description:"Enemies Taunted by your Warcries are Intimidated"},hoi:{key:"hoi",searchStat:"1483358825",name:"Heart of Iron",image:we,description:"Gain 10% of Maximum Life as Extra Armour"},heh:{key:"heh",searchStat:"3640252904",name:"Heavy Hitter",image:Z,description:`30% increased Attack Damage
30% increased Damage with Ailments from Attack Skills
10% reduced Enemy Stun Threshold
20% chance to double Stun Duration`},her:{key:"her",searchStat:"3274270612",name:"Heraldry",image:se,description:`Nearby Enemies have Fire Exposure while you are affected by Herald of Ash
Nearby Enemies have Cold Exposure while you are affected by Herald of Ice
Nearby Enemies have Lightning Exposure while you are affected by Herald of Thunder`},heb:{key:"heb",searchStat:"2341828832",name:"Hex Breaker",image:re,description:`Remove a Curse after Channelling for 2 seconds
8% increased Attack and Cast Speed while Channelling`},hib:{key:"hib",searchStat:"2294919888",name:"Hibernator",image:qe,description:`30% reduced Freeze Duration on you
30% reduced Effect of Chill on you
Unaffected by Chilled Ground
You cannot be Frozen if you've been Frozen Recently`},har:{key:"har",searchStat:"2665170385",name:"Hit and Run",image:Se,description:`Attack Skills deal 25% increased Damage while Dual Wielding
+10% chance to Suppress Spell Damage if you've Hit an Enemy Recently`},hoh:{key:"hoh",searchStat:"3667965781",name:"Holistic Health",image:$,description:`8% increased maximum Life
10% increased maximum Mana`},hoc:{key:"hoc",searchStat:"3898572660",name:"Holy Conquest",image:Me,description:`25% increased Brand Damage
Brands have 25% increased Area of Effect if 50% of Attached Duration expired`},hom:{key:"hom",searchStat:"555800967",name:"Hound's Mark",image:j,description:`20% increased Effect of your Marks
20% increased Damage with Hits and Ailments against Marked Enemy`},huc:{key:"huc",searchStat:"3467711950",name:"Hulking Corpses",image:Ae,description:`Minions have 25% increased maximum Life
Raised Zombies have 5% chance to Taunt Enemies on Hit`},imp:{key:"imp",searchStat:"810219447",name:"Improvisor",image:ae,description:`6% increased Attack Speed
10% increased maximum Mana
Gain 3 Mana per Enemy Hit with Attacks`},ink:{key:"ink",searchStat:"3904970959",name:"Insatiable Killer",image:Se,description:`Attack Skills deal 20% increased Damage while Dual Wielding
5% increased Attack Speed while Dual Wielding
5% chance to gain a Frenzy Charge on Kill while Dual Wielding`},ino:{key:"ino",searchStat:"3872380586",name:"Inspired Oppression",image:ee,description:`10% increased Effect of Non-Damaging Ailments
20% increased Elemental Damage
30% increased Mana Regeneration Rate if you have Frozen an Enemy Recently
30% increased Mana Regeneration Rate if you have Shocked an Enemy Recently`},ins:{key:"ins",searchStat:"212648555",name:"Insulated",image:We,description:`+20% to Lightning Resistance
30% chance to Avoid being Shocked
+1% to maximum Lightning Resistance`},int:{key:"int",searchStat:"1309218394",name:"Introspection",image:N,description:"Auras from your Skills have 10% increased Effect on you"},inp:{key:"inp",searchStat:"2262034536",name:"Invigorating Portents",image:ra,description:`Minions deal 20% increased Damage while you are affected by a Herald
Minions have 10% increased Movement Speed for each Herald affecting you`},irb:{key:"irb",searchStat:"3258653591",name:"Iron Breaker",image:Ee,description:`Hits have 50% chance to ignore Enemy Physical Damage Reduction
30% increased Physical Damage`},lai:{key:"lai",searchStat:"426715778",name:"Lasting Impression",image:se,description:`Herald Skills deal 50% increased Damage over Time
30% increased Damage over Time while affected by a Herald`},lbe:{key:"lbe",searchStat:"2195406641",name:"Lead By Example",image:ke,description:`+10 to Strength and Dexterity
When you Warcry, you and nearby Allies gain Onslaught for 4 seconds`},lfd:{key:"lfd",searchStat:"2337273077",name:"Life from Death",image:Ae,description:`Minions have 15% increased maximum Life
Regenerate 2% of Life per second if a Minion has Died Recently
Minions Recover 4% of Life on Minion Death`},lii:{key:"lii",searchStat:"1094635162",name:"Liquid Inspiration",image:ae,description:`15% increased maximum Mana
20% increased Mana Recovery from Flasks
25% chance to gain a Power Charge when you use a Mana Flask`},lod:{key:"lod",searchStat:"2055715585",name:"Lord of Drought",image:j,description:`Flammability can affect Hexproof Enemies
30% increased Damage with Ignites inflicted on Cursed Enemies`},lot:{key:"lot",searchStat:"3989400244",name:"Low Tolerance",image:Qe,description:"Poisons you inflict on non-Poisoned Enemies deal 300% increased Damage"},mab:{key:"mab",searchStat:"684155617",name:"Mage Bane",image:Se,description:`Attack Skills deal 20% increased Damage while Dual Wielding
20% chance to gain a Power Charge when you Block
+6% Chance to Block Spell Damage while Dual Wielding`},mah:{key:"mah",searchStat:"2118664144",name:"Mage Hunter",image:Ye,description:`20% increased Spell Damage
6% Chance to Block Spell Damage
20% chance to gain a Power Charge when you Block`},mag:{key:"mag",searchStat:"2886441936",name:"Magnifier",image:De,description:`10% increased Area of Effect
+10% to Critical Strike Multiplier`},mam:{key:"mam",searchStat:"1015189426",name:"Martial Mastery",image:Ce,description:`+20 to Strength
10% increased Attack Speed with Two Handed Melee Weapons
10% increased Attack Speed if you have at least 600 Strength`},mmo:{key:"mmo",searchStat:"2978494217",name:"Martial Momentum",image:Se,description:`8% increased Attack Speed while Dual Wielding
16% increased Accuracy Rating while Dual Wielding
32% increased Damage if you've used a Travel Skill Recently`},map:{key:"map",searchStat:"1152182658",name:"Martial Prowess",image:Z,description:`20% increased Attack Damage
6% increased Attack Speed
15% increased Global Accuracy Rating
20% increased Damage with Ailments from Attack Skills`},moc:{key:"moc",searchStat:"3257074218",name:"Master of Command",image:N,description:`Banner Skills have 20% increased Area of Effect
Banner Skills have 10% increased Aura Effect`},mof:{key:"mof",searchStat:"1462135249",name:"Master of Fire",image:ta,description:`Nearby Enemies have Fire Exposure
`},motm:{key:"motm",searchStat:"185592058",name:"Master of the Maelstrom",image:j,description:`Elemental Weakness can affect Hexproof Enemies
+1% to all maximum Elemental Resistances if you have Killed a Cursed Enemy Recently`},mtf:{key:"mtf",searchStat:"3585232432",name:"Master the Fundamentals",image:Ee,description:`35% increased Physical Damage
35% reduced Elemental Damage
+10% to all Elemental Resistances`},mew:{key:"mew",searchStat:"4291434923",name:"Mender's Wellspring",image:Ke,description:`25% increased Life Recovery from Flasks
Life Flasks gain 1 Charge every 3 seconds
Remove Bleeding when you use a Life Flask`},mil:{key:"mil",searchStat:"4154709486",name:"Militarism",image:we,description:`8% increased maximum Life
30% increased Armour`},min:{key:"min",searchStat:"2595115995",name:"Mindfulness",image:ae,description:`15% increased maximum Mana
80% increased Mana Regeneration Rate while stationary`},mie:{key:"mie",searchStat:"3832665876",name:"Misery Everlasting",image:j,description:`Despair can affect Hexproof Enemies
Recover 2% of Energy Shield when you Kill a Cursed Enemy`},mob:{key:"mob",searchStat:"1048879642",name:"Mob Mentality",image:ke,description:`Exerted Attacks deal 25% increased Damage
Warcries have 5% Chance to grant an Endurance, Frenzy or Power Charge per Power`},mom:{key:"mom",searchStat:"3875792669",name:"Molten One's Mark",description:`+2% to maximum Fire Resistance
Regenerate 1% of Life per second`,image:Be},moa:{key:"moa",searchStat:"3881737087",name:"Mortifying Aspect",image:N,description:`Malevolence has 50% increased Mana Reservation Efficiency
+11% to Chaos Resistance`},myw:{key:"myw",searchStat:"2314111938",name:"Mystical Ward",image:Ye,description:`6% Chance to Block Spell Damage
Regenerate 1.5% of Energy Shield per second
0.3% of Spell Damage Leeched as Energy Shield`},nav:{key:"nav",searchStat:"510654792",name:"Natural Vigour",image:Ie,description:`8% increased maximum Life
30% increased Evasion Rating`},non:{key:"non",searchStat:"731840035",name:"Non-Flammable",image:Be,description:`+20% to Fire Resistance
30% chance to Avoid being Ignited
+1% to maximum Fire Resistance`},nue:{key:"nue",searchStat:"1028754276",name:"Numbing Elixir",image:Ke,description:`40% reduced Effect of Curses on you during Effect of any Mana Flask
40% reduced Effect of Non-Damaging Ailments on you during Effect of any Life Flask`},owts:{key:"owts",searchStat:"1976069869",name:"One with the Shield",image:ne,description:`Recover 50 Life when you Block
50% increased Defences from Equipped Shield
+6% Chance to Block Attack Damage while holding a Shield`},ope:{key:"ope",searchStat:"633943719",name:"Openness",image:ae,description:`+30 to maximum Mana
20% increased maximum Mana`},opf:{key:"opf",searchStat:"4281625943",name:"Opportunistic Fusilade",image:ca,description:`35% increased Damage with Wands if you've dealt a Critical Strike Recently
50% increased Critical Strike Chance with Wands`},old:{key:"old",searchStat:"2250169390",name:"Overlord",image:oa,description:`Melee Hits with Maces, Sceptres or Staves Fortify for 6 seconds
30% increased Damage with Maces, Sceptres or Staves`},ove:{key:"ove",searchStat:"3777170562",name:"Overshock",image:ee,description:`30% increased Lightning Damage
40% increased Effect of Lightning Ailments`},ovm:{key:"ovm",searchStat:"770408103",name:"Overwhelming Malice",image:ge,description:"10% chance to gain Unholy Might for 4 seconds on Critical Strike"},par:{key:"par",searchStat:"4272503233",name:"Paralysis",image:la,description:`30% increased Lightning Damage
Lightning Skills have 10% reduced Enemy Stun Threshold
10% chance to double Stun Duration`},pac:{key:"pac",searchStat:"1734275536",name:"Peace Amidst Chaos",image:$,description:`8% increased maximum Life
Regenerate 2% of Life per second while stationary
20% increased Armour while stationary`},pev:{key:"pev",searchStat:"1722821275",name:"Peak Vigour",image:$,description:`8% increased maximum Life
20% increased Life Recovery from Flasks`},phl:{key:"phl",searchStat:"3057154383",name:"Phlebotomist",image:ue,description:`20% increased Critical Strike Chance
+6% to Physical Damage over Time Multiplier if you've dealt a Critical Strike Recently`},poa:{key:"poa",searchStat:"1005475168",name:"Powerful Assault",image:De,description:`20% increased Area Damage
Area Skills have 10% chance to Knock Enemies Back on Hit`},pow:{key:"pow",searchStat:"164032122",name:"Powerful Ward",image:Ye,description:`20% chance to gain a Power Charge when you Block
+10% Chance to Block Spell Damage while at Maximum Power Charges`},prc:{key:"prc",searchStat:"3435403756",name:"Practiced Caster",image:ce,description:`20% increased Spell Damage
5% increased Cast Speed
35% chance to Ignore Stuns while Casting`},prf:{key:"prf",searchStat:"2913581789",name:"Precise Focus",image:re,description:`30% increased Critical Strike Chance while Channelling
+20% to Critical Strike Multiplier if you've been Channelling for at least 1 second`},prr:{key:"prr",searchStat:"2335364359",name:"Precise Retaliation",image:ne,description:`+30% to Critical Strike Multiplier if you have Blocked Recently
60% increased Critical Strike Chance if you haven't Blocked Recently`},prp:{key:"prp",searchStat:"3391925584",name:"Pressure Points",image:ge,description:`30% increased Critical Strike Chance
Your Critical Strikes have a 5% chance to deal Double Damage`},prb:{key:"prb",searchStat:"622362787",name:"Primordial Bond",image:ye,description:`10% increased Damage per Summoned Golem
40% increased Effect of Buffs granted by your Golems
Golems have 25% increased Maximum Life`},pmc:{key:"pmc",searchStat:"3492924480",name:"Prismatic Carapace",image:we,description:`+1% to all maximum Elemental Resistances
30% increased Armour`},pmd:{key:"pmd",searchStat:"1149662934",name:"Prismatic Dance",image:Ie,description:`+1% to all maximum Elemental Resistances
30% increased Evasion Rating`},prh:{key:"prh",searchStat:"2342448236",name:"Prismatic Heart",image:_e,description:`30% increased Elemental Damage
+10% to all Elemental Resistances`},prd:{key:"prd",searchStat:"1705633890",name:"Prodigious Defence",image:ne,description:`+4% Chance to Block Attack Damage
4% Chance to Block Spell Damage
30% increased Attack Damage while holding a Shield`},pro:{key:"pro",searchStat:"814369372",name:"Provocateur",image:ke,description:`40% increased Critical Strike Chance against Taunted Enemies
+10% to Critical Strike Multiplier against Taunted Enemies`},pay:{key:"pay",searchStat:"1507409483",name:"Pure Agony",image:ra,description:`Minions deal 20% increased Damage while you are affected by a Herald
+5 to Maximum Virulence`},pua:{key:"pua",searchStat:"3509724289",name:"Pure Aptitude",image:We,description:`+20 to Intelligence
Purity of Lightning has 80% increased Mana Reservation Efficiency
15% increased Energy Shield Recharge Rate`},pug:{key:"pug",searchStat:"1621496909",name:"Pure Guile",image:N,description:`+20 to Dexterity
Purity of Ice has 80% increased Mana Reservation Efficiency
5% chance to Blind Enemies on Hit`},pum:{key:"pum",searchStat:"2372915005",name:"Pure Might",image:Be,description:`+20 to Strength
Purity of Fire has 80% increased Mana Reservation Efficiency
40% increased Stun and Block Recovery`},puh:{key:"puh",searchStat:"507505131",name:"Purposeful Harbinger",image:N,description:`Auras from your Skills have 8% increased Effect on you for
each Herald affecting you, up to 40%`},qug:{key:"qug",searchStat:"1626818279",name:"Quick Getaway",image:ge,description:`5% increased Attack and Cast Speed
25% increased Critical Strike Chance
5% increased Movement Speed if you've dealt a Critical Strike Recently`},qad:{key:"qad",searchStat:"2169345147",name:"Quick and Deadly",image:Se,description:`60% increased Main Hand Attack Damage while wielding two different Weapon Types
30% increased Off Hand Attack Speed while wielding two different Weapon Types`},rab:{key:"rab",searchStat:"4288473380",name:"Rattling Bellow",image:ke,description:`+20 to Strength
Exerted Attacks have 8% chance to deal Double Damage`},rap:{key:"rap",searchStat:"1038897629",name:"Raze and Pillage",image:ye,description:`Minions gain 6% of Physical Damage as Extra Fire Damage
Minions have 20% chance to Ignite
Minions deal 20% increased Damage with Hits and Ailments against Ignited Enemies`},rea:{key:"rea",searchStat:"845306697",name:"Readiness",image:Ie,description:`30% increased Evasion Rating if you haven't been Hit Recently
30% chance to Avoid Bleeding
30% chance to Avoid being Impaled`},rem:{key:"rem",searchStat:"691431951",name:"Remarkable",image:Me,description:`8% increased Cast Speed with Brand Skills
Skills which create Brands have 35% chance to create an additional Brand`},rnd:{key:"rnd",searchStat:"4263287206",name:"Rend",image:ue,description:`+5% to Physical Damage over Time Multiplier
20% increased Bleeding Duration`},ren:{key:"ren",searchStat:"3607300552",name:"Renewal",image:ye,description:`Minions have 5% chance to deal Double Damage while they are on Full Life
Minions Regenerate 1% of Life per second`},rrrrrrrr:{key:"rrrrrrrr",searchStat:"2233272527",name:"Repeater",image:be,description:`30% increased Projectile Damage
8% increased Attack and Cast Speed`},rep:{key:"rep",searchStat:"1496043857",name:"Replenishing Presence",image:N,description:`Non-Curse Aura Skills have 20% increased Duration
You and nearby Allies Regenerate 1.00% of Life per second`},rip:{key:"rip",searchStat:"2620267328",name:"Righteous Path",image:N,description:`Zealotry has 50% increased Mana Reservation Efficiency
10% increased Effect of Consecrated Ground you create`},riq:{key:"riq",searchStat:"254194892",name:"Riot Queller",image:ne,description:`+6% Chance to Block Attack Damage
Enemies Taunted by you take 6% increased Damage`},rot:{key:"rot",searchStat:"713945233",name:"Rot-Resistant",image:Pe,description:`+13% to Chaos Resistance
Regenerate 1.2% of Life per second
Regenerate 0.6% of Energy Shield per second
Regenerate 0.3% of Mana per second`},ror:{key:"ror",searchStat:"2478282326",name:"Rote Reinforcement",image:ne,description:`+20 to maximum Life
+6% Chance to Block Attack Damage
20% chance to gain an Endurance Charge when you Block`},roc:{key:"roc",searchStat:"2289610642",name:"Rotten Claws",image:ye,description:"Minions have a 12% chance to Impale on Hit with Attacks"},rut:{key:"rut",searchStat:"1488030420",name:"Run Through",image:ia,description:`15% increased Physical Damage with Axes or Swords
10% chance to Impale Enemies on Hit with Axes or Swords
10% increased Impale Effect
Axe or Sword Attacks deal 15% increased Damage with Ailments`},sad:{key:"sad",searchStat:"3638731729",name:"Sadist",image:_e,description:`15% increased Elemental Damage if you've Chilled an Enemy Recently
25% increased Elemental Damage if you've Shocked an Enemy Recently
20% increased Elemental Damage if you've Ignited an Enemy Recently`},sag:{key:"sag",searchStat:"478147593",name:"Sage",image:We,description:`+20% to Lightning Resistance
20% increased Mana Regeneration Rate
Regenerate 1.5% of Life per second`},sap:{key:"sap",searchStat:"715786975",name:"Sap Psyche",image:ce,description:`20% increased Spell Damage
30% increased Mana Regeneration Rate
Regenerate 1% of Energy Shield per second if you've Cursed an Enemy Recently`},sar:{key:"sar",searchStat:"4222635921",name:"Savage Response",image:ge,description:`30% increased Critical Strike Chance
+30% to Critical Strike Multiplier if you've taken a Savage Hit Recently`},stm:{key:"stm",searchStat:"3539175001",name:"Savour the Moment",image:Re,description:`10% increased maximum Energy Shield
Regenerate 3.00% of Energy Shield per second while stationary`},sci:{key:"sci",searchStat:"2589589781",name:"Scintillating Idea",image:ae,description:`20% increased maximum Mana
Damage Penetrates 5% Lightning Resistance`},sem:{key:"sem",searchStat:"876846990",name:"Seal Mender",image:ce,description:"Skills Supported by Unleash have 30% increased Seal gain frequency"},ssk:{key:"ssk",searchStat:"2773515950",name:"Second Skin",image:we,description:`+4% Chance to Block Attack Damage
4% Chance to Block Spell Damage
30% increased Armour`},ser:{key:"ser",searchStat:"2261237498",name:"Seeker Runes",image:Me,description:`25% increased Brand Damage
Unattached Brands gain 20% increased Brand Attachment Range per second, up to 100%`},sel:{key:"sel",searchStat:"3025453294",name:"Self-Control",image:Re,description:`Discipline has 80% increased Mana Reservation Efficiency
25% increased Mana Regeneration Rate`},sep:{key:"sep",searchStat:"2644533453",image:se,name:"Self-Fulfilling Prophecy",description:`+15% to Critical Strike Multiplier if you dealt a Critical Strike with a Herald Skill Recently
+1% to Critical Strike Chance of Herald Skills`},ses:{key:"ses",searchStat:"4290522695",name:"Septic Spells",image:Qe,description:`20% chance to Poison on Hit with Spell Damage
Spell Skills have +5% to Damage over Time Multiplier for Poison
5% increased Cast Speed`},saf:{key:"saf",searchStat:"1101250813",name:"Set and Forget",image:fe,description:`25% increased Trap Damage
40% increased Trap Trigger Area of Effect
Skills used by Traps have 15% increased Area of Effect`},shs:{key:"shs",searchStat:"1476913894",name:"Shifting Shadow",image:Ie,description:`+20 to Dexterity
10% chance to Blind Enemies on Hit
20% increased Evasion Rating`},shb:{key:"shb",searchStat:"2783012144",image:be,name:"Shrieking Bolts",description:`35% increased Projectile Damage
10% chance to Taunt Enemies on Projectile Hit`},ska:{key:"ska",searchStat:"1290215329",name:"Skeletal Atrophy",image:ye,description:`Summoned Skeletons have 30% of Physical Damage Converted to Chaos Damage
Summoned Skeletons have 10% chance to Wither Enemies for 2 seconds on Hit`},sku:{key:"sku",searchStat:"315697256",name:"Skullbreaker",image:ge,description:`+15% to Critical Strike Multiplier
8% reduced Enemy Stun Threshold`},sls:{key:"sls",searchStat:"3993957711",name:"Sleepless Sentries",image:oe,description:`20% increased Totem Duration
You have Onslaught if you've Summoned a Totem Recently`},stw:{key:"stw",searchStat:"540300548",name:"Smite the Weak",image:Z,description:`Attacks have 10% chance to Maim on Hit
40% increased Attack Damage against Maimed Enemies`},smr:{key:"smr",searchStat:"2322980282",name:"Smoking Remains",image:ta,description:`35% increased Fire Damage
10% chance to create a Smoke Cloud on Kill`},sns:{key:"sns",searchStat:"3319205340",name:"Snaring Spirits",image:oe,description:`30% increased Totem Damage
Totems Hinder Enemies near them when Summoned`},sno:{key:"sno",searchStat:"1595367309",name:"Snowstorm",image:la,description:"Gain 8% of Lightning Damage as Extra Cold Damage against Chilled Enemies"},spr:{key:"spr",searchStat:"4235300427",name:"Special Reserve",image:Ke,description:`Regenerate 2% of Life per second during any Flask Effect
20% increased Damage during any Flask Effect`},spc:{key:"spc",searchStat:"3372255769",name:"Spiked Concoction",image:ba,description:`Gain Alchemist's Genius when you use a Flask
5% increased Attack and Cast Speed during any Flask Effect`},spp:{key:"spp",searchStat:"1134501245",name:"Spiteful Presence",image:N,description:`Hatred has 50% increased Mana Reservation Efficiency
20% increased Effect of Cold Ailments`},spb:{key:"spb",searchStat:"3603695769",name:"Spring Back",image:Re,description:`10% increased maximum Energy Shield
5% faster start of Energy Shield Recharge`},stt:{key:"stt",searchStat:"3500334379",name:"Steady Torment",image:Qe,description:`+6% to Damage over Time Multiplier for Bleeding you inflict on Poisoned Enemies
+6% to Damage over Time Multiplier for Poison you inflict on Bleeding Enemies
15% increased Bleeding Duration
15% increased Poison Duration`},stf:{key:"stf",searchStat:"1088949570",name:"Stoic Focus",image:re,description:`Channelling Skills deal 25% increased Damage
+5% Chance to Block Attack Damage while Channelling
+5% Chance to Block Spell Damage while Channelling`},std:{key:"std",searchStat:"2087561637",name:"Storm Drinker",image:la,description:`Damage Penetrates 8% Lightning Resistance
0.5% of Lightning Damage Leeched as Energy Shield`},sth:{key:"sth",searchStat:"1122051203",name:"Storm's Hand",image:ca,description:`Gain 10% of Wand Physical Damage as Extra Lightning Damage
25% of Wand Physical Damage converted to Lightning Damage`},sto:{key:"sto",searchStat:"889728548",name:"Stormrider",image:ee,description:`10% chance to gain a Power Charge when you Shock a Chilled Enemy
25% increased Cold Damage with Hits against Shocked Enemies
25% increased Lightning Damage with Hits against Chilled Enemies`},str:{key:"str",searchStat:"1397498432",name:"Streamlined",image:be,description:`20% increased Projectile Damage
20% increased Projectile Speed`},stl:{key:"stl",searchStat:"282062371",name:"Strike Leader",image:ne,description:`+4% Chance to Block Attack Damage
Attack Skills deal 30% increased Damage while holding a Shield
+0.2 metres to Melee Strike Range while Holding a Shield`},sts:{key:"sts",searchStat:"2383914651",name:"Stubborn Student",image:ae,description:`15% increased maximum Mana
20% increased Armour
+1 Armour per 10 Unreserved Maximum Mana`},sod:{key:"sod",searchStat:"3202667190",name:"Student of Decay",image:Pe,description:`+13% to Chaos Resistance
25% increased Damage over Time`},suf:{key:"suf",searchStat:"2251304016",name:"Sublime Form",image:Ie,description:`Grace has 50% increased Mana Reservation Efficiency
+10% to all Elemental Resistances`},sbs:{key:"sbs",searchStat:"1364858171",name:"Sublime Sensation",image:$,description:`8% increased maximum Life
10% increased maximum Energy Shield`},sfs:{key:"sfs",searchStat:"3410752193",name:"Surefooted Striker",image:Ce,description:`5% chance to deal Double Damage if you've dealt a Critical Strike with a Two Handed Melee Weapon Recently
40% increased Critical Strike Chance with Two Handed Melee Weapons`},suv:{key:"suv",searchStat:"2410501331",name:"Surging Vitality",image:$,description:`8% increased maximum Life
Every 4 seconds, Regenerate 10% of Life over one second`},sus:{key:"sus",searchStat:"3051562738",name:"Surprise Sabotage",image:fe,description:`+8% to Critical Strike Multiplier with Traps
+8% to Critical Strike Multiplier with Mines
Trap Damage Penetrates 4% Elemental Resistances
Mine Damage Penetrates 4% Elemental Resistances`},tea:{key:"tea",searchStat:"2631806437",name:"Tempered Arrowheads",image:aa,description:`Bow Skills have +6% to Damage over Time Multiplier
Bow Skills have 10% increased Skill Effect Duration
10% increased Duration of Ailments inflicted while wielding a Bow`},tts:{key:"tts",searchStat:"348883745",name:"Tempt the Storm",image:j,description:`Conductivity can affect Hexproof Enemies
30% increased Effect of Shocks you inflict on Cursed Enemies`},tha:{key:"tha",searchStat:"177215332",name:"Thaumophage",image:ce,description:`0.6% of Spell Damage Leeched as Energy Shield
25% increased Spell Damage while on Full Energy Shield
10% chance to Hinder Enemies on Hit with Spells`},thu:{key:"thu",searchStat:"1741700339",name:"Thunderstruck",image:ee,description:`20% increased Lightning Damage
30% increased Critical Strike Chance
Your Critical Strikes Knock Back Shocked Enemies`},tis:{key:"tis",searchStat:"2930275641",name:"Titanic Swings",image:De,description:`15% increased Area of Effect while wielding a Two Handed Melee Weapon
20% increased Area Damage while wielding a Two Handed Melee Weapon`},toc:{key:"toc",searchStat:"2780712583",name:"Touch of Cruelty",image:ve,description:`Chaos Spells have 10% chance to Hinder Enemies on Hit
Enemies Hindered by you take 10% increased Chaos Damage`},tot:{key:"tot",searchStat:"3536778624",name:"Towering Threat",image:De,description:`10% increased Area of Effect
8% increased maximum Life`},unc:{key:"unc",searchStat:"382360671",name:"Uncompromising",image:we,description:`Determination has 50% increased Mana Reservation Efficiency
20% increased Stun Threshold`},uhg:{key:"uhg",searchStat:"4186213466",name:"Unholy Grace",image:ve,description:`30% increased Chaos Damage
10% increased Attack and Cast Speed`},unf:{key:"unf",searchStat:"1570474940",name:"Unrestrained Focus",image:re,description:`Unaffected by Chill while Channelling
Channelling Skills have 8% increased Attack and Cast Speed`},usg:{key:"usg",searchStat:"729163974",name:"Unspeakable Gifts",image:ve,description:"Enemies you Kill have a 10% chance to Explode, dealing a quarter of their maximum Life as Chaos Damage"},unt:{key:"unt",searchStat:"2758966888",name:"Untouchable",image:Ue,description:`+10% chance to Suppress Spell Damage
30% increased Evasion Rating`},uwf:{key:"uwf",searchStat:"367638058",name:"Unwavering Focus",image:re,description:`Channelling Skills deal 30% increased Damage
50% chance to Avoid being Stunned while Channelling`},une:{key:"une",searchStat:"2788982914",name:"Unwaveringly Evil",image:Qe,description:`30% increased Chaos Damage
Chaos Skills ignore interruption from Stuns`},vap:{key:"vap",searchStat:"1996576560",name:"Vast Power",image:De,description:`3% increased Area of Effect per Power Charge, up to a maximum of 50%
20% increased Area Damage`},ved:{key:"ved",searchStat:"664010431",image:ne,name:"Veteran Defender",description:`+15 to all Attributes
60% increased Defences from Equipped Shield
+15% Elemental Resistances while holding a Shield`},vib:{key:"vib",searchStat:"882876854",name:"Vicious Bite",image:ye,description:`Minions have +15% to Critical Strike Multiplier
Minions have 30% increased Critical Strike Chance`},vig:{key:"vig",searchStat:"4054656914",name:"Vicious Guard",image:ne,description:`+6% Chance to Block Attack Damage
Regenerate 1.5% of Life per second
0.4% of Attack Damage Leeched as Life`},vis:{key:"vis",searchStat:"567971948",name:"Vicious Skewering",image:Z,description:`15% increased Effect of Impales inflicted by Hits that also inflict Bleeding
10% chance to Impale Enemies on Hit with Attacks
Attacks have 10% chance to cause Bleeding`},vim:{key:"vim",searchStat:"1936135020",name:"Victim Maker",image:j,description:`Curse Skills have 8% increased Cast Speed
Enemies Cursed by you have Malediction if 33% of Curse Duration expired`},vir:{key:"vir",searchStat:"647201233",name:"Vile Reinvigoration",image:pe,description:`24% increased Damage over Time
6% increased maximum Energy Shield
Regenerate 2% of Energy Shield per second if you've Killed an Enemy Recently`},vif:{key:"vif",searchStat:"2134141047",name:"Vital Focus",image:re,description:`Regenerate 1.5% of Life per second while Channelling
Channelling Skills deal 30% increased Damage`},vih:{key:"vih",searchStat:"3957006524",name:"Vivid Hues",image:ue,description:`20% increased Damage with Bleeding
2% of Attack Damage Leeched as Life against Bleeding Enemies
20% increased total Recovery per second from Life Leech`},vop:{key:"vop",searchStat:"2350668735",name:"Volatile Presence",image:N,description:`Anger has 50% increased Mana Reservation Efficiency
20% increased Duration of Fire Ailments`},wom:{key:"wom",searchStat:"1363668533",name:"Wall of Muscle",image:$,description:`6% increased maximum Life
5% increased Strength`},wac:{key:"wac",searchStat:"578355556",name:"Warning Call",image:ke,description:"Gain 25% increased Armour per 5 Power for 8 seconds when you Warcry, up to a maximum of 100%"},waa:{key:"waa",searchStat:"2066820199",name:"Wasting Affliction",image:pe,description:`20% increased Damage with Ailments
Damaging Ailments deal damage 5% faster`},wea:{key:"wea",searchStat:"2244243943",name:"Weight Advantage",image:oa,description:`+20 to Strength
Mace, Sceptre or Staff Attacks deal 30% increased Damage with Hits and Ailments
4% chance to deal Double Damage while wielding a Mace, Sceptre or Staff`},wkp:{key:"wkp",searchStat:"1616734644",name:"Wicked Pall",image:ve,description:`30% increased Chaos Damage
5% increased Skill Effect Duration`},wid:{key:"wid",searchStat:"1678643716",image:_e,name:"Widespread Destruction",description:`20% increased Elemental Damage
6% increased Area of Effect`},wis:{key:"wis",searchStat:"1162352537",name:"Will Shaper",image:Re,description:"Gain 5% of Maximum Mana as Extra Maximum Energy Shield"},win:{key:"win",searchStat:"1938661964",name:"Wind-up",image:sa,description:`10% chance to gain a Power Charge on Non-Critical Strike with a Claw or Dagger
+15% to Critical Strike Multiplier with Claws or Daggers`},wpr:{key:"wpr",searchStat:"755881431",name:"Winter Prowler",image:qe,description:`+2% to maximum Cold Resistance
10% increased Life Recovery from Flasks`},wiz:{key:"wiz",searchStat:"3078065247",name:"Wizardry",image:We,description:`+2% to maximum Lightning Resistance
8% increased maximum Mana`},woa:{key:"woa",searchStat:"69078820",name:"Wound Aggravation",image:ia,description:`20% increased Physical Damage with Axes or Swords
Axe or Sword Attacks deal 20% increased Damage with Ailments
+5% to Physical Damage over Time Multiplier while wielding an Axe or Sword`},wif:{key:"wif",searchStat:"241783558",name:"Wrapped in Flame",image:Fe,description:`20% increased Fire Damage
5% chance to Cover Enemies in Ash on Hit while you are Burning
Cannot be Chilled while Burning`}},fn=Object.values(Oa),ja=Oa,Ze=fn;function Je(i){const e=new URLSearchParams;return i.search&&e.set("search",i.search),i.view==="selected"&&e.set("view","selected"),Array.from(i.modWeights.entries()).sort(([n],[a])=>n<a?-1:1).forEach(([n,a])=>{a!==null&&e.set(n,`${a}`)}),e}function un(i){const e=parseInt(i);return za.includes(e)?e:null}function pn(i){let e="";return i.startsWith("http")?e=new URL(i).search:e=i.replace(/^\?/,""),new URLSearchParams(e)}function da(i){const e=pn(i),n={search:e.get("search")??"",modWeights:new Map,view:e.get("view")==="selected"?"selected":"search"};for(const[a,t]of e.entries())if(ja[a]){const r=un(t);r!==null&&n.modWeights.set(a,r)}return n}function Na(i,e,n){const a=Je(i);return n===null||a.get(e)===`${n}`?a.delete(e):n!==null&&a.set(e,`${n}`),a.toString()}function yn(i){const e=[];for(const[n,a]of i.modWeights.entries())e.push({key:n,weight:a});return e.filter(({weight:n})=>n>0).sort((n,a)=>n.weight>a.weight?-1:1).map(n=>ja[n.key].name)}function Sn(i){const e=yn(i),n="Megalomaniac Trade Search - Path of Exile Tool";let a="";if(e.length>10)a=e.slice(0,4).join(", ")+", "+(e.length-4)+" more";else if(e.length>2){const t=e.pop();a=e.join(", ")+", and "+t}else e.length===2?a=e[0]+" and "+e[1]:e.length===1&&(a=e[0]);return{title:a+(a.length?" - ":"")+n,description:"Find the perfect Megalomaniac for your build."}}function kn(i,e){const n=i.filter(s=>{const o=e.modWeights.get(s.key);return o!==void 0&&o!==-1}),a=i.filter(s=>e.modWeights.get(s.key)===-1);return{stats:[{type:"weight",filters:i.filter(s=>{const o=e.modWeights.get(s.key);return!!o&&o>0}).map(s=>({disabled:!1,id:"explicit.stat_"+s.searchStat,value:{weight:e.modWeights.get(s.key)}})),disabled:!1,value:{min:1}},{type:"count",filters:n.map(s=>({disabled:e.modWeights.get(s.key)!==gn,id:"explicit.stat_"+s.searchStat})),disabled:!1,value:{min:1}},{type:"not",disabled:a.length===0,filters:a.map(s=>({disabled:!1,id:"explicit.stat_"+s.searchStat}))},{filters:[{id:"explicit.stat_3086156145",value:{min:4,max:4},disabled:!1}],disabled:!1,type:"and"}],status:{option:"online"}}}function vn(i,e){const n="https://pathofexile.com/trade/search?q=",a=kn(i,e),t=JSON.stringify({query:{...a,filters:{type_filters:{filters:{category:{option:"jewel.cluster"},rarity:{option:"unique"}}}}},sort:{"statgroup.0":"desc"}});return n+encodeURIComponent(t)}function wn(i){return i.startsWith("-")||i.startsWith("!")}const Dn=i=>{const e=/([!-])?"([^"]+)"|(\S+)/g,n=[];let a;for(;(a=e.exec(i))!==null;){let t=a[2]||a[3];t&&(!wn(t)&&a[1]==="-"&&(t="-"+t),n.push(t))}return n};function qa(i){return Dn((i||"").trim().toLowerCase()).filter(t=>{const r=!!t.match(/[a-zA-Z0-9]{1,}/);return t.length>0&&r}).map(t=>(t=t.replace(/"/g,""),t.startsWith("-")||t.startsWith("!")?{phrase:t.slice(1),wanted:!1}:{phrase:t,wanted:!0}))}function En(i,e){const n=qa(e);return i.filter(a=>{for(const t of n){const r=a.name.toLowerCase().includes(t.phrase),s=a.description.toLowerCase().includes(t.phrase);if((r||s)!==t.wanted)return!1}return!0})}function bn(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ua={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(i){(function(){var e={}.hasOwnProperty;function n(){for(var r="",s=0;s<arguments.length;s++){var o=arguments[s];o&&(r=t(r,a(o)))}return r}function a(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return n.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var s="";for(var o in r)e.call(r,o)&&r[o]&&(s=t(s,o));return s}function t(r,s){return s?r?r+" "+s:r+s:r}i.exports?(n.default=n,i.exports=n):window.classNames=n})()})(Ua);var Cn=Ua.exports;const le=bn(Cn);function Ca(i,e,n){const a=i.slice();return a[3]=e[n].href,a[4]=e[n].weight,a[5]=e[n].active,a[7]=n,a}function An(i){let e=i[4]+"",n;return{c(){n=T(e)},l(a){n=H(a,e)},m(a,t){p(a,n,t)},p(a,t){t&1&&e!==(e=a[4]+"")&&Ve(n,e)},d(a){a&&m(n)}}}function Mn(i){let e,n;return{c(){e=wa("svg"),n=wa("path"),this.h()},l(a){e=Da(a,"svg",{"aria-hidden":!0,viewBox:!0,width:!0,height:!0});var t=M(e);n=Da(t,"path",{fill:!0,d:!0}),M(n).forEach(m),t.forEach(m),this.h()},h(){l(n,"fill","currentColor"),l(n,"d","M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"),l(e,"aria-hidden","true"),l(e,"viewBox","0 0 512 512"),l(e,"width","16"),l(e,"height","16")},m(a,t){p(a,e,t),u(e,n)},p:Ge,d(a){a&&m(e)}}}function Aa(i){let e,n,a,t;function r(c,g){return c[4]===-1?Mn:An}let s=r(i),o=s(i);return{c(){e=w("a"),o.c(),n=P(),this.h()},l(c){e=D(c,"A",{href:!0,class:!0});var g=M(e);o.l(g),n=B(g),g.forEach(m),this.h()},h(){l(e,"href",a=i[3]),l(e,"class",t=J(le("px-3 py-1 flex items-center text-xs font-medium focus:z-10 focus:ring-2 border-gray-700",{active:i[5],excluded:i[4]===-1,regular:i[4]>-1,"rounded-l-md":i[7]===0,"rounded-r-md":i[7]===i[0].length-1}))+" svelte-pda6l7"),va(e,"active",i[5])},m(c,g){p(c,e,g),o.m(e,null),u(e,n)},p(c,g){s===(s=r(c))&&o?o.p(c,g):(o.d(1),o=s(c),o&&(o.c(),o.m(e,n))),g&1&&a!==(a=c[3])&&l(e,"href",a),g&1&&t!==(t=J(le("px-3 py-1 flex items-center text-xs font-medium focus:z-10 focus:ring-2 border-gray-700",{active:c[5],excluded:c[4]===-1,regular:c[4]>-1,"rounded-l-md":c[7]===0,"rounded-r-md":c[7]===c[0].length-1}))+" svelte-pda6l7")&&l(e,"class",t),g&1&&va(e,"active",c[5])},d(c){c&&m(e),o.d()}}}function Rn(i){let e,n,a,t="Weight:",r,s=$e(i[0]),o=[];for(let c=0;c<s.length;c+=1)o[c]=Aa(Ca(i,s,c));return{c(){e=w("div"),n=w("div"),a=w("span"),a.textContent=t,r=P();for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=D(c,"DIV",{class:!0});var g=M(e);n=D(g,"DIV",{class:!0,role:!0});var f=M(n);a=D(f,"SPAN",{class:!0,"data-svelte-h":!0}),Te(a)!=="svelte-f8vpuo"&&(a.textContent=t),r=B(f);for(let y=0;y<o.length;y+=1)o[y].l(f);f.forEach(m),g.forEach(m),this.h()},h(){l(a,"class","text-xs me-1 flex items-center pb-1/2"),l(n,"class","flex rounded-md shadow-sm"),l(n,"role","group"),l(e,"class","flex items-center")},m(c,g){p(c,e,g),u(e,n),u(n,a),u(n,r);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(n,null)},p(c,[g]){if(g&1){s=$e(c[0]);let f;for(f=0;f<s.length;f+=1){const y=Ca(c,s,f);o[f]?o[f].p(y,g):(o[f]=Aa(y),o[f].c(),o[f].m(n,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=s.length}},i:Ge,o:Ge,d(c){c&&m(e),Va(o,c)}}}function _n(i,e,n){let a,{mod:t}=e,{state:r}=e;return i.$$set=s=>{"mod"in s&&n(1,t=s.mod),"state"in s&&n(2,r=s.state)},i.$$.update=()=>{i.$$.dirty&6&&n(0,a=za.map(s=>{let o=r.modWeights.get(t.key);return{active:s===o,weight:s,href:xe+"/?"+Na(r,t.key,s)}}))},[a,t,r]}class xn extends Ia{constructor(e){super(),Ga(this,e,_n,Rn,Wa,{mod:1,state:2})}}const{document:ma}=mn;function Ma(i,e,n){const a=i.slice();return a[19]=e[n],a}function Ra(i){let e,n;return{c(){e=w("a"),n=T("X"),this.h()},l(a){e=D(a,"A",{class:!0,href:!0});var t=M(e);n=H(t,"X"),t.forEach(m),this.h()},h(){l(e,"class","absolute right-0 top-0 h-full text-gray-600 px-2 flex items-center"),l(e,"href",i[4])},m(a,t){p(a,e,t),u(e,n)},p(a,t){t&16&&l(e,"href",a[4])},d(a){a&&m(e)}}}function Ln(i){let e,n=i[5].length+"",a,t,r=Ze.length+"",s,o;return{c(){e=T("Showing "),a=T(n),t=T(" of "),s=T(r),o=T(" mods.")},l(c){e=H(c,"Showing "),a=H(c,n),t=H(c," of "),s=H(c,r),o=H(c," mods.")},m(c,g){p(c,e,g),p(c,a,g),p(c,t,g),p(c,s,g),p(c,o,g)},p(c,g){g&32&&n!==(n=c[5].length+"")&&Ve(a,n)},d(c){c&&(m(e),m(a),m(t),m(s),m(o))}}}function Tn(i){let e,n,a=i[6]&&_a(i);return{c(){e=T("Showing "),a&&a.c(),n=Le()},l(t){e=H(t,"Showing "),a&&a.l(t),n=Le()},m(t,r){p(t,e,r),a&&a.m(t,r),p(t,n,r)},p(t,r){t[6]?a?a.p(t,r):(a=_a(t),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},d(t){t&&(m(e),m(n)),a&&a.d(t)}}}function _a(i){let e,n,a,t=i[6]!==1&&xa();return{c(){e=T(i[6]),n=T(" selected mod"),t&&t.c(),a=Le()},l(r){e=H(r,i[6]),n=H(r," selected mod"),t&&t.l(r),a=Le()},m(r,s){p(r,e,s),p(r,n,s),t&&t.m(r,s),p(r,a,s)},p(r,s){s&64&&Ve(e,r[6]),r[6]!==1?t||(t=xa(),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},d(r){r&&(m(e),m(n),m(a)),t&&t.d(r)}}}function xa(i){let e;return{c(){e=T("s")},l(n){e=H(n,"s")},m(n,a){p(n,e,a)},d(n){n&&m(e)}}}function Hn(i){let e;return{c(){e=T("View all mods")},l(n){e=H(n,"View all mods")},m(n,a){p(n,e,a)},p:Ge,d(n){n&&m(e)}}}function Pn(i){let e,n,a,t,r=i[6]!==1&&La();return{c(){e=T("View "),n=T(i[6]),a=T(" selected mod"),r&&r.c(),t=Le()},l(s){e=H(s,"View "),n=H(s,i[6]),a=H(s," selected mod"),r&&r.l(s),t=Le()},m(s,o){p(s,e,o),p(s,n,o),p(s,a,o),r&&r.m(s,o),p(s,t,o)},p(s,o){o&64&&Ve(n,s[6]),s[6]!==1?r||(r=La(),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},d(s){s&&(m(e),m(n),m(a),m(t)),r&&r.d(s)}}}function La(i){let e;return{c(){e=T("s")},l(n){e=H(n,"s")},m(n,a){p(n,e,a)},d(n){n&&m(e)}}}function Ta(i){let e,n,a,t,r=i[19].name+"",s,o,c,g,f,y=i[7](i[19].description)+"",F,W,L,O,q,R,U,C,K,I,v,S;return I=new xn({props:{mod:i[19],state:i[0]}}),{c(){e=w("div"),n=w("a"),a=w("div"),t=w("h3"),s=T(r),c=P(),g=w("p"),f=new $a(!1),W=P(),L=w("div"),O=w("div"),q=P(),R=w("div"),K=P(),en(I.$$.fragment),this.h()},l(h){e=D(h,"DIV",{class:!0});var E=M(e);n=D(E,"A",{href:!0,class:!0});var _=M(n);a=D(_,"DIV",{class:!0});var ie=M(a);t=D(ie,"H3",{class:!0});var He=M(t);s=H(He,r),He.forEach(m),c=B(ie),g=D(ie,"P",{class:!0});var x=M(g);f=an(x,!1),x.forEach(m),ie.forEach(m),W=B(_),L=D(_,"DIV",{class:!0});var de=M(L);O=D(de,"DIV",{class:!0,style:!0}),M(O).forEach(m),q=B(de),R=D(de,"DIV",{class:!0,style:!0}),M(R).forEach(m),de.forEach(m),_.forEach(m),K=B(E),nn(I.$$.fragment,E),E.forEach(m),this.h()},h(){l(t,"class",o=J(le("text-xl font-semibold mb-1 ",{"line-through":i[0].modWeights.get(i[19].key)===-1}))+" svelte-px2vto"),f.a=null,l(g,"class",F=J(le("flex gap-1.5 flex-col ",{"line-through":i[0].modWeights.get(i[19].key)===-1}))+" svelte-px2vto"),l(a,"class","pe-1"),l(O,"class","absolute bg-contain z-10 bg-no-repeat w-full h-full top-0 left-0"),l(O,"style","background-image: url(./notables/frame.png)"),l(R,"class","relative bg-center z-0 bg-no-repeat w-16 h-16 top-0 left-0"),l(R,"style",U=`background-size: 71% auto; background-image: url(./notables/${i[19].image}.png)`),l(L,"class","relative"),l(n,"href",C=i[19].href),l(n,"class","select-text grid grid-cols-[1fr_min-content] mb-3"),l(e,"class",v=J(le("border-2 rounded px-3 py-3 mb-4 ",{"border-blue-200 text-white bg-slate-800":i[0].modWeights.has(i[19].key),"border-gray-800 text-gray-300":!i[0].modWeights.has(i[19].key)}))+" svelte-px2vto")},m(h,E){p(h,e,E),u(e,n),u(n,a),u(a,t),u(t,s),u(a,c),u(a,g),f.m(y,g),u(n,W),u(n,L),u(L,O),u(L,q),u(L,R),u(e,K),tn(I,e,null),S=!0},p(h,E){(!S||E&32)&&r!==(r=h[19].name+"")&&Ve(s,r),(!S||E&33&&o!==(o=J(le("text-xl font-semibold mb-1 ",{"line-through":h[0].modWeights.get(h[19].key)===-1}))+" svelte-px2vto"))&&l(t,"class",o),(!S||E&32)&&y!==(y=h[7](h[19].description)+"")&&f.p(y),(!S||E&33&&F!==(F=J(le("flex gap-1.5 flex-col ",{"line-through":h[0].modWeights.get(h[19].key)===-1}))+" svelte-px2vto"))&&l(g,"class",F),(!S||E&32&&U!==(U=`background-size: 71% auto; background-image: url(./notables/${h[19].image}.png)`))&&l(R,"style",U),(!S||E&32&&C!==(C=h[19].href))&&l(n,"href",C);const _={};E&32&&(_.mod=h[19]),E&1&&(_.state=h[0]),I.$set(_),(!S||E&33&&v!==(v=J(le("border-2 rounded px-3 py-3 mb-4 ",{"border-blue-200 text-white bg-slate-800":h[0].modWeights.has(h[19].key),"border-gray-800 text-gray-300":!h[0].modWeights.has(h[19].key)}))+" svelte-px2vto"))&&l(e,"class",v)},i(h){S||(Xe(I.$$.fragment,h),S=!0)},o(h){ha(I.$$.fragment,h),S=!1},d(h){h&&m(e),rn(I)}}}function Ha(i){let e,n="No mods selected.";return{c(){e=w("div"),e.textContent=n,this.h()},l(a){e=D(a,"DIV",{class:!0,"data-svelte-h":!0}),Te(e)!=="svelte-1hseqev"&&(e.textContent=n),this.h()},h(){l(e,"class","text-center text-gray-400")},m(a,t){p(a,e,t)},d(a){a&&m(e)}}}function Pa(i){let e,n="No mods found.";return{c(){e=w("div"),e.textContent=n,this.h()},l(a){e=D(a,"DIV",{class:!0,"data-svelte-h":!0}),Te(e)!=="svelte-m0goju"&&(e.textContent=n),this.h()},h(){l(e,"class","text-center text-gray-400")},m(a,t){p(a,e,t)},d(a){a&&m(e)}}}function Ba(i){let e,n="Clear All Selections";return{c(){e=w("a"),e.textContent=n,this.h()},l(a){e=D(a,"A",{class:!0,href:!0,"data-svelte-h":!0}),Te(e)!=="svelte-y0370s"&&(e.textContent=n),this.h()},h(){l(e,"class","text-red-300"),l(e,"href","/"+xe)},m(a,t){p(a,e,t)},d(a){a&&m(e)}}}function Bn(i){let e,n="Open Trade Link";return{c(){e=w("button"),e.textContent=n,this.h()},l(a){e=D(a,"BUTTON",{class:!0,"data-svelte-h":!0}),Te(e)!=="svelte-1u1abfs"&&(e.textContent=n),this.h()},h(){e.disabled=!0,l(e,"class","trade-link svelte-px2vto")},m(a,t){p(a,e,t)},p:Ge,d(a){a&&m(e)}}}function Fn(i){let e,n;return{c(){e=w("a"),n=T("Open Trade Link"),this.h()},l(a){e=D(a,"A",{href:!0,target:!0,class:!0});var t=M(e);n=H(t,"Open Trade Link"),t.forEach(m),this.h()},h(){l(e,"href",i[2]),l(e,"target","_blank"),l(e,"class","trade-link svelte-px2vto")},m(a,t){p(a,e,t),u(e,n)},p(a,t){t&4&&l(e,"href",a[2])},d(a){a&&m(e)}}}function Wn(i){let e,n,a,t,r="Megalomaniac Trade Search Tool",s,o,c,g,f,y,F,W,L,O,q,R,U,C,K,I,v,S,h,E,_,ie,He,x=i[1]&&Ra(i);function de(d,k){return d[0].view==="selected"?Tn:Ln}let ze=de(i),Y=ze(i);function ga(d,k){return d[0].view==="search"?Pn:Hn}let Oe=ga(i),Q=Oe(i),me=$e(i[5]),A=[];for(let d=0;d<me.length;d+=1)A[d]=Ta(Ma(i,me,d));const Ka=d=>ha(A[d],1,1,()=>{A[d]=null});let G=i[0].view==="selected"&&i[6]===0&&Ha(),V=i[0].view==="search"&&i[5].length===0&&Pa(),z=i[0].view==="selected"&&i[6]>1&&Ba();function fa(d,k){return d[6]>0?Fn:Bn}let je=fa(i),X=je(i);return{c(){e=w("meta"),n=P(),a=w("div"),t=w("h1"),t.textContent=r,s=P(),o=w("form"),c=w("input"),y=P(),x&&x.c(),F=P(),W=w("div"),L=w("div"),Y.c(),O=P(),q=w("div"),R=w("a"),Q.c(),U=P(),C=w("div");for(let d=0;d<A.length;d+=1)A[d].c();K=P(),G&&G.c(),I=P(),V&&V.c(),v=P(),z&&z.c(),S=P(),h=w("div"),E=w("section"),X.c(),this.h()},l(d){const k=Xa("svelte-kvfzwq",ma.head);e=D(k,"META",{name:!0,content:!0}),k.forEach(m),n=B(d),a=D(d,"DIV",{class:!0});var b=M(a);t=D(b,"H1",{class:!0,"data-svelte-h":!0}),Te(t)!=="svelte-1uzh36l"&&(t.textContent=r),s=B(b),o=D(b,"FORM",{method:!0,action:!0,class:!0});var he=M(o);c=D(he,"INPUT",{class:!0,autocomplete:!0,spellcheck:!0,type:!0,name:!0,placeholder:!0}),y=B(he),x&&x.l(he),he.forEach(m),F=B(b),W=D(b,"DIV",{class:!0});var Ne=M(W);L=D(Ne,"DIV",{});var ua=M(L);Y.l(ua),ua.forEach(m),O=B(Ne),q=D(Ne,"DIV",{});var pa=M(q);R=D(pa,"A",{class:!0,href:!0});var ya=M(R);Q.l(ya),ya.forEach(m),pa.forEach(m),Ne.forEach(m),b.forEach(m),U=B(d),C=D(d,"DIV",{class:!0});var te=M(C);for(let ea=0;ea<A.length;ea+=1)A[ea].l(te);K=B(te),G&&G.l(te),I=B(te),V&&V.l(te),v=B(te),z&&z.l(te),te.forEach(m),S=B(d),h=D(d,"DIV",{id:!0,class:!0});var Sa=M(h);E=D(Sa,"SECTION",{class:!0});var ka=M(E);X.l(ka),ka.forEach(m),Sa.forEach(m),this.h()},h(){ma.title="Megalomaniac Trade Search - Path of Exile Tool",l(e,"name","description"),l(e,"content","Find the perfect Megalomaniac for your build."),l(t,"class","text-2xl bold mb-1"),c.disabled=g=i[0].view!=="search",l(c,"class",f=J("outline-none w-full text-gray-800 ps-2 pe-8 py-1 "+(i[0].view==="selected"?"opacity-50":""))+" svelte-px2vto"),l(c,"autocomplete","off"),l(c,"spellcheck","false"),c.value=i[1],l(c,"type","text"),l(c,"name","search"),l(c,"placeholder","Search"),l(o,"method","GET"),l(o,"action","/"),l(o,"class","relative"),l(R,"class","text-cyan-300 hover:text-cyan-200 cursor-pointer"),l(R,"href",i[3]),l(W,"class","text-sm text-gray-300 py-2 flex justify-between"),l(a,"class","top-0 sticky bg-slate-900 z-30"),l(C,"class",""),l(E,"class","max-w-2xl w-full py-3 px-2"),l(h,"id","footer"),l(h,"class","fixed bottom-0 z-30 left-0 w-full bg-gray-700 flex justify-center")},m(d,k){u(ma.head,e),p(d,n,k),p(d,a,k),u(a,t),u(a,s),u(a,o),u(o,c),u(o,y),x&&x.m(o,null),u(a,F),u(a,W),u(W,L),Y.m(L,null),u(W,O),u(W,q),u(q,R),Q.m(R,null),p(d,U,k),p(d,C,k);for(let b=0;b<A.length;b+=1)A[b]&&A[b].m(C,null);u(C,K),G&&G.m(C,null),u(C,I),V&&V.m(C,null),u(C,v),z&&z.m(C,null),p(d,S,k),p(d,h,k),u(h,E),X.m(E,null),_=!0,ie||(He=Za(c,"input",i[8]),ie=!0)},p(d,[k]){if((!_||k&1&&g!==(g=d[0].view!=="search"))&&(c.disabled=g),(!_||k&1&&f!==(f=J("outline-none w-full text-gray-800 ps-2 pe-8 py-1 "+(d[0].view==="selected"?"opacity-50":""))+" svelte-px2vto"))&&l(c,"class",f),(!_||k&2&&c.value!==d[1])&&(c.value=d[1]),d[1]?x?x.p(d,k):(x=Ra(d),x.c(),x.m(o,null)):x&&(x.d(1),x=null),ze===(ze=de(d))&&Y?Y.p(d,k):(Y.d(1),Y=ze(d),Y&&(Y.c(),Y.m(L,null))),Oe===(Oe=ga(d))&&Q?Q.p(d,k):(Q.d(1),Q=Oe(d),Q&&(Q.c(),Q.m(R,null))),(!_||k&8)&&l(R,"href",d[3]),k&161){me=$e(d[5]);let b;for(b=0;b<me.length;b+=1){const he=Ma(d,me,b);A[b]?(A[b].p(he,k),Xe(A[b],1)):(A[b]=Ta(he),A[b].c(),Xe(A[b],1),A[b].m(C,K))}for(sn(),b=me.length;b<A.length;b+=1)Ka(b);Ja()}d[0].view==="selected"&&d[6]===0?G||(G=Ha(),G.c(),G.m(C,I)):G&&(G.d(1),G=null),d[0].view==="search"&&d[5].length===0?V||(V=Pa(),V.c(),V.m(C,v)):V&&(V.d(1),V=null),d[0].view==="selected"&&d[6]>1?z||(z=Ba(),z.c(),z.m(C,null)):z&&(z.d(1),z=null),je===(je=fa(d))&&X?X.p(d,k):(X.d(1),X=je(d),X&&(X.c(),X.m(E,null)))},i(d){if(!_){for(let k=0;k<me.length;k+=1)Xe(A[k]);_=!0}},o(d){A=A.filter(Boolean);for(let k=0;k<A.length;k+=1)ha(A[k]);_=!1},d(d){d&&(m(n),m(a),m(U),m(C),m(S),m(h)),m(e),x&&x.d(),Y.d(),Q.d(),Va(A,d),G&&G.d(),V&&V.d(),z&&z.d(),X.d(),ie=!1,He()}}}function Fa(i){return[i.search,i.view].join("-")}function In(i,e,n){let a,t,r,s,o,c,g;Ya(i,dn,v=>n(15,g=v));let f=window.location.search,y=da(f),F=y.search,W,L,O=Fa(y);function q(v){return console.log("searchPieces",c),"<div>"+v.split(/\n/g).map(S=>(c.length&&c.forEach(h=>{h.wanted&&(S=S.replace(new RegExp(h.phrase,"gi"),E=>'<span class="text-yellow-400">'+E+"</span>"))}),S)).join("</div><div>")+"</div>"}let R=0;cn(()=>{R=window.scrollY}),Qa(()=>{document.querySelector('input[name="search"]').focus()});function U(v){const S=Sn(v);document.title=S.title}function C(){f=window.location.search;const v=da(f);n(0,y=v),U(v),n(1,F=v.search);const S=Fa(v);S!==O?window.scrollTo(0,0):window.scrollTo(0,R),O=S}on(()=>{C()});function K(v){let S;return v.view==="selected"?S=Ze.filter(h=>!!v.modWeights.get(h.key)):S=En(Ze,v.search).map(h=>h),S.map(h=>{const E=v.modWeights.get(h.key),_=xe+"/?"+Na(y,h.key,E||5);return{...h,href:_}})}function I(v){clearTimeout(L),L=setTimeout(()=>{const S=v.target;n(1,F=S.value),n(0,y.search=F,y),n(5,t=K(y)),clearTimeout(W),F.length&&window.scrollTo(0,0),W=setTimeout(()=>{const h=da(g.url.searchParams.toString());h.search=F,ln(xe+"/?"+Je(h),{noScroll:!0,keepFocus:!0})},250)},25)}return i.$$.update=()=>{i.$$.dirty&1&&n(6,a=Array.from(y.modWeights.values()).filter(v=>!!v).length),i.$$.dirty&1&&n(5,t=K(y)),i.$$.dirty&1&&n(4,r=xe+"/?"+Je({...y,search:""}).toString()),i.$$.dirty&1&&n(3,s=xe+"/?"+Je({...y,view:y.view==="selected"?"search":"selected"}).toString()),i.$$.dirty&1&&n(2,o=vn(Ze,y)),i.$$.dirty&1&&(c=qa(y.search))},[y,F,o,s,r,t,a,q,I]}class Nn extends Ia{constructor(e){super(),Ga(this,e,In,Wn,Wa,{})}}export{Nn as component,jn as universal};
