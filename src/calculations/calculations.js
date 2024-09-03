import { DefaultDict } from "../utils/defaultDict";
import { convertLvlToIndex } from "../utils/helperFunctions";
import { ATK_POWER, BACK_ATK, CRIT_DMG, CRIT_RATE, DMG, FRONT_ATK, KEEN_BLUNT_WEAPON } from "./constants";
import { engravingData } from "./engravingsT4";

export const getMultiplier = (option) => {
    const { 
            critRate, 
            critDmg, 
            otherDmg, 
            evoDmg, 
            stone1, 
            stone2, 
            elixirSet, 
            ...engravingObj 
    } = option;
    const engravings = Object.values(engravingObj)
                             .filter((engraving) => engraving.value !== "")

    let { 
            isKbw, 
            dmg: engrDmg, 
            atk: engrAtk, 
            crit: engrCrit, 
            critDmg: engrCritDmg 
    } = getAllEngrBonuses(engravings, stone1, stone2);

    let totalCrit = (critRate/100) + engrCrit
    let totalCritDmg = (critDmg/100) + engrCritDmg
    const kbwPenalty = isKbw ? 0.98 : 1

    let elixirBonus = 1;
    if (elixirSet.level !== 0 && elixirSet.value === "Critical") {
        elixirSet.level === 1 ? elixirBonus *= .06 : elixirBonus *= .12
        elixirBonus = 1 + (elixirBonus * totalCrit)
    } else if (elixirSet.level !== 0 && elixirSet.value === "Master") {
        totalCrit += .07

        if (elixirSet.level === 2) {
            engrDmg *= 1.085
        }
    }

    const finalMultiplier = ((totalCrit * totalCritDmg) + (1 - totalCrit)) * 
                            engrDmg * 
                            engrAtk * 
                            kbwPenalty * 
                            (1 + otherDmg /100) *
                            (1 + evoDmg/100) *
                            elixirBonus

    return finalMultiplier;
}

export const getAllEngrBonuses = (engravings, stone1, stone2) => {
    //engravings: [{value: str, epic: int, legendary: int, relic: int}]
    let isKbw = false
    let dmg = 1
    let atk = 1
    let crit = 0
    let critDmg = 0

    engravings.forEach((engraving) => {
        if (engraving.value === KEEN_BLUNT_WEAPON) {
            isKbw = true
        } 

        const bonuses = {
            [DMG]: 1,
            [ATK_POWER]: 0,
            [CRIT_RATE]: 0,
            [CRIT_DMG]: 0
        }

        const engravingInfo = engravingData[engraving.value]
        const { 
            engrDmg, 
            engrAtk, 
            engrCrit, 
            engrCritDmg
        } = getEngrBonuses(engraving, engravingInfo);

        bonuses[DMG] *= (1 + engrDmg)
        bonuses[ATK_POWER] += engrAtk
        bonuses[CRIT_RATE] += engrCrit
        bonuses[CRIT_DMG] += engrCritDmg

        if (engraving.value === stone1.value) {
            const { type, bonus } = getStoneBonus(stone1, engravingInfo)
            bonuses[type] += bonus
        } else if (engraving.value === stone2.value) {
            const { type, bonus }  = getStoneBonus(stone2, engravingInfo)
            bonuses[type] += bonus
        }

        dmg *= bonuses[DMG]
        atk += bonuses[ATK_POWER]
        crit += bonuses[CRIT_RATE]
        critDmg += bonuses[CRIT_DMG]
    })

    return { isKbw, dmg, atk, crit, critDmg }
}

export const getEngrBonuses = (engraving, engravingInfo) => {
    //engraving: {value: string, epic: int, legendary: int, relic: int}
    //engravingInfo: {baseType, baseAmount, epicType, epicAmounts, etc...}
    const { epic, legendary, relic } = engraving
    const { 
        baseType, baseAmount,
        secondaryBaseType, secondaryBaseAmount,
        epicType, epicAmounts,
        secondaryEpicType, secondaryEpicAmounts,
        legendaryType, legendaryAmounts,
        secondaryLegendaryType, secondaryLegendaryAmounts,
        relicType, relicAmounts,
        secondaryRelicType, secondaryRelicAmounts
    } = engravingInfo

    const epicIdx = convertLvlToIndex(epic)
    const legendaryIdx = convertLvlToIndex(legendary)
    const relicIdx = convertLvlToIndex(relic)

    const bonuses = new DefaultDict(0)
    bonuses[DMG] = 0
    bonuses[ATK_POWER] = 0
    bonuses[CRIT_RATE] = 0
    bonuses[CRIT_DMG] = 0

    bonuses[baseType] += baseAmount
    bonuses[secondaryBaseType] += secondaryBaseAmount ?? 0
    if (epicIdx >= 0) {
        bonuses[epicType] += epicAmounts[epicIdx]
        bonuses[secondaryEpicType] += secondaryEpicAmounts?.[epicIdx] ?? 0
    }
    if (legendaryIdx >= 0) {
        bonuses[legendaryType] += legendaryAmounts[legendaryIdx]
        bonuses[secondaryLegendaryType] += secondaryLegendaryAmounts?.[legendaryIdx] ?? 0
    }
    if (relicIdx >= 0) {
        bonuses[relicType] += relicAmounts[relicIdx]
        bonuses[secondaryRelicType] += secondaryRelicAmounts?.[relicIdx] ?? 0
    }

    //Accounting for ambush master and master brawler non-standard effects
    bonuses[DMG] += bonuses[FRONT_ATK] + bonuses[BACK_ATK]

    bonuses[DMG] /= 100
    bonuses[ATK_POWER] /= 100
    bonuses[CRIT_RATE] /= 100
    bonuses[CRIT_DMG] /= 100

    return { 
        engrDmg: bonuses[DMG], 
        engrAtk: bonuses[ATK_POWER], 
        engrCrit: bonuses[CRIT_RATE], 
        engrCritDmg: bonuses[CRIT_DMG]
    }
}

export const getStoneBonus = (stone, engravingInfo) => {
    //stone: {value: string, level: int}
    //engravingInfo: {baseType, baseAmount, epicType, epicAmounts, etc...}

    const { level } = stone;
    if (level < 0) throw new Error("Stone level cannot be negative")

    const { stoneType, stoneAmounts } = engravingInfo;
    const stoneIdx = convertLvlToIndex(level);

    let bonus = stoneIdx >= 0 ? stoneAmounts[stoneIdx]/100 : 0;

    return { type: stoneType, bonus };
}