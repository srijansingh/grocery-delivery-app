import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Color from '../../../Constant/Color';
import FontFamily from '../../../Constant/FontFamily';
import moment from 'moment'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import IonIcons from 'react-native-vector-icons/Ionicons'
const StatusComponent = (props) => {



    const renderStatus = (status) => {
        switch (status) {
            case 'processing':
                return (
                    <View style={{
                        padding:15
                    }}>
                        <View style={{
                            height:50,
                            backgroundColor:'white',
                            alignItems:'center',
                            flexDirection:'row',
                            padding:20
                        }}>
                            <View>
                                <Entypo
                                    name="dot-single"
                                    color={Color.icon}
                                    size={25}
                                />
                            </View>
                            <View style={{paddingHorizontal:15}}>
                            <Text style={{fontFamily:FontFamily.regular, fontSize:13, color:Color.icon}}>Arriving 
                            <Text style={{fontFamily:FontFamily.light, fontSize:12, color:Color.icon}}> on {moment(props.date).add(5,'day').format('ddd, DD MMM')}</Text> </Text>
                            </View>
                        </View>

                        <View style={{
                            height:70,
                            backgroundColor:Color.darkgreen,
                            alignItems:'center',
                            flexDirection:'row',
                            padding:20
                        }}> 

                        <View>
                            <IonIcons
                                name="ios-checkmark-circle"
                                color={'white'}
                                size={25}
                            />
                        </View>
                            <View style={{paddingHorizontal:15}}>
                                <Text style={{color:'white', fontFamily:FontFamily.bold}}>Placed</Text>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{fontFamily:FontFamily.bold,color:'white', fontSize:12}}>Order placed </Text>
                                <Text style={{fontFamily:FontFamily.light,color:'white', fontSize:12}}> on {moment(props.update).format('ddd, DD MMM')}</Text> 
                                </View>
                            </View>
                        </View>

                        <View style={{
                            height:50,
                            backgroundColor:'white',
                            alignItems:'center',
                            flexDirection:'row',
                            padding:20
                        }}>
                            <View>
                                <Entypo
                                    name="dot-single"
                                    color={Color.darkgreen}
                                    size={25}
                                />
                            </View>
                            <View style={{paddingHorizontal:15}}>
                            <Text style={{fontFamily:FontFamily.regular, fontSize:13}}>Order placed 
                            <Text style={{fontFamily:FontFamily.light, fontSize:12}}> on {moment(props.date).format('ddd, DD MMM')}</Text> </Text>
                            </View>
                        </View>
                    </View>
                )
            case 'shipped':
                return (
                    <View style={{
                        padding:15
                    }}>
                        <View style={{
                            height:50,
                            backgroundColor:'white',
                            justifyContent:'center',
                            padding:20
                        }}>
                            <Text style={{fontFamily:FontFamily.regular, fontSize:13}}>Order placed 
                            <Text style={{fontFamily:FontFamily.light, fontSize:12}}> on {moment(props.date).format('ddd, DD MMM')}</Text> </Text>
                        </View>

                        <View style={{
                            height:70,
                            backgroundColor:Color.darkgreen,
                            alignItems:'center',
                            flexDirection:'row',
                            padding:20
                        }}> 

                        <View>
                            <Feather
                                name="truck"
                                color={'white'}
                                size={25}
                            />
                        </View>
                            <View style={{paddingHorizontal:15}}>
                                <Text style={{color:'white', fontFamily:FontFamily.bold}}>Shipped</Text>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{fontFamily:FontFamily.bold,color:'white', fontSize:12}}>Shipped </Text>
                                <Text style={{fontFamily:FontFamily.light,color:'white', fontSize:12}}> on {moment(props.update).format('ddd, DD MMM')}</Text> 
                                </View>
                            </View>
                        </View>

                        <View style={{
                            height:50,
                            backgroundColor:'white',
                            justifyContent:'center',
                            padding:20
                        }}>
                            <Text style={{fontFamily:FontFamily.regular, fontSize:13}}>Order placed 
                            <Text style={{fontFamily:FontFamily.light, fontSize:12}}> on {moment(props.date).format('ddd, DD MMM')}</Text> </Text>
                        </View>
                    </View>
                )
                case 'delivered':
                    return (
                        <View style={{
                            padding:15
                        }}>
                        <View style={{
                            height:70,
                            backgroundColor:Color.darkgreen,
                            alignItems:'center',
                            flexDirection:'row',
                            padding:20
                        }}> 

                            <View>
                                <Feather
                                    name="box"
                                    color={'white'}
                                    size={25}
                                />
                            </View>
                            <View style={{paddingHorizontal:15}}>
                                <Text style={{color:'white', fontFamily:FontFamily.bold}}>Delivered</Text>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{fontFamily:FontFamily.light,color:'white', fontSize:12}}> on {moment(props.update).format('ddd, DD MMM')}</Text> 
                                </View>
                            </View>
                        </View>
                        </View>
                    )

                    case 'canceled':
                        return (
                            <View style={{
                                padding:15
                            }}>
                            <View style={{
                                height:70,
                                backgroundColor:'red',
                                alignItems:'center',
                                flexDirection:'row',
                                padding:20
                            }}> 
    
                                <View>
                                    <Feather
                                        name="x-circle"
                                        color={'white'}
                                        size={25}
                                    />
                                </View>
                                <View style={{paddingHorizontal:15}}>
                                    <Text style={{color:'white', fontFamily:FontFamily.bold}}>Canceled</Text>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <Text style={{fontFamily:FontFamily.light,color:'white', fontSize:12}}> on {moment(props.update).format('ddd, DD MMM')}</Text> 
                                    </View>
                                </View>
                            </View>
                            </View>
                        )
        
            default:
                break;
        }
        return;
    }

    return (
        <View>
            {renderStatus(props.status)}
        </View>
    )
    
}

export default StatusComponent

const styles = StyleSheet.create({})
