import {cartActions} from "./action"

const initState = {
  cart: [],
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    
    case cartActions.ADDTO_CART_SUCCESS:
      return {
        cart:[...state.cart,action.payload]
      };
    case cartActions.REMOVE_FROM_CART:
      return {
        ...state,
        cart:[]
      }
    default:
      return state;
  }
};