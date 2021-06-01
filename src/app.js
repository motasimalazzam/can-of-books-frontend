import React from 'react';
import Header from './header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginButton from './loginButton'
import LogoutButton from './logoutButton'
import Profile from './profile'
import Login from './login';
import { withAuth0 } from '@auth0/auth0-react';
import MyFavoriteBooks from './myFavoriteBooks';

class App extends React.Component {

  render() {
    // console.log('app', this.props)
    return (
      <>
        <Router>
          <IsLoadingAndError>

            <Header />

            <Switch>
              <Route exact path="/">

                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                {this.props.auth0.isAuthenticated == true  ?  <MyFavoriteBooks />:<Login />}

              </Route>
              <Route path='/profile'>
                <Profile />
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);