import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { BUY_STOCK_URL, SELL_STOCK_URL } from "../../../lib/api-paths";
import { TextField, Button } from "@mui/material";
import { pages } from "../../../utils/pages";
import { AxiosError } from "axios";

type PurchaseModalPropsType = {
    stockId: number,
    stockName: string,
    stockPrice: number,
    buttonText: string,
    buttonColor: "primary" | "error",
    quantityOwned: number,
    onClose: () => void,
    updateQuantity: (stockId: number, newQuantity: number) => void
}

const PurchaseModal = ({ stockId, stockName, stockPrice, buttonText, buttonColor, quantityOwned, onClose, updateQuantity }: PurchaseModalPropsType) => {
    const [quantity, setQuantity] = useState<number>(0);

    const [errorMessage, setErrorMessage] = useState<string>("");

    const navigate = useNavigate();
    const location = useLocation();

    const axiosPrivate = useAxiosPrivate();

    const { auth, setAuth } = useAuth();

    const handleBuyStock = () => {
        if (quantity < 1) {
            setErrorMessage("Buy at least one!");
            return;
        }

        if (parseFloat((quantity * stockPrice).toFixed(2)) > auth.balance!) {
            setErrorMessage("Balance is not high enough!");
            return;
        }

        const buy = async () => {
            try {
                const response = await axiosPrivate.post(
                    `${BUY_STOCK_URL}/${stockId}`,
                    null,
                    {
                        params: { quantity }
                    }
                );

                console.log(response?.data);
                setAuth({ ...auth, balance: response?.data?.balance });
                updateQuantity(stockId, response?.data?.quantity);
                onClose();
            }
            catch(err) {
                console.log(err);
                const axiosError = err as AxiosError;
                if (!axiosError.response) {
                    setErrorMessage("No Server Response");
                }
                else if (axiosError.response?.status === 400) {
                    navigate(pages.get("authentication")!.path, { state: { from: location }, replace: true });
                }
                else {
                    setErrorMessage("Server Error");
                }
            }
        }

        buy();
    }

    const handleSellStock = () => {
        if (quantity < 1) {
            setErrorMessage("Sell at least one!");
            return;
        }

        if (quantity > quantityOwned!) {
            setErrorMessage(`You only own ${quantityOwned} Stock${ quantityOwned > 1 ? "s" : "" }!`);
            return;
        }

        const sell = async () => {
            try {
                const response = await axiosPrivate.post(
                    `${SELL_STOCK_URL}/${stockId}`,
                    null,
                    {
                        params: { quantity }
                    }
                );

                console.log(response?.data);
                setAuth({ ...auth, balance: response?.data?.balance });
                updateQuantity(stockId, response?.data?.quantity);
                onClose();
            }
            catch (err) {
                console.log(err);
                const axiosError = err as AxiosError;
                if (!axiosError.response) {
                    setErrorMessage("No Server Response");
                }
                else if (axiosError.response?.status === 400) {
                    navigate(pages.get("authentication")!.path, { state: { from: location }, replace: true });
                }
                else {
                    setErrorMessage("Server Error");
                }
            }
        }

        sell();
    }

    useEffect(() => {
        setErrorMessage("");
    }, [quantity])

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)] z-50" onClick={onClose} />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFF] p-6 z-50 flex flex-col justify-between rounded-lg w-72 md:w-80">
                <div className="relative flex flex-row justify-between">
                        <h2 className="font-semibold text-xl">{stockName}</h2>
                        {/* $NaN if no value in TextField, to fix */}
                        <span className="text-secondaryText">${(quantity * stockPrice).toFixed(2)} total</span>
                        <span className="text-sx text-error absolute -bottom-6 left-0">{errorMessage}</span>
                </div>
                <div className="flex justify-between pt-8">
                    <TextField
                        variant="filled"
                        id="quantity"
                        label="Quantity"
                        type="number"
                        value={quantity}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value))}
                        size="small"
                        disabled={quantityOwned === null}
                        sx={{ height: "100%", width: "40%" }}
                        InputProps={{
                            inputProps: {
                                min: 0,
                                max: 1000
                            }
                        }}
                    />
                    <Button
                        variant="contained"
                        color={buttonColor}
                        onClick={buttonText === "Buy" ? handleBuyStock : handleSellStock}
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
