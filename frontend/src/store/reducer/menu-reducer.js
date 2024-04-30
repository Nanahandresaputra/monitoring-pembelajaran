import { MENUS_SIDER } from "../action-types";

let initialState = {
  menuSider: [],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENUS_SIDER:
      return { ...state, action: action.payload };

    default:
      return state;
  }
};

export default menuReducer;
