import axios from "axios";
import { GET_DASHBOARD } from "../action-types";
import { config } from "../../config";
import { setLoading } from "./auth";

const getDashboard = (payload) => {
  return {
    type: GET_DASHBOARD,
    payload,
  };
};

export const getDashboardAction = () => {
  return (dispatch, getState) => {
    let token = getState().auth.token;

    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `${config.baseUrl}/dashboard?accessToken=${token}`,
      })
        .then(({ data }) => {
          if (data.errorCode === 1000) {
            dispatch(getDashboard(data.data));
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
