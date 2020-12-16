import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Color from '../../../Constant/Color'
import FontFamily from '../../../Constant/FontFamily'

const TrackingProgressComponent = (props) => {
    return (
        <View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                
            }}>
                {props.children}
               {
                   (props.status === 'delivered')  ? null
                   :
                   <View style={{width:70, height:3, backgroundColor:props.lineColor}}></View>
               }
            </View>
            <Text style={{fontSize:8, color:props.color,paddingVertical:2,fontFamily:FontFamily.bold, marginLeft:-1 }}>{props.status.toUpperCase()}</Text>
        </View>
    )
}

export default TrackingProgressComponent

const styles = StyleSheet.create({})
