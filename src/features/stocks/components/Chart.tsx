import ReactApexChart from "react-apexcharts";

type ChartPropsType = {
    stockCategories: string[]
    stockValues: number[]
}

const Chart = ({ stockCategories, stockValues }: ChartPropsType) => {
    const options = {
        chart: {
            id: "stock name"
        },
        xaxis: {
            categories: stockCategories,
            tickAmount: 4
        }
    }

    const series = [
        {
            name: 'price',
            data: stockValues
        }
    ]

    return (
        <div className="w-[20.4rem] h-60">
            <ReactApexChart options={options} series={series} type="line" height={"100%"} />
        </div>
    )
}

export default Chart;
