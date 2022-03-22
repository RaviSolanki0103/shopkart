import { SEND_TOTALAMOUNT} from "../actions/action-types";
const initial =""

const send_totalamount = (state =initial, action) => {
    // console.log(action.payload,"number senddatalist");
  switch (action.type) {
    case SEND_TOTALAMOUNT:
      const amount = action.payload
      return amount
    default:
      return state;
  }
};

export default send_totalamount;