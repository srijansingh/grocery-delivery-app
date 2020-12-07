import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Placeholder from '../../../../Component/Placeholder'

const {width, height} = Dimensions.get("screen")

const CategorySkeleton = () => {
    return (
        <View style={{
            width:width/3-12,
            height:width/3,
            marginVertical:4,
            justifyContent:'space-around',
            alignItems:'center'
        }}>
             <View style={{width:'90%',height:'60%', marginVertical:10}}>
                <Placeholder height="100%" width="100%" />
              </View>

              <View style={{width:'70%',height:'15%', marginVertical:10}}>
                <Placeholder height="100%" width="100%" />
              </View>
          
        </View>
    )
}

export default CategorySkeleton

const styles = StyleSheet.create({})
