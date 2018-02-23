import axios from 'axios';

export const IS_FETCHING = 'IS_FETCHING';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const A_FRIEND = 'A_FRIEND';

export const getFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends/get');
    return dispatch => {
        dispatch({type: IS_FETCHING});
        friends
            .then(response => {
                dispatch({type: FRIENDS_FETCHED, payload: response.data});
            })
            .catch(err => {
                dispatch({type: ERROR_FETCHING_FRIENDS, payload: err});
            });
    };
};

export const deleteFriend = (index) => {
    const deleteFriend = axios.delete('http://localhost:5000/api/friends/delete', {
        data: {index}
    });

    return dispatch => {
        dispatch({type: DELETE_FRIEND});
        deleteFriend
            .then(({data}) => {
                dispatch({type: DELETE_FRIEND, payload: data, visible:true});

                // This dispatch visible false 2 seconds after deleting message.
                setTimeout(function(){
                    dispatch({type: DELETE_FRIEND, payload: data, visible:false});
                }, 2000);

                dispatch({type: FRIENDS_FETCHED, payload: data});
            })
            .catch(err => {
                console.log('error deleting friend', err);
                dispatch({type: ERROR_FETCHING_FRIENDS, payload: err});
            });
    };
};
