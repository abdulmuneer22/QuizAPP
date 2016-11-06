import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions

} from 'react-native';

const window = Dimensions.get('window');

class OptionsCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      backgroundColor : "#57c6de",
      score : 0
    }
  }

  render(){
    
    return(
      <TouchableOpacity

      style={{
      borderColor : '#57c6de',
      backgroundColor :this.state.backgroundColor,
      height : 60,
      borderWidth : 1,
      marginTop : 10,
      width : window.width-40,
      alignSelf : 'center',
      borderRadius : 5,
      justifyContent :'center'
      }}
      
      >
      <Text
      style={{
        fontSize : 35,
        color : 'white',
        fontFamily : 'PTSans-Narrow',
        textAlign :'left',
        marginLeft : 10
      }}
      >
      {this.props.option}
      </Text>
      </TouchableOpacity>

    );
  }

}

export default OptionsCard
