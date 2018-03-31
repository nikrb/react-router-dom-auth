import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Login from './Login';
import './App.css';

const UserList = () => (<div>UserList Page</div>);
const Home = () => (<div>Home Page</div>);

class App extends Component {
  state = {
    isLoggedIn: true,
    username: 'guest'
  };
  handleUsername = username => {
    this.setState({ username });
  };
  handleLogin = isLoggedIn => {
    this.setState({ isLoggedIn });
  };
  render() {
    return (
      <div className="App">
        <Login
          handleUsername={this.handleUsername}
          handleLogin={this.handleLogin}
          username={this.state.username}
          isLoggedIn={this.state.isLoggedIn}
        />
        <BrowserRouter>
          <React.Fragment>
            <div>
              <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
              </ul>
            </div>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <AuthRoute
                  exact
                  path="/users"
                  redirect="/"
                  component={UserList}
                  user={this.state.isLoggedIn}
                />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

const AuthRoute = ({ user: auth, component: Component, redirect: path, ...rest }) => {
  console.log('auth:', auth);
  return (
    <Route {...rest} render={ props => (
      auth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: path }}
        />
      ))}
    />
  );
};

export default App;
