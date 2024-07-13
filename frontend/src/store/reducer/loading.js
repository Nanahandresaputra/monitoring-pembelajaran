import { SET_LOADING, SET_LOADING_DETAIL, SET_LOADING_POST } from "../action-types";

let initialState = {
  loading: false,
  loadingDetail: false,
  loadingPost: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_LOADING_DETAIL:
      return { ...state, loadingDetail: action.payload };
    case SET_LOADING_POST:
      return { ...state, loadingPost: action.payload };

    default:
      return state;
  }
};

export default loadingReducer;
