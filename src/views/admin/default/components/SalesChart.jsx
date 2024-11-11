import React from "react";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const chartData = {
    options: {
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: ['1月', '2月', '3月', '4月', '5月', '6月']
      },
      stroke: {
        curve: 'smooth'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3
        }
      }
    },
    series: [{
      name: '売上高',
      data: [30000, 40000, 35000, 50000, 49000, 60000]
    }]
  };

  return (
    <div className="rounded-2xl bg-white p-4">
      <h3 className="mb-4 text-lg font-bold text-gray-700">月間売上推移</h3>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default SalesChart;