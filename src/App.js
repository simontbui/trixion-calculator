import { Container, Grid, Paper, Stack, Typography } from "@mui/material";
import OptionForm from "./components/forms/OptionForm";
import { useState } from "react";
import { getMultiplier } from "./calculations/calculations"

const App = () => {
    const [options, setOptions] = useState({
        1: {
            engraving1: { value: "", epic: 0, legendary: 0, relic: 0 },
            engraving2: { value: "", epic: 0, legendary: 0, relic: 0 },
            engraving3: { value: "", epic: 0, legendary: 0, relic: 0 },
            engraving4: { value: "", epic: 0, legendary: 0, relic: 0 },
            engraving5: { value: "", epic: 0, legendary: 0, relic: 0 },
            stone1: { value: "", level: 0 },
            stone2: { value: "", level: 0 },
            elixirSet: { value: "", level: 0},
            critRate: 0,
            critDmg: 200,
            otherDmg: 0,
            evoDmg: 0
        },
        2: {
            engraving1: { value: "", epic: 0, legendary: 0, relic: 0 },
            engraving2: { value: "", epic: 0, legendary: 0, relic: 0 },
            engraving3: { value: "", epic: 0, legendary: 0, relic: 0 },
            engraving4: { value: "", epic: 0, legendary: 0, relic: 0 },
            engraving5: { value: "", epic: 0, legendary: 0, relic: 0 },
            stone1: { value: "", level: 0 },
            stone2: { value: "", level: 0 },
            elixirSet: { value: "", level: 0},
            critRate: 0,
            critDmg: 200,
            otherDmg: 0,
            evoDmg: 0
        }
    })

    const getPercentageDiff = (num1, num2) => {
        let bigNum;
        let smallNum;

        if (num1 > num2) {
            bigNum = num1
            smallNum = num2
        } else {
            bigNum = num2
            smallNum = num1
        }

        return ((bigNum - smallNum) / smallNum) * 100
    }

    //returns 1 if getMultiplier returns NaN
    const option1Multiplier = getMultiplier(options[1]) || 1
    const option2Multiplier = getMultiplier(options[2]) || 1
    const percentageDiff = getPercentageDiff(option1Multiplier, option2Multiplier)
    let resultText;

    if (option1Multiplier > option2Multiplier)
        resultText = `Option #1 is ${percentageDiff.toFixed(3)}% better than Option #2`
    else if (option1Multiplier < option2Multiplier)
        resultText = `Option #2 is ${percentageDiff.toFixed(3)}% better than Option #1`
    else
        resultText = "Option 1 and Option 2 are equivalent"

    const handleEngravingChange = (e, optionNum, rowNum) => {
        const engravingNum = `engraving${rowNum}`

        setOptions((prevState) => ({
            ...prevState,
            [optionNum]: {
                ...prevState[optionNum],
                [engravingNum]: {
                    ...prevState[optionNum][engravingNum],
                    value: e.target.value
                }
            }
        }))
    }

    const handleBookChange = (e, optionNum, rowNum, bookTier) => {
        const engravingNum = `engraving${rowNum}`

        setOptions((prevState) => ({
            ...prevState,
            [optionNum]: {
                ...prevState[optionNum],
                [engravingNum]: {
                    ...prevState[optionNum][engravingNum],
                    [bookTier.toLowerCase()]: e.target.value
                }
            }
        }))
    }

    const handleStatFieldChange = (e, optionNum) => {
        setOptions((prevState) => ({
            ...prevState,
            [optionNum]: {
                ...prevState[optionNum],
                [e.target.id]: parseFloat(e.target.value)
            } 
        }))
    }

    const handleStoneValChange = (e, stoneNum, optionNum) => {
        setOptions((prevState) => ({
            ...prevState,
            [optionNum]: {
                ...prevState[optionNum],
                [`stone${stoneNum}`]: {
                    ...prevState[optionNum][`stone${stoneNum}`],
                    value: e.target.value
                }
            } 
        }))
    }

    const handleStoneLvlChange = (e, stoneNum, optionNum) => {
        setOptions((prevState) => ({
            ...prevState,
            [optionNum]: {
                ...prevState[optionNum],
                [`stone${stoneNum}`]: {
                    ...prevState[optionNum][`stone${stoneNum}`],
                    level: e.target.value
                }
            } 
        }))
    }

    const handleElixirSetValChange = (e, optionNum) => {
        setOptions((prevState) => ({
            ...prevState,
            [optionNum]: {
                ...prevState[optionNum],
                "elixirSet": {
                    ...prevState[optionNum].elixirSet,
                    value: e.target.value
                }
            } 
        }))
    }

    const handleElixirSetLvlChange = (e, optionNum) => {
        setOptions((prevState) => ({
            ...prevState,
            [optionNum]: {
                ...prevState[optionNum],
                "elixirSet": {
                    ...prevState[optionNum].elixirSet,
                    level: e.target.value
                }
            } 
        }))
    }


    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ width: 1, height: "100vh", mt: 1 }}
        >
            <Paper elevation={3} sx={{ mx: 2, p: 3, backgroundColor: "#b0bec5" }}>
                <Grid container wrap="nowrap" direction="row" justifyContent="center">
                    <Grid item>
                        <OptionForm 
                            options={options}
                            optionNum={1}
                            handleEngravingChange={handleEngravingChange}
                            handleBookChange={handleBookChange}
                            handleStatFieldChange={handleStatFieldChange}
                            handleStoneValChange={handleStoneValChange}
                            handleStoneLvlChange={handleStoneLvlChange}
                            handleElixirSetValChange={handleElixirSetValChange}
                            handleElixirSetLvlChange={handleElixirSetLvlChange}
                        />
                    </Grid>
                    <Grid item>
                        <OptionForm 
                            options={options}
                            optionNum={2}
                            handleEngravingChange={handleEngravingChange}
                            handleBookChange={handleBookChange}
                            handleStatFieldChange={handleStatFieldChange}
                            handleStoneValChange={handleStoneValChange}
                            handleStoneLvlChange={handleStoneLvlChange}
                            handleElixirSetValChange={handleElixirSetValChange}
                            handleElixirSetLvlChange={handleElixirSetLvlChange}
                        />
                    </Grid>
                </Grid>
                <Container maxWidth={false} textAlign="center">
                    <Stack 
                        direction="row"
                        justifyContent="space-around"
                        sx={{ width: 1, pt: 4, gap: 6 }}
                    >
                        <Typography noWrap variant="h6">
                            Option #1: {option1Multiplier.toFixed(3)}
                        </Typography>
                        <Typography noWrap variant="h6">
                            Option #2: {option2Multiplier.toFixed(3)}
                        </Typography>
                    </Stack>
                    <Typography textAlign="center" sx={{ pt: 4, color: "#f44336" }} variant="h5">
                        {resultText}
                    </Typography>
                    <Typography sx={{ pt: 4 }}>
                        The calculator expects crit rate and crit damage values in the format shown in game. For example, enter in 80% for crit rate and not 0.80. The default crit damage is 200 if you have no bonuses. Include any engraving crit rate and crit damage bonuses (e.g. precise dagger) when entering in values into the respective fields. This calculator calculates raw multipliers; it does not account for uptime, cooldown reduction, attack speed, etc.
                    </Typography>
                </Container>
            </Paper>
        </Stack>
    )
}

export default App;