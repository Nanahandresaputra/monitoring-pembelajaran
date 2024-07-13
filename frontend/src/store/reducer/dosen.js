import { GET_DOSEN, GET_DOSEN_DETAIL } from "../action-types";

let initialState = {
  dosen: [],
  dosenDetail: {},
};

const dosenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOSEN:
      return { ...state, dosen: action.payload };

    case GET_DOSEN_DETAIL:
      return { ...state, dosenDetail: action.payload };

    default:
      return state;
  }
};

export default dosenReducer;
