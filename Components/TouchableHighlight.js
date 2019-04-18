import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';


const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#F5FCFF',
    },
    colors : {
        margin : 10,
        padding : 10,
        borderWidth : 2,
        borderRadius : 10,
        backgroundColor : 'rgba(255,255,255,.8)',
        alignSelf : 'stretch',
    },
    row : {
        flexDirection : 'row',
        alignSelf : 'center',
    },
    sample : {
        height : 30,
        width : 30,
        borderRadius : 15,
        margin : 10,
        backgroundColor : 'white',
    },
    text : {
        fontSize : 30,
        margin : 5
    }
})

class TouchableHighlightComponent extends Component {
    constructor(){
        super();
        this.state = {
            backgroundColor: 'blue',
        }
    }

    changeColor = (backgroundColor) =>{
        this.setState({backgroundColor})
    }
    render(){
        const { backgroundColor } = this.state;
        return(
            <View style={[styles.container,{backgroundColor}]}>

            <TouchableHighlight style={styles.colors}
                onPress={()=> this.changeColor('yellow')}
                underlayColor='orange'>
                <View style={styles.row}>
                    <View style={[styles.sample,{backgroundColor : 'yellow'}]}></View>
                        <Text style={styles.text}> Yellow </Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.colors}
                onPress={()=> this.changeColor('green')}
                underlayColor='blue'>
                <View style={styles.row}>
                    <View style={[styles.sample,{backgroundColor : 'green'}]}></View>
                        <Text style={styles.text}> Green </Text>
                </View>
            </TouchableHighlight>

            </View>
        )
    }
}
export default TouchableHighlightComponent