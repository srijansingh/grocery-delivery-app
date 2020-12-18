import React from 'react'
import { Dimensions,TouchableNativeFeedback, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Color from '../../../Constant/Color'
import FontFamily from '../../../Constant/FontFamily'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableRipple } from 'react-native-paper'
// import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { useDispatch, useSelector } from 'react-redux'
import * as cartAction from '../../../Store/action/cart'
import ImagePlaceholder from '../../../Component/ImagePlaceholder'

const {width, height} = Dimensions.get("screen")

const ProductHorizontalComponent = (props) => {

    let discount = 0;
    if(props.discount >= 1){
        discount = props.discount.toFixed(0)
    }

    const userid = useSelector(state => state.auth.userId);
    const availableProduct = useSelector(state => state.products.availableProduct);
    const productDetails = availableProduct.find(product => product._id === props.id);

    const item = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    let addButton;

    if(item[props.id]){
        addButton = (
            <View style={styles.countBox}>
                <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={() => {
                    dispatch(cartAction.removeFromCart(props.id))
                }}
                style={styles.icon}>
                    <MaterialCommunityIcon
                        name="minus"
                        size={15}
                        color={'white'}
                    />
                </TouchableOpacity>
                <View style={styles.countText}>
                    <Text style={{color:Color.button,fontSize:12,fontFamily:FontFamily.bold}}>{item[props.id].quantity}</Text>
                </View>
                <TouchableOpacity 
                activeOpacity={0.8} 
                 onPress={() => {
                    dispatch(cartAction.addToCart(productDetails, userid))
                }}
                style={styles.icon}>
                    <MaterialIcons 
                        name="add"
                        size={15}
                        color={'white'}
                    />
                </TouchableOpacity>
            </View> 
        )
    }else{
        addButton = (
            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => {
                dispatch(cartAction.addToCart(productDetails, userid))
            }}
            style={styles.buttonBox}>
                <View style={styles.buttonText}>
                    <Text style={{color:'white',fontSize:12,fontFamily:FontFamily.bold}}>ADD</Text>
                </View>
                <View  style={styles.icons}>
                    <MaterialIcons 
                        name="add"
                        size={15}
                        color={'white'}
                    />
                </View>
            </TouchableOpacity> 
        )
    }



    return (
       
        <View
        onPress={() => {}}
        style={{
            height:160,
            marginTop:props.marginTop,
            marginBottom:props.marginBottom,
            width:width,
            marginHorizontal:props.marginHorizontal,
            backgroundColor:'white',
            borderBottomWidth:0,
            borderBottomColor:'#f1f1f1',
          
            borderRadius:props.borderRadius,
            
            overflow:'hidden'
            
        }}>
            <TouchableOpacity
            
           activeOpacity={0.9}
            onPress={props.onButtonPress}
                style={{
                height:'100%',
                width:'100%',  
                flexDirection:'row'
            }}>
            <View style={{
                width:'35%',
                height:'100%',
                paddingVertical:8,
                paddingHorizontal:5,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <ImagePlaceholder />
                <Image  
                    style={{
                        width:100,
                        height:100
                    }}
                    source={{
                        uri:props.url
                    }}
                />
               
            </View>

            <View style={{
                width:'65%',
                height:'100%',
                
                justifyContent:'center',
                paddingVertical:10,
                paddingHorizontal:15
            }}>
                <View style={{
                    width:'90%',
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    paddingHorizontal:12
                }}>
                    
                        <Text style={{
                            fontSize:26,
                            marginRight:5,
                            fontFamily:FontFamily.bold,
                            color:'#000',
                        }}>{'\u20B9'+props.sp}</Text>
                   
                    <Text style={{
                        fontSize:18,
                        fontFamily:FontFamily.light,
                        color:Color.icon,
                        marginHorizontal:3,
                        textDecorationLine:'line-through',
                    }}>{'\u20B9'+props.cp}</Text>

                    <View style={{
                        paddingHorizontal:7,
                        height:20,
                        borderRadius:3,
                        marginLeft:5,
                        elevation:1,
                        backgroundColor:Color.green,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Text style={{
                            fontSize:10,
                            fontFamily:FontFamily.regular,
                            color:'white',
                           
                        }}>{discount}% OFF</Text>
                    </View>
                </View>



                    <View style={{
                        paddingHorizontal:12,
                        height:50,
                        justifyContent:'center',
                        alignItems:'flex-start'
                    }}>
                            <Text 
                                numberOfLines={2}
                                style={{
                                    
                                    fontSize:14,
                                    fontFamily:FontFamily.regular,
                                    color:Color.icon
                                }}>
                                {props.title}
                            </Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        {addButton}
                    </View>
                <View>
                    
                </View>
            </View>
            </TouchableOpacity>
      
        </View>
       
       
    )
}

export default ProductHorizontalComponent

const styles = StyleSheet.create({
    buttonContainer:{
        height:50,
        width:'100%',
        justifyContent:'flex-start',
        alignItems:'flex-end',
        paddingHorizontal:12
    },
    buttonBox:{
        width:100,
        height:'60%',
        backgroundColor:Color.button,
        justifyContent:'center',
        alignItems:'flex-end',
        borderRadius:5,
        overflow:'hidden',
        flexDirection:'row'
    },
    countBox:{
        width:100,
        height:'60%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'flex-end',
        borderRadius:5,
        overflow:'hidden',
        flexDirection:'row'
    },
    buttonText:{
        width:'70%',
        height:'100%',
        backgroundColor:Color.button,
        justifyContent:'center',
        alignItems:'center',
    },
    countText:{
        width:'40%',
        height:'100%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        width:'30%',
        height:'100%',
        borderRadius:5,
        backgroundColor:Color.button,
        justifyContent:'center',
        alignItems:'center',
        elevation:1
},
icons:{
    width:'30%',
    height:'100%',
    borderRadius:5,
    backgroundColor:Color.plus,
    justifyContent:'center',
    alignItems:'center',
    elevation:1
}
})
