import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Color from '../Constant/Color'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontFamily from '../Constant/FontFamily'
import { ActivityIndicator} from 'react-native-paper';

const CustomButton = (props) => {
    return (
        <LinearGradient colors={['#FFA641', Color.accent]} style={styles.buttonBox} >
            <TouchableNativeFeedback onPress={props.onButtonPress} disabled={props.isLoading} >
                <View style={styles.button} >
                    <Text style={styles.buttonText} >{props.title}</Text>

                    {
                        props.isLoading ?
                        <ActivityIndicator size="small" animating={true} size="small" color="white" />
                        :
                        <MaterialIcons 
                        name={props.icon}
                        size={24}
                        color="white"
                    />
                    }
                    
                </View>
            </TouchableNativeFeedback>
        </LinearGradient>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonBox:{
        width:'100%',
        height:50,
        borderRadius:5,
        overflow:'hidden',
       
        backgroundColor:Color.accent,
    },
    button:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:25
       
    },
    buttonText:{
        fontSize:20,
        fontFamily:FontFamily.regular,
        color:'white'
    },
})
