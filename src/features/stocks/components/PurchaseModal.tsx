import { useState, MouseEvent, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { STOCK_AMOUNT_URL } from "../../../lib/api-paths";
import { TextField, Button } from "@mui/material";
import { pages } from "../../../utils/pages";

type PurchaseModalPropsType = {
    stockId: number,
    stockName: string,
    stockPrice: number,
    buttonText: string,
    buttonColor: "primary" | "error",
    onClose: (event: MouseEvent<HTMLDivElement>) => void 
}

const PurchaseModal = ({ stockId, stockName, stockPrice, buttonText, buttonColor, onClose }: PurchaseModalPropsType) => {
    const [quantity, setQuantity] = useState<number>(0);
    const [quantityOwned, setQuantityOwned] = useState<number | null>(null);

    const navigate = useNavigate();
    const location = useLocation();

    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController;

        const getStockAmount = async () => {
            try {
                const response = await axiosPrivate.get(
                    STOCK_AMOUNT_URL + `/${stockId}`,
                    {
                        signal: controller.signal
                    }
                )
                isMounted && console.log(response?.data);
                isMounted && setQuantityOwned(response?.data);
            }
            catch (err) {
                console.log(err);
                navigate(pages.get("authentication")!.path, { state: { from: location }, replace: true });
            }
        }

        getStockAmount();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)] z-50" onClick={onClose} />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFF] p-6 z-50 flex flex-col justify-between rounded-lg w-72 md:w-80">
                <div className="flex flex-col md:flex-row md:justify-between">
                        <h2 className="font-semibold text-xl"><span className="font-medium">{buttonText}</span> {stockName}</h2>
                        {/* $NaN if no value in TextField, to fix */}
                        <span className="text-secondaryText">${(quantity * stockPrice).toFixed(2)} total</span>
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
