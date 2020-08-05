import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { formatDate, capitalizeFirstLetter, formatNumber } from "./../Helper";
import { CURRENCY } from "../Constants";

const BarComponent = ({ dateRangeArray, prop }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const labels = [];
  const data = [];

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
  }, []);

  const resizePadding = () => {
    if (windowSize.width && windowSize.width < 800) return 10;
    return 150;
  };

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
    <Bar height={35} width={100} data={chartData} options={chartOptions} />
  );
};

export default BarComponent;
