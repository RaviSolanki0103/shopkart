import { SENT_ORDER_DATA_TO_TRACK } from "../actions/action-types";

const sendOrderDataToTrack = (state = null, action) => {
  switch (action.type) {
    case SENT_ORDER_DATA_TO_TRACK:
      return action.payload;
    default:
      return state;
  }
};

export default sendOrderDataToTrack;
