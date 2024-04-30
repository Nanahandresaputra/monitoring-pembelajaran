import React, { useState } from "react";
import { Layout } from "antd";
import HeaderNav from "../../components/header-nav";
import MenuSider from "../../components/menu-sider";
import { Outlet } from "react-router-dom";
const { Content, Sider } = Layout;

const OutletPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      className="bg-red-500"
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <MenuSider collapsed={collapsed} />
      </Sider>
      <Layout>
        <Content className="m-5 space-y-4">
          <HeaderNav />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default OutletPage;
