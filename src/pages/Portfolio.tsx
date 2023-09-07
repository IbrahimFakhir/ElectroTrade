import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Stock } from "../features/stocks";
import { STOCKS_URL } from "../lib/api-paths";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { pages } from "../utils/pages";

type StockType = {
	id: number,
	name: string,
	priceHistory: number[],
	quantity: number
}

type StockDataType = {
	stocks: StockType[],
	timestamps: string[]
}

const Portfolio = () => {
    const [stockData, setStockData] = useState<StockDataType | null>(null);

    const [test, setTest] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const axiosPrivate = useAxiosPrivate();

    const updateQuantity = (stockId: number, newQuantity: number) => {
		if (stockData === null) return;

		const stockIndex = stockData?.stocks.findIndex(stock => stock.id === stockId);

		if (stockIndex === -1) return;

		const updatedStock = { ...stockData.stocks[stockIndex] };
		updatedStock.quantity = newQuantity;

		const updatedStockData = { ...stockData };

		updatedStockData.stocks[stockIndex] = updatedStock;

		setStockData(updatedStockData);
	}

    useEffect(() => {
		let isMounted = true;
		const controller = new AbortController;

		const getStocks = async () => {
			try {
				const response = await axiosPrivate.get(
					STOCKS_URL,
					{
						signal: controller.signal
					}
				);
				console.log(response?.data);

                const filteredStocks = response?.data?.stocks.filter((stock: StockType) => stock.quantity > 0);

				isMounted && setStockData({ stocks: filteredStocks, timestamps: response?.data.timestamps });
			}
			catch (err) {
				console.log(err);
                navigate(pages.get("authentication")!.path, { state: { from: location }, replace: true });
			}
		}

		getStocks();

		console.log(stockData);

		return () => {
			isMounted = false;
			controller.abort();
		}
	}, [test])

    return (
        <div className="h-full md:mx-auto md:w-4/5 pt-6 md:pt-10 px-6 md:px-8">
            <div className="flex justify-between">
				<h1 className="text-3xl font-medium px-2 md:px-0 mb-4">Your Stocks</h1>
                <button onClick={() => setTest(prev => !prev)} className="bg-secondaryText rounded">test fetch</button>
			</div>
            <div className="max-h-[90%] overflow-y-auto flex md:grid flex-col md:grid-cols-[repeat(auto-fill,_36rem)] md:grid-rows-[repeat(auto-fill)] 2xl:justify-between md:gap-x-2 gap-y-4 px-2 md:px-0 md:w-scrollableContainer md:pr-2">
                {
					stockData && stockData.stocks.map((stock, index) => 
						<Stock
							id={stock.id}
							key={index}
							name={stock.name}
							timestamps={stockData.timestamps}
							priceHistory={stock.priceHistory}
							quantityOwned={stock.quantity}
							updateQuantity={updateQuantity}
						/>
					)
				}
            </div>
        </div>
    )
}

export default Portfolio;
