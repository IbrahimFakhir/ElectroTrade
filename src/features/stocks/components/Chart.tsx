import ReactApexChart from "react-apexcharts";

type ChartPropsType = {
    last30DaysFormatted: string[]
    stockValues: number[]
}

const Chart = ({ last30DaysFormatted, stockValues }: ChartPropsType) => {
    const options = {
        chart: {
            id: "stock name"
        },
        xaxis: {
            categories: last30DaysFormatted,
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
        <div className="w-[20.4rem]">
            <ReactApexChart options={options} series={series} type="line" height={"100%"} />
        </div>
    )
}

export default Chart;
