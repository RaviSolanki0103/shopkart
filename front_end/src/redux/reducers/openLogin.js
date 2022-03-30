import { OPEN_LOGIN } from "../actions/action-types";

const openLogin = (state = false, action) => {
  switch (action.type) {
    case OPEN_LOGIN:
      return action.payload;
    default:
      return state;
  }
};

export default openLogin;
