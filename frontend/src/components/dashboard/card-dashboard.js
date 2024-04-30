import React from "react";
import { FaUsersBetweenLines } from "react-icons/fa6";

const CardDashboard = () => {
  return (
    <section className="p-[0.8rem] h-[10vh] w-[15rem] drop-shadow-lg shadow-lg bg-red-700 border-2 border-white flex space-x-5 items-center">
      <FaUsersBetweenLines className="text-white text-[4rem]" />
      <div className="flex-1 text-white space-y-1">
        <p className="text-xl font-semibold">Data satu</p>
        <p className="text-medium">total : 20</p>
      </div>
    </section>
  );
};

export default CardDashboard;
