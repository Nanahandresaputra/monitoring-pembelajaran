import { GET_TOKEN } from "../action-types";

let initialState = {
  token: localStorage.token ? localStorage.token : "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return { ...state, token: action.payload };

    default:
      return state;
  }
};

export default authReducer;
