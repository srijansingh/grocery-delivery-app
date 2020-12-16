import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { Modal } from 'react-native-paper'
import * as Animatable from 'react-native-animatable';

import Color from '../../../Constant/Color';
import FontFamily from '../../../Constant/FontFamily';
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import TrackingProgressComponent from './TrackingProgressComponent';

const TrackingComponent = (props) => {

    const renderProgress = (status, update, date) => {
        switch (status) {
            case 'processing':
                return (
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        
                    }}>
                        <TrackingProgressComponent 
                        color={Color.icon} 
                        status="Placed"
                        lineColor={Color.darkgreen}
                        >
                            <FontAwesome5 
                                name="check-circle"
                                color={Color.darkgreen}
                                size={30}
                            />
                        </TrackingProgressComponent>

                        <TrackingProgressComponent 
                        color={Color.icon} 
                        status="Shipped"
                        lineColor={Color.icon}
                        >
                            <FontAwesome5 
                                name="dot-circle"
                                color={Color.icon}
                                size={30}
                            />
                        </TrackingProgressComponent>

                        <TrackingProgressComponent color={Color.icon} 
                        color={Color.icon} 
                        status="Arriving"
                        lineColor={Color.icon}
                        >
                            <FontAwesome5 
                                name="dot-circle"
                                color={Color.icon}
                                size={30}
                            />
                        </TrackingProgressComponent>

                        <TrackingProgressComponent color={Color.icon} 
                            color={Color.icon} 
                            status="delivered"
                            lineColor={Color.icon}
                            >
                                <FontAwesome5 
                                    name="dot-circle"
                                    color={Color.icon}
                                    size={30}
                                />
                            </TrackingProgressComponent>

                      
                    </View>
                )

            case 'shipped':
                    return (
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            
                        }}>
                            <TrackingProgressComponent 
                            color={Color.icon} 
                            status="Placed"
                            lineColor={Color.darkgreen}
                            >
                                <FontAwesome5 
                                   name="check-circle"
                                    color={Color.darkgreen}
                                    size={30}
                                />
                            </TrackingProgressComponent>
    
                            <TrackingProgressComponent 
                            color={Color.icon} 
                            status="Shipped"
                            lineColor={Color.darkgreen}
                            >
                                <FontAwesome5 
                                    name="check-circle"
                                    color={Color.darkgreen}
                                    size={30}
                                />
                            </TrackingProgressComponent>
    
                            <TrackingProgressComponent color={Color.icon} 
                            color={Color.icon} 
                            status="Arriving"
                            lineColor={Color.icon}
                            >
                                <FontAwesome5 
                                    name="dot-circle"
                                    color={Color.icon}
                                    size={30}
                                />
                            </TrackingProgressComponent>

                            <TrackingProgressComponent color={Color.icon} 
                            color={Color.icon} 
                            status="delivered"
                            lineColor={Color.icon}
                            >
                                <FontAwesome5 
                                    name="dot-circle"
                                    color={Color.icon}
                                    size={30}
                                />
                            </TrackingProgressComponent>
    
                          
                        </View>
                    )
                
            case 'outfordelivery':
                    return (
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            
                        }}>
                            <TrackingProgressComponent 
                            color={Color.icon} 
                            status="Placed"
                            lineColor={Color.darkgreen}
                            >
                                <FontAwesome5 
                                    name="check-circle"
                                    color={Color.darkgreen}
                                    size={30}
                                />
                            </TrackingProgressComponent>
    
                            <TrackingProgressComponent 
                            color={Color.icon} 
                            status="Shipped"
                            lineColor={Color.darkgreen}
                            >
                                <FontAwesome5 
                                   name="check-circle"
                                    color={Color.darkgreen}
                                    size={30}
                                />
                            </TrackingProgressComponent>
    
                            <TrackingProgressComponent color={Color.icon} 
                            color={Color.icon} 
                            status="Arriving"
                            lineColor={Color.darkgreen}
                            >
                                <FontAwesome5 
                                   name="check-circle"
                                    color={Color.darkgreen}
                                    size={30}
                                />
                            </TrackingProgressComponent>

                            <TrackingProgressComponent color={Color.icon} 
                            color={Color.icon} 
                            status="delivered"
                            lineColor={Color.icon}
                            >
                                <FontAwesome5 
                                    name="dot-circle"
                                    color={Color.icon}
                                    size={30}
                                />
                            </TrackingProgressComponent>
    
                          
                        </View>
                    )

                case 'delivered':
                    return (
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            
                        }}>
                            <TrackingProgressComponent 
                            color={Color.icon} 
                            status="Placed"
                            lineColor={Color.darkgreen}
                            >
                                <FontAwesome5 
                                    name="check-circle"
                                    color={Color.darkgreen}
                                    size={30}
                                />
                            </TrackingProgressComponent>
    
                            <TrackingProgressComponent 
                            color={Color.icon} 
                            status="Shipped"
                            lineColor={Color.darkgreen}
                            >
                                <FontAwesome5 
                                    name="check-circle"
                                    color={Color.darkgreen}
                                    size={30}
                                />
                            </TrackingProgressComponent>

                            <TrackingProgressComponent color={Color.icon} 
                            color={Color.icon} 
                            status="Arriving"
                            lineColor={Color.darkgreen}
                            >
                                <FontAwesome5 
                                   name="check-circle"
                                    color={Color.darkgreen}
                                    size={30}
                                />
                            </TrackingProgressComponent>
    
                            <TrackingProgressComponent color={Color.icon} 
                            color={Color.icon} 
                            status="delivered"
                            lineColor={Color.darkgreen}
                            >
                                <FontAwesome5 
                                   name="check-circle"
                                    color={Color.darkgreen}
                                    size={30}
                                />
                            </TrackingProgressComponent>
    
                          
                        </View>
                    )

                    case 'cancelled':
                        return (
                            <View style={{
                                flexDirection:'row',
                                alignItems:'center',
                                
                            }}>
                                <TrackingProgressComponent 
                                color={Color.icon} 
                                status="Placed"
                                lineColor={Color.darkgreen}
                                >
                                    <FontAwesome5 
                                        name="check-circle"
                                        color={Color.darkgreen}
                                        size={30}
                                    />
                                </TrackingProgressComponent>
        
                                <TrackingProgressComponent 
                                color={Color.icon} 
                                status="cancelled"
                                lineColor={Color.icon}
                                >
                                    <Feather 
                                        name="x-circle"
                                        color={'red'}
                                        size={30}
                                    />
                                </TrackingProgressComponent>

                                <TrackingProgressComponent color={Color.icon} 
                                color={Color.icon} 
                                status="delivered"
                                lineColor={Color.icon}
                                >
                                    <Feather 
                                        name="x-circle"
                                        color={Color.icon}
                                        size={30}
                                    />
                            </TrackingProgressComponent>
                                
                            </View>
                        )
                
                    
        
            default:
                break;
        }
        return;
    }

    return (
        <Modal visible={props.visible}>
            <Animatable.View 
                animation="bounceInUp"
                duration={1000} 
                easing="ease-out"
                style={{height:'100%', justifyContent:'space-between'}}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.modelBack}
                    onPress={props.onCloseAction}
                >
                    <View style={styles.handle}></View>
                </TouchableOpacity>
   
                <View style={{
                        height:'30%',
                        backgroundColor:'white',
                        borderTopEndRadius:5,
                        borderTopLeftRadius:5
                    }}>
                       <View style={styles.heading}>
                           <Text style={{fontSize:16, fontFamily:FontFamily.bold, color:Color.icon}}>Track item</Text>
                           <Feather
                                name="x"
                                color={Color.icon}
                                size={20}
                            />
                       </View>

                        <View>
                            <View style={{
                                height:'80%',
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                               
                                {renderProgress(props.status, props.update, props.date)}
                            </View>
                        </View>

                    </View>
            </Animatable.View>
        </Modal>
    )
}

export default TrackingComponent

const styles = StyleSheet.create({
    modelBack:{
        height:'70%',
        justifyContent:'flex-end',
        alignItems:'center',
        
    },
    handle:{
        width:60,
        height:5,
        backgroundColor:'white',
        marginBottom:15,
        borderRadius:20,
       
    },
    heading:{
        height:80,
        paddingHorizontal:20,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1
    }
})
