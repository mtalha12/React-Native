import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    colors : {
        margin : 10,
        padding : 10,
        borderWidth : 2,
        borderRadius : 10,
        alignSelf : 'stretch',
        backgroundColor : 'white'
    },
    row : {
        flexDirection : 'row',
    },
    sample : {
        height : 30,
        width : 30,
        borderRadius : 15,
        margin : 10,
    },
    text : {
        fontSize : 30,
        margin : 5
    }
 })
// This Component is child component.
//Parent Component is ScrollingViewComponent from container.
const ButtonComponent = ({backgroundColor,onSelect=f=>f}) => (
            <TouchableHighlight style={styles.colors}
                onPress={()=> onSelect(backgroundColor)}
                underlayColor='orange'>
                <View style={styles.row}>
                    <View style={[styles.sample,{backgroundColor}]}></View>
                        <Text style={styles.text}>{backgroundColor}</Text>
                </View>
            </TouchableHighlight>
        )
export default ButtonComponent