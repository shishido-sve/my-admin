import React from "react";
import Chart from "react-apexcharts";

const UsersChart = () => {
  const chartData = {
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: ['1月', '2月', '3月', '4月', '5月', '6月']
      },
      colors: ['#4F46E5'],
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '60%',
        }
      }
    },
    series: [{
      name: '新規ユーザー',
      data: [44, 55, 57, 56, 61, 58]
    }]
  };

  return (
    <div className="rounded-2xl bg-white p-4">
      <h3 className="mb-4 text-lg font-bold text-gray-700">ユーザー増加率</h3>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default UsersChart;