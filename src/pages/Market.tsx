import { Stock } from "../features/stocks";

const Market = () => {
	return (
		<div className="h-full p-4">
			<h1 className="text-3xl font-semibold mb-4">All Stocks</h1>
			<div className="grid gap-2 h-[93%] overflow-y-auto">
				<div>
					<Stock />
				</div>
				<div>
					<Stock />
				</div>
				<div>
					<Stock />
				</div>
			</div>
		</div>
	)
}

export default Market;
