import { useState, MouseEvent } from "react";
import { TextField, Button } from "@mui/material";

type PurchaseModalPropsType = {
    stockName: string,
    stockPrice: number,
    buttonText: string,
    buttonColor: "primary" | "error",
    onClose: (event: MouseEvent<HTMLDivElement>) => void 
}

const PurchaseModal = ({ stockName, stockPrice, buttonText, buttonColor, onClose }: PurchaseModalPropsType) => {
    const [amount, setAmount] = useState<number>(0);

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)] z-50" onClick={onClose} />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFF] p-6 z-50 flex flex-col justify-between rounded-lg w-72">
                <div className="flex justify-between">
                        <h2 className="font-semibold text-xl">{stockName}</h2>
                        {/* $NaN if no value in TextField, to fix */}
                        <span className="text-secondaryText">${(amount * stockPrice).toFixed(2)} total</span>
                </div>
                <div className="flex justify-between pt-8">
                    <TextField
                        variant="filled"
                        id="amount"
                        label="Amount"
                        type="number"
                        value={amount}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(parseInt(e.target.value))}
                        size="small"
                        sx={{ height: "100%", width: "40%" }}
                        InputProps={{
                            inputProps: {
                                min: 0,
                                max: 10
                            }
                        }}
                    />
                    <Button
                        variant="contained"
                        color={buttonColor}
                        sx={{ width: "40%" }}
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default PurchaseModal;
