import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontFamily from '../../../Constant/FontFamily'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from '../../../Constant/Color'
import { color } from 'react-native-reanimated'
import { useDispatch, useSelector } from 'react-redux'
import * as cartAction from '../../../Store/action/cart'

const {width, height} = Dimensions.get("screen")

const ProductComponent = (props) => {
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
                            size={16}
                            color="white"
                        />
                    </TouchableOpacity>
                    <View style={styles.countText}>
                        <Text style={{color:Color.button, fontSize:20, fontFamily:FontFamily.black }}>{item[props.id].quantity}</Text>
                    </View>
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={() => {
                            dispatch(cartAction.addToCart(productDetails, userid))
                        }}
                    style={styles.icon}>
                        <MaterialIcons 
                            name="add"
                            size={16}
                            color="white"
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
                    style={styles.buttonBox}
                >
                    <View style={styles.buttonText}>
                        <Text style={{color:'white', fontFamily:FontFamily.black }}>ADD</Text>
                    </View>
                    <View style={styles.icons}>
                        <MaterialIcons 
                            name="add"
                            size={16}
                            color="white"
                        />
                    </View>
                </TouchableOpacity>
        )
    }

    return (
        <View
        style={styles.singleBox}>
            <TouchableOpacity  
            activeOpacity={0.9}
            onPress={props.onButtonPress}
            style={{
                    width:'100%',
                    height:'80%'
                }}>
                <View 
                    style={{
                        height:'70%',
                        flexDirection:'row',
                    }}>
                    <Image 
                        style={{
                            width:'60%',
                            height:'100%'
                        }}
                        source={{
                            uri:props.url
                        }}
                    />
                    <View 
                        style={{
                            justifyContent:'center',
                            alignItems:'flex-start',
                            padding:10,
                            width:'40%'
                        }}>
                        <View>
                            <Text 
                                style={{
                                    fontSize:26,
                                    fontFamily:FontFamily.black
                                }}>
                                    {'\u20B9'+props.sp}
                                </Text>
                        </View>
                        <View>
                            <Text 
                                style={{
                                    fontSize:20,
                                    color:Color.icon,
                                    fontFamily:FontFamily.light,
                                    textDecorationLine:'line-through'
                                }}>
                                    {'\u20B9'+props.cp}
                                </Text>
                        </View>
                        <View 
                            style={{
                                width:60,
                                height:24,
                                backgroundColor:Color.green,
                                justifyContent:'center',
                                alignItems:'center',
                                borderRadius:4,
                                marginVertical:8
                            }}>
                            <Text 
                                style={{
                                    color:'white'
                                }}>
                                    {props.discount}% off
                                </Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    width:'100%',
                    height:'30%',
                    justifyContent:'center',
                    alignItems:'flex-start',
                    padding:8
                    
                }}>
                    <Text 
                        style={{
                            fontSize:14,
                            fontFamily:FontFamily.regular,
                            color:Color.icon
                        }}
                    >
                        {props.title}
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                {addButton}
            </View>
        </View>
    )
}

export default ProductComponent

const styles = StyleSheet.create({
    singleBox:{
        height:width * 3/5,
        width:width * 3/5,
        backgroundColor:'white',
        borderRadius:5,
        marginVertical:2.5,
        marginHorizontal:5,
        justifyContent:'center',
         alignItems:'center',
        //  elevation:3,
        borderColor:"#e6e6e6",
            borderWidth:1,
         padding:8
      },
      buttonBox:{
        height:35,
        width:'95%',
        backgroundColor:Color.button,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:5,
        overflow:'hidden'
    },
    countBox:{
        height:35,
        width:'80%',
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:5,
        overflow:'hidden'
    },
    buttonText:{
        height:'100%',
        width:'85%',
        justifyContent:'center',
        alignItems:'center'
    },
    countText:{
        height:'100%',
        width:'60%',
        justifyContent:'center',
        alignItems:'center'
    },

    icons:{
        height:'100%',
        width:'15%',
        backgroundColor:Color.plus,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    icon:{
        height:'100%',
        width:'20%',
        backgroundColor:Color.button,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    buttonContainer:{
             
        width:'100%',
        height:'20%',
        justifyContent:'center',
        alignItems:'center'
    }
})
