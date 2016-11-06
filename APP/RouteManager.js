import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  BackAndroid
} from 'react-native';

import SplashScreen from './containers/SplashScreen'
import MainScreen from './containers/mainScreen'






class RouteManager extends Component{
    renderScene(route,navigator){


    if(route.name == 'splashscreen'){
    return <SplashScreen  navigator={navigator} />
    }

     if(route.name == 'mainScreen'){
    return <MainScreen  navigator={navigator} />
    }

    }

    configureScene(route){
    switch(route.name){
    case 'mainScreen':
    return Navigator.SceneConfigs.FadeAndroid
    
    default :
    return Navigator.SceneConfigs.FadeAndroid
    }
    }

    render(){
      return(
        <Navigator
        initialRoute={{name: 'splashscreen'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={this.configureScene.bind(this)}
        />
      );
    }

}
export default RouteManager
