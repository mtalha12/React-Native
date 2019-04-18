import React, { Component } from 'react';
import { View, Text, StyleSheet,  } from 'react-native';


const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        //alignItems : 'center',
        backgroundColor : '#F5FCFF',
    },
    colors : {
        fontSize : 30,
        margin : 10,
        padding : 10,
        borderWidth : 2,
        borderRadius : 10,
        // alignSelf : 'stretch',
        textAlign : 'center',
    }
})

class RespondToTouchesComponent extends Component {
    constructor(){
        super();
        this.state = {
            backgroundColor: 'blue'
        }
    }

    changeColor = (backgroundColor) =>{
        this.setState({backgroundColor})
    }
    render(){
        const { backgroundColor } = this.state;
        return(
            <View style={[
                styles.container,
                {
                    backgroundColor
                    }
                    ]}>

                    <Text 
                    style={styles.colors} 
                    onPress={()=>this.changeColor('green')}
                    >
                    Green
                    </Text>
                    <Text 
                    style={styles.colors}
                    onPress={()=>this.changeColor('red')}
                    >
                    Red
                    </Text>
                    <Text 
                    style={styles.colors}
                    onPress={()=>this.changeColor('blue')}
                    >
                    Blue
                    </Text>
            
            </View>
        )
    }
}
export default RespondToTouchesComponent