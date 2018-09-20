import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import './styles/App.css';
import { fetchData, addFriend } from './actions';

class App extends Component {
  state = {
    friendDataInput: {
      name: '',
      age: '',
      email: '',
    },
  };

  componentDidMount() {
    this.props.fetchData();
  }

  handleInput = (event) => {
    this.setState({
      friendDataInput: {
        ...this.state.friendDataInput,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAddFriend = (event) => {
    event.preventDefault();
    console.log('add friend test');
    this.props.addFriend(this.state.friendDataInput);
  };

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        {!this.props.dataFetched ? (
          <h1>Loading Data Please Wait...</h1>
        ) : (
          <React.Fragment>
            <FriendsList friends={this.props.friends} />
            <FriendForm
              friendDataInput={this.state.friendDataInput}
              handleInput={this.handleInput}
              handleAddFriend={this.handleAddFriend}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    fetchingData: state.friendsReducer.fetchingData,
    dataFetched: state.friendsReducer.dataFetched,
    addingFriend: state.friendsReducer.addingFriend,
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchData,
    addFriend,
  }
)(App);
