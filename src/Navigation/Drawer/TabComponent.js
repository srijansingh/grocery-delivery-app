import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Color from '../../Constant/Color'
import FontFamily from '../../Constant/FontFamily';

const TabComponent = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.tab}>
            <View style={styles.tabIcon}><MaterialIcons name={props.icon} size={20} color={Color.icon} /></View>
            <View style={styles.tabText}><Text style={{fontSize:16, fontFamily:FontFamily.regular, color:Color.icon}}>{props.label}</Text></View>
        </TouchableOpacity>
    )
}

export default TabComponent

const styles = StyleSheet.create({
    tab:{
        height:80,
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center'
    },
    tabIcon:{
        width:'20%',
        justifyContent:'center',
        alignItems:'center'
    },
    tabText:{
        width:'80%'
    }
})
