import React from 'react'
import { StyleSheet,Dimensions, Text, View, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Color from '../../../Constant/Color'
import FontFamily from '../../../Constant/FontFamily'

const {width, height} = Dimensions.get("screen")

const CategoryComponent = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.category} onPress={props.onButtonPress}>
            <View style={styles.categoryImage}>
                <Image 
                    style={{
                        height:'100%',
                        width:'100%',
                        borderRadius:8,
                        backgroundColor:'white'
                    }}
                    source={{
                        uri:props.url
                    }}
                />
            </View>
            <LinearGradient useAngle={true} angle={90} colors={['#FD7600','#FC9724','#FD7600']} style={styles.categoryBack}>
                <Text style={styles.categoryText}>{props.title.toUpperCase()}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CategoryComponent

const styles = StyleSheet.create({
    category:{
        width:'30%',
       height:width/3,
       marginVertical:5,
        marginHorizontal:'1.5%',
       backgroundColor:'#FD7600',
       padding:2,
       paddingBottom:0,
       borderRadius:8,
       justifyContent:'space-between',
       overflow:'hidden',
       alignItems:'center',
      
      },
      categoryImage:{
        flex:3,
        backgroundColor:'white',
        borderRadius:8,
        height:'67%',
        width:'100%',
        
      },
      categoryBack:{
       flex:1,
        backgroundColor:'green',
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:3 
   
      },
      categoryText:{
        textAlign:'center',
        fontSize:11,
        fontFamily:FontFamily.bold,
        color:'white'
      },
})
