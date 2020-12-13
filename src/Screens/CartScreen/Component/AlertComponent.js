import React from 'react'
import Color from '../../../Constant/Color';
import FontFamily from '../../../Constant/FontFamily';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { StyleSheet, Text, View } from 'react-native'

const AlertComponent = (props) => {
    return (
        <>
        {props.visible &&
        <View style={{
            position:'absolute',
            top:80,
            width:'100%',
            height:100,
            
            justifyContent:'center',
            alignItems:'center'
        }}>
            <View style={{
                width:'70%',
                height:60,
                backgroundColor:'white',
                justifyContent:'space-between',
                paddingHorizontal:30,
                elevation:5,
            alignItems:'center',
            borderRadius:5,
            flexDirection:'row'
            }}>
                 <MaterialIcons
                        name="check-circle"
                        color={Color.green}
                        size={30}

                    />
                <View>
                <Text style={{fontSize:18, fontFamily:FontFamily.bold, color:Color.icon}}>New Address Added</Text>
                <Text style={{fontSize:12, fontFamily:FontFamily.light, color:Color.icon}}>Now, select from list</Text>
                </View>

            </View>
        </View>
        }
        </>
    )
}

export default AlertComponent

const styles = StyleSheet.create({})
