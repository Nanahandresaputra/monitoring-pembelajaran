import React from "react";
import { loader } from "../../assets";

const CardContainer = ({ children, loading }) => {
  return (
    <section className="p-[1.5rem] space-y-7 h-[88vh] w-full bg-white rounded-md drop-shadow-md shadow-lg overflow-auto">
      {loading ? (
        <div className="w-full flex justify-center items-center">
          <img src={loader} alt="loader" className="w-16" />
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default CardContainer;
