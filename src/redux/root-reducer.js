import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// key = at what point in our reducer object do we want to start storing everything
// storage = the storage key goes to whatever the storage object from redux-persist is
// whitelist = array containing string names of any of the reducers we want to store
// for now the only reducer we want to persist is cart
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


// ROOT REDUCER represents the base reducer for all other reducers
// this object combines other reducers and represents the state architecture
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});


// redux persist reducer takes in config settings and our root reducer
// this exports our root reducer with persistence capabilities
export default persistReducer(persistConfig, rootReducer);