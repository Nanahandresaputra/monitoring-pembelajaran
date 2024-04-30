import { Menu } from "antd";
import React from "react";
import { FaUser } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { MdDashboardCustomize } from "react-icons/md";
import logo from "../../assets/logo.svg";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <MdDashboardCustomize />),
  getItem("User", "sub1", <FaUser />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <HiDocumentText />, [
    (getItem("Team 1", "6"), getItem("Team 2", "8")),
  ]),
];
const MenuSider = ({ collapsed }) => {
  console.log(collapsed);
  return (
    <section>
      <div className="flex items-center my-[4vh] mx-2">
        <img
          src={logo}
          alt="logo"
          className="w-[4vw] object-contain bg-white rounded-xl"
        />
        <h3
          className={
            collapsed ? "hidden" : "text-xl ms-3 font-semibold text-white"
          }
        >
          INI LOGO
        </h3>
      </div>
      <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
    </section>
  );
};

export default MenuSider;
