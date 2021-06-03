import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

// pulls the cartItems property from the cart object
// first argument is an array of input selectors
// second argument is a function that returns a specific value from the selector
// this takes the state and returns the cart object
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

// pulls all cart items in state and returns the total value
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
);


// this takes a piece of our state and returns the total quantity of cart items
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);