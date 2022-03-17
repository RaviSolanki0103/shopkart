import { OPEN_LOGIN } from "./action-types";
import { SENDDATA_WISHLIST } from "./action-types";

export const openLogin = (data) => {
  console.log(data, "DATA");
  return {
    type: OPEN_LOGIN,
    payload: data,
  };
};



// ronak-------------------------------------

export const senddataWishlist =(number) => {
  return {
    type:SENDDATA_WISHLIST,
    payload : number
    
  };
  
}