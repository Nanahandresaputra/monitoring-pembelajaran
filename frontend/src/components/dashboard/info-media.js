import React from "react";
import { Carousel } from "antd";
import { img1, img2 } from "../../assets";

const InfoMedia = () => {
  return (
    <section className="h-[50vh] rounded-md bg-white items-center space-y-3 pt-[3vh] drop-shadow-md shadow-lg">
      <h3 className="text-xl font-semibold text-center">Bagan Informasi</h3>
      <Carousel speed={2000} autoplay className="rounded-md mx-3 mb-5">
        <img src={img1} alt="img1" className="rounded-md h-[40vh]" />
        <img src={img2} alt="img2" className="rounded-md h-[40vh]" />
      </Carousel>
    </section>
  );
};

export default InfoMedia;
