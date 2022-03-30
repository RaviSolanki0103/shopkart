import { OPEN_LOGIN, LOGIN_TOKEN, LOGIN_STATUS, SEND_NUMBER_OF_ITEM, SENDDATA_WISHLIST, SEND_TOTALAMOUNT } from "./action-types";

export const openLogin = (data) => {
  return {
    type: OPEN_LOGIN,
    payload: data,
  };
};

export const loginToken = (data) => {
  return {
    type: LOGIN_TOKEN,
    payload: data,
  }
}

export const loginStatus = (data) => {
  return {
    type: LOGIN_STATUS,
    payload: data,
  }
}


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
