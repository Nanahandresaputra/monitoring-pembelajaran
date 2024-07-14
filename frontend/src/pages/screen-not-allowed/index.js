import React from "react";
import { screen } from "../../assets";

const ScreenNotAllowed = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center bg-red-600">
      <p className="text-white text-[1rem] font-semibold text-center">Layar device tidak didukung, silakan buka aplikasi di ukuran desktop seperti Laptop atau PC</p>
      <img src={screen} alt="not found" className="h-[40vh]" />
    </section>
  );
};

export default ScreenNotAllowed;
