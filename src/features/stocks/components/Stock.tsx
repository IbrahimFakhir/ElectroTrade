import Paper from "@mui/material/Paper/Paper"
import Chart from "./Chart";
import StockInfo from "./StockInfo";
import stockValues from "../utils/stock-values";
import last30DaysFormatted from "../utils/last-30-days";

type stockType = {
    name: string,
    categories: string[],
    values: number[]
}

const stock: stockType = {
    name: "test stock",
    categories: last30DaysFormatted,
    values: stockValues
}

const Stock = () => {
    return (
        <Paper sx={{ padding: "1rem" }}>
            <div className="flex flex-col items-center">
                <StockInfo stockName={stock.name} stockPrice={stock.values[stock.values.length - 1]} />
                <Chart stockCategories={stock.categories} stockValues={stock.values} />
            </div>
        </Paper>
    )
}

export default Stock;
