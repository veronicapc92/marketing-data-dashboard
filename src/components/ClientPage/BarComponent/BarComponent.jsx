import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { CURRENCY } from "../Constants";
import {
  formatDate,
  capitalizeFirstLetter,
  formatNumber,
} from "../../../Helper";
import "./../../../fonts/fonts.css";

const BarComponent = ({ dateRangeArray, metric }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const labels = [];
  const data = [];

  // Checking the window width before first render
  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    handleResize();
  }, []);

  // Adjusts the chart's padding depending on the window width
  const resizePadding = () =>
    windowSize.width && windowSize.width < 850 ? 30 : 150;

  // Dynamically creating the labels and data arrays
  // which we will use in chartData
  for (let element of dateRangeArray) {
    labels.push(formatDate(element.date));
    data.push(element[metric]);
  }

  const chartData = {
    labels,
    datasets: [
      {
        label:
          metric !== "cost"
            ? capitalizeFirstLetter(metric)
            : capitalizeFirstLetter(`${metric} (${CURRENCY})`),
        data,
        backgroundColor: "#0896C5",
        hoverBackgroundColor: "#f78d2d",
        maxBarThickness: 18,
      },
    ],
  };

  const chartOptions = {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          let label = data.datasets[tooltipItem.datasetIndex].label;

          if (label) label += ": ";

          return (label += formatNumber(tooltipItem.yLabel));
        },
      },
    },
    layout: {
      padding: {
        left: resizePadding(),
        right: resizePadding(),
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
            callback: (number) => formatNumber(number),
            fontFamily: "Mulish",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            fontFamily: "Mulish",
          },
        },
      ],
    },
  };
  return (
    <Bar height={35} width={100} data={chartData} options={chartOptions} />
  );
};

export default BarComponent;
