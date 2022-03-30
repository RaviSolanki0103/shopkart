import { OPEN_LOGIN, LOGIN_TOKEN, LOGIN_STATUS } from "./action-types";

export const openLogin = (data) => {
  return {
    type: OPEN_LOGIN,
    payload: data,
  };
};

export const loginToken = (data) => {
  return {
    type: LOGIN_TOKEN,
    payload: data,
  }
}

export const loginStatus = (data) => {
  return {
    type: LOGIN_STATUS,
    payload: data,
  }
}
