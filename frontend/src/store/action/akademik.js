import axios from "axios";
import { config } from "../../config";
import { GET_FAKULTAS, GET_JADWAL, GET_MATKUL, GET_PRODI } from "../action-types";
import { setLoading, setLoadingPost } from "./auth";

const getFakultas = (payload) => {
  return {
    type: GET_FAKULTAS,
    payload,
  };
};

const setMatkul = (payload) => {
  return {
    type: GET_MATKUL,
    payload,
  };
};

const setProdi = (payload) => {
  return {
    type: GET_PRODI,
    payload,
  };
};

const setJadwal = (payload) => {
  return {
    type: GET_JADWAL,
    payload,
  };
};

// ======================= ACTION FAKULTAS =================

export const getFakultasAction = () => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `${config.baseUrl}/fakultas?accessToken=${token}`,
      })
        .then(({ data }) => {
          if (data.errorCode === 1000) {
            dispatch(getFakultas(data.data));
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

export const addFakultasAction = (payload) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `${config.baseUrl}/fakultas?accessToken=${token}`,
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

export const updateFakultasAction = (payload, id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        url: `${config.baseUrl}/fakultas/${id}?accessToken=${token}`,
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

export const deleteFakultasAction = (id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: `${config.baseUrl}/fakultas/${id}?accessToken=${token}`,
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

// ======================= ACTION MATKUL =================

export const getMatkulAction = () => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `${config.baseUrl}/matkul?accessToken=${token}`,
      })
        .then(({ data }) => {
          if (data.errorCode === 1000) {
            dispatch(setMatkul(data.data));
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

export const addMatkulAction = (payload) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `${config.baseUrl}/matkul?accessToken=${token}`,
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

export const updateMatkulAction = (payload, id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        url: `${config.baseUrl}/matkul/${id}?accessToken=${token}`,
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

export const deleteMatkulAction = (id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: `${config.baseUrl}/matkul/${id}?accessToken=${token}`,
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

// ======================= ACTION PRODI =================

export const getProdiAction = () => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `${config.baseUrl}/prodi?accessToken=${token}`,
      })
        .then(({ data }) => {
          if (data.errorCode === 1000) {
            dispatch(setProdi(data.data));
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

export const addProdiAction = (payload) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `${config.baseUrl}/prodi?accessToken=${token}`,
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

export const updateProdiAction = (payload, id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        url: `${config.baseUrl}/prodi/${id}?accessToken=${token}`,
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

export const deleteProdiAction = (id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: `${config.baseUrl}/prodi/${id}?accessToken=${token}`,
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

// ======================= ACTION JADWAL =================

export const getJadwalsAction = () => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `${config.baseUrl}/jadwalDosen?accessToken=${token}`,
      })
        .then(({ data }) => {
          if (data.errorCode === 1000) {
            dispatch(setJadwal(data.data));
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

export const addJadwalsAction = (payload) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `${config.baseUrl}/jadwalDosen?accessToken=${token}`,
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

export const updateJadwalsAction = (payload, id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        url: `${config.baseUrl}/jadwalDosen/${id}?accessToken=${token}`,
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

export const deleteJadwalsAction = (id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: `${config.baseUrl}/jadwalDosen/${id}?accessToken=${token}`,
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
