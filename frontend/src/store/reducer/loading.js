import { SET_LOADING, SET_LOADING_DETAIL } from "../action-types";

let initialState = {
  loading: false,
  loadingDetail: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_LOADING_DETAIL:
      return { ...state, loadingDetail: action.payload };

    default:
      return state;
  }
};

export default loadingReducer;
