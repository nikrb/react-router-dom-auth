import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Login from './Login';
import { UserList, UserPage } from './User';
import './App.css';

const Home = () => (<div>Home Page</div>);

class App extends Component {
  state = {
    isLoggedIn: false,
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
                  isLoggedIn={this.state.isLoggedIn}
                />
                <AuthRoute
                  path="/users/:id"
                  redirect="/"
                  component={UserPage}
                  isLoggedIn={this.state.isLoggedIn}
                  render={props => <UserPage id={props.match.params.id} />}
                />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

const AuthRoute = ({ isLoggedIn, component: Component, redirect, render : renderer, ...rest }) => {
  if (renderer && isLoggedIn) {
    return (
      <Route {...rest} render={renderer} />
    );
  } else {
    return (
      <Route {...rest} render={ props => (
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: redirect }}
          />
        ))}
      />
    );
  }
};

export default App;
