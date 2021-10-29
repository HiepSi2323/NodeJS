import React from 'react'
import Home from './page/Home/Home'
import "./app.scss"
import Watch from './page/watch/Watch'
import Register from './page/Register/Register'
import Login from './page/Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {
          user && (
          <>
            <Route path="/movies">
              <Home type="movies" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
          )
        }
       
      </Switch>
    </Router>
  )
};

export default App;
