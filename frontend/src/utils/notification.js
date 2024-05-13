import { notification } from "antd";

const message = (msg) => {
  if (msg === "data not foun") return "data tidak ditemukan";
  else if (msg === "invalid token" || msg === "token expired") return "sesi anda telah berakhir silakan login kembali";
  else if (msg === "invalid login credentials") return "username atau password salah";
  else if (msg === "user already loged in") return "user telah login sebelumnya";
  else return msg;
};

export const openNotifications = (errCode, descript) => {
  notification[errCode !== 1000 ? "error" : "success"]({
    message: message(descript),
    placement: "top",
  });
};
