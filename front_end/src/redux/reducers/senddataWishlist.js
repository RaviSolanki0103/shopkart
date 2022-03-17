import { SENDDATA_WISHLIST } from "../actions/action-types";
const initial =[]

const senddataWishlist = (state =initial, action) => {
    console.log(action.payload,"number senddatalist");
  switch (action.type) {
    case SENDDATA_WISHLIST:
      const number = action.payload
      return number
    default:
      return state;
  }
};

export default senddataWishlist;