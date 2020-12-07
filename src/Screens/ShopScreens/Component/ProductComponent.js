import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontFamily from '../../../Constant/FontFamily'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Color from '../../../Constant/Color'
import { color } from 'react-native-reanimated'

const {width, height} = Dimensions.get("screen")

const ProductComponent = (props) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.9}
        onPress={props.onButtonPress}
        style={styles.singleBox}>
            <View style={{
                    width:'100%',
                    height:'80%'
                }}>
                <View 
                    style={{
                        height:'70%',
                        flexDirection:'row',
                    }}>
                    <Image 
                        style={{
                            width:'60%',
                            height:'100%'
                        }}
                        source={{
                            uri:props.url
                        }}
                    />
                    <View 
                        style={{
                            justifyContent:'center',
                            alignItems:'flex-start',
                            padding:10,
                            width:'40%'
                        }}>
                        <View>
                            <Text 
                                style={{
                                    fontSize:26,
                                    fontFamily:FontFamily.black
                                }}>
                                    {'\u20B9'+props.sp}
                                </Text>
                        </View>
                        <View>
                            <Text 
                                style={{
                                    fontSize:20,
                                    color:Color.icon,
                                    fontFamily:FontFamily.light,
                                    textDecorationLine:'line-through'
                                }}>
                                    {'\u20B9'+props.cp}
                                </Text>
                        </View>
                        <View 
                            style={{
                                width:60,
                                height:24,
                                backgroundColor:Color.green,
                                justifyContent:'center',
                                alignItems:'center',
                                borderRadius:4,
                                marginVertical:8
                            }}>
                            <Text 
                                style={{
                                    color:'white'
                                }}>
                                    {props.discount}% off
                                </Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    width:'100%',
                    height:'30%',
                    justifyContent:'center',
                    alignItems:'flex-start',
                    padding:8
                    
                }}>
                    <Text 
                        style={{
                            fontSize:14,
                            fontFamily:FontFamily.regular,
                            color:Color.icon
                        }}
                    >
                        {props.title}
                    </Text>
                </View>
            </View>

            <View style={{
             
                width:'100%',
                height:'20%',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <View 
                    style={{
                        height:35,
                        width:'95%',
                        backgroundColor:Color.button,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        borderRadius:5,
                        overflow:'hidden'
                    }}
                >
                    <View 
                        style={{
                           
                            height:'100%',
                            width:'85%',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                    >
                        <Text style={{color:'white', fontFamily:FontFamily.black }}>ADD</Text>
                    </View>
                    <View 
                        style={{
                            height:'100%',
                            width:'15%',
                            backgroundColor:Color.plus,
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                    >
                        <MaterialIcons 
                            name="add"
                            size={20}
                            color="white"
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductComponent

const styles = StyleSheet.create({
    singleBox:{
        height:width * 3/5,
        width:width * 3/5,
        backgroundColor:'white',
        borderRadius:8,
        marginVertical:2.5,
        marginHorizontal:5,
        justifyContent:'center',
         alignItems:'center',
        //  elevation:3,
        borderColor:"#e6e6e6",
            borderWidth:1,
         padding:5
      },
})
