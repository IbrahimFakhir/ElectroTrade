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
	}, [])
	
	return (
		<div className="h-full md:mx-auto md:w-4/5 pt-6 md:pt-10 px-6 md:px-8">
			<h1 className="text-3xl font-medium px-2 md:px-0 mb-4">Market</h1>
			{/* alternative: md:justify-center 2xl:justify-between */}
				{
					stockData && 
					<div className="max-h-[90%] overflow-y-auto flex md:grid flex-col md:grid-cols-[repeat(auto-fill,_36rem)] md:grid-rows-[repeat(auto-fill)] md:justify-evenly md:gap-x-2 gap-y-4 px-2">
						<Stock 
							name={stockData?.stocks[0].name} 
							timestamps={stockData?.timestamps} 
							priceHistory={stockData?.stocks[0].priceHistory} 
						/>
						<Stock 
							name={stockData?.stocks[0].name} 
							timestamps={stockData?.timestamps} 
							priceHistory={stockData?.stocks[0].priceHistory}						
						/>
					</div>
				}
			
		</div>
	)
}

export default Market;
