import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import Color from '../../../Constant/Color';
import FontFamily from '../../../Constant/FontFamily';
import moment from 'moment'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const ActionComponent = ({onCancelPress, onTrackPress, status}) => {

    const renderAction = (status) => {
        switch (status) {
            case 'processing':
                return (
                    <View style={styles.container}>
                    <TouchableOpacity 
                    onPress={onCancelPress}
                    activeOpacity={0.8}
                    style={styles.buttonOne}>
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
                    style={styles.buttonTwo}>
                        <SimpleLineIcons
                            name="location-pin"
                            color={Color.icon}
                            size={20}
                        />
                        <Text style={{fontSize:12,paddingVertical:2,fontFamily:FontFamily.bold, color:Color.icon}}>Track</Text>
                    </TouchableOpacity>
                </View>
                )
                case 'shipped':
                    return (
                        <View style={styles.container}>
                        <TouchableOpacity 
                        onPress={onCancelPress}
                        activeOpacity={0.8}
                        style={styles.buttonOne}>
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
                        style={styles.buttonTwo}>
                            <SimpleLineIcons
                                name="location-pin"
                                color={Color.icon}
                                size={20}
                            />
                            <Text style={{fontSize:12,paddingVertical:2,fontFamily:FontFamily.bold, color:Color.icon}}>Track</Text>
                        </TouchableOpacity>
                    </View>
                    )
            
                case 'outfordelivery':
                return (
                    <View style={styles.container}>
                    <TouchableOpacity 
                    onPress={onCancelPress}
                    activeOpacity={0.8}
                    style={styles.buttonOne}>
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
                    style={styles.buttonTwo}>
                        <SimpleLineIcons
                            name="location-pin"
                            color={Color.icon}
                            size={20}
                        />
                        <Text style={{fontSize:12,paddingVertical:2,fontFamily:FontFamily.bold, color:Color.icon}}>Track</Text>
                    </TouchableOpacity>
                </View>
                )
                case 'delivered':
                    return (
                        <View style={styles.container}>
                        
    
                        <TouchableOpacity 
                        onPress={onTrackPress}
                        activeOpacity={0.8}
                        style={[styles.buttonTwo, {width:'100%'}]}>
                            <SimpleLineIcons
                                name="location-pin"
                                color={Color.icon}
                                size={20}
                            />
                            <Text style={{fontSize:12,paddingVertical:2,fontFamily:FontFamily.bold, color:Color.icon}}>Track</Text>
                        </TouchableOpacity>
                    </View>
                    )

                    case 'cancelled':
                        return (
                            <View style={styles.container}>
                           
                            <TouchableOpacity 
                            onPress={onTrackPress}
                            activeOpacity={0.8}
                            style={[styles.buttonTwo, {width:'100%'}]}>
                                <SimpleLineIcons
                                    name="location-pin"
                                    color={Color.icon}
                                    size={20}
                                />
                                <Text style={{fontSize:12,paddingVertical:2,fontFamily:FontFamily.bold, color:Color.icon}}>Track</Text>
                            </TouchableOpacity>
                        </View>
                        )
        
            default:
                break;
        }
    }

    return (
        <>
            {renderAction(status)}
        </>
    )
}

export default ActionComponent

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        marginVertical:10,
        flexDirection:'row',
        width:'100%',
        elevation:2 
      
    },
    buttonOne:{
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        width:'50%',
        borderRightColor:'#f1f1f1',
        borderRightWidth:1,
        
    },
    buttonTwo:{
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        width:'50%',
        borderLeftColor:'#f1f1f1',
        borderLeftWidth:1,
    }
})
