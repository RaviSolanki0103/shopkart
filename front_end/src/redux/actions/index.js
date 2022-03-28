import { OPEN_LOGIN, SEND_NUMBER_OF_ITEM } from "./action-types";
import { SENDDATA_WISHLIST } from "./action-types";
import {SEND_TOTALAMOUNT} from "./action-types";
export const openLogin = (data) => {
  return {
    type: OPEN_LOGIN,
    payload: data,
  };
};



// ronak-------------------------------------

export const senddataWishlist =(data) => {
  return {
    type:SENDDATA_WISHLIST,
    payload : data
    
  };
  
}

export const send_totalamount = (total_amount) => {
  return {
    type : SEND_TOTALAMOUNT,
    payload : total_amount
  }
}


export const send_number_of_item = (number_of_item) => {
  return {
    type : SEND_NUMBER_OF_ITEM,
    payload : number_of_item
  }
}