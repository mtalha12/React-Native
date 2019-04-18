import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar, Image, Dimensions, } from "react-native";
import a from '../Images/image1.jpg';
import b from '../Images/image2.jpg';
import c from '../Images/image3.jpg';
import d from '../Images/image4.jpg';
import e from '../Images/image5.jpg';

const styles = StyleSheet.create({
    container : {
        ////Method 1 
        flex : 1,
        justifyContent : 'space-around',
        alignItems : 'center',
        ////Method 2 

    },
    image_a : {
        ////Method 1
        // width : '50%',
        // height : '30%',
        // borderRadius : 100,
        ////Method 2 //Image Stretch Vertical Exis.Images Long Vertically.
        // width : '50%',
        // height : '30%',
        // flex : 1,
        ////Method 3 // Image Stretch Horizontal Exis.Image Long Horizontally.
        width : '50%',
        height : '30%',
        flex : 1,
        width : Dimensions.get('window').width,
        ////Picture repeated On His Width.
        //resizeMode : 'repeat',
        //// Margin Ki tarha Work Karta He.
        //resizeMode : 'contain',
        ////Work To Cover Picture.
        //resizeMode : 'cover',
    },
    text : {
        backgroundColor : 'rgba(0,0,0,.1)',
        // backgroundColor : '#333333',
        color : 'black',
        fontSize : 30,
    }
})

class ImagesFlexComponenet extends Component {
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={false} />

                <Image source={a} style={styles.image_a} />
                <Text style={styles.text}>Sun Shine</Text>
                <Image source={b} style={styles.image_a} />
                <Text style={styles.text}> Beautiful Place</Text>
                {/* <Image source={c} style={styles.image_a} />
                <Image source={d} style={styles.image_a} />
                <Image source={e} style={styles.image_a} /> */}
            </View>
        )
    }
}
export default ImagesFlexComponenet