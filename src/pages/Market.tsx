import { Stock } from "../features/stocks";

const Market = () => {
	return (
		<div className="h-full md:mx-auto md:w-4/5 pt-8 md:pt-10 px-8">
			<h1 className="text-3xl font-medium mb-4">Market</h1>
			<div className="max-h-[90%] overflow-y-auto flex md:grid flex-col md:grid-cols-[repeat(auto-fill,_36rem)] md:grid-rows-[repeat(auto-fill)] md:justify-center md:2xl:justify-between md:gap-x-2 gap-y-4">
				<Stock />
				<Stock />
				<Stock />
				<Stock />
				<Stock />
				<Stock />
				<Stock />
				<Stock />
			</div>
		</div>
	)
}

export default Market;
