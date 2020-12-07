import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Placeholder from '../../../../Component/Placeholder'
const {width, height} = Dimensions.get("screen")
const ProductHorizontalSkeleton = () => {
    return (
        <View style={{
            height:160,
            width:'96%',
            marginHorizontal:'2%',
            borderRadius:5,
            elevation:1,
            padding:20,
            backgroundColor:'white',
            marginTop:7,
            flexDirection:'row'
        }}>
            <View style={{width:'30%', height:'100%'}}>
                <Placeholder height="100%" width="100%" />
            </View>

            <View style={{width:'70%', height:'100%', paddingHorizontal:20}}>
                <View style={{
                    width:'100%',
                    height:'30%',
                    flexDirection:'row'
                }}>
                    <View style={{width:'30%',height:'100%', marginRight:15}}>
                        <Placeholder height="40%" width="100%" />
                    </View>
                    <View style={{width:'30%',height:'100%', marginHorizontal:5}}>
                        <Placeholder height="40%" width="80%" />
                    </View>
                    <View style={{width:'30%',height:'100%', marginHorizontal:15}}>
                        <Placeholder height="40%" width="100%" />
                    </View>
                </View>

                <View  style={{
                    width:'100%',
                    height:'40%'
                }}>
                <Placeholder height="30%" width="80%" />
                </View>

                <View style={{
                    width:'100%',
                    height:'30%',
                    justifyContent:'flex-end',
                    alignItems:'flex-end'
                }}>
                    <Placeholder height="70%" width="50%" />
                </View>
            </View>
        </View>
    )
}

export default ProductHorizontalSkeleton

const styles = StyleSheet.create({})
