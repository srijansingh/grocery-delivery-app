import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Placeholder from '../../../../Component/Placeholder'

const {width, height} = Dimensions.get("screen")

const AccordianSkeleton = () => {
    return (
        <View style={{
            height:150,
            width:width,
            padding:20,
            backgroundColor:'white',
            marginVertical:3,
            flexDirection:'row'
        }}>
            <View style={{width:'40%', height:'100%'}}>
                <Placeholder height="100%" width="100%" />
            </View>

            <View style={{width:'60%', height:'100%', paddingHorizontal:20}}>
                <View style={{
                    width:'100%',
                    height:'40%'
                }}>
                <Placeholder height="40%" width="60%" />
                </View>

                <View  style={{
                    width:'100%',
                    height:'40%'
                }}>
                <Placeholder height="40%" width="80%" />
                </View>
            </View>
        </View>
    )
}

export default AccordianSkeleton

const styles = StyleSheet.create({})
