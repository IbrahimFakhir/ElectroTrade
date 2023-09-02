import Paper from "@mui/material/Paper/Paper"
import Chart from "./Chart";
import StockInfo from "./StockInfo";

type StockPropsType = {
    name: string,
    timestamps: string[],
    priceHistory: number[]
}

const Stock = ({ name, timestamps, priceHistory }: StockPropsType) => {
    return (
        <Paper 
            sx={{
                padding: "1rem"
            }}
        >
            <div className="flex flex-col md:flex-row items-center md:items-stretch">
                <StockInfo stockName={name} stockPrice={priceHistory[priceHistory.length - 1]} />
                <Chart stockCategories={timestamps} stockValues={priceHistory} />
            </div>
        </Paper>
    )
}

export default Stock;
