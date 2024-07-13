import axios from "axios";
import { GET_USER_ADMIN } from "../action-types";
import { setLoading, setLoadingPost } from "./auth";
import { config } from "../../config";

const setUserAdmin = (payload) => {
  return {
    type: GET_USER_ADMIN,
    payload,
  };
};

export const getAdminAction = () => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `${config.baseUrl}/users?accessToken=${token}`,
      })
        .then(({ data }) => {
          if (data.errorCode === 1000) {
            dispatch(setUserAdmin(data.users));
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

export const addAdminAction = (payload) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `${config.baseUrl}/users?accessToken=${token}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
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
        })
        .finally(() => dispatch(setLoadingPost(false)));
    });
  };
};

export const updateAdminAction = (payload, id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        url: `${config.baseUrl}/users/${id}?accessToken=${token}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
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
        })
        .finally(() => dispatch(setLoadingPost(false)));
    });
  };
};

export const deleteAdminAction = (id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: `${config.baseUrl}/users/${id}?accessToken=${token}`,
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
        })
        .finally(() => dispatch(setLoadingPost(false)));
    });
  };
};
