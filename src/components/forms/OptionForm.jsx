import { Container, Paper, Typography } from "@mui/material"
import EngravingForm from "./EngravingForm";
import StatFields from "./StatFields";
import ElixirForm from "./ElixirForm";

const OptionForm = ({ options, optionNum, handleEngravingChange, handleBookChange, handleStatFieldChange, handleStoneValChange, handleStoneLvlChange, handleElixirSetValChange, handleElixirSetLvlChange }) => {
    return (
        <>
            <Container>
                <Paper elevation={7}>
                    <Typography
                        variant="h5"
                        color="textPrimary"
                        sx={{ textAlign: "center", pt: 2 }}
                    >
                        {`Option #${optionNum}`}
                    </Typography>
                    <EngravingForm 
                        options={options}
                        optionNum={optionNum}
                        handleEngravingChange={handleEngravingChange} 
                        handleBookChange={handleBookChange}
                        handleStoneValChange={handleStoneValChange}
                        handleStoneLvlChange={handleStoneLvlChange}
                    />
                    <ElixirForm 
                        options={options}
                        optionNum={optionNum}
                        handleElixirSetValChange={handleElixirSetValChange}
                        handleElixirSetLvlChange={handleElixirSetLvlChange}
                    />
                    <StatFields 
                        options={options}
                        optionNum={optionNum}
                        handleStatFieldChange={handleStatFieldChange}
                        handleElixirSetValChange={handleElixirSetValChange}
                        handleElixirSetLvlChange={handleElixirSetLvlChange}
                    />
                </Paper>
            </Container>
        </>
    )
}

export default OptionForm