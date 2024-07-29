import { Grid, TextField } from "@mui/material";

const StatFields = ({ options, optionNum, handleStatFieldChange }) => {
    const inputProps = { min: 0 }

    return (
        <Grid container wrap="nowrap" direction="row" justifyContent="center" spacing={1} sx={{ pb: 3, px: 3 }}>
            <Grid item>
                <TextField 
                    id="critRate"
                    label="Crit Rate" 
                    type="number" 
                    value={options[optionNum].critRate}
                    // sx={{ maxWidth: 195 }}
                    InputProps={inputProps}
                    size="small"
                    onChange={(e) => handleStatFieldChange(e, optionNum)}
                />
            </Grid>
            <Grid item>
                <TextField 
                    id="critDmg"
                    label="Crit Damage" 
                    type="number" 
                    value={options[optionNum].critDmg}
                    // sx={{ maxWidth: 195 }}
                    InputProps={inputProps}
                    size="small"
                    onChange={(e) => handleStatFieldChange(e, optionNum)}
                />
            </Grid>
            <Grid item>
                <TextField 
                    id="otherDmg"
                    label="Other Damage" 
                    type="number" 
                    value={options[optionNum].otherDmg}
                    // sx={{ maxWidth: 195 }}
                    InputProps={inputProps}
                    size="small"
                    onChange={(e) => handleStatFieldChange(e, optionNum)}
                />
            </Grid>
            <Grid item>
                <TextField 
                    id="evoDmg"
                    label="Evolution Damage" 
                    type="number" 
                    value={options[optionNum].evoDmg}
                    // sx={{ maxWidth: 195 }}
                    InputProps={inputProps}
                    size="small"
                    onChange={(e) => handleStatFieldChange(e, optionNum)}
                />
            </Grid>
        </Grid>
    )
}

export default StatFields;