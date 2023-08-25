import Paper from "@mui/material/Paper/Paper"
import Chart from "./Chart";

const Stock = () => {
    return (
        <Paper sx={{ padding: "1rem" }}>
            <h1 className="m-4">Stock</h1>
            <Chart />
        </Paper>
    )
}

export default Stock;