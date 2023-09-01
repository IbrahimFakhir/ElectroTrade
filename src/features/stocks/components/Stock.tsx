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
        <Paper 
            sx={{
                padding: "1rem",
                /* marginBottom: {
                    xs: "0.5rem",
                    md: "1rem"
                } */
            }}
        >
            <div className="flex flex-col md:flex-row items-center md:items-stretch">
                <StockInfo stockName={stock.name} stockPrice={stock.values[stock.values.length - 1]} />
                <Chart stockCategories={stock.categories} stockValues={stock.values} />
            </div>
        </Paper>
    )
}

export default Stock;
