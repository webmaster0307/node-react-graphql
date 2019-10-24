import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import Navigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';

class App extends Component {
  state = {
    token: null,
    userId: null
  }

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  }

  logout = () => {
    console.log('logout is called')
    this.setState({ token: null, userId: null });
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}>
            <Navigation />
            <main className="main-content">
              <Switch>
                {this.state.token && <Redirect from='/' to='/events' exact />}
                {this.state.token && (
                  <Redirect from='/auth' to='/events' exact />
                )}
                {!this.state.token && (
                  <Route path='/auth' component={AuthPage} />
                )}
                <Route path='/events' component={EventsPage} />
                {this.token && (
                  <Route path='/bookings' component={BookingsPage} />
                )}
                {!this.state.token && <Redirect to='/auth' exact />}
              </Switch>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter >
    )
  }
}

export default App;
