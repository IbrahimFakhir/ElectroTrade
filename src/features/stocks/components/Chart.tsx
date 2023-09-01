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
        <div className="h-60 md:h-72 md:w-full">
            <ReactApexChart options={options} series={series} type="line" height={"100%"} />
        </div>
    )
}

export default Chart;
