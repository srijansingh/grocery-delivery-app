import React from 'react'
import { StyleSheet, TouchableNativeFeedback, View, Text } from 'react-native'
import { TouchableRipple } from 'react-native-paper';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Color from '../Constant/Color';

const BadgeButton = (props) => {
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
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{props.count}</Text>
            </View>
        </View>
    )
}

export default BadgeButton

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
       
    },
    badge:{
        position:'absolute',
        top:10,
        right:10,
        backgroundColor:Color.button,
        width:15,
        height:15,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'

    },
    badgeText:{
        fontSize:9,
        color:'white'
    }
})
