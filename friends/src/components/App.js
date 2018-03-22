import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';

import { getFriends, deleteFriends } from '../actions/friendsActions';
import AddFriend from '../components/AddFriend';
// import FriendsList from '../components/FriendsList';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  deleteFriend = id => {
    // event.preventDefault();
    console.log('This friend is to be deleted.');
    this.props.deleteFriends({
      id: id
    });
  };

  render() {
    return (
      <div className="App">
        <AddFriend />
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return (
                <li
                  onClick={() => this.deleteFriend(friend.id)}
                  key={friend.id}
                >
                  Name: {friend.name} - Age: {friend.age} - Email:{' '}
                  {friend.email}
                </li>
              );
            })}
          </ul>
          // <FriendsList friends={this.props.friends} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching,
    error: state.error
  };
};

const actions = {
  getFriends,
  deleteFriends
};

export default connect(mapStateToProps, actions)(App);
