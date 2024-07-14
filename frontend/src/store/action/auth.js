import axios from "axios";
import { GET_TOKEN, SET_LOADING, SET_LOADING_DETAIL, SET_LOADING_POST } from "../action-types";
import { config } from "../../config";

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};

export const setLoadingDetail = (payload) => {
  return {
    type: SET_LOADING_DETAIL,
    payload,
  };
};
export const setLoadingPost = (payload) => {
  return {
    type: SET_LOADING_POST,
    payload,
  };
};

const getToken = (payload) => {
  return {
    type: GET_TOKEN,
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
            dispatch(getToken(data.token));
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

export const logoutAuth = () => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        url: `${config.baseUrl}/logout?accessToken=${token}`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(({ data }) => {
          if (data.errorCode === 1000) {
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
        });
    });
  };
};
