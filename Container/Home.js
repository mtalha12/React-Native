import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
// import { Header } from 'react-native-elements';
// import InputComponent from "../Components/Input";

const styles = StyleSheet.create({
    defaultText : {
        fontSize : 22,
        padding : 10,
        margin : 5,
        color : 'black',
        borderWidth : StyleSheet.hairlineWidth,
        //borderWidth :2,  
    },
    selectedText : {
        backgroundColor : 'red',
        color : 'blue',
        fontWeight : 'bold',
    }
})

class HomeComponent extends Component {
    constructor(){
        super();
        this.state = {
            name : '',
            age : '',
            hobby : '',
        }
    }
    onChangeText = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return(
            <View>
                <StatusBar hidden={false} />
                <Text style={styles.defaultText}>Hello World</Text>
                <Text style={[styles.defaultText,styles.selectedText]}>Hello Pakistan</Text>
                <Text style={styles.defaultText}>Hello Karachi</Text>
                {/* <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <InputComponent
                changeText={this.onChangeText}
                /> */}
            </View>
        )
    }
}
export default HomeComponent