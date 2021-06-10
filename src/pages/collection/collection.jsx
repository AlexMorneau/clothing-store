import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item';
import { connect } from 'react-redux';
import { selectCollection } from '../..//redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection; // destructure properties off our collection object
    console.log(collection);

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
            </div>
        </div>
    )
}


// selector: selectCollection pulls the url id from the match prop
// we use the mapping in shop.selectors to find the corresponding category
// once found, selectCollection returns the state with the found category/collection
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
