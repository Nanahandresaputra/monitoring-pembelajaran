// import { Breadcrumb } from "antd";
import React from "react";

const HeaderNav = ({ title }) => {
  return (
    <section className="flex justify-between items-center">
      <h1 className="text-[2rem] font-bold">{title}</h1>
      {/* <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: "An Application",
          },
        ]}
      /> */}
    </section>
  );
};

export default HeaderNav;
