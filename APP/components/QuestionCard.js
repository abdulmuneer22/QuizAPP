import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView
} from 'react-native';

import OptionsCard from './OptionsCard'
class QuestionCard extends Component{
render(){
    //console.log(this.props)
    return(
    
    <View>
    <View
    style={{
    borderColor : '#56b8ae',
    backgroundColor :'#56b8ae',
    height : 200,
    borderWidth : 1,
    marginTop : 10,
    width : window.width-40,
    alignSelf : 'center',
    borderRadius : 5,
    justifyContent :'center'
    }}>

    <Text
    style={{
    fontSize : 35,
    color : 'white',
    fontFamily : 'PTSans-Narrow',
    textAlign :'center'
    }}
    >
    {this.props.question}
    </Text>



    </View>

    
    
    

    </View>      
    );
}
    
}


export default QuestionCard