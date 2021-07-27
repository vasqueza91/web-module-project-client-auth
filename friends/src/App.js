import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axiosWithAuth from './Utils/axiosWithAuth';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendList from './components/FriendList'
import FriendForm from './components/FriendForm'
import './App.css';

const UserHeader = ()=> {
  return(<div>
    <Link to="/protected">Protected Page</Link>
  </div>);
}

function App() {
  const logout = () => {
    axiosWithAuth()
    .post('/logout')
    .then(res => {
      localStorage.removeItem('token');
      localStorage.setItem('username');
      window.location.href = "/login";
    })
    .catch(err => {
      console.log(err);
    })
  };
  
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/friends/form">Friend Form</Link>
          </li>
          <li>
            {localStorage.getItem('token') ? <UserHeader/> : <div></div>}
          </li>
        </ul>

        <Switch>
          <PrivateRoute exact path="/protected" component={FriendList} />

          <Route path="/login" component={Login} />
          <Route component={Login} />
          <Route path="/friends/form" component={FriendForm} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
