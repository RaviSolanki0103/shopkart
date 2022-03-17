import { combineReducers } from "redux";
import openLogin from "./openLogin";
import senddataWishlist from "./senddataWishlist";

const rootReducer = combineReducers({
    openLogin,
    senddataWishlist
});

export default rootReducer;
