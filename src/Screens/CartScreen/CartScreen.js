import React, { useCallback, useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../Component/BackButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Color from '../../Constant/Color';
import FontFamily from '../../Constant/FontFamily';
import ProductHorizontalComponent from '../ShopScreens/Component/ProductHorizontalComponent';
import NocartItem from './Component/NocartItem';
import * as addressAction from '../../Store/action/address'
import ModalLoader from '../../Component/ModalLoader';

const CartScreen = (props) => {
    const dispatch = useDispatch();
    const cartSellingPrice = useSelector(state => state.cart.totalAmount);
    const cartCostPrice = useSelector(state => state.cart.totalCost);
    const cartTotalItem= useSelector(state => state.cart.totalItem);

    const cartItem = useSelector(state => {
        const listItem = [];
        for(const key in state.cart.items){
            listItem.push({
                productid:key,
                title:state.cart.items[key].title,
                imageurl:state.cart.items[key].imageurl,
                costprice:state.cart.items[key].costprice,
                sellingprice:state.cart.items[key].sellingprice,
                quantity:state.cart.items[key].quantity,
                total:state.cart.items[key].total
            })
        }
        return listItem.sort((a,b)=>a.productid > b.productid ? 1 : -1);
    });
    //-----------------------aDDRESS ------------------------

    const [isAddressLoading, setIsAddressLoading] = useState(false)
    const loadCategory = useCallback(async () => {
        setIsAddressLoading(true)
        try{
            await dispatch(addressAction.fetchAddress());
            setIsAddressLoading(false)
        }catch(err){
           console.log(err)
           setIsAddressLoading(false)
        }
      
    }, [dispatch, setIsAddressLoading]);
    
    useEffect(() => {
        loadCategory();
    }, [dispatch]);

    //---------------------DISCOUNT ----------------------------
    const discount = cartCostPrice - cartSellingPrice;

    let productDiscount;
    if(discount > 0){
        productDiscount = (
            <View>
                <Text style={{fontFamily:FontFamily.regular, color:Color.green}} >- {'\u20B9' + discount}</Text>
            </View>
        )
    }else{
        productDiscount = (
            <View>
                <Text style={{fontFamily:FontFamily.regular, color:Color.icon}} >- {'\u20B9' + discount}</Text>
            </View>
        )
    }


    //---------------------CALCULATING TOTAL ITEMS----------------------------

    let totalItem;
    if(cartTotalItem < 2){
        totalItem = (
            <View>
                <Text style={{fontSize:12, fontFamily:FontFamily.light, color:Color.icon}}>{cartTotalItem} Item</Text>
            </View>
        )
    }else{
        totalItem = (
            <View>
                <Text style={{fontSize:12, fontFamily:FontFamily.light, color:Color.icon}}>{cartTotalItem} Items</Text>
            </View>
        )
    }


    //--------------------- CALCULATING DELIVERY CHARGES ----------------------------

    let deliveryCharge;
    if(cartSellingPrice > 499){
        deliveryCharge = (
            <View>
                <Text style={{fontSize:12, fontFamily:FontFamily.regular, color:Color.green}}>Free</Text>
            </View>
        )
    }else{
        deliveryCharge = (
            <View>
                <Text style={{fontFamily:FontFamily.regular, color:'red'}} >+ {'\u20B9' + 50}</Text>
            </View>
        )
    }

    //--------------------- CALCULATING TOTAL PAYABLE SUBTOTAL COST ---------------------------- 

    let subTotal;
    if(cartSellingPrice > 499){
        subTotal = cartSellingPrice
    }else{
        subTotal = cartSellingPrice+50
    }

    //--------------------- RENDERING SCREEN BASED ON CART COUNT ----------------------------

    let mycart;
    if(cartTotalItem < 1){
        mycart = <NocartItem goToHome={() => props.navigation.navigate('Home')} />
    }else{
        mycart = (
            <>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.subTotal}>
                        <View style={styles.item}>
                            <Text style={{fontSize:13,fontFamily:FontFamily.regular, color:Color.icon}}>M.R.P.</Text>
                            <Text style={{fontFamily:FontFamily.regular, color:Color.icon}}>{'\u20B9'+cartCostPrice}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={{fontSize:13,fontFamily:FontFamily.regular, color:Color.icon}}>Products Discount</Text>
                            {productDiscount}
                        </View>
                        <View style={styles.item}>
                           
                            <Text style={{fontSize:13,fontFamily:FontFamily.regular, color:Color.icon}}>Delivery Charges</Text>
                            {deliveryCharge}
                        </View>
                        <View style={styles.itemPrice}>
                            <Text style={{fontFamily:FontFamily.bold, color:Color.icon}}>Sub Total</Text>
                            <Text style={{fontFamily:FontFamily.bold, color:Color.icon}}>{'\u20B9'+subTotal}</Text>
                        </View>  
                    </View>
                

                <View style={styles.cartItems}>
                    {
                        cartItem.map((item,index) => {
                            let discount = ((item.costprice - item.sellingprice) *100)/item.costprice
                            return (
                                <ProductHorizontalComponent
                                marginTop={0}
                                marginBottom={0}
                                borderRadius={0}
                                marginHorizontal={0}
                                width={'100%'}
                                key={index}
                                onButtonPress={() => {
                                    props.navigation.navigate('ProductDetail',{
                                        category:null,
                                        subcategory:null,
                                        id:item.productid,
                                        title:item.title
                                    })
                                }}
                                id={item.productid}
                                title={item.title}
                                discount={discount}
                                cp={item.costprice}
                                sp={item.sellingprice}
                                url = {item.imageurl}
                            />
                            )
                            })
                    }
                
                </View>
                </View>
            </ScrollView>

            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => {
                    props.navigation.navigate('SelectAddress', {addressId:null});
                }}
                style={styles.checkout}>
                <Text style={styles.checkText}>Checkout</Text>
                <View style={styles.checkPrice}>
                <Text style={styles.checkPriceText}>{'\u20B9'+subTotal}</Text>

                <MaterialIcons 
                    name="arrow-forward"
                    size={20}
                    color="white"
                />
                </View>
            </TouchableOpacity>
            </>
        )
    }


    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerText} >
                    <BackButton 
                        goBack={() => {props.navigation.goBack()}}
                        color={Color.primary}
                        name="arrow-back"
                    />
                    <View>
                        <Text style={styles.title}>My Cart</Text>
                        {totalItem}
                    </View>
                    
                    
                </View>
                <BackButton 
                        goBack={() => {props.navigation.jumpTo('SearchStack', {id:'wwws'})}}
                        color={Color.icon}
                        name="search"
                    />
            </View>
            {mycart}
            <ModalLoader 
                visible={isAddressLoading}
            />
        </>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height:55,
        width:'100%',
        backgroundColor:"white",
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1
    },
    headerText:{
        width:'80%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    title:{
        fontSize:15,
        color:'#707070',
        fontFamily:FontFamily.regular
    },
    container:{
        paddingVertical:5,
        paddingHorizontal:8,
        
    },
    subTotal:{
        backgroundColor:'white',
        elevation:1,
        paddingVertical:3,
        borderRadius:5,
        overflow:'hidden'
    },
    item:{
        height:35,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15
    },
    itemPrice:{
        borderTopColor:'#f1f1f1',
        borderTopWidth:1,
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15
    },
    checkout:{
        height:50,
        backgroundColor:Color.button,
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center',
        flexDirection:'row',
        borderTopColor:Color.plus,
        borderTopWidth:1
    },
    checkText:{
        color:'white',
        fontSize:15,
        fontFamily:FontFamily.regular
    },
    checkPrice:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    checkPriceText:{
        color:'white',
        fontSize:15,
        fontFamily:FontFamily.bold,
        marginRight:10
},
cartItems:{
    borderRadius:5,
    overflow:'hidden',
    borderColor:'#e6e6e6',
    borderWidth:1,
    marginVertical:10,
    
}
})
