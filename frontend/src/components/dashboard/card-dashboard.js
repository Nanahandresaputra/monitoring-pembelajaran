import React from "react";
import { FaUsersBetweenLines } from "react-icons/fa6";

const CardDashboard = () => {
  return (
    <section className="rounded-md px-[0.8rem] h-[17vh] flex flex-col justify-center w-ful drop-shadow-lg shadow-lg bg-white space-y-4">
      <FaUsersBetweenLines className="text-[2.5rem] p-2 bg-red-500 text-white rounded-md" />
      <div>
        <p className="text-lg font-medium">Data satu</p>
        <p className="text-3xl text-red-500 font-bold">200</p>
      </div>
    </section>
  );
};

export default CardDashboard;
