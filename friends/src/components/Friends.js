import React from 'react';
import Friend from './Friend';
import '../App.css';

const Friends = props => {
    return (
        <div className="friends">
            {props.friends.map((friend) => {
                return (
                    <Friend
                        key={friend.id}
                        friend={friend}
                    />
                );
            })}
        </div>
    );
};

export default Friends;