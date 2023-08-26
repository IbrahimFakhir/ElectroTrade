import { Button } from "@mui/material";

type StockInfoPropsType = {
    stockName: string,
    stockPrice: number
}

const StockInfo = ({ stockName, stockPrice }: StockInfoPropsType) => {
    return (
        <div className="w-full px-4">
            <h1 className="font-semibold">{stockName}</h1>
            <p className="text-secondaryText">${stockPrice}</p>
            <div className="flex mt-2">
                <Button variant="contained">
                    Buy
                </Button>
                <Button variant="contained" color="error" sx={{ marginLeft: "0.5rem" }}>
                    Sell
                </Button>
            </div>
        </div>
    )
}

export default StockInfo;
