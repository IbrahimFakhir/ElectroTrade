import { Stock } from "../features/stocks";

const Market = () => {
	return (
		<div className="mx-4">
			<h1 className="text-3xl font-semibold">All Stocks</h1>
			<div className="grid">
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
