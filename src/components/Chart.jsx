import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import Select from "./Select";
import MetricSelector from "./MetricSelector";
import "./chart.css";

const Chart = ({
  dataPerDay,
  formatDate,
  formatNumber,
  currency,
  propsArray,
}) => {
  const [dateRange, setDateRange] = useState(0);
  const [prop, setProp] = useState("impressions");
  const labels = [];
  const data = [];
  const index = dataPerDay.length - dateRange;
  const dateRangeArray = !dateRange ? dataPerDay : dataPerDay.slice(index);

  for (let element of dateRangeArray) {
    labels.push(formatDate(element));
    data.push(element[prop]);
  }

  const handleChange = (e) => setDateRange(e.target.value);

  const handleMetricSelect = (e) => setProp(e.target.value);

  const chartData = {
    labels,
    datasets: [
      {
        label: prop !== "cost" ? prop : `${prop} (${currency})`,
        data,
        backgroundColor: "#0896C5",
        hoverBackgroundColor: "#f78d2d",
        maxBarThickness: 18,
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: {
        left: 200,
        right: 200,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            callback: (number) => `${formatNumber(number)}`,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div className="chart-container">
      <Select handleChange={handleChange} />
      <MetricSelector
        onMetricSelect={handleMetricSelect}
        propsArray={propsArray}
      />
      <Bar data={chartData} width={30} height={10} options={chartOptions} />
    </div>
  );
};

export default Chart;
