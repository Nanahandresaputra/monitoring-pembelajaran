import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { loader } from "../../assets";

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

const BarChart = ({ value, loading }) => {
  const data = {
    labels: value?.map((data) => data.fakultas),
    datasets: [
      {
        label: "Mahasiswa",
        data: value?.map((data) => data.total),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(239 68 68)",
      },
    ],
  };

  return (
    <section className="w-full h-[50vh] flex flex-col bg-white space-y-8 rounded-md drop-shadow-lg shadow-lg items-center pt-[3.5vh]">
      <h3 className="text-xl font-semibold">Bagan Mahasiswa</h3>
      {loading ? (
        <img src={loader} alt="loader" className="w-16" />
      ) : (
        <div className="w-11/12 h-[35vh]">
          <Bar options={options} data={data} />
        </div>
      )}
    </section>
  );
};

export default BarChart;
