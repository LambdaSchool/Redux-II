import axios from 'axios';
import {
  FETCHINGFRIENDS,
  FETCHEDFRIENDS,
  ERROR,
  ADDINGFRIEND,
  ADDEDFRIEND,
} from './types.js';

export const fetchingFriends = () => {
  return dispatch => {
    dispatch({type: FETCHINGFRIENDS});
    axios
      .get('http://www.localhost:5000/api/friends')
      .then(res => {
        dispatch({type: FETCHEDFRIENDS, payload: res.data});
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload:
            'There was a problem retrieving your friends. Please try again',
        });
      });
  };
};

export const addfriend = friend => {
  return dispatch => {
    dispatch({type: ADDINGFRIEND});
    axios
      .post('http://www.localhost:5000/api/friends', friend)
      .then(res => {
        dispatch({ADDEDFRIEND, payload: res});
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: 'There was a problem adding your friend. Pleas try again',
        });
      });
  };
};
