// utility functions allow us to keep our files
// organizes functions that we may need in multiple files all in one location



export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        // existingCartItem will not be null if there was a match
        // return new version of state so component knows to rerender
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // if the existing cart item was not found, return a new array with the existing cart items AND
    // we also add cartItemToAdd - the new cart item - and give it a quantity property
    // the quantity property is added here so we can access it in the above 'if' block
    // the above will never fire unless at least one object is in the cart
    // the objects in the cart will therefore always have a quantity property
    return [...cartItems, {...cartItemToAdd, quantity: 1 }];
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
}