import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  maintainAspectRatio: false,
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  //   responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Horizontal Bar Chart",
    // },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: new Array(12).fill().map((_, index) => Math.floor(Math.random(index) * 900)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(239 68 68)",
    },
  ],
};

const BarChart = () => {
  return (
    <section className="w-full h-[50vh] flex flex-col bg-white space-y-8 rounded-md drop-shadow-lg shadow-lg items-center pt-[3.5vh]">
      <h3 className="text-xl font-semibold">Bagan Mahasiswa</h3>
      <div className="w-11/12 h-[35vh]">
        <Bar options={options} data={data} />
      </div>
    </section>
  );
};

export default BarChart;
