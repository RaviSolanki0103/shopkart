import { SENTPRODUCT_ID } from "../actions/action-types";

const initial = [];

const sendProductId = (state = initial, action) => {
  console.log(action.payload, "frfrfrfrfrf");
  switch (action.type) {
    case SENTPRODUCT_ID:
      const data = action.payload;
      return data;
    default:
      return state;
  }
};

export default sendProductId;
