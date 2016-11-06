import React, {Component} from 'react'
import { View,Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'


import RouteManager from './RouteManager'

// Step 1 - create reducer


class Root extends Component{
  componentWillMount(){
    var config = {
    apiKey: "AIzaSyBOK_RQn9_3rHgKHfgO6iKdbiFWMChp6Zc",
    authDomain: "finon-9e0de.firebaseapp.com",
    databaseURL: "https://finon-9e0de.firebaseio.com",
    storageBucket: "finon-9e0de.appspot.com",
    messagingSenderId: "310502793636"
  };

  firebase.initializeApp(config);
  var email = "test@test.com"
  var password = "1234567890"
  firebase.auth().signInWithEmailAndPassword(email, password) 
  }

render(){
    return(
      <Provider store={createStore(reducers)}>
      <RouteManager/>
      </Provider>


    );
}
} 


export default Root