import { OPEN_LOGIN } from "../actions/action-types";

const openLogin = (state = false, action) => {
<<<<<<< HEAD
  // console.log(action, "Action");
=======
>>>>>>> 00327c722d13b08675759e2fe377404116d1b49a
  switch (action.type) {
    case OPEN_LOGIN:
      const data = action.payload
      return data;
    default:
      return state;
  }
};

export default openLogin;
