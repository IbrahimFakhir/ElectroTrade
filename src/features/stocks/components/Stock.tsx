import Paper from "@mui/material/Paper/Paper"
import Chart from "./Chart";
import StockInfo from "./StockInfo";
import stockValues from "../utils/stock-values";
import last30DaysFormatted from "../utils/last-30-days";

const stock = {
    name: "test stock",
    values: stockValues
}

const Stock = () => {
    return (
        <Paper sx={{ padding: "1rem" }}>
            <StockInfo />
            <Chart last30DaysFormatted={last30DaysFormatted} stockValues={stock.values} />
        </Paper>
    )
}

export default Stock;
