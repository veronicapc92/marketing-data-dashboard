import React from "react";
import { Bar } from "react-chartjs-2";
import { formatDate, capitalizeFirstLetter, formatNumber } from "./../Helper";
import { CURRENCY } from "../Constants";

const BarComponent = ({ dateRangeArray, prop }) => {
  const labels = [];
  const data = [];

  // Dynamically creating the labels and data arrays
  // which we will use in chartData
  for (let element of dateRangeArray) {
    labels.push(formatDate(element));
    data.push(element[prop]);
  }

  const chartData = {
    labels,
    datasets: [
      {
        label:
          prop !== "cost"
            ? capitalizeFirstLetter(prop)
            : capitalizeFirstLetter(`${prop} (${CURRENCY})`),
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
  return <Bar data={chartData} width={30} height={10} options={chartOptions} />;
};

export default BarComponent;
