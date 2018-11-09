import {
  FETCHING,
  SUCCESS,
  FAILURE
} from '../actions';

const initialState = {
  reduxFriends: [],
  error: null,
  fetching: false,
  fetched: false
};

// attempting spread operator for all reducers
export default (state = initialState, action) => {
  switch(action.type){
    case FETCHING:
      return {...state, fetching: true};

    case SUCCESS:
      return {...state, fetching: false, fetched: true, reduxFriends: [...action.payload]};

    case FAILURE:
      return {...state, fetching: false, error: action.payload};

    default: return state;

  }

}