import React from 'react'
import { Dimensions,TouchableNativeFeedback, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Color from '../../../Constant/Color'
import FontFamily from '../../../Constant/FontFamily'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { TouchableRipple } from 'react-native-paper'
// import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

const {width, height} = Dimensions.get("screen")

const ProductHorizontalComponent = (props) => {

    let discount = 0;
    if(props.discount >= 1){
        discount = props.discount.toFixed(0)
    }

    const rightAction = () => {
    return <View><Text>{props.title}</Text></View>
    }

    return (
       
        <View
        onPress={() => {}}
        style={{
            height:160,
            marginTop:6,
            marginBottom:2,
            width:'96%',
            marginHorizontal:'2%',
            backgroundColor:'white',
            // borderBottomWidth:1,
            // borderBottomColor:'#f1f1f1',
            elevation:1,
            borderRadius:5,
            
            overflow:'hidden'
            
        }}>
            <TouchableOpacity
            
           activeOpacity={0.9}
            onPress={props.onButtonPress}
                style={{
                height:'100%',
                width:'100%',  
                flexDirection:'row'
            }}>
            <View style={{
                width:'35%',
                height:'100%',
                paddingVertical:8,
                paddingHorizontal:5,
                justifyContent:'space-around',
                alignItems:'center'
            }}>
                <Image  
                    style={{
                        width:100,
                        height:100
                    }}
                    source={{
                        uri:props.url
                    }}
                />
            </View>

            <View style={{
                width:'65%',
                height:'100%',
                
                justifyContent:'center',
                paddingVertical:10,
                paddingHorizontal:15
            }}>
                <View style={{
                    width:'90%',
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    paddingHorizontal:12
                }}>
                    
                        <Text style={{
                            fontSize:26,
                            marginRight:5,
                            fontFamily:FontFamily.bold,
                            color:'#000',
                        }}>{'\u20B9'+props.sp}</Text>
                   
                    <Text style={{
                        fontSize:18,
                        fontFamily:FontFamily.light,
                        color:Color.icon,
                        marginHorizontal:3,
                        textDecorationLine:'line-through',
                    }}>{'\u20B9'+props.cp}</Text>

                    <View style={{
                        paddingHorizontal:7,
                        height:20,
                        borderRadius:3,
                        marginLeft:5,
                        elevation:1,
                        backgroundColor:Color.green,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Text style={{
                            fontSize:10,
                            fontFamily:FontFamily.regular,
                            color:'white',
                           
                        }}>{discount}% OFF</Text>
                    </View>
                </View>



                    <View style={{
                        paddingHorizontal:12,
                        height:50,
                        justifyContent:'center',
                        alignItems:'flex-start'
                    }}>
                            <Text 
                                numberOfLines={2}
                                style={{
                                    
                                    fontSize:14,
                                    fontFamily:FontFamily.regular,
                                    color:Color.icon
                                }}>
                                {props.title}
                            </Text>
                    </View>

                    <View style={{
                        height:50,
                        width:'100%',
                        justifyContent:'flex-start',
                        alignItems:'flex-end',
                        paddingHorizontal:12
                    }}>
                        <View style={{
                            width:100,
                            height:'60%',
                            backgroundColor:'orange',
                            justifyContent:'center',
                            alignItems:'flex-end',
                            borderRadius:5,
                            overflow:'hidden',
                            flexDirection:'row'
                        }}>
                            <View style={{
                                    width:'75%',
                                    height:'100%',
                                    backgroundColor:Color.button,
                                    justifyContent:'center',
                                    alignItems:'center',
                            }}>
                                <Text style={{
                                    color:'white',
                                    fontSize:12,
                                    fontFamily:FontFamily.bold
                                }}>ADD</Text>
                            </View>
                            <View  style={{
                                    width:'25%',
                                    height:'100%',
                                    backgroundColor:Color.plus,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    elevation:1
                            }}>
                                <MaterialIcons 
                                    name="add"
                                    size={18}
                                    color={'white'}
                                />
                            </View>
                        </View>    
                    </View>
                <View>
                    
                </View>
            </View>
            </TouchableOpacity>
      
        </View>
       
       
    )
}

export default ProductHorizontalComponent

const styles = StyleSheet.create({})
