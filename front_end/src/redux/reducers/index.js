import { combineReducers } from "redux";
import openLogin from "./openLogin";
import loginToken from "./loginToken";
import loginStatus from "./loginStatus";
import senddataWishlist from "./senddataWishlist";
import send_totalamount from "./send_totalamount";
import send_number_of_item from "./send_number_of_item";
import sendOrderDataToTrack from "./sendOrderDataToTrack";
import sendProductId from "./sendProductId";

const rootReducer = combineReducers({
  openLogin,
  loginToken,
  loginStatus,
  senddataWishlist,
  send_totalamount,
  send_number_of_item,
  sendOrderDataToTrack,
  sendProductId,
});

export default rootReducer;
