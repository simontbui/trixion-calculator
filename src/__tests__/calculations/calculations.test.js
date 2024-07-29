import { getStoneBonus, getAllEngrBonuses, getMultiplier, getEngrBonuses } from "../../calculations/calculations"
import { ATK_POWER, CRIT_DMG, CRIT_RATE, DMG } from "../../calculations/constants";

const etherPredatorData = {
    baseType: "atkPower", baseAmount: 12.6,
    epicType: null, epicAmounts: [],
    legendaryType: null, legendaryAmounts: [],
    relicType: "atkPower", relicAmounts: [0.9, 1.8, 2.7, 3.6],
    stoneType: "atkPower", stoneAmounts: [3, 3.9, 5.4, 6]
}

const adrenalineData = {
    baseType: "atkPower", baseAmount: 2.4, 
    secondaryBaseType: "critRate", secondaryBaseAmount: 8 ,
    epicType: "atkPower", epicAmounts: [0.78, 1.5, 2.28, 3],
    legendaryType: "critRate", legendaryAmounts: [1.5, 3., 4.5, 6],
    relicType: "critRate", relicAmounts: [1.5, 3., 4.5, 6],
    stoneType: "atkPower", stoneAmounts: [2.88, 3.6, 4.98, 5.7]
}

const allOutAttackData = {
    baseType: "dmg", baseAmount: 14,
    epicType: "dmg", epicAmounts: [0.5, 1, 1.5, 2],
    legendaryType: "dmg", legendaryAmounts: [0.5, 1, 1.5, 2],
    relicType: "dmg", relicAmounts: [0.75, 1.5, 2.25, 3],
    stoneType: "dmg", stoneAmounts: [3, 3.7, 5, 6]
};

const barricadeData = {
    baseType: "dmg", baseAmount: 8,
    epicType: "dmg", epicAmounts: [.75, 1.5, 2.25, 3],
    legendaryType: "dmg", legendaryAmounts: [.75, 1.5, 2.25, 3],
    relicType: "dmg", relicAmounts: [.75, 1.5, 2.25, 3],
    stoneType: "dmg", stoneAmounts: [3, 3.75, 5.25, 6]
};

const grudgeData = {
    baseType: "dmg", baseAmount: 12,
    epicType: "dmg", epicAmounts: [.75, 1.5, 2.25, 3],
    legendaryType: "dmg", legendaryAmounts: [.75, 1.5, 2.25, 3],
    relicType: "dmg", relicAmounts: [.75, 1.5, 2.25, 3],
    stoneType: "dmg", stoneAmounts: [3, 3.75, 5.25, 6]
};

const masterBrawlerData = {
    baseType: "dmg", baseAmount: 3.2, 
    secondaryBaseType: "frontAtk", secondaryBaseAmount: 9,
    epicType: "dmg", epicAmounts: [0.2, 0.4, 0.6, 0.8], 
    secondaryEpicType: "frontAtk", secondaryEpicAmounts: [.75, 1.5, 2.25, 3],
    legendaryType: "dmg", legendaryAmounts: [0.2, 0.4, 0.6, 0.8], 
    secondaryLegendaryType: "frontAtk", secondaryLegendaryAmounts: [.75, 1.5, 2.25, 3],
    relicType: "dmg", relicAmounts: [.7, 1.4, 2.1, 2.8],
    stoneType: "dmg", stoneAmounts: [2.7, 3.4, 4.7, 5.4]
}

const preciseDaggerData = {
    baseType: "critRate", baseAmount: 12, 
    secondaryBaseType: "critDmg", secondaryBaseAmount: -6,
    epicType: "critRate", epicAmounts: [.75, 1.5, 2.25, 3],
    legendaryType: "critRate", legendaryAmounts: [.75, 1.5, 2.25, 3],
    relicType: "critRate", relicAmounts: [.75, 1.5, 2.25, 3],
    stoneType: "critRate", stoneAmounts: [3, 3.7, 5, 6]
}

const kbwData = {
    baseType: "critDmg", baseAmount: 28,
    epicType: "critDmg", epicAmounts: [2, 4, 6, 8],
    legendaryType: "critDmg", legendaryAmounts: [2, 4, 6, 8],
    relicType: "critDmg", relicAmounts: [2, 4, 6, 8],
    stoneType: "critDmg", stoneAmounts: [7.5, 9.4, 13.2, 15]
}

test("getEngrBonuses should return 0 dmg if no dmg from engraving data", () => {
    const engravingOption = { value: "Adrenaline", epic: 3, legendary: 3, relic: 3 }

    const { engrDmg } = getEngrBonuses(engravingOption, adrenalineData)

    expect(engrDmg).toBeCloseTo(0);
})

test("getEngrBonuses should return correct bonuses for dmg engravings", () => {
    const engravingOption1 = { value: "All Out Attack", epic: 0, legendary: 4, relic: 1 }
    const engravingOption2 = { value: "Barricade", epic: 3, legendary: 4, relic: 2 }
    const engravingOption3 = { value: "Grudge", epic: 1, legendary: 3, relic: 0 }

    const {
        engrDmg: engrDmg1, 
        engrAtk: engrAtk1, 
        engrCrit: engrCrit1, 
        engrCritDmg: engrCritDmg1
    } = getEngrBonuses(engravingOption1, allOutAttackData)

    const {
        engrDmg: engrDmg2, 
        engrAtk: engrAtk2, 
        engrCrit: engrCrit2, 
        engrCritDmg: engrCritDmg2
    } = getEngrBonuses(engravingOption2, barricadeData)

    const {
        engrDmg: engrDmg3, 
        engrAtk: engrAtk3, 
        engrCrit: engrCrit3, 
        engrCritDmg: engrCritDmg3
    } = getEngrBonuses(engravingOption3, grudgeData)

    expect(engrDmg1).toBeCloseTo(.1675)
    expect(engrAtk1).toBeCloseTo(0)
    expect(engrCrit1).toBeCloseTo(0)
    expect(engrCritDmg1).toBeCloseTo(0)

    expect(engrDmg2).toBeCloseTo(.1475)
    expect(engrAtk2).toBeCloseTo(0)
    expect(engrCrit2).toBeCloseTo(0)
    expect(engrCritDmg2).toBeCloseTo(0)

    expect(engrDmg3).toBeCloseTo(.15)
    expect(engrAtk3).toBeCloseTo(0)
    expect(engrCrit3).toBeCloseTo(0)
    expect(engrCritDmg3).toBeCloseTo(0)
})

test ("getEngrBonuses should return correct totals for engravings with secondary effects", () => {
    const engravingOption = { value: "Master Brawler", epic: 0, legendary: 1, relic: 4 }

    const { 
        engrDmg, 
        engrAtk, 
        engrCrit, 
        engrCritDmg
     } = getEngrBonuses(engravingOption, masterBrawlerData)

    expect(engrDmg).toBeCloseTo(.1595)
    expect(engrAtk).toBeCloseTo(0)
    expect(engrCrit).toBeCloseTo(0)
    expect(engrCritDmg).toBeCloseTo(0)
})

test ("getEngrBonuses should return correct bonuses for Adrenaline and Ether Predator", () => {
    const engravingOption1 = { value: "Adrenaline", epic: 2, legendary: 0, relic: 4 }
    const engravingOption2 = { value: "Ether Predator", epic: 3, legendary: 1, relic: 1 }

    const { 
        engrDmg: engrDmg1, 
        engrAtk: engrAtk1, 
        engrCrit: engrCrit1, 
        engrCritDmg: engrCritDmg1
     } = getEngrBonuses(engravingOption1, adrenalineData)

    const { 
        engrDmg: engrDmg2, 
        engrAtk: engrAtk2, 
        engrCrit: engrCrit2, 
        engrCritDmg: engrCritDmg2
     } = getEngrBonuses(engravingOption2, etherPredatorData)

    expect(engrDmg1).toBeCloseTo(0);
    expect(engrAtk1).toBeCloseTo(.039);
    expect(engrCrit1).toBeCloseTo(.14);
    expect(engrCritDmg1).toBeCloseTo(0);

    expect(engrDmg2).toBeCloseTo(0);
    expect(engrAtk2).toBeCloseTo(.135);
    expect(engrCrit2).toBeCloseTo(0);
    expect(engrCritDmg2).toBeCloseTo(0);
})


test ("getStoneBonuses returns the correct bonus types and bonuses", () => {
    const stone1 = { value: "Ether Predator", level: 0 }
    const stone2 = { value: "Grudge", level: 1 }
    const stone3 = { value: "Precise Dagger", level: 2 }
    const stone4 = { value: "Keen Blunt Weapon", level: 4 }

    const { type: type1, bonus: bonus1 } = getStoneBonus(stone1, etherPredatorData)
    const { type: type2, bonus: bonus2 } = getStoneBonus(stone2, grudgeData)
    const { type: type3, bonus: bonus3 } = getStoneBonus(stone3, preciseDaggerData)
    const { type: type4, bonus: bonus4 } = getStoneBonus(stone4, kbwData)

    expect(type1).toBe(ATK_POWER)
    expect(type2).toBe(DMG)
    expect(type3).toBe(CRIT_RATE)
    expect(type4).toBe(CRIT_DMG)

    expect(bonus1).toBeCloseTo(0)
    expect(bonus2).toBeCloseTo(.03)
    expect(bonus3).toBeCloseTo(.037)
    expect(bonus4).toBeCloseTo(.15)
})

test ("getAllEngrBonuses should return correct kbw flag and multipliers", () => {
    const engravings = [
        { value: "Master Brawler", epic: 0, legendary: 1, relic: 4 },
        { value: "Adrenaline", epic: 2, legendary: 1, relic: 2 },
        { value: "Keen Blunt Weapon", epic: 3, legendary: 1, relic: 4 },
        { value: "Grudge", epic: 0, legendary: 1, relic: 4 },
        { value: "Cursed Doll", epic: 4, legendary: 3, relic: 4 }
    ]
    const stone1 = { value: "Grudge", level: 1 };
    const stone2 = { value: "Adrenaline", level: 4 };

    const { 
            isKbw, 
            dmg, 
            atk, 
            crit, 
            critDmg
        } = getAllEngrBonuses(engravings, stone1, stone2);

    expect(isKbw).toBe(true);
    expect(dmg).toBeCloseTo(1.6007);
    expect(atk).toBeCloseTo(1.096);
    expect(crit).toBeCloseTo(.125);
    expect(critDmg).toBeCloseTo(.44);
})

test("getMultiplier takes option and returns correct value", () => {
    const option = {
        engraving1: { value: "Master Brawler", epic: 0, legendary: 1, relic: 4 },
        engraving2: { value: "Adrenaline", epic: 2, legendary: 1, relic: 2 },
        engraving3: { value: "Keen Blunt Weapon", epic: 3, legendary: 1, relic: 4 },
        engraving4: { value: "Grudge", epic: 0, legendary: 1, relic: 4 },
        engraving5: { value: "Cursed Doll", epic: 4, legendary: 3, relic: 4 },
        stone1: { value: "Grudge", level: 1 },
        stone2: { value: "Adrenaline", level: 4 },
        elixirSet: { value: "", level: 0 },
        critRate: 44,
        critDmg: 230,
        otherDmg: 15,
        evoDmg: 33
    };

    expect(getMultiplier(option)).toBeCloseTo(5.214684749186168);
}) 

///NEED UNIT TESTS TO VALIDATE PRECISE DAGGER