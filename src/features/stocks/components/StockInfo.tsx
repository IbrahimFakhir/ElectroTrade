import { Button } from "@mui/material";

type StockInfoPropsType = {
    stockName: string,
    stockPrice: number
}

const StockInfo = ({ stockName, stockPrice }: StockInfoPropsType) => {
    return (
        <div className="w-full md:w-2/5 px-4 md:px-0 md:flex md:flex-col md:justify-between">
            <div>
                <h1 className="font-semibold text-xl">{stockName}</h1>
                <p className="text-secondaryText">${stockPrice}</p>
            </div>
            <div className="flex mt-2 md:mb-8">
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
