import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const ElixirForm = ({ options, optionNum, handleElixirSetValChange, handleElixirSetLvlChange }) => {
    return (
        <Grid container wrap="nowrap" direction="row" justifyContent="left" spacing={1} sx={{ pb: 3, px: 3 }}>
            <Grid item>
                <FormControl size="small">
                    <InputLabel>Elixir Set</InputLabel>
                    <Select 
                        label="Elixir Set"
                        sx={{ minWidth: 215 }}
                        value={options[optionNum].elixirSet.value}
                        onChange={(e) => handleElixirSetValChange(e, optionNum)}
                    >
                        <MenuItem value={""}>None</MenuItem>
                        <MenuItem value={"Master"}>Master</MenuItem>
                        <MenuItem value={"Critical"}>Critical</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl size="small">
                    <InputLabel>Level</InputLabel>
                    <Select 
                        label="Elixir Set"
                        sx={{ minWidth: 150 }}
                        value={options[optionNum].elixirSet.level}
                        onChange={(e) => handleElixirSetLvlChange(e, optionNum)}
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default ElixirForm;