import React, { useState } from 'react'
import { TextInput, StyleSheet, Text, View } from 'react-native'

import Color from '../Constant/Color'
import FontFamily from '../Constant/FontFamily'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const InputBox = (props) => {
    const [isBlur, setIsBlur] = useState(false)
    const [value, setValue] = useState('')

    return (
        <View style={isBlur ? styles.blurController:styles.controller}>
            <View style={styles.label}>
                <Text style={isBlur ? styles.labelBlurText :styles.labelText}>
                    {props.label.toUpperCase()}
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.icon}>
                    <Icon name={props.icon} size={24} color={isBlur ? Color.accent : Color.icon} />
                </View>
                <TextInput 
                    style={styles.textInput}
                    placeholder={props.placeholder}
                    selectionColor={Color.icon}
                    onFocus={() => setIsBlur(true)}
                    onBlur={()=> setIsBlur(!isBlur)}
                    onChangeText={(value) => setValue(value)}
                />
                {
                    value !== '' 
                    ?
                    <View style={styles.icon}>
                    <Icon name="check-circle-outline" size={24} color="green" />
                </View>
                :
                <View style={styles.icon}>
                     {/* <Icon name="check-circle-outline" size={24} color={Color.icon} /> */}
                </View>
                }
            </View>
        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    controller:{
        height:70,
        justifyContent:'space-between',
        marginVertical:10,
        backgroundColor:'#fff',
        borderBottomColor:'#a6a6a6',
        borderBottomWidth:1,
        padding:5
    },
    blurController:{
        height:70,
        justifyContent:'space-between',
        marginVertical:10,
        backgroundColor:'#fff',
        borderBottomColor:Color.accent,
        borderBottomWidth:1,
        padding:5
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        
        alignItems:'center'
    },
    icon:{
        width:'10%',
        justifyContent:'center',
        alignItems:'flex-start'
    }, 
    labelText:{
        fontFamily:FontFamily.regular,
        color:Color.icon,
        paddingHorizontal:3
    }, 
    labelBlurText:{
        fontFamily:FontFamily.regular,
        color:Color.accent,
        paddingHorizontal:3
    }, 
    textInput:{
       
        width:'80%',
        color:'black',
        height:40,
        paddingRight:5,
        fontFamily:FontFamily.light
        
    }

})
