import CartActionTypes from './cart.types';

// no payload required here
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});


// for ADD ITEM action we want the payload
export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});