import { GET_DASHBOARD } from "../action-types";

let initialState = {
  dashboardData: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD:
      return { ...state, dashboardData: action.payload };

    default:
      return state;
  }
};

export default dashboardReducer;
