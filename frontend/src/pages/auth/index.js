import React from "react";
import { ilustratorImg, logo } from "../../assets";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="grid w-full h-screen grid-cols-2">
      <div className="w-full h-full bg-red-600 col-span-1 flex flex-col space-y-7 justify-center items-center">
        <div className="fixed top-5 left-5 flex items-center space-x-2">
          <img src={logo} alt="logo" />
          <p className="text-white font-semibold text-[1rem]">
            <span>Logo Montenero</span>
            <br /> <span>California</span>
          </p>
        </div>
        <img src={ilustratorImg} alt="ilustrator" className="w-[28rem] drop-shadow-lg" />
        <div className="w-8/12 text-center">
          <p className="font-medium text-white text-[1.5rem]">Aplikasi Monitoring Pembelajaran</p>
          <p className="text-white text-[1rem]">Selamat datang di aplikasi monitoring pembelajaran, silakan login untuk melanjutkan</p>
        </div>
      </div>
      <div className="w-full h-full bg-red-50 col-span-1 flex flex-col justify-center items-center space-y-12">
        <p className="text-[2rem] font-bold">Login</p>
        <Form layout="vertical" className="w-6/12">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item className="mt-12">
            <Button type="primary" htmlType="submit" className="w-full" size="large">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Link to="https://github.com/Nanahandresaputra" target="_blank" className="italic text-sm text-center w-full fixed bottom-4 cursor-pointer hover:text-red-500">
          &copy; powered by Nana handre saputra
        </Link>
      </div>
    </section>
  );
};

export default Login;
