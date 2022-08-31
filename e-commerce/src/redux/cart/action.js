import axios  from "axios";

export const cartActions={
    ADDTO_CART_SUCCESS: 'ADDTO_CART_SUCCESS',

    REMOVE_FROM_CART:'REMOVE_FROM_CART'
}


export const addToCart = (product) => ({
    type: cartActions.ADDTO_CART_SUCCESS,
    payload: product
});

export const removeFromCart=()=>({
    type:cartActions.REMOVE_FROM_CART
})


