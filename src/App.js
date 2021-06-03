import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import CheckoutPage from './pages/checkout/checkout';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header';


import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { render } from '@testing-library/react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCartHidden } from './redux/cart/cart.selectors';



class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    // destructure so we don't have to use this.props.setCurrentUser
    const { setCurrentUser } = this.props; 

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userReference = await createUserProfileDocument(userAuth);

        // onSnapshot allows us to access database document properties with .data method
        userReference.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  // close connection when the component unmounts
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact path='/signin' 
            render={() => (this.props.currentUser) ? (<Redirect to='/' />) : (<SignInAndSignUp />)} 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


/**
 * user.action setCurrentUser() receives a user object and returns an action
 * we invoke setCurrentUser() here and pass in the user object
 * the user object is then set as the payload
 * dispatch() is a redux function that takes an action object and passes it to every reducer
 */
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
