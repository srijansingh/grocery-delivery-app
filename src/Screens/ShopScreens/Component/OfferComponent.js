import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Color from '../../../Constant/Color'
import FontFamily from '../../../Constant/FontFamily'
const {width, height} = Dimensions.get("screen")

const OfferComponent = () => {
    return (
        <View style={{
            width:width*3/4,
            height:width*2/5,
            backgroundColor:'white',
            marginHorizontal:5,
            borderRadius:3,
            padding:5,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
          }}>
              <View style={{
                  width:'65%',
                  height:'80%',
                  justifyContent:'space-around',
                  paddingLeft:20
              }}>

                  <View style={{
                     
                  }}>
                      <Text style={{
                          fontSize:20,
                          fontFamily:FontFamily.black
                      }}>{'\u20B9'}78 OFF 1L OIL</Text>
                  </View>

                  <View style={{
                     flexDirection:'row'
                    }}>
                        <Text style={{
                            fontSize:15,
                            fontFamily:FontFamily.light,
                            color:Color.icon
                        }}>Code : </Text>
                        
                        <Text style={{
                            fontSize:17,
                            fontFamily:FontFamily.bold,
                            color:'green'
                        }}>OIL</Text>
                    </View>

                    <View >
                        <Text style={{
                      fontSize:12,
                      fontFamily:FontFamily.regular,
                      color:Color.icon
                    }}>Min. Txn {'\u20B9'}200</Text>
                    </View>

                    <View style={{
                     width:80,
                     height:25,
                     backgroundColor:Color.accent,
                     borderRadius:5,
                     justifyContent:'center',
                     alignItems:'center',
                     marginVertical:5,
                     elevation:2
                    }}>
                        <Text style={{
                            fontSize:12,
                            fontFamily:FontFamily.regular,
                            color:'white'
                        }}>Shop Now</Text>
                    </View>

              </View>

              <View style={{
                  width:'35%',
                  height:'100%',
                  justifyContent:'center',
                  alignItems:'center'
              }}>

                  <Image 
                    style={{
                        height:'90%',
                        width:'90%'
                    }}
                    source={{
                        uri:'https://webcdn.grofers.com/cdn/pdp/category-l0-16.jpg'
                    }}

                  />
                
              </View>

          </View>
    )
}

export default OfferComponent

const styles = StyleSheet.create({})
