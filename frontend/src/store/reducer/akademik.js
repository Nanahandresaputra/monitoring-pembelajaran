import { GET_FAKULTAS, GET_JADWAL, GET_MATKUL, GET_PRODI } from "../action-types";

let initialState = {
  fakultas: [],
  matkul: [],
  prodi: [],
  jadwal: [],
};

const akademikReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAKULTAS:
      return { ...state, fakultas: action.payload };

    case GET_MATKUL:
      return { ...state, matkul: action.payload };

    case GET_PRODI:
      return { ...state, prodi: action.payload };

    case GET_JADWAL:
      return { ...state, jadwal: action.payload };

    default:
      return state;
  }
};

export default akademikReducer;
