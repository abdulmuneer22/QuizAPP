import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBOK_RQn9_3rHgKHfgO6iKdbiFWMChp6Zc",
    authDomain: "finon-9e0de.firebaseapp.com",
    databaseURL: "https://finon-9e0de.firebaseio.com",
    storageBucket: "finon-9e0de.appspot.com",
    messagingSenderId: "310502793636"
  };

class SplashScreen extends Component{

    //1234567890
    //test@test.com
    

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigator.push({name:'mainScreen'})
        },3000)
    }

    render(){
        return(
            <View style ={{
                flex : 1 ,
                backgroundColor : 'green',
                alignItems :'center',
                justifyContent : 'center'
            }}>
            <Text>Some Logo</Text>
            </View>

        );
    }


}

export default SplashScreen
