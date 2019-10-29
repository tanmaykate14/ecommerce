import React from 'react';

import {Switch, Route} from "react-router-dom" ;
import {connect} from "react-redux"

import './App.css';

import HomePage from "./pages/homepage/HomePage.component"

import ShopPage from "./pages/shop/Shop.component"

import Signinandsignup from "./components/signinandsignup/Signinandsignup.component"

import Header from "./components/header/Header.component"

import {auth,createUserProfileDocument} from "./firebase/firebase.utils"

import {setCurrentUser} from "./redux/user/user.actions"


class  App extends React.Component {


  unsubscribeFromAuth = null 

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser{
              id: snapShot.id,
              ...snapShot.data()
            })
  

        });
      }

      this.setState({ currentUser: userAuth });
    });
  }
componentWillUnmount () {
  this.unsubscribeFromAuth()
}

  render(){
  return (
    <div>
    <Header />
    <Switch>
    <Route exact path="/" component ={HomePage}/>
    <Route exact path="/shop" component ={ShopPage}/> 
    <Route exact path="/signin" component ={Signinandsignup}/> 
    </Switch>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps) (App);
