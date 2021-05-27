import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

/**
 * ROOT REDUCER represents the base reducer for all other reducers
 * this object combines other reducers and represents the state architecture
 */

export default combineReducers({
    user: userReducer
});