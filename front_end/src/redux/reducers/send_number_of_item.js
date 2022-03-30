import { SEND_NUMBER_OF_ITEM} from "../actions/action-types";
const initial =""

const send_number_of_item = (state =initial, action) => {
    // console.log(action.payload,"number senddatalist");
  switch (action.type) {
    case SEND_NUMBER_OF_ITEM:
      const number_of_item = action.payload
      return number_of_item
    default:
      return state;
  }
};

export default send_number_of_item;