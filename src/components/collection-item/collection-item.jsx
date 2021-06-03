import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

/**
 * This component represents each item displayed in the /shop page
 * Items will have a background image and an add to cart button
 */

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className='collection-item'>
            <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='name'>{price}</span>
            </div>
            <CustomButton 
            onClick={() => addItem(item)} 
            inverted>
                Add to Cart
            </CustomButton>
        </div>
    )
}


/**
 * addItem is a function prop that will be passed to the above (CollectionItem) component
 * when we dispatch (call) the function, it receives 'item' as a property
 * we pass item into the addItem action creator when returns an object of type addItem (from cart.actions)
 * from here, the type=ADD_ITEM and payload= the item being passed in
 * then we dispatch the new item into our store where it goes through our redux flow
 * 
 */
const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
