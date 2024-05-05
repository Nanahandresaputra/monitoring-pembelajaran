import { Menu } from "antd";
import React from "react";
import { FaUser } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { MdDashboardCustomize } from "react-icons/md";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const MenuSider = ({ collapsed }) => {
  const navigate = useNavigate();

  function getItem(label, key, icon, children, isLink) {
    let item = {
      label,
      key,
      icon,
      children,
    };
    if (!children) {
      item["onClick"] = () => {
        navigate(key === "Dashboard" ? "" : key);
        // dispatch(setCurrentMenu(label));
      };
    }

    return item;
  }
  const items = [
    getItem("Dashboard", "Dashboard", <MdDashboardCustomize />),
    getItem("Data 1", "Data-1", <MdDashboardCustomize />),
    getItem("Data M", "Data-M", <HiDocumentText />, [getItem("List Data", "List-Data"), getItem("Data M2 ", "Data-M2")]),
    getItem("Data AK", "Data-AK", <FaUser />, [getItem("Data Ak1", "Data-Ak1"), getItem("Data Ak2", "Data-Ak2"), getItem("Data Ak3", "Data-Ak3"), getItem("Data Ak4", "Data-Ak4")]),
    getItem("Admin", "Admin", <MdDashboardCustomize />),
  ];
  //<p></p>
  return (
    <section>
      <div className="flex items-center my-[4vh] mx-2">
        <img src={logo} alt="logo" className="w-[4vw] object-contain bg-white rounded-xl" />
        <h3 className={collapsed ? "hidden" : "text-xl ms-3 font-semibold"}>INI LOGO</h3>
      </div>
      <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
    </section>
  );
};

export default MenuSider;
