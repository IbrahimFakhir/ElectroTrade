import { Stock } from "../features/stocks";

const Market = () => {
	return (
		<div className="h-full md:mx-auto md:w-[90%] p-4">
			<h1 className="text-3xl font-semibold mb-4 border-b border-black border-solid border-1">Market</h1>
			{/* <div className="md:mt-8 max-h-[90%] grid md:place-items-center xl:grid-cols-2 xl:gap-0 overflow-y-auto">
				<div className="md:w-[34rem] xl:w-[28rem] 2xl:w-[30rem]">
					<Stock />
					<Stock />
					<Stock />
					<Stock />
				</div>
				<div className="md:w-[34rem] xl:w-[28rem] 2xl:w-[30rem]">
					<Stock />
					<Stock />
					<Stock />
					<Stock />
				</div>
			</div> */}
			<div className="max-h-[90%] overflow-y-auto md:grid md:grid-cols-[repeat(auto-fill,_36rem)] md:grid-rows-[repeat(auto-fill)] md:justify-center md:2xl:justify-between md:gap-x-2 gap-y-4">
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
