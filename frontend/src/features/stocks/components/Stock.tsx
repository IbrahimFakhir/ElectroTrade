import Paper from "@mui/material/Paper/Paper"
import Chart from "./Chart";
import StockInfo from "./StockInfo";

type StockPropsType = {
    id: number,
    name: string,
    timestamps: string[],
    priceHistory: number[],
    quantityOwned: number,
    updateQuantity: (stockId: number, newQuantity: number) => void
}

const Stock = ({ id, name, timestamps, priceHistory, quantityOwned, updateQuantity }: StockPropsType) => {
    return (
        <Paper 
            sx={{
                padding: "1rem"
            }}
        >
            <div className="flex flex-col md:flex-row items-center md:items-stretch">
                <StockInfo
                    stockId={id}
                    stockName={name}
                    stockPrice={priceHistory[priceHistory.length - 1]}
                    quantityOwned={quantityOwned}
                    updateQuantity={updateQuantity}
                />
                <Chart
                    stockCategories={timestamps}
                    stockValues={priceHistory}
                />
            </div>
        </Paper>
    )
}

export default Stock;
