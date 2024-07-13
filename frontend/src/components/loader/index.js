import React from "react";
import { loader } from "../../assets";

const Loader = ({ children, height, width, loading, position = "absolute" }) => {
  return loading ? (
    <section className="rounded-lg">
      <div className={`${height} ${width} absolute z-50 bg-black bg-opacity-65 flex justify-center items-center space-x-4`}>
        <img src={loader} alt="loader" className="h-24" />
        <p className="text-white drop-shadow-xl text-xl font-medium animate-bounce">Loading...</p>
      </div>
      {children}
    </section>
  ) : (
    children
  );
};

export default Loader;
