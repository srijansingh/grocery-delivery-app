import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Placeholder from '../../../../Component/Placeholder'

const {width, height} = Dimensions.get("screen")

const ProductSkeleton = () => {
    return (
        <View 
            style={{
            height:width * 3/5,
            width:width * 3/5,
            backgroundColor:'white',
            borderRadius:8,
            marginVertical:2.5,
            marginHorizontal:5,
            justifyContent:'center',
            alignItems:'center',
            padding:8,
            borderColor:"#e6e6e6",
            borderWidth:1,
            }}
        >

            <View style={{width:'100%', height:'70%', flexDirection:'row',  }}>
            
            <View style={{width:'60%',height:'90%'}}>
                <Placeholder height="100%" width="100%" />
            </View>

            <View style={{width:'40%',height:'100%', justifyContent:'center', paddingHorizontal:10, alignItems:'flex-start'}}>
                <View style={{width:'80%',height:'20%', marginBottom:10}}>
                <Placeholder height="100%" width="100%" />
                </View>

                <View style={{width:'70%',height:'15%', marginBottom:10}}>
                <Placeholder height="100%" width="100%" />
                </View>

                <View style={{width:'80%',height:'18%', marginBottom:10}}>
                <Placeholder height="100%" width="100%" />
                </View> 
            </View>


            </View>

            <View style={{height:'30%', width:'100%', paddingVertical:5, justifyContent:'center', alignItems:'center'}}>
                <View style={{width:'90%',height:'35%', marginBottom:10}}>
                <Placeholder height="100%" width="100%" />
                </View> 

                <View style={{width:'80%',height:'50%', marginBottom:10}}>
                <Placeholder height="100%" width="100%" />
                </View> 

            </View>

            
            
        </View>
    )
}

export default ProductSkeleton

