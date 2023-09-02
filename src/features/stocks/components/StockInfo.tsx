import { Button } from "@mui/material";

type StockInfoPropsType = {
    stockName: string,
    stockPrice: number
}

const StockInfo = ({ stockName, stockPrice }: StockInfoPropsType) => {
    return (
        <div className="w-full md:w-2/5 px-2 md:px-0 md:flex md:flex-col md:justify-between mb-2 md:mb-0">
            <div>
                <h1 className="font-semibold text-xl">{stockName}</h1>
                <p className="text-secondaryText">${stockPrice}</p>
            </div>
            <div className="flex justify-between md:flex-col gap-3 mt-2 md:mb-8">
                <Button 
                    variant="contained" 
                    color="error"
                    sx={{
                        width: {
                            xs: "5rem",
                            md: "100%"
                        }
                    }}
                >
                    Sell
                </Button>
                <Button 
                    variant="contained" 
                    color="info"
                    sx={{
                        width: {
                            xs: "5rem",
                            md: "100%"
                        }
                    }}
                >
                    Buy
                </Button>
            </div>
        </div>
    )
}

export default StockInfo;
