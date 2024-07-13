import { GET_KELAS, GET_KELAS_DETAIL, GET_MAHASISWA } from "../action-types";

let initialState = {
  kelasMhs: [],
  kelasDetail: {},
  mahasiswa: [],
};

const mahasiswaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KELAS:
      return { ...state, kelasMhs: action.payload };

    case GET_KELAS_DETAIL:
      return { ...state, kelasDetail: action.payload };

    case GET_MAHASISWA:
      return { ...state, mahasiswa: action.payload };

    default:
      return state;
  }
};

export default mahasiswaReducer;
