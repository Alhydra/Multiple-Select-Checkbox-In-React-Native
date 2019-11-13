import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {CheckBox} from "native-base"

export default class App extends React.Component {
  state={
    selectedLang1:false,
    selectedLang2:false,
    selectedLang3:false,
    selectedLang4:false,

  }
  render(){
    const {selectedLang1,selectedLang2,selectedLang3,selectedLang4} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.header}>What's your favorite programming language?</Text>
        <View style={styles.item} >
            <CheckBox checked={selectedLang1} color="#fc5185" onPress={()=>this.setState({selectedLang1:!selectedLang1})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang1?"#fc5185":"gray",
                fontWeight:this.state.selectedLang1? "bold" :"normal"
              }}
              >Python</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang2} color="#fc5185" onPress={()=>this.setState({selectedLang2:!selectedLang2})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang2?"#fc5185":"gray",
                fontWeight:this.state.selectedLang2? "bold" :"normal"
              }}
              >Javascript</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang3} color="#fc5185" onPress={()=>this.setState({selectedLang3:!selectedLang3})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang3?"#fc5185":"gray",
                fontWeight:this.state.selectedLang3? "bold" :"normal"
              }}
              >Php</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang4} color="#fc5185" onPress={()=>this.setState({selectedLang4:!selectedLang4})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang4?"#fc5185":"gray",
                fontWeight:this.state.selectedLang4? "bold" :"normal"
              }}
              >C#</Text>
        </View>
        <TouchableOpacity style={styles.submit}>
          <Text style={{color:"white"}}>SUBMIT</Text>
        </TouchableOpacity>
  
  
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:40
  },
  item:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    flexDirection:"row",
  },
  checkBoxTxt:{
    marginLeft:20
  },
  submit:{
    width:"80%",
    backgroundColor:"#fc5185",
    borderRadius:20,
    padding:10,
    alignItems:"center",
    marginTop:40
  }
});
