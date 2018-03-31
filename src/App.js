import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Login from './Login';
import './App.css';

const UserList = () => (<div>UserList</div>);

class App extends Component {
  state = {
    isLoggedIn: true,
    username: 'guest'
  };
  handleUsername = isLoggedIn => {
    this.setState({ isLoggedIn });
  };
  handleLogin = username => {
    this.setState({ username });
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
                <NavLink to="/users">Users</NavLink>
              </ul>
            </div>
            <div>
              <Switch>
                <Route exact path="/users" component={UserList} />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
