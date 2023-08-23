import { Paper } from "@mui/material";

const Welcome = () => {
    return(
        <div className="h-full flex justify-center items-center">
            <Paper sx={{ padding: "2rem", width: "20rem" }} elevation={1} className="flex justify-center">
                Welcome
            </Paper>
        </div>
    )
}

export default Welcome;
