import { LOGIN_TOKEN } from "../actions/action-types";

const loginToken = (state = null, action) => {
  switch (action.type) {
    case LOGIN_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default loginToken;
