import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';
import ButtonComponent from '../Components/UseScrollView';

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
})



class ScrollingViewComponent extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    changeColor = (backgroundColor) =>{
        this.setState({backgroundColor})
    }
    render(){
        const { backgroundColor } = this.state;
        return(
            <ScrollView style={[styles.container,{backgroundColor}]}>
            <ButtonComponent
            backgroundColor='red'
            onSelect={(color) => this.changeColor(color)}
             />
              <ButtonComponent
            backgroundColor='blue'
            onSelect={(color) => this.changeColor(color)}
             />
              <ButtonComponent
            backgroundColor='yellow'
            onSelect={(color) => this.changeColor(color)}
             />
              <ButtonComponent
            backgroundColor='green'
            onSelect={(color) => this.changeColor(color)}
             />
              <ButtonComponent
            backgroundColor='salmon'
            onSelect={(color) => this.changeColor(color)}
             />
              <ButtonComponent
            backgroundColor='#00FF00'
            onSelect={(color) => this.changeColor(color)}
             />
              <ButtonComponent
            backgroundColor='rgb(255,0,255)'
            onSelect={(color) => this.changeColor(color)}
             />
              <ButtonComponent
            backgroundColor='white'
            onSelect={(color) => this.changeColor(color)}
             />
              <ButtonComponent
            backgroundColor='rgb(255,211,133)'
            onSelect={(color) => this.changeColor(color)}
             />
              <ButtonComponent
            backgroundColor='rgba(0,0,0,.4)'
            onSelect={(color) => this.changeColor(color)}
             />
              <ButtonComponent
            backgroundColor='#F5FCFF'
            onSelect={(color) => this.changeColor(color)}
             />
            </ScrollView>
        )
    }
}
export default ScrollingViewComponent