import { jwtDecode } from "jwt-decode";

export const tokenDecode = (token) => {
  if (token) {
    const token = localStorage.token;
    const decoded = jwtDecode(token);
    return decoded;
  } else return null;
};
