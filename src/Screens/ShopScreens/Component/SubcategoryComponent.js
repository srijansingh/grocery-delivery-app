import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../../Constant/Color'
import FontFamily from '../../../Constant/FontFamily'
const {width, height} = Dimensions.get("screen")

const SubcategoryComponent = (props) => {
    return (
        
        <TouchableOpacity activeOpacity={0.5} style={[styles.container, props.style]} onPress={props.onButtonPress}>
            <Image 
                source={{
                    uri:props.image
                }}
                style={[styles.image, {borderColor:props.borderColor, borderWidth:props.borderWidth}]}
            />
            <Text style={[styles.text, {color: props.color}]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default SubcategoryComponent

const styles = StyleSheet.create({
    container:{
        height:60, 
        paddingHorizontal:25, 
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:1,
        borderBottomWidth:4,
        borderBottomColor:'white',
        flexDirection:'row',
    },
    text:{
        fontFamily:FontFamily.bold,
        fontWeight:'900'
    },
    image:{
        height:40,
        width:40,
        borderRadius:20,
        marginRight:10
    }
})
