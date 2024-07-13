import axios from "axios";
import { setLoading, setLoadingDetail, setLoadingPost } from "./auth";
import { config } from "../../config";
import { GET_DOSEN, GET_DOSEN_DETAIL } from "../action-types";

const setDosen = (payload) => {
  return {
    type: GET_DOSEN,
    payload,
  };
};

const setDosenDetail = (payload) => {
  return {
    type: GET_DOSEN_DETAIL,
    payload,
  };
};

// ======================= ACTION DOSEN =================

export const getDosenAction = () => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `${config.baseUrl}/dosen?accessToken=${token}`,
      })
        .then(({ data }) => {
          if (data.errorCode === 1000) {
            dispatch(setDosen(data.data));
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

export const getDosenDetailAction = (id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingDetail(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `${config.baseUrl}/dosen/${id}?accessToken=${token}`,
      })
        .then(({ data }) => {
          if (data.errorCode === 1000) {
            dispatch(setDosenDetail(data.data));
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
        .finally(() => dispatch(setLoadingDetail(false)));
    });
  };
};

export const addDosenAction = (payload) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `${config.baseUrl}/dosen?accessToken=${token}`,
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

export const updateDosenAction = (payload, id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        url: `${config.baseUrl}/dosen/${id}?accessToken=${token}`,
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

export const deleteDosenAction = (id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: `${config.baseUrl}/dosen/${id}?accessToken=${token}`,
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

// =========================================================
