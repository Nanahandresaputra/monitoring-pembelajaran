import axios from "axios";
import { SET_LOADING } from "../action-types";
import { config } from "../../config";

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};

export const loginAuth = (payload) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `${config.baseUrl}/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      })
        .then(({ data }) => {
          if (data.errorCode === 1000) {
            localStorage.setItem("token", data.token);
            resolve(data);
          } else {
            reject(data);
          }
        })
        .catch((error) => {
          if (error.name && error.name === "AxiosError") {
            reject({ errorCode: error.code, errorMssg: error.message });
          } else {
            reject(error);
          }
        })
        .finally(() => dispatch(setLoading(false)));
    });
  };
};
