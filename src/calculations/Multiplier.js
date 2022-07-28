import { engravDict } from "./engravings"

//calculates multiplier b4 engravings; just crit, critDmg, and kbw penalty
function calcMultiplier (crit, critDmg, engDmg, engAtk, dmg, kbw) {
    if (Number.isNaN(critDmg) || critDmg < 0) {
        critDmg = 200
    } 

    if (Number.isNaN(crit) || crit < 0) {
        crit = 0
    } else if (crit > 1) {
        crit = 1
    }

    let multiplier = ((crit*(critDmg/100)) + ((1-crit) * 1)) * engDmg * engAtk * dmg
    if (kbw == true) {
        multiplier = (multiplier*.9) + (multiplier*.8*.1)
    }
    return multiplier 
}

//extracts non-null values from options and computes final multiplier
function getMultiplier (option) {
    //let engArr = []
    let crit = 0
    let critDmg = 0
    let dmg = 0
    let kbw = false
    let engAtk = 1
    let engDmg = 1
    option.forEach(obj => {
        if ('crit' in obj) {
            crit = obj.crit/100 + crit
        } else if ('critDmg' in obj) {
            critDmg += parseFloat(obj.critDmg)
        } else if ('dmg' in obj) {
            dmg = obj.dmg < 0 ? 0 : 1+obj.dmg/100
        }      
        else if ('engraving' in obj && obj.engraving !== null && obj.lvl !== null) {
            if (obj.engraving === 'Keen Blunt Weapon') {
                kbw = true
                critDmg += engravDict[obj.engraving][obj.lvl]['critDmg']
            } else if (obj.engraving === 'Cursed Doll' || 
                       obj.engraving === 'Increase Mass' ||
                       obj.engraving === 'Ether Predator') {
                        engAtk += engravDict[obj.engraving][obj.lvl]['Atk']/100
                       }
              else {
                engDmg *= engravDict[obj.engraving][obj.lvl]['dmg'] !== 0 ?
                         1+engravDict[obj.engraving][obj.lvl]['dmg']/100 : 1

                crit += engravDict[obj.engraving][obj.lvl]['crit']/100
                critDmg += engravDict[obj.engraving][obj.lvl]['critDmg']
              }           
        } 
    })

    //console.log('crit: ' + crit + ' critDmg: ' + critDmg)

    let multiplier = calcMultiplier(crit, critDmg, engDmg, engAtk, dmg, kbw)

    return multiplier
}

export default getMultiplier