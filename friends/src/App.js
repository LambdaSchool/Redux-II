import React, { Component } from 'react';
import FriendsList from './containers/FriendsList'
import AddFriend from './containers/AddFriend';

class App extends Component {
  render() {
    return (
      <div>
        <FriendsList />
        <AddFriend />
      </div>
      
    );
  }
}

export default App;
