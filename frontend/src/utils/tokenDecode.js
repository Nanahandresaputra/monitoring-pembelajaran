import { jwtDecode } from "jwt-decode";

// export const tokenDecode = (token) => {
//   if (token) {
//     const token = localStorage.token;
//     const decoded = jwtDecode(token);
//     return decoded;
//   } else return null;
// };

import { useSelector } from "react-redux";

const useTokenDecode = () => {
  const { token } = useSelector((state) => state.auth);

  if (token) {
    let decode = jwtDecode(token);
    return decode;
  } else {
    return null;
  }
};

export default useTokenDecode;
