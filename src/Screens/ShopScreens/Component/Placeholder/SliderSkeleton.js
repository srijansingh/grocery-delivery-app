import React from 'react'

import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Placeholder from '../../../../Component/Placeholder'

const {width, height} = Dimensions.get("screen")

const SliderSkeleton = () => {
    return (
        <>
            <View style={{width:'100%',height:'100%'}}>
            <Placeholder height="100%" width="100%" />
            </View>

            <View style={{width:'100%',height:'100%'}}>
            <Placeholder height="100%" width="100%" />
            </View>
            <View style={{width:'100%',height:'100%'}}>
            <Placeholder height="100%" width="100%" />
            </View>
        </>
    )
}

export default SliderSkeleton

const styles = StyleSheet.create({})
