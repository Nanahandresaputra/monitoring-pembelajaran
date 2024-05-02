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
    getItem("Dosen", "Dosen", <MdDashboardCustomize />),
    getItem("Mahasiswa", "Mahasiswa", <HiDocumentText />, [getItem("List Mahasiswa", "List Mahasiswa"), getItem("Kelas", "Kelas")]),
    getItem("Akademik", "Akademik", <FaUser />, [getItem("Fakultas", "Fakultas"), getItem("Program Studi", "Program Studi"), getItem("Mata Kuliah", "Mata Kuliah"), getItem("Jadwal", "Jadwal")]),
    getItem("Admin", "Admin", <MdDashboardCustomize />),
  ];
  //<p></p>
  //dashboard, dosen[List dosen, jadwal], mahasiswa[list mahasiswa, kelas], akademik[fakultas, program studi, mata kuliah, jadwal], admin[admin]
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
