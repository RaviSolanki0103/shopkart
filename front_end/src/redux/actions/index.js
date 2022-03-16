import { OPEN_LOGIN } from "./action-types";

export const openLogin = (data) => {
  console.log(data, "DATA");
  return {
    type: OPEN_LOGIN,
    payload: data,
  };
};
