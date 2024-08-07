import React from "react";
import { ilustratorImg, logoUmc } from "../../assets";
import { Button, Form, Input } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAuth } from "../../store/action/auth";
import { openNotifications } from "../../utils/notification";
import ScreenNotAllowed from "../screen-not-allowed";

const Login = () => {
  const { loading } = useSelector((state) => state.loadingData);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.token;

  const submitAuth = () => {
    form.submit();
    form
      .validateFields()
      .then((res) =>
        dispatch(loginAuth(res))
          .then(() => navigate("/"))
          .catch((err) => openNotifications(err.errorCode, err.message))
      )
      .catch((err) => console.log(err));
  };

  return token ? (
    <Navigate to="/" />
  ) : (
    <section>
      <div className="lg:hidden">
        <ScreenNotAllowed />
      </div>

      <div className="lg:grid w-full h-screen grid-cols-2 hidden">
        <div className="w-full h-full bg-red-600 col-span-1 flex flex-col space-y-7 justify-center items-center">
          <img src={ilustratorImg} alt="ilustrator" className="w-[28rem] drop-shadow-lg" />
          <div className="w-8/12 text-center">
            <p className="font-medium text-white text-[1.5rem]">Aplikasi Monitoring Pembelajaran</p>
            <p className="text-white text-[1rem]">Selamat datang di aplikasi monitoring pembelajaran, silakan login untuk melanjutkan</p>
          </div>
        </div>
        <div className="w-full h-full bg-red-50 col-span-1 flex flex-col justify-center items-center space-y-12">
          <div className="flex items-center space-x-7">
            <img src={logoUmc} alt="logo" className="h-[7vh]" />
            <p className="text-2xl w-9/12 font-semibold text-red-500">Universitas Muhammadiyah Cirebon</p>
          </div>
          <Form layout="vertical" className="w-6/12" form={form} autoComplete="off">
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
              <Input size="large" autoComplete="off" placeholder="masukan username" />
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
              <Input.Password size="large" autoComplete="off" placeholder="masukan password" />
            </Form.Item>

            <Form.Item className="mt-12">
              <Button type="primary" htmlType="submit" className="w-full" size="large" onClick={submitAuth} loading={loading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Link to="https://github.com/Nanahandresaputra" target="_blank" className="italic text-sm text-center w-full fixed bottom-4 cursor-pointer hover:text-red-500">
            &copy; powered by Nana handre saputra
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
