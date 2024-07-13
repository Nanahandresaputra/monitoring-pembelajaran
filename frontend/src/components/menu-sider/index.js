import { Avatar, Badge, Button, Dropdown, Form, Menu, Modal } from "antd";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { MdDashboardCustomize } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

import FormAdmin from "../admin/form-admin";
import { logoUmc } from "../../assets";
import { useDispatch } from "react-redux";
import { logoutAuth } from "../../store/action/auth";
import { openNotifications } from "../../utils/notification";
import { unmaskPwd } from "../../utils/encrypt";
import { getAdminAction, updateAdminAction } from "../../store/action/user-admin";

const MenuSider = ({ collapsed, selection, userData }) => {
  let userProfile = JSON.parse(localStorage.getItem("user")) || userData;

  const navigate = useNavigate();
  function getItem(label, key, icon, children) {
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
    getItem("Dosen", "Dosen", <LiaChalkboardTeacherSolid />),
    getItem("Mahasiswa", "Mahasiswa", <HiDocumentText />, [getItem("List Mahasiswa", "List-Mahasiswa"), getItem("Kelas ", "Kelas")]),
    getItem("Akademik", "Akademik", <FaUser />, [getItem("Jadwal", "Jadwal"), getItem("Fakultas", "Fakultas"), getItem("Program Studi", "Program-Studi"), getItem("Mata Kuliah", "Mata-Kuliah")]),
    getItem("Admin", "Admin", <MdDashboardCustomize />),
  ];

  const [form] = Form.useForm();

  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);

  const handleUpdate = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        dispatch(updateAdminAction(res, userData.id))
          .then((result) => {
            localStorage.setItem("user", JSON.stringify({ id: userData.id, admin: res.nama }));
            openNotifications(result.errorCode, result.message);
            setIsModalOpenUpdate(false);
            form.resetFields();
          })
          .catch((err) => openNotifications(err.errorCode, err.message));
      })
      .catch((err) => console.log(err));
  };

  const handleCancelUpdate = () => {
    setIsModalOpenUpdate(false);
    form.resetFields();
  };

  const onOpenUpdate = () => {
    dispatch(getAdminAction())
      .then((res) => {
        let initialData = res.users?.find((data) => data.id === userData.id);
        form.setFieldsValue({ ...initialData, password: unmaskPwd(initialData.password) });
      })
      .catch((err) => openNotifications(err.errorCode, err.message));

    setIsModalOpenUpdate(true);
  };

  const dropdownItems = [
    {
      key: 1,
      title: "",
      label: (
        <p className="cursor-pointer text-sm flex items-center space-x-2">
          <span>{userProfile.admin}</span>
          {/* <FaPenToSquare className="text-gray-400" onClick={onOpenUpdate} /> */}
        </p>
      ),
    },
    {
      key: 2,
      title: "",
      label: (
        <Button type="primary" className=" w-full">
          Logout
        </Button>
      ),
    },
  ];

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAuth())
      .then((result) => {
        localStorage.clear();
        navigate("/login");
      })
      .catch((err) => openNotifications(err.errorCode, err.message));
  };

  return (
    <section className="h-full flex flex-col relative">
      <Modal title="Add data 1" open={isModalOpenUpdate} onOk={handleUpdate} onCancel={handleCancelUpdate}>
        <FormAdmin form={form} />
      </Modal>
      <div className="flex flex-col space-y-4 justify-center items-center my-[4vh] mx-2">
        <img src={logoUmc} alt="logo" className="w-[5vw] object-contain bg-white rounded-xl" />
        <h3 className={collapsed ? "hidden" : "font-bold text-center"}>Universitas Muhammadiyah Cirebon</h3>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <Menu defaultSelectedKeys={["Dashboard"]} selectedKeys={[selection]} mode="inline" items={items} />

        {!collapsed ? (
          <div className="w-full pb-8 flex flex-col space-y-3 items-center border-b border-gray-300">
            <Badge color="green" dot offset={[-2, 8]} size="large">
              <Avatar size="large" className="bg-red-300 text-red-500 cursor-pointer" onClick={onOpenUpdate}>
                {`${userProfile.admin}`.charAt(0).toUpperCase()}
              </Avatar>
            </Badge>
            <p className="flex items-center space-x-1 font-semibold">
              <span>{userProfile.admin}</span>
              {/* <FaPenToSquare className="text-gray-400" onClick={onOpenUpdate} /> */}
            </p>

            <Button type="primary" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex pb-8 justify-center w-full border-b border-gray-300">
            <Dropdown
              className="cursor-pointer"
              menu={{
                items: dropdownItems,
              }}
            >
              <Badge color="green" dot offset={[-2, 8]} size="large">
                <Avatar size="large" className="bg-red-300 text-red-500 cursor-pointer" onClick={onOpenUpdate}>
                  {`${userProfile.admin}`.charAt(0).toUpperCase()}
                </Avatar>
              </Badge>
            </Dropdown>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSider;
