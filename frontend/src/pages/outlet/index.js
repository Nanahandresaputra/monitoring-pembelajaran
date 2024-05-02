import React, { useState } from "react";
import { Layout } from "antd";
import HeaderNav from "../../components/header-nav";
import MenuSider from "../../components/menu-sider";
import { Outlet, useLocation } from "react-router-dom";
const { Content, Sider } = Layout;

const OutletPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  let setHeaderName = `${pathname}`.replace("/", "");

  return (
    <Layout
      className="bg-red-500"
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <MenuSider collapsed={collapsed} />
      </Sider>
      <Layout>
        <Content className="m-5 space-y-4">
          <HeaderNav title={setHeaderName ? setHeaderName : "Dashboard"} />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default OutletPage;
