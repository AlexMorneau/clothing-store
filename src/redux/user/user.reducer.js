// initial state for when the app mounts for the first time:
const INITIAL_STATE = {
    currentUser: null
}

/**
 * state's default value will be initial_state when unspecified
 * this function gets a state object and an action
 * depending on the type of action it will return an object
 */
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default: 
            return state;
    }
}

export default userReducer;