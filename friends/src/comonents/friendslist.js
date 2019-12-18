import React,{useState,useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {Friends} from './friends';

export const FriendsList =()=>{
    const [friends,setFriends]=useState([]);

    useEffect()
    return(
        <div className='friendsList'>
            {friends.map(friend=>(
                <Friends key={friend.id} friend={friend}/>
            ))}
        </div>
    )
}