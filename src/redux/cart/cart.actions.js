import CartActionTypes from './cart.types';

// no payload required here
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});