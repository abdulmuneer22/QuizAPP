import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

import { connect} from 'react-redux'
import firebase from 'firebase'


import * as actions from '../actions'

import StatusBar from '../components/StatusBar'



class MainScreen extends Component{

  constructor(){
      super();
      this.state = {
      dataSource : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,}),
      questions : null,
      questionNumber : 0

      }
  }

  componentWillMount(){
      console.log("get questions")
      this._getQuestions()
  }
    
  _getQuestions(){
  var category  = this.props.category
  category = 'politics'

  
  var QueRef = firebase.database().ref('questions/'+category)
  QueRef.on('value',(question)=>{
    var items = [];
    question.forEach((child)=>{
      //console.log(child.val().question)
      items.push({
        question : child.val().question,
        A : child.val().Options.A,
        B : child.val().Options.B,
        C : child.val().Options.C,
        D : child.val().Options.D,
        //imageurl : child.val().imageurl,
        Answer : child.val().answer

      })
    })

     console.log(items[0])
     this.setState({questions : items})
     this.setState({dataSource: this.state.dataSource.cloneWithRows(items)});

    

  })
    
}
    
_checkAnswer(answer,option){
console.log(answer)
console.log(option)


}

_showQuestions(qnumber){
   
   var Question = this.state.questions
   
   
   if(Question != null){
   console.log(Question[qnumber].question)
   console.log(Question[qnumber].Answer)
   console.log(Question.length)

   var QuestionCount = Question.length 

   return(
     <View >
     
     <View style={Styles.questionCard}>
     <Text style={Styles.questionText}>
     {Question[qnumber].question}
     </Text>
     </View>


     <TouchableOpacity
     style={Styles.optionCard}
     onPress = {()=>{
         console.log(Question[qnumber].Answer)
         console.log(Question[qnumber].A)
         if(Question[qnumber].Answer == Question[qnumber].A){
             console.log("Correct !!")
             this.props.scoreUpdater(1)
         }else{
             console.log("Wrong !!")
             this.props.scoreUpdater(-1)
             
         }
         
        
    }}
     >
     <Text style={Styles.questionText}>A . {Question[qnumber].A}</Text>
     </TouchableOpacity>


     {/*************************** */}
     <TouchableOpacity
     style={Styles.optionCard}
     onPress = {()=>{
         console.log(Question[qnumber].Answer)
         console.log(Question[qnumber].B)
         if(Question[qnumber].Answer == Question[qnumber].B){
             console.log("Correct !!")
             this.props.scoreUpdater(1)
         }else{
             console.log("Wrong !!")
             this.props.scoreUpdater(-1)
             
         }
         
        
    }}
     >
     <Text style={Styles.questionText}>B . {Question[qnumber].B}</Text>
     </TouchableOpacity>

     {/************CCC*************** */}
     <TouchableOpacity
     style={Styles.optionCard}
     onPress = {()=>{
         console.log(Question[qnumber].Answer)
         console.log(Question[qnumber].C)
         if(Question[qnumber].Answer == Question[qnumber].C){
             console.log("Correct !!")
             this.props.scoreUpdater(1)
         }else{
             console.log("Wrong !!")
             this.props.scoreUpdater(-1)
             
         }
         
        
    }}
     >
     <Text style={Styles.questionText}>C . {Question[qnumber].C}</Text>
     </TouchableOpacity>

     {/************DDD*************** */}
     <TouchableOpacity
     style={Styles.optionCard}
     onPress = {()=>{
         console.log(Question[qnumber].Answer)
         console.log(Question[qnumber].D)
         if(Question[qnumber].Answer == Question[qnumber].D){
             console.log("Correct !!")
             this.props.scoreUpdater(1)
         }else{
             console.log("Wrong !!")
             this.props.scoreUpdater(-1)
             
         }
         
        
    }}
     >
     <Text style={Styles.questionText}>D . {Question[qnumber].D}</Text>
     </TouchableOpacity>
     
     
     

     
    <View style={Styles.nextButton}>
    <Text
    onPress = {()=> {
        console.log(this.state.questionNumber)
        var currentQuestion = this.state.questionNumber
        currentQuestion = currentQuestion + 1
        if(QuestionCount > currentQuestion){
            this.setState({
            questionNumber : currentQuestion
        })
        }
        
    }}
    >Next</Text>
    </View>

     
    </View>
      
   );

   }
 }
    
    render(){
        console.log(this.state)
        return(
            <View style = {{marginTop : 20}}>
            <StatusBar leftIcon="ios-menu"/>
            
            
            


            <View>
            {this._showQuestions(this.state.questionNumber)}
            </View>
            
            
           

            </View>
        );
    }

}


const Styles = StyleSheet.create({
    questionCard : {
        backgroundColor : 'blue',
        margin : 10,
        borderRadius : 6,
        borderColor : 'blue',
        borderWidth : 1,
        height : 80,
        alignItems : 'center',
        justifyContent : 'center',
        padding : 5

    },
    questionText:{
        fontSize : 18,
        color : 'white',
        fontFamily : 'PTSans-Narrow'
    },
    optionCard : {
        backgroundColor : 'purple',
        margin : 10,
        borderRadius : 6,
        borderColor : 'purple',
        borderWidth : 1,
        height : 40,
        alignItems : 'center',
        justifyContent : 'center'

    },
    nextButton : {
        backgroundColor : 'green',
        margin : 10,
        borderRadius : 6,
        borderColor : 'green',
        borderWidth : 1,
        height : 40,
        alignItems : 'center',
        justifyContent : 'center'

    }
})


const mapStateToProps = state => {
    // map all the global state to props from redux store
    //console.log(state)
    return { 
        currentScore : state.currentScore
     }
    // libraries will be available for LibraryList component as props
}
export default connect(mapStateToProps,actions)(MainScreen);