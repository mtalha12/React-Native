import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Styles = StyleSheet.create({
    input : {
        borderColor : 'black',
        borderWidth : 1,
    }
})

class InputComponent extends Component {
    render(){
        return(
            <View>
                <TextInput
                style={Styles.input}
                name="name"
                label="Your name"
                placeholder="Plese Enter"
                onChangeText={this.props.changeText}
                />
                <TextInput
                style={Styles.input}
                name="age"
                label="Your Age"
                placeholder="Plese Enter"
                onChangeText={this.props.changeText}
                />
                <TextInput
                style={Styles.input}
                name="hobby"
                label="Your Hobbies"
                placeholder="Plese Enter"
                onChangeText={this.props.changeText}
                />
            </View>
        )
    }
}
export default InputComponent