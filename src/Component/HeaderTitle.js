import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontFamily from '../Constant/FontFamily'

const HeaderTitle = (props) => {
    return (
        <View style={[styles.categoryHeader, {backgroundColor:props.backgroundColor}, props.style]} >
            <View style={{
                maxWidth:'70%'
            }}>
                <Text numberOfLines={1} style={[styles.categoryHeaderTitle, {color:props.headerColor}]} >{props.title}</Text>
            </View>

            <TouchableOpacity 
                style={[styles.categoryButton]} 
                onPress={props.onButtonPress}
                activeOpacity={0.8}
            > 
                <Text style={[styles.categoryButtonText, {color:props.themeColor}]}>{props.buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderTitle

const styles = StyleSheet.create({

    categoryHeader:{
        width:'100%',
        height:50,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:3 ,
        paddingLeft:15
    
      },
      categoryHeaderTitle:{
         fontSize:20,
         fontFamily:FontFamily.bold,
         color:'#000',
         
      },
      categoryButton:{
         width:80,
         height:40,
         borderRadius:2,
         justifyContent:'center',
         alignItems:'center',
         borderColor:'#f2f2f2',
         borderWidth:1,
         backgroundColor:'white'
      },
      categoryButtonText:{
       fontSize:14,
       fontFamily:FontFamily.bold,
      
      },

})
