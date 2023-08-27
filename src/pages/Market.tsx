import { Stock } from "../features/stocks";

const Market = () => {
	return (
		<div className="h-full md:mx-auto md:w-[95%] p-4">
			<h1 className="text-3xl font-semibold mb-4 border-b border-black border-solid border-1">Market</h1>
			<div className="md:mt-8 max-h-[90%] grid md:place-items-center xl:grid-cols-2 overflow-y-auto">
				<div className="md:w-[34rem] xl:w-[30rem] 2xl:w-[34rem]">
					<Stock />
					<Stock />
				</div>
				<div className="md:w-[34rem] xl:w-[30rem] 2xl:w-[34rem]">
					<Stock />
					<Stock />
				</div>
			</div>
		</div>
	)
}

export default Market;
