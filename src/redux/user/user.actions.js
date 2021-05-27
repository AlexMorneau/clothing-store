// functions that return objects



// this contains the same string that our reducer is expecting
export const setCurrentUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user
});