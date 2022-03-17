import { OPEN_LOGIN } from "./action-types";

export const openLogin = (data) => {
  return {
    type: OPEN_LOGIN,
    payload: data,
  };
};
