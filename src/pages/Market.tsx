import { useState, useEffect } from "react";
import { Stock } from "../features/stocks";
import axios from "../lib/axios";
import { STOCKS_URL } from "../lib/api-paths";

type StockType = {
	id: number,
	name: string,
	priceHistory: number[]
}

type StockDataType = {
	stocks: StockType[],
	timestamps: string[]
}

const Market = () => {
	const [stockData, setStockData] = useState<StockDataType | null>(null);

	const [test, setTest] = useState(false);
	
	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController;

		const getStocks = async () => {
			try {
				const response = await axios.get(
					STOCKS_URL,
					{
						signal: controller.signal
					}
				);
				console.log(response?.data);
				isMounted && setStockData(response?.data);
				
			}
			catch (err) {
				console.log(err);
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
				<h1 className="text-3xl font-medium px-2 md:px-0 mb-4">Market</h1>
				<button onClick={() => setTest(prev => !prev)} className="bg-secondaryText rounded">test fetch</button>
			</div>
			{/* alternative: md:justify-center 2xl:justify-between */}
			<div className="max-h-[90%] overflow-y-auto flex md:grid flex-col md:grid-cols-[repeat(auto-fill,_36rem)] md:grid-rows-[repeat(auto-fill)] md:justify-evenly md:gap-x-2 gap-y-4 px-2">
				{
					stockData && stockData.stocks.map((stock, index) => 
						<Stock 
							key={index}
							name={stock.name}
							timestamps={stockData?.timestamps}
							priceHistory={stock.priceHistory}
						/>
					)
				}
			</div>
		</div>
	)
}

export default Market;
