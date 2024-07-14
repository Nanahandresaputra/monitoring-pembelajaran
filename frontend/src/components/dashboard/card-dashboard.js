import React from "react";
import { loader } from "../../assets";

const CardDashboard = ({ icon, title, value, loading }) => {
  return (
    <section className="rounded-md px-[0.8rem] h-[17vh] flex flex-col justify-center w-ful drop-shadow-lg shadow-lg bg-white space-y-4 border-r-8 border-red-500">
      <img src={loader} className={loading ? "w-14" : "hidden"} alt="loader" />

      <div className={loading ? "hidden" : "block"}>{icon}</div>
      <div className={loading ? "hidden" : "block"}>
        <p className="text-lg font-medium">Data {title}</p>
        <p className="text-3xl text-red-500 font-bold">{value}</p>
      </div>
    </section>
  );
};

export default CardDashboard;
