import { LOGIN_STATUS } from "../actions/action-types";


const loginStatus = (state = false, action) => {
  switch (action.type) {
    case LOGIN_STATUS:

      return action.payload;
    default:

      return state;
  }
};

export default loginStatus;
