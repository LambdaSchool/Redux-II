import React from 'react';
import Friend from './Friend';

const Friends = props => {
    return (
        <div className='friends'>
            {props.friends.map(friend => <Friend key={friend.id} friend={friend}/>)}
        </div>
    )
}

export default Friends;