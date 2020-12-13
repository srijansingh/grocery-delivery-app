import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useSelector } from 'react-redux'
import Color from '../Constant/Color'
import FontFamily from '../Constant/FontFamily'

import * as Animatable from 'react-native-animatable';
import Animated from 'react-native-reanimated';
const CartButton = (props) => {

    const cartSellingPrice = useSelector(state => state.cart.totalAmount);
    const cartCostPrice = useSelector(state => state.cart.totalCost);
    const cartTotalItem= useSelector(state => state.cart.totalItem);


    let totalItem;
    if(cartTotalItem >1){
        totalItem = (
            <View>
                <Text  style={styles.text}>{cartTotalItem}  Items</Text>
            </View>
        )
    }else{
        totalItem = (
            <View>
                <Text  style={styles.text}>{cartTotalItem} Item</Text>
            </View>
        )
    }

    if(cartTotalItem>0){
    return (
        <Animatable.View 
        style={styles.container}
            animation="fadeInUp"
            duration={500}>
        <TouchableOpacity 
        onPress={props.onButtonPress}
        activeOpacity={0.99}
        style={styles.button}
        >
            <View style={{
                flexDirection:'row',
                alignItems:'center'
            }}>
                {totalItem}
                <View style={{width:2,height:15,marginHorizontal:12, backgroundColor:'white', borderRadius:5}}></View>
                <Text style={styles.text}>{'\u20B9'+ cartSellingPrice}</Text>
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center'
            }}>
                <Text style={[styles.text, {marginHorizontal:10}]}>VIEW CART</Text>
                <MaterialIcons 
                    name="cart-outline"
                    color={'white'}
                    size={20}
                />
            </View>
        </TouchableOpacity>
        </Animatable.View>
    )
        }
        else{
            return <></>
        }
}

export default CartButton

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:0,
        width:'100%',
        borderTopWidth:1,
        borderTopColor:Color.plus,
        backgroundColor:Color.button,
        
        elevation:2
    },
    button:{
        flexDirection:'row',
        height:50,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
    },
    text:{
        color:'white',
        fontSize:12,
        fontFamily:FontFamily.black
    }
})
