sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[1]=60;sCON[1]=60;sDEX[1]=60;sQUI[1]=60;sINT[1]=60;sPIE[1]=60;sEMP[1]=60;sCHA[1]=60; 
sSTR[3]=90;sCON[3]=60;sDEX[3]=40;sQUI[3]=40;sINT[3]=60;sPIE[3]=60;sEMP[3]=70;sCHA[3]=60; 
sSTR[14]=70;sCON[14]=60;sDEX[14]=55;sQUI[14]=45;sINT[14]=70;sPIE[14]=60;sEMP[14]=60;sCHA[14]=60; 

Abilities = new Array(14)		
Abilities[1]=new abilityPT("Regrowth",0,42,2,1,0,0)
Abilities[2]=new abilityPT("Nurture",0,46,2,1,0,0)
Abilities[3]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[4]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[5]=new abilityPT("Leather Armor",0,100,7,0,0,0)
Abilities[6]=new abilityPT("Shields (Small)",0,102,7,0,0,0)
Abilities[7]=new abilityPT("Blunt",0,122,5,0,0,0)
Abilities[8]=new abilityPT("Blades",0,123,5,0,0,0)
Abilities[9]=new abilityPT("Regrowth Spec.",5,44,3,0,42,0)
Abilities[10]=new abilityPT("Nurture Spec.",5,48,3,0,46,0)
Abilities[11]=new abilityPT("Nature",5,50,2,1,0,0)
Abilities[12]=new abilityPT("Nature Spec.",5,51,3,0,50,0)
Abilities[13]=new abilityPT("Reinforced Armor",10,124,7,0,0,0)
Abilities[14]=new abilityPT("Scale Armor",20,126,7,0,0,0)
	
//Styles = new Array(0);

Spells = new Array();
Lines = new Array();

var idx=1;
Lines[42079]=new linePT('Minor Heal','Heals target for a very small amount of health. Casts quickly and uses little power.',42,0) 
Spells[idx++]=new spellPT("Minor Revigoration",1,42079,42,"6 HP ",42,"1 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Renewal",3,42079,42,"11 HP ",42,"2 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Revivification",5,42079,42,"16 HP ",42,"3 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Resurgance",8,42079,42,"23 HP ",42,"4 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Revival",11,42079,42,"31 HP ",42,"5 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Regeneration",14,42079,42,"38 HP ",42,"6 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Regrowth",18,42079,42,"48 HP ",42,"8 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Restoration",23,42079,42,"60 HP ",42,"10 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Resuscitation",29,42079,42,"75 HP ",42,"12 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Renascence",37,42079,42,"95 HP ",42,"14 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Apotheosis",47,42079,42,"119 HP ",42,"17 PP",'2000','2.2s','','','','') 
Lines[42081]=new linePT('Heal','Heals target for a small amount of health. Uses little power.',42,0) 
Spells[idx++]=new spellPT("Renewal",4,42081,42,"26 HP ",42,"4 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Revivification",6,42081,42,"36 HP ",42,"6 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Resurgance",9,42081,42,"50 HP ",42,"9 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Revival",12,42081,42,"65 HP ",42,"11 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Regeneration",16,42081,42,"85 HP ",42,"15 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Regrowth",21,42081,42,"109 HP ",42,"19 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Restoration",27,42081,42,"138 HP ",42,"25 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Resuscitation",31,42081,42,"158 HP ",42,"28 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Renascence",36,42081,42,"183 HP ",42,"33 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Apotheosis",46,42081,42,"231 HP ",42,"42 PP",'2000','2.8s','','','','') 
Lines[42063]=new linePT('Resurrection','Brings target back to life, and restores a portion of their health and power, and eliminates the experience penalty and con loss they would have suffered were they to have /released. (Note that con loss still applies when resurrected on a PvP server.)',42,0) 
Spells[idx++]=new spellPT("Minor Reconstitution",10,42063,42,"10%H 0%P ",42,"25%+ ",'1500','4.0s','','','','') 
Lines[42080]=new linePT('Minor Group Heal','Heals every member of the group for a small amount of health.',42,0) 
Spells[idx++]=new spellPT("Group Revigoration",15,42080,42,"33 HP ",42,"17 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Group Regrowth",25,42080,42,"53 HP ",42,"21 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Group Renascence",35,42080,42,"73 HP ",42,"24 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Group Apotheosis",45,42080,42,"93 HP ",42,"25 PP",'2000','3.0s','','','','') 
Lines[44082]=new linePT('Major Heal','Heals target.',44,0) 
Spells[idx++]=new spellPT("Major Resurgance",5,44082,44,"55 HP ",44,"10 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Revival",8,44082,44,"82 HP ",44,"15 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Regeneration",11,44082,44,"109 HP ",44,"20 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Regrowth",15,44082,44,"145 HP ",44,"25 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Restoration",20,44082,44,"190 HP ",44,"32 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Resuscitation",26,44082,44,"244 HP ",44,"40 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Renascence",33,44082,44,"307 HP ",44,"48 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Apotheosis",42,44082,44,"387 HP ",44,"57 PP",'2000','3.2s','','','','') 
Lines[44083]=new linePT('Cure Poison','Attempts to cure target of all poisons.',44,0) 
Spells[idx++]=new spellPT("Cure Poison",6,44083,44,"",44,"6% ",'1500','3.2s','','','','') 
Lines[44084]=new linePT('Cure Disease','Attempts to cure target of all disease.',44,0) 
Spells[idx++]=new spellPT("Cure Disease",7,44084,44,"",44,"6% ",'1000','3.2s','','','','') 
Lines[44094]=new linePT('Greater Heal','Heals target for a large amount of health.',44,0) 
Spells[idx++]=new spellPT("Greater Revival",10,44094,44,"145 HP ",44,"29 PP",'2000','3.6s','','','','') 
Spells[idx++]=new spellPT("Greater Regeneration",14,44094,44,"197 HP ",44,"39 PP",'2000','3.5s','','','','') 
Spells[idx++]=new spellPT("Greater Regrowth",19,44094,44,"263 HP ",44,"52 PP",'2000','3.4s','','','','') 
Spells[idx++]=new spellPT("Greater Restoration",25,44094,44,"341 HP ",44,"68 PP",'2000','3.3s','','','','') 
Spells[idx++]=new spellPT("Greater Resuscitation",32,44094,44,"432 HP ",44,"86 PP",'2000','3.1s','','','','') 
Spells[idx++]=new spellPT("Greater Renascence",41,44094,44,"549 HP ",44,"109 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Greater Apotheosis",50,44094,44,"667 HP ",44,"133 PP",'2000','2.8s','','','','') 
Lines[44096]=new linePT('Heal (Instant)','Caster immediately heals target for a given percentage of the caster\'s maximum health. Can be cast during combat.',44,0) 
Spells[idx++]=new spellPT("Nature's Appreciation",12,44096,44,"33% HP ",44,"",'2000','','','900s','','') 
Spells[idx++]=new spellPT("Nature's Blessing",21,44096,44,"55% HP ",44,"",'2000','','','900s','','') 
Spells[idx++]=new spellPT("Nature's Esteem",31,44096,44,"75% HP ",44,"",'2000','','','900s','','') 
Spells[idx++]=new spellPT("Nature's Sanction",43,44096,44,"100% HP ",44,"",'2000','','','900s','','') 
Lines[44095]=new linePT('Group Heal','Heals every member of the group.',44,0) 
Spells[idx++]=new spellPT("Healing Conflux",13,44095,44,"85 HP ",44,"37 PP",'2000','3.8s','','','','') 
Spells[idx++]=new spellPT("Renewing Conflux",22,44095,44,"139 HP ",44,"57 PP",'2000','3.6s','','','','') 
Spells[idx++]=new spellPT("Restoring Conflux",34,44095,44,"211 HP ",44,"79 PP",'2000','3.3s','','','','') 
Spells[idx++]=new spellPT("Reviving Conflux",44,44095,44,"271 HP ",44,"94 PP",'2000','3.1s','','','','') 
Lines[44063]=new linePT('Resurrection','Brings target back to life, and restores a portion of their health and power, and eliminates the experience penalty and con loss they would have suffered were they to have /released. (Note that con loss still applies when resurrected on a PvP server.)',44,0) 
Spells[idx++]=new spellPT("Lesser Reconstitution",16,44063,44,"30%H 10%P ",44,"25%+ ",'1500','4.0s','','','','') 
Spells[idx++]=new spellPT("Reconstitution",24,44063,44,"50%H 25%P ",44,"25%+ ",'1500','4.0s','','','','') 
Spells[idx++]=new spellPT("Greater Reconstitution",40,44063,44,"100%H 50%P ",44,"25%+ ",'1500','4.0s','','','','') 
Lines[44097]=new linePT('Group Heal (Instant)','Caster immediately heals all of his/her group members for a given percentage of the caster\'s maximum health. Can be cast during combat.',44,0) 
Spells[idx++]=new spellPT("Bith's Benison",23,44097,44,"50% HP ",44,"",'2000','','','1200s','','') 
Spells[idx++]=new spellPT("Bith's Acclaimation",35,44097,44,"75% HP ",44,"",'2000','','','1200s','','') 
Spells[idx++]=new spellPT("Bith's Benediction",45,44097,44,"100% HP ",44,"",'2000','','','1200s','','') 
Lines[44098]=new linePT('Spreadheal (Self)','Specialized healing spell that intelligently heals the most damaged members of the group. Useful when there\'s no time to determine who needs help first.',44,0) 
Spells[idx++]=new spellPT("Regenerating Spirits",30,44098,44,"187 HP ",44,"79 PP",'2000','3.5s','','','','') 
Spells[idx++]=new spellPT("Resuscitating Spirits",39,44098,44,"241 HP ",44,"95 PP",'2000','3.5s','','','','') 
Spells[idx++]=new spellPT("Reviving Spirits",48,44098,44,"295 HP ",44,"110 PP",'2000','3.5s','','','','') 
Lines[44099]=new linePT('Cure Nearsight','Removes the given condition from the target. This spell\'s cast time is not influenced by stats.',44,0) 
Spells[idx++]=new spellPT("Cure Nearsight I",25,44099,44,'',44,'30 PP','1500','6.0s','','','','') 
Spells[idx++]=new spellPT("Cure Nearsight II",35,44099,44,'',44,'30 PP','1500','3.5s','','','','')
Lines[46003]=new linePT('Shield','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',46,0) 
Spells[idx++]=new spellPT("Minor Bark Skin",2,46003,46,"12 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Lesser Bark Skin",4,46003,46,"14 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Bark Skin",6,46003,46,"16 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Major Bark Skin",9,46003,46,"19 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Greater Bark Skin",12,46003,46,"22 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Superior Bark Skin",17,46003,46,"27 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Skin of the Redwood",21,46003,46,"31 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Greater Skin of the Redwood",26,46003,46,"36 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Major Skin of the Redwood",32,46003,46,"42 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Superior Skin of the Redwood",45,46003,46,"55 AF ",46,"",'1000','3.0s','','','','') 
Lines[46037]=new linePT('Buff (Strength)','Increases the target\'s Strength, which will cause it to be able to carry more weight, do more damage and be more effective in melee combat.',46,0) 
Spells[idx++]=new spellPT("Strength of the Oak",3,46037,46,"+12 STR ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Strength of the Redwood",7,46037,46,"+15 STR ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Vigor of the Oak",14,46037,46,"+21 STR ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Vigor of the Redwood",20,46037,46,"+26 STR ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Force of the Oak",30,46037,46,"+34 STR ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Force of the Redwood",41,46037,46,"+42 STR ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Might of the Redwood",50,46037,46,"+50 STR ",46,"",'1000','3.0s','','','','') 
Lines[46085]=new linePT('Buff (Constitution)','Increases the target\'s Constitution, which will cause it to be able to take more damage.',46,0) 
Spells[idx++]=new spellPT("Oak's Stoutness",5,46085,46,"+14 CON ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Oak's Stamina",11,46085,46,"+18 CON ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Oak's Girth",15,46085,46,"+22 CON ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Redwood's Stoutness",24,46085,46,"+29 CON ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Redwood's Stamina",33,46085,46,"+36 CON ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Redwood's Girth",43,46085,46,"+44 CON ",46,"",'1000','3.0s','','','','') 
Lines[46039]=new linePT('Buff (Dexterity)','Increases the target\'s Dexterity, which will cause it to be more effective in melee combat and to cast spells faster.',46,0) 
Spells[idx++]=new spellPT("Dexterity of the Ferret",8,46039,46,"+16 DEX ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Dexterity of the Rabbit",13,46039,46,"+20 DEX ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Dexterity of the Badger",19,46039,46,"+25 DEX ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Dexterity of the Lynx",28,46039,46,"+32 DEX ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Dexterity of the Bear",38,46039,46,"+40 DEX ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Dexterity of the Wolf",48,46039,46,"+48 DEX ",46,"",'1000','3.0s','','','','') 
Lines[48040]=new linePT('Buff (Combat Speed)','Increases the target\'s combat speed, which will cause it to be considerably more effective in melee combat.',48,0) 
Spells[idx++]=new spellPT("Hunter's Attack",2,48040,48,"8% Hasted ",48,"",'1000','3.5s','','','','') 
Spells[idx++]=new spellPT("Hunter's Blow",10,48040,48,"10% Hasted ",48,"",'1000','3.5s','','','','') 
Spells[idx++]=new spellPT("Hunter's Offense",20,48040,48,"12% Hasted ",48,"",'1000','3.5s','','','','') 
Spells[idx++]=new spellPT("Hunter's Press",30,48040,48,"15% Hasted ",48,"",'1000','3.5s','','','','') 
Spells[idx++]=new spellPT("Hunter's Strike",40,48040,48,"17% Hasted ",48,"",'1000','3.5s','','','','') 
Spells[idx++]=new spellPT("Hunter's Assault",50,48040,48,"20% Hasted ",48,"",'1000','3.5s','','','','') 
Lines[48047]=new linePT('Buff (Strength/Constitution)','Increases the target\'s Strength and Constitution, which will cause it to  be able to carry more weight,  as well as to both do more damage in melee combat and to be able to take more damage before dying.',48,0) 
Spells[idx++]=new spellPT("Strength of the Tree",5,48047,48,"+21 STR/CON ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Strength of the Thicket",9,48047,48,"+25 STR/CON ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Strength of the Grove",13,48047,48,"+30 STR/CON ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Strength of the Orchard",18,48047,48,"+36 STR/CON ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Strength of the Wood",25,48047,48,"+45 STR/CON ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Strength of the Forest",34,48047,48,"+55 STR/CON ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Strength of the Timberland",44,48047,48,"+67 STR/CON ",48,"",'1000','3.0s','','','','') 
Lines[48048]=new linePT('Buff (Dexterity/Quickness)','Increases the target\'s Dexterity and Quickness, which will cause it to do more damage and be more effective in melee combat as well as cast spells faster.',48,0) 
Spells[idx++]=new spellPT("Breeze's Dance",7,48048,48,"+22 DEX/QUI ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Gust's Dance",14,48048,48,"+31 DEX/QUI ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Squall's Dance",19,48048,48,"+37 DEX/QUI ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Storm's Dance",29,48048,48,"+49 DEX/QUI ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Tornado's Dance",39,48048,48,"+61 DEX/QUI ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Zephyr's Dance",49,48048,48,"+73 DEX/QUI ",48,"",'1000','3.0s','','','','') 
Lines[48090]=new linePT('Buff (Acuity)','Increases the target\'s Intelligence, which will cause it to have a larger power pool and more effective spells. Castable on Wizards, Theurgists, Cabalists, Sorcerers, and Necromancers.',48,0) 
Spells[idx++]=new spellPT("Nature's Sight",11,48090,48,"+21 ACU ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Nature's Wisdom",22,48090,48,"+32 ACU ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Nature's Sagacity",31,48090,48,"+41 ACU ",48,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Nature's Vision",42,48090,48,"+52 ACU ",48,"",'1000','3.0s','','','','') 
Lines[48076]=new linePT('Buff (Group, Heat Resistance)','Target\'s resistance to Heat damage is increased.',48,0) 
Spells[idx++]=new spellPT("Strength of the Sun",23,48076,48,"+8 HEAT ",48,"19 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Resillience of the Sun",32,48076,48,"+16 HEAT ",48,"26 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Aura of the Sun",43,48076,48,"+24 HEAT ",48,"36 PP",'1000','3.0s','','','10m','') 
Lines[48077]=new linePT('Buff (Group, Cold Resistance)','Target\'s resistance to Cold damage is increased.',48,0) 
Spells[idx++]=new spellPT("Warmth of the Badger",24,48077,48,"+8 COLD ",48,"19 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Warmth of the Wolf",35,48077,48,"+16 COLD ",48,"29 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Warmth of the Bear",45,48077,48,"+24 COLD ",48,"38 PP",'1000','3.0s','','','10m','') 
Lines[48078]=new linePT('Buff (Group, Matter Resistance)','Target\'s resistance to Matter damage is increased.',48,0) 
Spells[idx++]=new spellPT("Earth Affinity",26,48078,48,"+8 MATTER ",48,"21 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Earth Bond",38,48078,48,"+16 MATTER ",48,"32 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Earth Union",48,48078,48,"+24 MATTER ",48,"41 PP",'1000','3.0s','','','10m','') 
Lines[50004]=new linePT('Damage Add (Self)','Target does more damage with every melee weapon hit.',50,0) 
Spells[idx++]=new spellPT("Nails of the Wild",1,50004,50,"1 DPS ",50,"2 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Claws of the Wild",4,50004,50,"1 DPS ",50,"3 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Talons of the Wild",9,50004,50,"2 DPS ",50,"6 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Teeth of the Wild",14,50004,50,"3 DPS ",50,"9 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Fangs of the Wild",21,50004,50,"5 DPS ",50,"13 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Pincers of Wild",27,50004,50,"6 DPS ",50,"17 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Stingers of the Wild",36,50004,50,"8 DPS ",50,"23 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Hooks of the Wild",46,50004,50,"10 DPS ",50,"30 PP",'','3.0s','','','20m','') 
Lines[50012]=new linePT('Root','Target is effectively immobilized (loses 99% of possible movement speed) for the duration of the spell. If any damage is done to the target, the spell will break.',50,0) 
Spells[idx++]=new spellPT("Grasping Vines",2,50012,50,"99% 7 sec ",50,"2 PP",'1500','2.5s','','','7s','Body') 
Spells[idx++]=new spellPT("Bonding Vines",6,50012,50,"99% 13 sec ",50,"4 PP",'1500','2.5s','','','13s','Body') 
Spells[idx++]=new spellPT("Webbing Vines",11,50012,50,"99% 20 sec ",50,"7 PP",'1500','2.5s','','','20s','Body') 
Spells[idx++]=new spellPT("Clutching Vines",17,50012,50,"99% 28 sec ",50,"10 PP",'1500','2.5s','','','28s','Body') 
Spells[idx++]=new spellPT("Holding Vines",24,50012,50,"99% 38 sec ",50,"15 PP",'1500','2.5s','','','38s','Body') 
Spells[idx++]=new spellPT("Tangling Vines",30,50012,50,"99% 47 sec ",50,"19 PP",'1500','2.5s','','','47s','Body') 
Spells[idx++]=new spellPT("Tenacious Vines",37,50012,50,"99% 56 sec ",50,"23 PP",'1500','2.5s','','','56s','Body') 
Spells[idx++]=new spellPT("Detaining Vines",47,50012,50,"99% 70 sec ",50,"30 PP",'1500','2.5s','','','70s','Body') 
Lines[51146]=new linePT('Summon Nature Spirit (Self)','Summons a \"pet\", or servant that the caster commands to fight and die for it. The pet will be either 75% of the caster\'s level or the maximum level given by the spell, whichever is less. With each upgrade, nature spirits gain additional abilities (they also inherit abilities earlier pets recieved).',51,0) 
Spells[idx++]=new spellPT("Call Minor Nature Spirit",1,51146,51,"Max L7 ",51,"25% ",'','6.0s','','','Special','') 
Spells[idx++]=new spellPT("Call Lesser Nature Spirit",7,51146,51,"Max L12, AF Buff ",51,"25% ",'','6.0s','','','Special','') 
Spells[idx++]=new spellPT("Call Nature Spirit",12,51146,51,"Max L20, STR/CON ",51,"25% ",'','6.0s','','','Special','') 
Spells[idx++]=new spellPT("Call Major Nature Spirit",20,51146,51,"Max L32, Stun ",51,"25% ",'','6.0s','','','Special','') 
Spells[idx++]=new spellPT("Call Greater Nature Spirit",32,51146,51,"Max L50, Bladeturn ",51,"25% ",'','6.0s','','','Special','') 
Lines[51006]=new linePT('Damage Shield','Anyone that hits the target with a melee attack is damaged by this protective shield.',51,0) 
Spells[idx++]=new spellPT("Briarsprout",3,51006,51,"0.5 DPS ",51,"",'1000','4.0s','','','','') 
Spells[idx++]=new spellPT("Pricklesprout",6,51006,51,"1 DPS ",51,"",'1000','4.0s','','','','') 
Spells[idx++]=new spellPT("Burrsprout",13,51006,51,"1 DPS ",51,"",'1000','4.0s','','','','') 
Spells[idx++]=new spellPT("Thornsprout",18,51006,51,"2 DPS ",51,"",'1000','4.0s','','','','') 
Spells[idx++]=new spellPT("Spursprout",25,51006,51,"2 DPS ",51,"",'1000','4.0s','','','','') 
Spells[idx++]=new spellPT("Thistlesprout",34,51006,51,"3 DPS ",51,"",'1000','4.0s','','','','') 
Spells[idx++]=new spellPT("Spinesprout",44,51006,51,"4 DPS ",51,"",'1000','4.0s','','','','') 
Lines[51018]=new linePT('Root (AOE)','Target is effectively immobilized (loses 99% of possible movement speed) for the duration of the spell. If any damage is done to the target, the spell will break. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.',51,0) 
Spells[idx++]=new spellPT("Patch of Ivy",4,51018,51,"99% 15 sec ",51,"3 PP",'1500','2.5s','350','','15s','Matter') 
Spells[idx++]=new spellPT("Patch of Vines",10,51018,51,"99% 23 sec ",51,"6 PP",'1500','2.5s','350','','23s','Matter') 
Spells[idx++]=new spellPT("Patch of Tangleweed",16,51018,51,"99% 30 sec ",51,"10 PP",'1500','2.5s','350','','30s','Matter') 
Spells[idx++]=new spellPT("Field of Ivy",22,51018,51,"99% 38 sec ",51,"13 PP",'1500','2.5s','350','','38s','Matter') 
Spells[idx++]=new spellPT("Field of Vines",29,51018,51,"99% 47 sec ",51,"18 PP",'1500','2.5s','350','','47s','Matter') 
Spells[idx++]=new spellPT("Field of Tangleweed",39,51018,51,"99% 60 sec ",51,"25 PP",'1500','2.5s','350','','60s','Matter') 
Spells[idx++]=new spellPT("Expanse of Tangleweed",49,51018,51,"99% 73 sec ",51,"32 PP",'1500','2.5s','350','','73s','Matter') 
Lines[51147]=new linePT('Root (Instant)','Target is effectively immobilized (loses 99% of possible movement speed) for the duration of the spell. If any damage is done to the target, the spell will break. This spell can be cast during combat.',51,0) 
Spells[idx++]=new spellPT("Sprouting Undergrowth",28,51147,51,"99% 46 sec ",51,"17 PP",'1500','','','600s','46s','Matter') 
Lines[51148]=new linePT('Root (AOE, Instant)','Target is effectively immobilized (loses 99% of possible movement speed) for the duration of the spell. If any damage is done to the target, the spell will break. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius. This spell can be cast during combat.',51,0) 
Spells[idx++]=new spellPT("Bursting Undergrowth",36,51148,51,"99% 56 sec ",51,"23 PP",'1500','','350','600s','56s','Matter') 
Spells[idx++]=new spellPT("Choking Undergrowth",46,51148,51,"99% 69 sec ",51,"30 PP",'1500','','350','600s','69s','Matter') 
Lines[51020]=new linePT('Damage over Time','Inflicts damage to the target repeatedly over a given time period.',51,0) 
Spells[idx++]=new spellPT("Contamination",5,51020,51,"9  D x 6 ",51,"4 PP",'1500','3.0s','','','24s','Body') 
Spells[idx++]=new spellPT("Pollution",8,51020,51,"15  D x 6 ",51,"5 PP",'1500','3.0s','','','24s','Body') 
Spells[idx++]=new spellPT("Moldiness",11,51020,51,"19  D x 6 ",51,"7 PP",'1500','3.0s','','','24s','Body') 
Spells[idx++]=new spellPT("Wither",15,51020,51,"27  D x 6 ",51,"9 PP",'1500','3.0s','','','24s','Body') 
Spells[idx++]=new spellPT("Corruption",19,51020,51,"35  D x 6 ",51,"12 PP",'1500','3.0s','','','24s','Body') 
Spells[idx++]=new spellPT("Blight",24,51020,51,"43  D x 6 ",51,"15 PP",'1500','3.0s','','','24s','Body') 
Spells[idx++]=new spellPT("Dry Rot",30,51020,51,"53  D x 6 ",51,"19 PP",'1500','3.0s','','','24s','Body') 
Spells[idx++]=new spellPT("Dilapidation",35,51020,51,"63  D x 6 ",51,"22 PP",'1500','3.0s','','','24s','Body') 
Spells[idx++]=new spellPT("Degeneration",41,51020,51,"73  D x 6 ",51,"26 PP",'1500','3.0s','','','24s','Body') 
Spells[idx++]=new spellPT("Defedation",48,51020,51,"87  D x 6 ",51,"31 PP",'1500','3.0s','','','24s','Body') 
