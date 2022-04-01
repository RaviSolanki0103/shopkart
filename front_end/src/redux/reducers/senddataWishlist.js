import { SENDDATA_WISHLIST } from "../actions/action-types";
const initial =[]

const senddataWishlist = (state =initial, action) => {
  switch (action.type) {
    case SENDDATA_WISHLIST:
      const data =[...state, ...action.payload]
      return data
    default:
      return state;
  }
};

export default senddataWishlist;