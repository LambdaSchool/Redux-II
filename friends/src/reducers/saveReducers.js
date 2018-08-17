import { SAVE_FRIEND, SAVE_SUCCESS, SAVE_FAILURE } from '../actions';

const initialState = {
    savingFriends: false,
    friendsSaved: false,
    friends: [],
    errors: null
}

export default (state= initialState, action) => {
    switch(action.type) {
        case SAVE_FRIEND: 
            return Object.assign({}, state, {
                savingFriends: true
            })
        case SAVE_SUCCESS: 
            return Object.assign({}, state, {
                savingFriends: false,
                friendsSaved: true,
                friends: [...state.friends, action.payload]
            })
        case SAVE_FAILURE:
            return Object.assign({}, state, {
                savingFriends: false,
                friendsSaved: false,
                errors: [...state.errors, action.error]
            })
        default:
            return state
    }
}