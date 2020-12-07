import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../../Constant/Color'
import FontFamily from '../../../Constant/FontFamily'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { TouchableRipple } from 'react-native-paper'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

const {width, height} = Dimensions.get("screen")

const ProductVerticalComponent = (props) => {

    let discount = 0;
    if(props.discount >= 1){
        discount = props.discount.toFixed(0)
    }

    return (
       
        <TouchableOpacity 
        activeOpacity={0.9}
        onPress={props.onButtonPress}
        style={{
            width:width*2/5+15,
            marginVertical:5,
            backgroundColor:'white',
            marginHorizontal:6,
            padding:6,
            borderRadius:5,
            borderColor:"#e6e6e6",
            borderWidth:1,
            minHeight:250,
            justifyContent:"space-between"
        }}>
            <View>
            <View style={{
                width:width*2/5-2,
                height:160,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'white'
            }}>
                <Image 
                    style={{
                        minHeight:100,
                        maxHeight:'100%',
                        minWidth:120,
                        maxWidth:140,
                    }}

                    source={{
                        uri:props.url
                    }}
                />
            </View>

            <View style={{
                flexDirection:'row',
                padding:5,
                justifyContent:'flex-start',
                alignItems:'flex-end'
            }}>
                <Text style={{
                    fontSize:20,
                    marginRight:5,
                    fontFamily:FontFamily.bold,
                    color:'#000',
                }}>{'\u20B9'+props.sp}</Text>
                <Text style={{
                    fontSize:15,
                    marginRight:5,
                    fontFamily:FontFamily.regular,
                    textDecorationLine:"line-through",
                    color:Color.icon,
                }}>{'\u20B9'+props.cp}</Text>
            </View>

            <View style={{
                padding:5
            }}>
                <Text style={{
                    fontFamily:FontFamily.regular,
                    color:Color.icon
                }}>{props.title}</Text>
            </View>

            </View>
            
            <View style={{
                    height:30,
                    width:'100%',
                    justifyContent:'flex-start',
                    alignItems:'flex-end',
                    paddingHorizontal:2
                }}>
                    <View style={{
                        width:"100%",
                        height:'100%',
                        backgroundColor:'orange',
                        justifyContent:'center',
                        alignItems:'flex-end',
                        borderRadius:5,
                        overflow:'hidden',
                        flexDirection:'row'
                    }}>
                        <View style={{
                                width:'80%',
                                height:'100%',
                                backgroundColor:Color.button,
                                justifyContent:'center',
                                alignItems:'center',
                        }}>
                            <Text style={{
                                color:'white',
                                fontSize:12,
                                fontFamily:FontFamily.bold
                            }}>ADD</Text>
                        </View>
                        <View  style={{
                                width:'20%',
                                height:'100%',
                                backgroundColor:Color.plus,
                                justifyContent:'center',
                                alignItems:'center',
                                elevation:1
                        }}>
                            <MaterialIcons 
                                name="add"
                                size={18}
                                color={'white'}
                            />
                        </View>
                    </View>    
                </View>
        </TouchableOpacity>
       
       
    )
}

export default ProductVerticalComponent

const styles = StyleSheet.create({
    container:{
        height:400,
        width:width/2,
        marginTop:6,
        marginBottom:2,
        width:'96%',
        marginHorizontal:'2%',
        backgroundColor:'white',
       elevation:2,
        borderRadius:5,
        
        overflow:'hidden'
        
    },
    buttonBox:{
        height:'100%',
        width:'100%',  
        flexDirection:'column'
    },
    imageBox:{
        width:'35%',
        height:'100%',
        paddingVertical:8,
        paddingHorizontal:5,
        
        justifyContent:'space-around',
        alignItems:'center'
    },
    image:{
        width:100,
        height:100
    },
    description:{
        width:'65%',
        height:'100%',
        
        justifyContent:'center',
        paddingVertical:10,
        paddingHorizontal:15
    },
    priceBox:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingHorizontal:12
    },
    sp:{
        fontSize:26,
        marginRight:5,
        fontFamily:FontFamily.bold,
        color:'#000',
    },
    cp:{
        fontSize:18,
        fontFamily:FontFamily.light,
        color:Color.icon,
        marginHorizontal:3,
        textDecorationLine:'line-through',
    },
    discount:{
        paddingHorizontal:7,
        height:20,
        borderRadius:3,
        marginLeft:5,
        elevation:1,
        backgroundColor:Color.green,
        justifyContent:'center',
        alignItems:'center'
    },
    discountText:{
        fontSize:10,
        fontFamily:FontFamily.regular,
        color:'white',
       
    },
    titleBox:{
        paddingHorizontal:12,
        height:50,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    titleText:{
        fontSize:14,
        fontFamily:FontFamily.regular,
        color:Color.icon
    }
})




// <TouchableNativeFeedback 
//                 accessible={true}
//                 accessibilityRole="button"
//                 useForeground
//                 onPress={props.onButtonPress}
//                 style={styles.buttonBox}
//             >
//             <View style={styles.imageBox}>
//                 <Image  
//                     style={styles.image}
//                     source={{
//                         uri:props.url
//                     }}
//                 />
//             </View>

//             <View style={styles.description}>
//                 <View style={styles.priceBox}>
                    
//                     <Text style={styles.sp}>{'\u20B9'+props.sp}</Text>
                   
//                     <Text style={styles.cp}>{'\u20B9'+props.cp}</Text>

//                     <View style={styles.discount}>
//                         <Text style={styles.discountText}>{discount}% OFF</Text>
//                     </View>
//                 </View>



//                     <View style={styles.titleBox}>
//                             <Text 
//                                 numberOfLines={2}
//                                 style={styles.titleText}>
//                                 {props.title}
//                             </Text>
//                     </View>

//                     <View style={{
//                         height:50,
//                         width:'100%',
//                         justifyContent:'flex-start',
//                         alignItems:'flex-end',
//                         paddingHorizontal:12
//                     }}>
//                         <View style={{
//                             width:100,
//                             height:'60%',
//                             backgroundColor:'orange',
//                             justifyContent:'center',
//                             alignItems:'flex-end',
//                             borderRadius:5,
//                             overflow:'hidden',
//                             flexDirection:'row'
//                         }}>
//                             <View style={{
//                                     width:'75%',
//                                     height:'100%',
//                                     backgroundColor:Color.button,
//                                     justifyContent:'center',
//                                     alignItems:'center',
//                             }}>
//                                 <Text style={{
//                                     color:'white',
//                                     fontSize:12,
//                                     fontFamily:FontFamily.bold
//                                 }}>ADD</Text>
//                             </View>
//                             <View  style={{
//                                     width:'25%',
//                                     height:'100%',
//                                     backgroundColor:Color.plus,
//                                     justifyContent:'center',
//                                     alignItems:'center',
//                                     elevation:1
//                             }}>
//                                 <MaterialIcons 
//                                     name="add"
//                                     size={18}
//                                     color={'white'}
//                                 />
//                             </View>
//                         </View>    
//                     </View>
//                 <View>
                    
//                 </View>
//             </View>
//             </TouchableNativeFeedback>