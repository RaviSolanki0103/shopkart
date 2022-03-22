import { combineReducers } from "redux";
import openLogin from "./openLogin";
import senddataWishlist from "./senddataWishlist";
import send_totalamount from "./send_totalamount";
import send_number_of_item from "./send_number_of_item";
const rootReducer = combineReducers({
    openLogin,
    senddataWishlist,
    send_totalamount,
    send_number_of_item
});

export default rootReducer;
