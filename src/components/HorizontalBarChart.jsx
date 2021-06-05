import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["HTML", "CSS", "JAVASCRIPT", "NODEJS", "EXPRESS", "REACTJS"],
  datasets: [
    {
      label: "# of Level",
      data: [85, 70, 90, 60, 60, 60],
      backgroundColor: [
        "rgba(252, 94, 3, 0.5)",
        "rgba(3, 44, 252, 0.5)",
        "rgba(255, 186, 38, 0.5)",
        "rgba(125, 191, 11, 0.5)",
        "rgba(217, 219, 213, 0.5)",
        "rgba(74,213,255,0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "y",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 20,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Skills",
    },
  },
};

const HorizontalBarChart = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default HorizontalBarChart;
