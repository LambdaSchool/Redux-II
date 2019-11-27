import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Components 
import Welcome from './components/Welcome';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend/AddFriend';


class App extends React.Component {

  render() {
  return (
    <Router>
      <div className="App">
      <ul>
      <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Friends List</Link>
        </li>
        <li>
          <Link to="/protect">Add a Friend</Link>
        </li>
      </ul>
      <Route exact path="/" component={Welcome} />
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <PrivateRoute exact path="/protect" component={AddFriend} />
        <Route path="/login" component={Login} />
      </Switch>
      </div>
    </Router>
  )
 };
}

export default App;
