import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = ({ dataPerDay, formatDate, formatNumber, currency }) => {
  const labels = [];
  const data = [];

  for (let element of dataPerDay) {
    labels.push(formatDate(element));
    data.push(element.cost);
  }

  const chartData = {
    labels,
    datasets: [
      {
        label: "Cost",
        data,
        backgroundColor: "#26608E",
        maxBarThickness: 18,
      },
    ],
  };

  return (
    <Bar
      data={chartData}
      width={30}
      height={10}
      options={{
        layout: {
          padding: {
            left: 300,
            right: 300,
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
      }}
    />
  );
};

export default Chart;
