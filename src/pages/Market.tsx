import { Stock } from "../features/stocks";

const Market = () => {
	return (
		<div className="h-full p-4">
			<h1 className="text-3xl font-semibold mb-4">Market</h1>
			<div className="max-h-[90%] grid md:place-items-center overflow-y-auto">
				<div className="md:w-[36rem]">
					<Stock />
					<Stock />
				</div>
				<div className="md:w-[36rem]">
					<Stock />
					<Stock />
				</div>
			</div>
		</div>
	)
}

export default Market;
