import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { engravingData } from "../../calculations/engravingsT4";


const EngravingForm = ({ 
    options, 
    optionNum, 
    handleEngravingChange, 
    handleBookChange, 
    handleStoneValChange, 
    handleStoneLvlChange
 }) => {
    const engravingChoices = Object.keys(engravingData).sort()
    const getEngravingChoices = (rowNum) => {
        return (
            <Grid item>
                <FormControl size="small">
                    <InputLabel>Engraving {rowNum}</InputLabel>
                    <Select 
                        label={`Engraving ${rowNum}`} 
                        sx={{ minWidth: 215 }}
                        onChange={(e) => handleEngravingChange(e, optionNum, rowNum)}
                        value={options[optionNum][`engraving${rowNum}`].value}
                    >
                        {engravingChoices.map((choice) => (
                            <MenuItem value={choice}>{choice}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        )
    }

    const getBookTierChoices = (rowNum) => {
        const bookTiers = ["Epic", "Legendary", "Relic"]
        
        return (
            <>
                {bookTiers.map((tier) => (
                    <Grid item>
                        <FormControl size="small">
                            <InputLabel>{tier} Book</InputLabel>
                            <Select 
                                label={`${tier} Book`} 
                                sx={{ minWidth: 150 }}
                                onChange={(e) => handleBookChange(e, optionNum, rowNum, tier)}
                                defaultValue={0}

                            >
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                ))}
            </>
        )
    }
    
    const getStoneChoices = (stoneNum) => {
        return (
            <Grid container wrap="nowrap" direction="row" justifyContent="left" spacing={1} sx={{ py: 1 }}>
                <Grid item>
                    <FormControl id={`stone${stoneNum}`} size="small">
                        <InputLabel>Stone {stoneNum}</InputLabel>
                            <Select 
                                id={"test1"}
                                label={`Stone ${stoneNum}`} 
                                sx={{ minWidth: 215 }}
                                onChange={(e) => handleStoneValChange(e, stoneNum, optionNum)}
                                value={options[optionNum][`stone${stoneNum}`].value}
                            >
                                {engravingChoices.map((choice) => (
                                    <MenuItem value={choice}>{choice}</MenuItem>
                                ))}
                            </Select>
                    </FormControl>
                </Grid>
                        
                <Grid item>
                    <FormControl id={`stone${stoneNum}`} size="small">
                        <InputLabel>Level</InputLabel>
                        <Select 
                            id={"test2"}
                            label="Level"
                            sx={{ minWidth: 150 }}
                            onChange={(e) => handleStoneLvlChange(e, stoneNum, optionNum)}
                            value={options[optionNum][`stone${stoneNum}`].level}
                        >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        )
    }

    const getEngravingSelects = () => {
        const rowNums = [1, 2, 3, 4, 5]

        return (
            <Grid sx={{ px: 3, py: 1 }}>
                {rowNums.map((rowNum) => (
                    <Grid container wrap="nowrap" direction="row" justifyContent="left" spacing={1} sx={{ py: 1 }}>
                        {getEngravingChoices(rowNum)}
                        {getBookTierChoices(rowNum)}
                    </Grid>  
                ))}
                {getStoneChoices(1)}
                {getStoneChoices(2)}
            </Grid>
        )
    }

    return getEngravingSelects()
}

export default EngravingForm;