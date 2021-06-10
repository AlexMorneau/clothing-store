import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

/**
 * middleware gets added to our store
 * when user actions get fired/dispatched, we catch them
 * middleware are functions that sit between user actions and the root reducer
 * LOGGER console logs actions 
 */

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };