import { OPEN_LOGIN } from "../actions/action-types";

const openLogin = (state = false, action) => {
  switch (action.type) {
    case OPEN_LOGIN:
      const data = action.payload
      return data;
    default:
      return state;
  }
};

export default openLogin;
