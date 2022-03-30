import { combineReducers } from "redux";
import openLogin from "./openLogin";
import loginToken from "./loginToken";
import loginStatus from "./loginStatus";

const rootReducer = combineReducers({
    openLogin, loginToken, loginStatus
});


export default rootReducer;
