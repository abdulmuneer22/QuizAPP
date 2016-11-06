import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import firebase from 'firebase'

class LessonCard extends Component{
 
 componentWillMount(){
   
   //this._getAllQuestions()
   


 }

 _getAllQuestions(){
  var cat  = this.props.title
  cat = cat.toLowerCase()

  if(this.props.title == "POLITICS"){
  var QueRef = firebase.database().ref('questions/'+cat)
  QueRef.on('value',(question)=>{
    var items = [];
    question.forEach((child)=>{
      console.log(child.val().question)
      items.push({
        question : child.val().question,
        A : child.val().Options.A,
        B : child.val().Options.B,
        C : child.val().Options.C,
        D : child.val().Options.D,
        Answer : child.val().answer

      })
    })

    console.log(items)

    

  })
    
  }
  

 }

  render(){
    return(

      <TouchableOpacity style={{
        height : 180,
        alignItems :'center',
        justifyContent :'center',
        backgroundColor : this.props.backgroundColor
      }}
      onPress={()=>{
        //alert("test")
        this.props.navigator.push({name:'question',category : this.props.title})
      }}
      >
      <Text
      style={{
        fontSize : 18,
        color : 'white',
        fontFamily : 'PTSans-Narrow'
      }}
      >
      {this.props.title}
      </Text>
      </TouchableOpacity>

    );
  }

}


export default LessonCard
