import ReactApexChart from "react-apexcharts";
import last30Days from "../utils/last-30-days";
import stockValues from "../utils/stock-values";

const Chart = () => {
    const options = {
        chart: {
            id: "stock name"
        },
        xaxis: {
            categories: last30Days,
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
            <ReactApexChart options={options} series={series} type="line" width={"100%"}  />
        </div>
    )
}

export default Chart;
