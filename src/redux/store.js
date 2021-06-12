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

// middlewares (redux logger) gives us access to development environment details in the console log
// prev state, action, next state, and so on
const middlewares = [];

// take node's environment variable to determine if the app is being served in:
// development, production, or test
// therefore if the node environment is development, push logger into the middlewares array
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };