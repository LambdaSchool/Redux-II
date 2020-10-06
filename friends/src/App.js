import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
  <Router>
    <div className="App">
     <h1>Friends list Application</h1>
         <Link to = "/login"> Login </Link>
         <Link to = "/friendslist"> friends list</Link>
     <Switch>
      <Route exact path = "/login" component = {Login} />
      <PrivateRoute exact path = "/friendslist" component = {FriendsList} />
     </Switch>
    </div>
  </Router>
  );
}

export default App;
