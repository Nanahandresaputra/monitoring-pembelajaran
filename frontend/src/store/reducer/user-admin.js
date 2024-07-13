import { GET_USER_ADMIN } from "../action-types";

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ADMIN:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default usersReducer;
