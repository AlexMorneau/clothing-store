import { UserActionTypes } from './user.types';

// this contains the same string that our reducer is expecting
export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});