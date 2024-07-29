import { engravingData } from "../../calculations/engravingsT4"

test("Grudge should have total 27% dmg", () => {
    const { 
        baseAmount, epicAmounts, legendaryAmounts, relicAmounts, stoneAmounts
    } = engravingData["Grudge"]

    let total = 0;
    total += baseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);

    expect(total).toBeCloseTo(27);
})

test("Cursed Doll should have total 23% dmg", () => {
    const { 
        baseAmount, epicAmounts, legendaryAmounts, relicAmounts, stoneAmounts
    } = engravingData["Cursed Doll"]

    let total = 0;
    total += baseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);

    expect(total).toBeCloseTo(23);
})

test("Keen Blunt Weapon should have total 67% crit dmg", () => {
    const { 
        baseAmount, epicAmounts, legendaryAmounts, relicAmounts, stoneAmounts
    } = engravingData["Keen Blunt Weapon"]

    let total = 0;
    total += baseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);

    expect(total).toBeCloseTo(67);
})

test("Hit Master should have total 23% dmg", () => {
    const { 
        baseAmount, epicAmounts, legendaryAmounts, relicAmounts, stoneAmounts
    } = engravingData["Hit Master"]

    let total = 0;
    total += baseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);

    expect(total).toBeCloseTo(23);
})

test("Ambush Master should have total 28% dmg", () => {
    const { 
        baseAmount, 
        epicAmounts, 
        legendaryAmounts, 
        relicAmounts, 
        stoneAmounts,
        secondaryBaseAmount,
        secondaryEpicAmounts,
        secondaryLegendaryAmounts
    } = engravingData["Ambush Master"]

    let total = 0;
    total += baseAmount;
    total += secondaryBaseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);
    total += secondaryEpicAmounts.at(-1);
    total += secondaryLegendaryAmounts.at(-1);

    expect(total).toBeCloseTo(28);
})

test("Master Brawler should have total 28% dmg", () => {
    const { 
        baseAmount, 
        epicAmounts, 
        legendaryAmounts, 
        relicAmounts, 
        stoneAmounts,
        secondaryBaseAmount,
        secondaryEpicAmounts,
        secondaryLegendaryAmounts
    } = engravingData["Master Brawler"]

    let total = 0;
    total += baseAmount;
    total += secondaryBaseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);
    total += secondaryEpicAmounts.at(-1);
    total += secondaryLegendaryAmounts.at(-1);

    expect(total).toBeCloseTo(28);
})

test("Stabilized Status should have total 23% dmg", () => {
    const { 
        baseAmount, epicAmounts, legendaryAmounts, relicAmounts, stoneAmounts
    } = engravingData["Stabilized Status"]

    let total = 0;
    total += baseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);

    expect(total).toBeCloseTo(23);
})

test("Adrenaline should have total 11.1% AP with 20% crit", () => {
    const { 
        baseAmount, 
        epicAmounts, 
        legendaryAmounts, 
        relicAmounts, 
        stoneAmounts, 
        secondaryBaseAmount
    } = engravingData["Adrenaline"]

    let totalAP = 0;
    totalAP += baseAmount;
    totalAP += epicAmounts.at(-1);
    totalAP += stoneAmounts.at(-1);

    let totalCrit = 0;
    totalCrit += secondaryBaseAmount
    totalCrit += legendaryAmounts.at(-1);
    totalCrit += relicAmounts.at(-1);

    expect(totalAP).toBeCloseTo(11.1);
    expect(totalCrit).toBeCloseTo(20);
})

test("Mass Increase should have total 25% dmg", () => {
    const { 
        baseAmount, epicAmounts, legendaryAmounts, relicAmounts, stoneAmounts
    } = engravingData["Mass Increase"]

    let total = 0;
    total += baseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);

    expect(total).toBeCloseTo(25);
})

test("Raid Captain should have total 25.2% dmg", () => {
    const { 
        baseAmount, epicAmounts, legendaryAmounts, relicAmounts, stoneAmounts
    } = engravingData["Raid Captain"]

    let total = 0;
    total += baseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);

    expect(total).toBeCloseTo(25.2);
})

test("Precise Dagger should have total 27% crit with -6% crit dmg", () => {
    const { 
        baseAmount, 
        epicAmounts, 
        legendaryAmounts, 
        relicAmounts, 
        stoneAmounts,
        secondaryBaseAmount
    } = engravingData["Precise Dagger"]

    let totalCrit = 0;
    totalCrit += baseAmount;
    totalCrit += epicAmounts.at(-1);
    totalCrit += legendaryAmounts.at(-1);
    totalCrit += relicAmounts.at(-1);
    totalCrit += stoneAmounts.at(-1);

    let totalCritDmg = 0
    totalCritDmg += secondaryBaseAmount;

    expect(totalCrit).toBeCloseTo(27);
    expect(totalCritDmg).toBeCloseTo(-6);
})

test("All Out Attack should have total 27% dmg", () => {
    const { 
        baseAmount, epicAmounts, legendaryAmounts, relicAmounts, stoneAmounts
    } = engravingData["All Out Attack"]

    let total = 0;
    total += baseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);

    expect(total).toBeCloseTo(27);
})

test("Ether Predator should have total 22.2% dmg", () => {
    const { 
        baseAmount, epicAmounts, legendaryAmounts, relicAmounts, stoneAmounts
    } = engravingData["Ether Predator"]

    let total = 0;
    total += baseAmount;
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);

    expect(total).toBeCloseTo(22.2);
})

test("Barricade should have total 23% dmg", () => {
    const { 
        baseAmount, epicAmounts, legendaryAmounts, relicAmounts, stoneAmounts
    } = engravingData["Barricade"]

    let total = 0;
    total += baseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);

    expect(total).toBeCloseTo(23);
})

test("Master's Tenacity should have total 23% dmg", () => {
    const { 
        baseAmount, epicAmounts, legendaryAmounts, relicAmounts, stoneAmounts
    } = engravingData["Master's Tenacity"]

    let total = 0;
    total += baseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);

    expect(total).toBeCloseTo(23);
})

test("Super Charge should have total 27% dmg", () => {
    const { 
        baseAmount, epicAmounts, legendaryAmounts, relicAmounts, stoneAmounts
    } = engravingData["Super Charge"]

    let total = 0;
    total += baseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);

    expect(total).toBeCloseTo(27);
})

test("MP Efficiency Increase should have total 22% dmg", () => {
    const { 
        baseAmount, epicAmounts, legendaryAmounts, relicAmounts, stoneAmounts
    } = engravingData["MP Efficiency Increase"]

    let total = 0;
    total += baseAmount;
    total += epicAmounts.at(-1);
    total += legendaryAmounts.at(-1);
    total += relicAmounts.at(-1);
    total += stoneAmounts.at(-1);

    expect(total).toBeCloseTo(22);
})