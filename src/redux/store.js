import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

/**
 * middleware gets added to our store
 * when user actions get fired/dispatched, we catch them
 * middleware are functions that sit between user actions and the root reducer
 * LOGGER console logs actions 
 */

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;