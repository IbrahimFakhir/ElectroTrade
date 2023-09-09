import { Paper } from "@mui/material";

const Welcome = () => {
    return(
        <div className="h-full flex justify-center items-center">
            <Paper sx={{ padding: "2rem", width: "20rem" }} elevation={1} className="flex flex-col gap-2 items-center">
                <h1 className="text-xl font-medium">Welcome to</h1>
                <h1 className="text-2xl font-semibold text-muiPrimaryMain">Electro Trade</h1>
            </Paper>
        </div>
    )
}

export default Welcome;
