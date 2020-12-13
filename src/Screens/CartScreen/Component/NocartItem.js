import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../../Constant/Color'
import FontFamily from '../../../Constant/FontFamily'

const NocartItem = () => {
    return (
        <ScrollView style={{flex:1, backgroundColor:'white'}}>
                    <View style={{marginVertical:50,justifyContent:'space-around', alignItems:'center'}}>
                        <Image 
                            source={require('../../../../asset/images/emptycartitem.png')}
                            style={{
                                height:200,
                                width:200
                            }}
                        />

                        <View style={{
                           marginVertical:20,
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <Text style={{
                                fontSize:17,
                                fontFamily:FontFamily.light,
                                color:'#000',
                                paddingVertical:4
                            }}>No items in your cart</Text>
                            <Text style={{
                                fontSize:14,
                                fontFamily:FontFamily.light,
                                color:Color.icon,
                                paddingVertical:4
                            }}>Your favorite items are just few click away</Text>
                            <TouchableOpacity style={{
                                height:40,
                                backgroundColor:Color.button,
                                justifyContent:'center',
                                alignItems:'center',
                                paddingHorizontal:20,
                                borderRadius:5,
                                marginVertical:10
                            }}>
                                <Text style={{
                                    fontSize:14,
                                    fontFamily:FontFamily.regular,
                                    color:'white'
                                }}>Start Shopping</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
    )
}

export default NocartItem

const styles = StyleSheet.create({})
