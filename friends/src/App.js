import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <>
        <div className="App">
          <Switch>
            <Route path="/login" />
            <Link to="/login" component={Login}>
              {" "}
              Login
              {/* <Login /> */}
            </Link>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
