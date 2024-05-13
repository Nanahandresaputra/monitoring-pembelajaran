import React from "react";
import { notFound } from "../../assets";

const PageNotFound = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center bg-red-600">
      <p className="text-white text-[2rem] font-bold">Halaman tidak ditemukan</p>
      <img src={notFound} alt="not found" className="h-[60vh]" />
    </section>
  );
};

export default PageNotFound;
