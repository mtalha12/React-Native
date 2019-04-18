import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";


const styles = StyleSheet.create({
    container : {
        //// Method 5 //React Native Properties
        // flexDirection : "row",
        // justifyContent : "center",
        ////Method 6 //React Native Properties
        // flex : 1,
        // flexDirection : "row",
        // justifyContent : "center",
        ////Method 7 //React Native Properties
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        // justifyContent : 'flex-end',
        // alignItems : 'flex-end',


    },
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
         //// Method 5 //React Native Properties
        //flex : 1,
        //// Method 8 //React Native Properties
        //alignSelf : 'stretch',
        ////Method 9 // react Native Properties
        //alignSelf : 'flex-end',


    }
})

class FlexBoxComponent extends Component {
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={false} />
                <Text style={styles.defaultText}>Hello 1</Text>
                <Text style={[styles.defaultText,styles.selectedText]}>Hello 2</Text>
                <Text style={styles.defaultText}>Hello 3</Text>
            </View>
        )
    }
}
export default FlexBoxComponent