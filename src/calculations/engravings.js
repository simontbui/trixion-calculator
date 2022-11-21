const engravArr = [
    'All Out Attack',
    'Adrenaline',
    'Barricade',
    'Cursed Doll',
    'Ether Predator',
    'Grudge',
    'Hit Master',
    'Increase Mass',
    'Keen Blunt Weapon',
    'Master Brawler',
    'Ambush Master',
    "Master's Tenacity",
    'MP Efficiency Increase',
    'Precise Dagger',
    'Raid Captain',
    'Stabilized Status',
    'Super Charge'
]

engravArr.sort()

let engravDict = {}
engravArr.forEach(engraving => {
    engravDict[engraving] = []

    for (let i=0; i<4; i++) {
        engravDict[engraving].push({'crit': 0, 'critDmg': 0, 'atk': 0, 'dmg': 0})
    }
} )

//Raid Captain bonuses
engravDict["Raid Captain"][1]['dmg'] = .1
engravDict["Raid Captain"][2]['dmg'] = .22
engravDict["Raid Captain"][3]['dmg'] = .45

//All Out Attack bonuses
engravDict["All Out Attack"][1]['dmg'] = 4
engravDict["All Out Attack"][2]['dmg'] = 10
engravDict["All Out Attack"][3]['dmg'] = 20

//Adrenaline bonuses
engravDict["Adrenaline"][1]['crit'] = 5
engravDict["Adrenaline"][2]['crit'] = 10
engravDict["Adrenaline"][3]['crit'] = 15
engravDict["Adrenaline"][1]['Atk'] = 1.8
engravDict["Adrenaline"][2]['Atk'] = 3.6
engravDict["Adrenaline"][3]['Atk'] = 6

//Barricade bonuses
engravDict["Barricade"][1]['dmg'] = 3
engravDict["Barricade"][2]['dmg'] = 8
engravDict["Barricade"][3]['dmg'] = 16

//Cursed Doll bonuses
engravDict["Cursed Doll"][1]['Atk'] = 3
engravDict["Cursed Doll"][2]['Atk'] = 8
engravDict["Cursed Doll"][3]['Atk'] = 16

//Ether Predator bonuses
engravDict["Ether Predator"][1]['Atk'] = 6
engravDict["Ether Predator"][2]['Atk'] = 9
engravDict["Ether Predator"][3]['Atk'] = 15

//Grudge bonuses
engravDict["Grudge"][1]['dmg'] = 4
engravDict["Grudge"][2]['dmg'] = 10
engravDict["Grudge"][3]['dmg'] = 20

//Hit Master bonuses
engravDict["Hit Master"][1]['dmg'] = 3
engravDict["Hit Master"][2]['dmg'] = 8
engravDict["Hit Master"][3]['dmg'] = 16

//Increase Mass bonuses
engravDict["Increase Mass"][1]['Atk'] = 4
engravDict["Increase Mass"][2]['Atk'] = 10
engravDict["Increase Mass"][3]['Atk'] = 18

//Keen Blunt Weapon bonuses
engravDict["Keen Blunt Weapon"][1]['critDmg'] = 10
engravDict["Keen Blunt Weapon"][2]['critDmg'] = 25
engravDict["Keen Blunt Weapon"][3]['critDmg'] = 50

//Master Brawler bonuses
engravDict["Master Brawler"][1]['dmg'] = 5
engravDict["Master Brawler"][2]['dmg'] = 12
engravDict["Master Brawler"][3]['dmg'] = 25

//Ambush Master bonuses
engravDict["Ambush Master"][1]['dmg'] = 5
engravDict["Ambush Master"][2]['dmg'] = 12
engravDict["Ambush Master"][3]['dmg'] = 25

//Master's Tenacity bonuses
engravDict["Master's Tenacity"][1]['dmg'] = 3
engravDict["Master's Tenacity"][2]['dmg'] = 8
engravDict["Master's Tenacity"][3]['dmg'] = 16

//MP Efficiency Increase bonuses
engravDict["MP Efficiency Increase"][1]['dmg'] = 3
engravDict["MP Efficiency Increase"][2]['dmg'] = 6
engravDict["MP Efficiency Increase"][3]['dmg'] = 12

//Precise Dagger bonuses
engravDict["Precise Dagger"][1]['crit'] = 4
engravDict["Precise Dagger"][2]['crit'] = 10
engravDict["Precise Dagger"][3]['crit'] = 20
engravDict["Precise Dagger"][1]['critDmg'] = -12
engravDict["Precise Dagger"][2]['critDmg'] = -12
engravDict["Precise Dagger"][3]['critDmg'] = -12

//Stabilized Status bonuses
engravDict["Stabilized Status"][1]['dmg'] = 3
engravDict["Stabilized Status"][2]['dmg'] = 8
engravDict["Stabilized Status"][3]['dmg'] = 16

//Super Charge bonuses
engravDict["Super Charge"][1]['dmg'] = 4
engravDict["Super Charge"][2]['dmg'] = 10
engravDict["Super Charge"][3]['dmg'] = 20

export { 
    engravArr, 
    engravDict 
}