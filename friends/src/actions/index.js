import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetch = () => {
  const friends = axios.get('http://localhost:5000/api/friends');

  return dispatch => {
    dispatch({type: FETCHING});

    friends
      .then(response => {
       console.log(response);
        dispatch({ type: SUCCESS, payload: response.data});
      })
      .catch(err => {

        dispatch({
          type: FAILURE,
          payload: 'too bad, you have no friends'
        });
    });

  };

};

export const addFriend = (data) => {
  const friends = axios.post('http://localhost:5000/api/friends', data);

  return dispatch => {
    dispatch({type: FETCHING});

    friends
      .then(response => {
        dispatch({type: SUCCESS, payload: response.data});
      })
      .catch(err => {

        dispatch({
          type:FAILURE,
          payload: 'Could not add friend'
        })
      })

  }

};





