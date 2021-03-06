import React from 'react';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

/**
 * This is the top right cart dropdown menu that previews your cart
 */

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    : (<span className='empty-message'>Your cart is empty</span>)
                }
            </div>
            <CustomButton 
            onClick={() =>  {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// withRouter takes the component being returned from the connect call as an arg
// withRouter is what passes match, history, and location objects that we can use
// this passes those objects into the component that is being wrapped
export default withRouter(connect(mapStateToProps)(CartDropdown));
