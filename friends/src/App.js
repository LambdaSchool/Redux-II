import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login';
import { axiosWithAuth } from './utils/axiosWithAuth';
import Friends from './components/Friends';

function App() {
  const logout = () => {
    axiosWithAuth()
      .post('/logout')
      .then(res =>  {
        localStorage.removeItem('token');
        window.location.href = '/login';
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Link to="/login">Login</Link>
          <Link to="/login" onClick={logout}>Logout</Link>
          {(localStorage.getItem('token') && <Link to="/protected">Friends</Link>)}
        </div>
        <br />

        <Switch>
          <Route exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
