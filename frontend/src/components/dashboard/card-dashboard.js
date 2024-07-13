import React from "react";

const CardDashboard = ({ icon, title, value }) => {
  return (
    <section className="rounded-md px-[0.8rem] h-[17vh] flex flex-col justify-center w-ful drop-shadow-lg shadow-lg bg-white space-y-4 border-r-8 border-red-500">
      {icon}
      <div>
        <p className="text-lg font-medium">Data {title}</p>
        <p className="text-3xl text-red-500 font-bold">{value}</p>
      </div>
    </section>
  );
};

export default CardDashboard;
