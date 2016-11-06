
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { connect} from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import * as actions from '../actions'


class StatusBar extends Component {

    _handleLeftIconClick(){
      switch(this.props.leftIcon){
        case 'ios-menu':
          //alert("Do Nothing")
          break;
        case 'ios-arrow-back-outline':
        //alert("Go back")
        this.props.navigator.pop()
          break;
      }
    }

    render(){

        //console.log(this.props)

        return(
          <View style={{
            backgroundColor :'#6f8591',
            flex : 1 ,
            height : 60,
            flexDirection : 'row'
          }}
          >

          <TouchableOpacity style={{
            flex : 1,
            backgroundColor : '#6f8591',
            height : 40,
            alignItems : 'center',
            justifyContent :'center',
            paddingTop : 15
          }}
          onPress={this._handleLeftIconClick.bind(this)}
          >
          <Icon name= {this.props.leftIcon} size={25} color="#fff" />
          </TouchableOpacity>

          <View style={{
            flex : 3,
            backgroundColor : '#6f8591',
            height : 60,
            alignItems : 'center',
            justifyContent :'center'

          }}>

            <Text style={{
              fontSize : 24,
              color : 'white',
              fontFamily : 'PTSans-Narrow'
            }}>
            Q u i z APP
            </Text>

          </View>

          <TouchableOpacity style={{
            flex : 1,
            backgroundColor : '#6f8591',
            alignItems : 'center',
            justifyContent :'center',
            height : 60,
            flexDirection :'row'
          }}>
            <Text style={{
              marginRight : 15,
              fontSize : 18,
              color : 'white',
              fontFamily : 'PTSans-Narrow'
            }}>
            {this.props.currentScore}
            </Text>
            <Icon name="ios-apps" size={15} color="#fff" />

          </TouchableOpacity>



          </View>



        )
    }

}

const mapStateToProps = state => {
    // map all the global state to props from redux store
    //console.log(state)
    return { 
        currentScore : state.currentScore
     }
    // libraries will be available for LibraryList component as props
}

export default connect(mapStateToProps,actions)(StatusBar);
