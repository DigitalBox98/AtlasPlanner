



sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[6]=60;sCON[6]=60;sDEX[6]=60;sQUI[6]=60;sINT[6]=60;sPIE[6]=60;sEMP[6]=60;sCHA[6]=60; 

Abilities = new Array(16)		
Abilities[1]=new abilityPT("Rejuvenation",0,2,2,1,0,0)
Abilities[2]=new abilityPT("Enhancement",0,3,2,1,0,0)
Abilities[3]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[4]=new abilityPT("Crush",0,87,5,0,0,0)
Abilities[5]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[6]=new abilityPT("Leather Armor",0,100,7,0,0,0)
Abilities[7]=new abilityPT("Shields (Small)",0,102,7,0,0,0)
Abilities[8]=new abilityPT("Rejuvenation Spec.",5,78,3,0,2,0)
Abilities[9]=new abilityPT("Enhancement Spec.",5,80,3,0,3,0)
Abilities[10]=new abilityPT("Staff",5,83,5,1,0,0)
Abilities[11]=new abilityPT("Evade I",5,113,4,0,0,0)
Abilities[12]=new abilityPT("Parry",10,107,4,1,0,0)
Abilities[13]=new abilityPT("Evade II",10,114,4,0,0,0)
Abilities[14]=new abilityPT("Evade III",15,115,4,0,0,0)
Abilities[15]=new abilityPT("Evade IV",22,116,4,0,0,0)
Abilities[16]=new abilityPT("Evade V",33,157,4,0,0,0)

Spells = new Array(108)

Lines = new Array(23);

Lines[2079]=new linePT('Minor Heal','Heals target for a very small amount of health. Casts quickly and uses little power.',2,0) 
Spells[1]=new spellPT("Minor Rejuvenation",1,2079,2,"6 HP ",2,"1 PP",'2000','2.2s','','','','') 
Spells[2]=new spellPT("Minor Regeneracy",3,2079,2,"11 HP ",2,"2 PP",'2000','2.2s','','','','') 
Spells[3]=new spellPT("Minor Relief",5,2079,2,"16 HP ",2,"3 PP",'2000','2.2s','','','','') 
Spells[4]=new spellPT("Minor Restoration",8,2079,2,"23 HP ",2,"4 PP",'2000','2.2s','','','','') 
Spells[5]=new spellPT("Minor Recuperation",11,2079,2,"31 HP ",2,"5 PP",'2000','2.2s','','','','') 
Spells[6]=new spellPT("Minor Renewal",14,2079,2,"38 HP ",2,"6 PP",'2000','2.2s','','','','') 
Spells[7]=new spellPT("Minor Revival",18,2079,2,"48 HP ",2,"8 PP",'2000','2.2s','','','','') 
Spells[8]=new spellPT("Minor Resuscitation",23,2079,2,"60 HP ",2,"10 PP",'2000','2.2s','','','','') 
Spells[9]=new spellPT("Minor Reviction",29,2079,2,"75 HP ",2,"12 PP",'2000','2.2s','','','','') 
Spells[10]=new spellPT("Minor Refection",37,2079,2,"95 HP ",2,"14 PP",'2000','2.2s','','','','') 
Spells[11]=new spellPT("Minor Refocillation",47,2079,2,"119 HP ",2,"17 PP",'2000','2.2s','','','','') 
Lines[2081]=new linePT('Heal','Heals target for a small amount of health. Uses little power.',2,0) 
Spells[12]=new spellPT("Regeneracy",4,2081,2,"26 HP ",2,"4 PP",'2000','2.8s','','','','') 
Spells[13]=new spellPT("Relief",6,2081,2,"36 HP ",2,"6 PP",'2000','2.8s','','','','') 
Spells[14]=new spellPT("Restoration",9,2081,2,"50 HP ",2,"9 PP",'2000','2.8s','','','','') 
Spells[15]=new spellPT("Recuperation",12,2081,2,"65 HP ",2,"11 PP",'2000','2.8s','','','','') 
Spells[16]=new spellPT("Renewal",16,2081,2,"85 HP ",2,"15 PP",'2000','2.8s','','','','') 
Spells[17]=new spellPT("Revival",21,2081,2,"109 HP ",2,"19 PP",'2000','2.8s','','','','') 
Spells[18]=new spellPT("Resuscitation",27,2081,2,"138 HP ",2,"25 PP",'2000','2.8s','','','','') 
Spells[19]=new spellPT("Reviction",31,2081,2,"158 HP ",2,"28 PP",'2000','2.8s','','','','') 
Spells[20]=new spellPT("Refection",36,2081,2,"183 HP ",2,"33 PP",'2000','2.8s','','','','') 
Spells[21]=new spellPT("Refocillation",46,2081,2,"231 HP ",2,"42 PP",'2000','2.8s','','','','') 
Lines[2063]=new linePT('Resurrection','Brings target back to life, and restores a portion of their health and power, and eliminates the experience penalty and con loss they would have suffered were they to have /released. (Note that con loss still applies when resurrected on a PvP server.)',2,0) 
Spells[22]=new spellPT("Revive",10,2063,2,"10%H 0%P ",2,"25%+ ",'1500','4.0s','','','','') 
Lines[2080]=new linePT('Minor Group Heal','Heals every member of the group for a small amount of health.',2,0) 
Spells[23]=new spellPT("Angelic Commendation",15,2080,2,"33 HP ",2,"17 PP",'2000','3.0s','','','','') 
Spells[24]=new spellPT("Angelic Benediction",25,2080,2,"53 HP ",2,"21 PP",'2000','3.0s','','','','') 
Spells[25]=new spellPT("Angelic Blessing",35,2080,2,"73 HP ",2,"24 PP",'2000','3.0s','','','','') 
Spells[26]=new spellPT("Angelic Approbation",45,2080,2,"93 HP ",2,"25 PP",'2000','3.0s','','','','') 
Lines[78082]=new linePT('Major Heal','Heals target.',78,0) 
Spells[27]=new spellPT("Major Restoration",5,78082,78,"55 HP ",78,"10 PP",'2000','3.2s','','','','') 
Spells[28]=new spellPT("Major Recuperation",8,78082,78,"82 HP ",78,"15 PP",'2000','3.2s','','','','') 
Spells[29]=new spellPT("Major Renewal",11,78082,78,"109 HP ",78,"20 PP",'2000','3.2s','','','','') 
Spells[30]=new spellPT("Major Revival",14,78082,78,"136 HP ",78,"24 PP",'2000','3.2s','','','','') 
Spells[31]=new spellPT("Major Resuscitation",18,78082,78,"172 HP ",78,"30 PP",'2000','3.2s','','','','') 
Spells[32]=new spellPT("Major Reviction",25,78082,78,"235 HP ",78,"39 PP",'2000','3.2s','','','','') 
Spells[33]=new spellPT("Major Refection",33,78082,78,"307 HP ",78,"48 PP",'2000','3.2s','','','','') 
Spells[34]=new spellPT("Major Refocillation",43,78082,78,"396 HP ",78,"58 PP",'2000','3.2s','','','','') 
Lines[78083]=new linePT('Cure Poison','Attempts to cure target of all poisons.',78,0) 
Spells[35]=new spellPT("Cure Poison",6,78083,78,"",78,"6% ",'1500','3.2s','','','','') 
Lines[78084]=new linePT('Cure Disease','Attempts to cure target of all disease.',78,0) 
Spells[36]=new spellPT("Cure Disease",7,78084,78,"",78,"6% ",'1500','3.2s','','','','') 
Lines[78063]=new linePT('Resurrection','Brings target back to life, and restores a portion of their health and power, and eliminates the experience penalty and con loss they would have suffered were they to have /released. (Note that con loss still applies when resurrected on a PvP server.)',78,0) 
Spells[37]=new spellPT("Raise Fallen",15,78063,78,"10%H 10%P ",78,"25%+ ",'1500','4.0s','','','','') 
Lines[78101]=new linePT('Heal over Time (Group)','Target is healed during the spell\'s duration.',78,0) 
Spells[38]=new spellPT("Blessed Encouragement",24,78101,78,"37 HP ",78,"61 PP",'2000','4.0s','','','15s','') 
Spells[39]=new spellPT("Holy Encouragment",34,78101,78,"52 HP ",78,"79 PP",'2000','4.0s','','','15s','') 
Spells[40]=new spellPT("Champion's Encouragment",44,78101,78,"67 HP ",78,"94 PP",'2000','4.0s','','','15s','') 
Lines[3003]=new linePT('Shield','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',3,0) 
Spells[41]=new spellPT("Aura of Shielding",2,3003,3,"12 AF ",3,"",'1000','3.0s','','','','') 
Spells[42]=new spellPT("Greater Aura of Shielding",5,3003,3,"15 AF ",3,"",'1000','3.0s','','','','') 
Spells[43]=new spellPT("Aura of Defense",10,3003,3,"20 AF ",3,"",'1000','3.0s','','','','') 
Spells[44]=new spellPT("Greater Aura of Defense",16,3003,3,"26 AF ",3,"",'1000','3.0s','','','','') 
Spells[45]=new spellPT("Aura of Guarding",22,3003,3,"32 AF ",3,"",'1000','3.0s','','','','') 
Spells[46]=new spellPT("Greater Aura of Guarding",31,3003,3,"41 AF ",3,"",'1000','3.0s','','','','') 
Spells[47]=new spellPT("Aura of Deflection",42,3003,3,"52 AF ",3,"",'1000','3.0s','','','','') 
Lines[3037]=new linePT('Buff (Strength)','Increases the target\'s Strength, which will cause it to be able to carry more weight, do more damage and be more effective in melee combat.',3,0) 
Spells[48]=new spellPT("Blessed Strength",3,3037,3,"+12 STR ",3,"",'1000','3.0s','','','','') 
Spells[49]=new spellPT("Blessed Potency",7,3037,3,"+15 STR ",3,"",'1000','3.0s','','','','') 
Spells[50]=new spellPT("Blessed Power",14,3037,3,"+21 STR ",3,"",'1000','3.0s','','','','') 
Spells[51]=new spellPT("Holy Strength",20,3037,3,"+26 STR ",3,"",'1000','3.0s','','','','') 
Spells[52]=new spellPT("Holy Potency",30,3037,3,"+34 STR ",3,"",'1000','3.0s','','','','') 
Spells[53]=new spellPT("Holy Power",41,3037,3,"+42 STR ",3,"",'1000','3.0s','','','','') 
Spells[54]=new spellPT("Holy Might",50,3037,3,"+50 STR ",3,"",'1000','3.0s','','','','') 
Lines[3085]=new linePT('Buff (Constitution)','Increases the target\'s Constitution, which will cause it to be able to take more damage.',3,0) 
Spells[55]=new spellPT("Blessing of Health",6,3085,3,"+14 CON ",3,"",'1000','3.0s','','','','') 
Spells[56]=new spellPT("Benison of Health",11,3085,3,"+18 CON ",3,"",'1000','3.0s','','','','') 
Spells[57]=new spellPT("Benediction of Health",15,3085,3,"+22 CON ",3,"",'1000','3.0s','','','','') 
Spells[58]=new spellPT("Blessing of Fortitude",24,3085,3,"+29 CON ",3,"",'1000','3.0s','','','','') 
Spells[59]=new spellPT("Benison of Fortitude",33,3085,3,"+36 CON ",3,"",'1000','3.0s','','','','') 
Spells[60]=new spellPT("Benediction of Fortitude",43,3085,3,"+44 CON ",3,"",'1000','3.0s','','','','') 
Lines[3039]=new linePT('Buff (Dexterity)','Increases the target\'s Dexterity, which will cause it to be more effective in melee combat and to cast spells faster.',3,0) 
Spells[61]=new spellPT("Blessed Dexterity",8,3039,3,"+16 DEX ",3,"",'1000','3.0s','','','','') 
Spells[62]=new spellPT("Blessed Agility",13,3039,3,"+20 DEX ",3,"",'1000','3.0s','','','','') 
Spells[63]=new spellPT("Blessed Coordination",19,3039,3,"+25 DEX ",3,"",'1000','3.0s','','','','') 
Spells[64]=new spellPT("Holy Dexterity",28,3039,3,"+32 DEX ",3,"",'1000','3.0s','','','','') 
Spells[65]=new spellPT("Holy Agility",38,3039,3,"+40 DEX ",3,"",'1000','3.0s','','','','') 
Spells[66]=new spellPT("Holy Coordination",48,3039,3,"+48 DEX ",3,"",'1000','3.0s','','','','') 
Lines[80003]=new linePT('Shield (Self)','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',80,0) 
Spells[67]=new spellPT("Shield of Faith",1,80003,80,"14 AF ",80,"10% ",'','4.0s','','','20m','') 
Spells[68]=new spellPT("Shield of Piety",3,80003,80,"16 AF ",80,"10% ",'','4.0s','','','20m','') 
Spells[69]=new spellPT("Shield of Devotion",7,80003,80,"20 AF ",80,"10% ",'','4.0s','','','20m','') 
Spells[70]=new spellPT("Shield of Grace",11,80003,80,"24 AF ",80,"10% ",'','4.0s','','','20m','') 
Spells[71]=new spellPT("Shield of Justice",16,80003,80,"29 AF ",80,"10% ",'','4.0s','','','20m','') 
Spells[72]=new spellPT("Shield of Zeal",24,80003,80,"37 AF ",80,"10% ",'','4.0s','','','20m','') 
Spells[73]=new spellPT("Shield of Holiness",33,80003,80,"46 AF ",80,"10% ",'','4.0s','','','20m','') 
Spells[74]=new spellPT("Shield of the Sanctified",45,80003,80,"58 AF ",80,"10% ",'','4.0s','','','20m','') 
Lines[80073]=new linePT('Fatigue Regeneration (Self, Chant)','Spell that increases the caster\'s rate of fatigue regeneration, allowing them to use more styles during combat or sprint for longer distances. Spell is a chant and drains power while being used, and ends when the caster either ends the chant or runs out of power.',80,0) 
Spells[75]=new spellPT("Saint's Vigor",2,80073,80,"2 FAT Regen ",80," 2/P",'','','','','5s (pulse)','') 
Lines[80040]=new linePT('Buff (Self, Combat Speed)','Increases the target\'s combat speed, which will cause it to be considerably more effective in melee combat.',80,0) 
Spells[76]=new spellPT("Speed of the Angel",5,80040,80,"13% Hasted ",80,"10% ",'','','','180s','30s','') 
Spells[77]=new spellPT("Haste of the Angel",10,80040,80,"16% Hasted ",80,"10% ",'','','','180s','30s','') 
Spells[78]=new spellPT("Alacrity of the Angel",15,80040,80,"19% Hasted ",80,"10% ",'','','','180s','30s','') 
Spells[79]=new spellPT("Speed of the Archangel",23,80040,80,"23% Hasted ",80,"10% ",'','','','180s','30s','') 
Spells[80]=new spellPT("Haste of the Archangel",30,80040,80,"28% Hasted ",80,"10% ",'','','','180s','30s','') 
Spells[81]=new spellPT("Alacrity of the Archangel",38,80040,80,"32% Hasted ",80,"10% ",'','','','180s','30s','') 
Spells[82]=new spellPT("Alacrity of the Heavenly Host",47,80040,80,"38% Hasted ",80,"10% ",'','','','180s','30s','') 
Lines[80065]=new linePT('Taunt','Attracts the attention of a creature. Can be used for \"pulling\" targets from a distance, \"peeling off\" a target that is attacking a friend, or interrupting enemy casters.',80,0) 
Spells[83]=new spellPT("Tease",6,80065,80,"6.3 ",80,"",'1350','','','30s','','') 
Spells[84]=new spellPT("Annoy",19,80065,80,"22.4 ",80,"",'1350','','','30s','','') 
Spells[85]=new spellPT("Inflame",36,80065,80,"48.6 ",80,"",'1350','','','30s','','') 
Spells[86]=new spellPT("Incense",40,80065,80,"55.6 ",80,"",'1350','','','30s','','') 
Lines[80048]=new linePT('Buff (Self, Dexterity/Quickness)','Increases the target\'s Dexterity and Quickness, which will cause it to do more damage and be more effective in melee combat as well as cast spells faster.',80,0) 
Spells[87]=new spellPT("Readiness",7,80048,80,"+22 DEX/QUI ",80,"10% ",'','3.0s','','','20m','') 
Spells[88]=new spellPT("Coordination",12,80048,80,"+28 DEX/QUI ",80,"10% ",'','3.0s','','','20m','') 
Spells[89]=new spellPT("Agility",18,80048,80,"+36 DEX/QUI ",80,"10% ",'','3.0s','','','20m','') 
Spells[90]=new spellPT("Precision",25,80048,80,"+45 DEX/QUI ",80,"10% ",'','3.0s','','','20m','') 
Spells[91]=new spellPT("Gracefulness",35,80048,80,"+57 DEX/QUI ",80,"10% ",'','3.0s','','','20m','') 
Spells[92]=new spellPT("Fluidity",45,80048,80,"+69 DEX/QUI ",80,"10% ",'','3.0s','','','20m','') 
Lines[80074]=new linePT('Fatigue Reduction (Self)','Reduces the fatigue cost of combat styles used by the caster.',80,0) 
Spells[93]=new spellPT("Saint's Energy",12,80074,80,"10% ",80,"10% ",'','3.0s','','','20m','') 
Spells[94]=new spellPT("Saint's Stamina",22,80074,80,"15% ",80,"10% ",'','3.0s','','','20m','') 
Spells[95]=new spellPT("Saint's Persistence",32,80074,80,"20% ",80,"10% ",'','3.0s','','','20m','') 
Spells[96]=new spellPT("Saint's Tenacity",42,80074,80,"25% ",80,"10% ",'','3.0s','','','20m','') 
Lines[80076]=new linePT('Buff (Group, Heat Resistance)','Target\'s resistance to Heat damage is increased.',80,0) 
Spells[97]=new spellPT("Resilience of the Wanderer",21,80076,80,"+8 HEAT ",80,"17 PP",'1000','3.0s','','','10m','') 
Spells[98]=new spellPT("Fortitude of the Wanderer",31,80076,80,"+16 HEAT ",80,"25 PP",'1000','3.0s','','','10m','') 
Spells[99]=new spellPT("Piety of the Wanderer",46,80076,80,"+24 HEAT ",80,"39 PP",'1000','3.0s','','','10m','') 
Lines[80077]=new linePT('Buff (Group, Cold Resistance)','Target\'s resistance to Cold damage is increased.',80,0) 
Spells[100]=new spellPT("Hearth's Blessing",25,80077,80,"+8 COLD ",80,"20 PP",'1000','3.0s','','','10m','') 
Spells[101]=new spellPT("Hearth's Benison",35,80077,80,"+16 COLD ",80,"29 PP",'1000','3.0s','','','10m','') 
Spells[102]=new spellPT("Hearth's Gift",48,80077,80,"+24 COLD ",80,"41 PP",'1000','3.0s','','','10m','') 
Lines[80078]=new linePT('Buff (Group, Matter Resistance)','Target\'s resistance to Matter damage is increased.',80,0) 
Spells[103]=new spellPT("Attunement to Creation",27,80078,80,"+8 MATTER ",80,"22 PP",'1000','3.0s','','','10m','') 




Spells[104]=new spellPT("Blessing of Creation",37,80078,80,"+16 MATTER ",80,"31 PP",'1000','3.0s','','','10m','') 
Spells[105]=new spellPT("Oneness with Creation",49,80078,80,"+24 MATTER ",80,"42 PP",'1000','3.0s','','','10m','') 
Lines[80005]=new linePT('Absorb (Self)','Adds to the target\'s absorption (ABS) factor, resulting in better protection against melee attacks.',80,0) 
Spells[106]=new spellPT("Blessing of Resilience",26,80005,80,"5% ",80,"10% ",'','3.0s','','','20m','') 
Spells[107]=new spellPT("Blessing of Absorption",34,80005,80,"10% ",80,"10% ",'','3.0s','','','20m','') 
Spells[108]=new spellPT("Blessing of Dissipation",44,80005,80,"15% ",80,"10% ",'','3.0s','','','20m','') 



