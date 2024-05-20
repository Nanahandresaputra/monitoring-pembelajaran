import { Avatar, Badge, Button, Dropdown, Form, Menu, Modal } from "antd";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { MdDashboardCustomize } from "react-icons/md";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { FaPenToSquare } from "react-icons/fa6";
import FormAdmin from "../admin/form-admin";

const MenuSider = ({ collapsed, selection }) => {
  const navigate = useNavigate();

  console.log(selection);

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
    getItem("Data 1", "Data-1", <MdDashboardCustomize />),
    getItem("Data M", "Data-M", <HiDocumentText />, [
      getItem("List Data", "List-Data"),
      getItem("Data M2 ", "Data-M2"),
    ]),
    getItem("Data AK", "Data-AK", <FaUser />, [
      getItem("Data Ak1", "Data-Ak1"),
      getItem("Data Ak2", "Data-Ak2"),
      getItem("Data Ak3", "Data-Ak3"),
      getItem("Data Ak4", "Data-Ak4"),
    ]),
    getItem("Admin", "Admin", <MdDashboardCustomize />),
  ];

  const [form] = Form.useForm();

  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);

  const handleUpdate = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        console.log(res);
        setIsModalOpenUpdate(false);
        form.resetFields();
      })
      .catch((err) => console.log(err));
  };

  const handleCancelUpdate = () => {
    setIsModalOpenUpdate(false);
    form.resetFields();
  };

  const onOpenUpdate = () => {
    setIsModalOpenUpdate(true);
    form.setFieldsValue({ status: 0 });
  };

  const dropdownItems = [
    {
      key: 1,
      title: "",
      label: (
        <p className="cursor-pointer text-sm flex items-center space-x-2">
          <span>Admin hendro sutrisno</span>
          <FaPenToSquare className="text-gray-400" onClick={onOpenUpdate} />
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
  //<p></p>
  return (
    <section className="h-full flex flex-col relative">
      <Modal
        title="Add data 1"
        open={isModalOpenUpdate}
        onOk={handleUpdate}
        onCancel={handleCancelUpdate}
      >
        <FormAdmin form={form} />
      </Modal>
      <div className="flex items-center my-[4vh] mx-2">
        <img
          src={logo}
          alt="logo"
          className="w-[4vw] object-contain bg-white rounded-xl"
        />
        <h3 className={collapsed ? "hidden" : "text-xl ms-3 font-semibold"}>
          INI LOGO
        </h3>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <Menu
          defaultSelectedKeys={["Dashboard"]}
          selectedKeys={[selection]}
          mode="inline"
          items={items}
        />

        {!collapsed ? (
          <div className="w-full pb-8 flex flex-col space-y-3 items-center border-b border-gray-300">
            <Badge color="green" dot offset={[-2, 8]} size="large">
              <Avatar size="large" className="bg-red-300 text-red-500">
                A
              </Avatar>
            </Badge>
            <p className="cursor-pointer flex items-center space-x-1 font-medium">
              <span>Admin hendro sutrisno</span>
              <FaPenToSquare className="text-gray-400" onClick={onOpenUpdate} />
            </p>

            <Button type="primary" size="small">
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
                <Avatar size="large" className="bg-red-300 text-red-500">
                  A
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
