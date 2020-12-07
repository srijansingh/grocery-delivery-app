import React from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import { TouchableRipple } from 'react-native-paper';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Color from '../Constant/Color';

const BackButton = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableRipple style={styles.backButton}  onPress={props.goBack}>
                
                        <MaterialIcons 
                            name={props.name}
                            size={24} 
                            color={Color.icon}
                                    
                    />
                    
                </TouchableRipple>
            </View>
        </View>
    )
}

export default BackButton

const styles = StyleSheet.create({
    container:{
        height:55,
        width:55,
        borderRadius:50,
        
        justifyContent:'center',
        alignItems:'center',
        
    },
    subContainer:{
        height:40,
        width:40,
        borderRadius:50,
        overflow:'hidden',
    },
    backButton:{
        height:40,
        width:40,
        justifyContent:'center',
        alignItems:'center',  
       
    }
})
