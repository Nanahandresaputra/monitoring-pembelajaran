import axios from "axios";
import { GET_KELAS, GET_KELAS_DETAIL, GET_MAHASISWA } from "../action-types";
import { setLoading, setLoadingDetail, setLoadingPost } from "./auth";
import { config } from "../../config";

const setKelas = (payload) => {
  return {
    type: GET_KELAS,
    payload,
  };
};

const setKelasDetail = (payload) => {
  return {
    type: GET_KELAS_DETAIL,
    payload,
  };
};

const setMahasiswa = (payload) => {
  return {
    type: GET_MAHASISWA,
    payload,
  };
};

// ======================= ACTION KELAS =================

export const getKelasAction = () => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `${config.baseUrl}/kelas?accessToken=${token}`,
      })
        .then(({ data }) => {
          if (data.errorCode === 1000) {
            dispatch(setKelas(data.data));
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

export const getKelasDetailAction = (id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingDetail(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `${config.baseUrl}/kelas/${id}?accessToken=${token}`,
      })
        .then(({ data }) => {
          if (data.errorCode === 1000) {
            dispatch(setKelasDetail(data.data));
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

export const addKelasAction = (payload) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `${config.baseUrl}/kelas?accessToken=${token}`,
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

export const updateKelasAction = (payload, id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        url: `${config.baseUrl}/kelas/${id}?accessToken=${token}`,
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

export const deleteKelasAction = (id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: `${config.baseUrl}/kelas/${id}?accessToken=${token}`,
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

// ======================= ACTION MAHASISWA =================

export const getMahasiswaAction = () => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `${config.baseUrl}/mahasiswa?accessToken=${token}`,
      })
        .then(({ data }) => {
          if (data.errorCode === 1000) {
            dispatch(setMahasiswa(data.data));
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

export const addMahasiswaAction = (payload) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `${config.baseUrl}/mahasiswa?accessToken=${token}`,
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

export const updateMahasiswasAction = (payload, id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        url: `${config.baseUrl}/mahasiswa/${id}?accessToken=${token}`,
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

export const deleteMahasiswaAction = (id) => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoadingPost(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: `${config.baseUrl}/mahasiswa/${id}?accessToken=${token}`,
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
