import { FETCHING_FRIENDS, FETCHED_FRIENDS, SAVING_FRIENDS, FRIENDS_SAVED, ERROR  } from '../actions/actions';

const initialState = {
    fetchingFriends: false,
    fetchedFriends: false,
    savingFriends: false,
    friendSaved: false,
    friends: [],
    error: null
}

export const reducer = (state = initialState, action) => {
   switch(action.type) {
    case FETCHING_FRIENDS:
        return Object.assign({}, state, {fetchingFriends: true, error: ''});
    case FETCHED_FRIENDS:
        return Object.assign({}, state, {
            fetchingFriends: false,
            fetchedFriends: true,
            error: '',
            friends: action.payload
        })
    case ERROR:
        return Object.assign({}, state, { error: action.payload })
    default:
        return state;
   }
}

