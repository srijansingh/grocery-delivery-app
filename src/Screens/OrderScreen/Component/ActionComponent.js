import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import Color from '../../../Constant/Color';
import FontFamily from '../../../Constant/FontFamily';
import moment from 'moment'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const ActionComponent = ({onCancelPress, onTrackPress}) => {
    return (
        <View style={{
            paddingHorizontal:15,
            marginVertical:10,
            flexDirection:'row',
            width:'100%',
            elevation:2 
          
        }}>
            <TouchableOpacity 
            onPress={onCancelPress}
            activeOpacity={0.8}
            style={{
                height:60,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'white',
                width:'50%',
                borderRightColor:'#f1f1f1',
                borderRightWidth:1,
                
            }}>
                <Feather
                    name="x-circle"
                    color={Color.icon}
                    size={20}
                />
                <Text style={{fontSize:12,paddingVertical:2, fontFamily:FontFamily.bold, color:Color.icon}}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={onTrackPress}
            activeOpacity={0.8}
            style={{
                height:60,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'white',
                width:'50%',
                borderLeftColor:'#f1f1f1',
                borderLeftWidth:1,
            }}>
                <SimpleLineIcons
                    name="location-pin"
                    color={Color.icon}
                    size={20}
                />
                <Text style={{fontSize:12,paddingVertical:2,fontFamily:FontFamily.bold, color:Color.icon}}>Track</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ActionComponent

const styles = StyleSheet.create({})
