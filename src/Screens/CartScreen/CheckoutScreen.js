import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BackButton from '../../Component/BackButton';
import Color from '../../Constant/Color';
import FontFamily from '../../Constant/FontFamily';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux';
import * as orderAction from '../../Store/action/order';
import ModalLoader from '../../Component/ModalLoader';

const CheckoutScreen = (props) => {
    const {selectedId} = props.route.params;
    
    const dispatch = useDispatch();
    const [orderid, setOrderid] = useState('SHOID'+Math.random().toString(36).substr(2, 10).toUpperCase());
    const [isLoading, setIsLoading] = useState(false)
    const addressData = useSelector(state => state.address.address);
    const selectedAddress = addressData.find(address => address.id === selectedId);

    

    useEffect(() => {
        if( cartTotalItem < 1){
            props.navigation.navigate('Home')
        }
    }, [])

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


    const submitHandler = async () => {
        
        setIsLoading(true)
        try {
            await dispatch(orderAction.addOrder(orderid, cartItem, cartSellingPrice, cartTotalItem, selectedAddress ))
            setIsLoading(false)
            props.navigation.navigate('Confirmation', {orderid:orderid})
        }
        catch(err){
            console.log(err)
            setIsLoading(false)
        }
    }


    const cartSellingPrice = useSelector(state => state.cart.totalAmount);
    const cartCostPrice = useSelector(state => state.cart.totalCost);
    const cartTotalItem= useSelector(state => state.cart.totalItem);

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
        totalItem = cartTotalItem + ' Item'
    }else{
        totalItem = cartTotalItem + ' Items'
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
                    <Text style={styles.title}>PAYMENT</Text>
                </View>
                
                
            </View>
        </View>
        <ScrollView>
        <View style={{ marginVertical:10,}}>
        <View style={{
           
                    height:30,
                    justifyContent:'center',
                    alignItems:'flex-start',
                    borderBottomColor:'#f1f1f1',
                    borderBottomWidth:1,
                    paddingHorizontal:15,

                }}>
                    <Text style={{fontFamily:FontFamily.black,fontSize:12, color:Color.icon}}>PAYMENT OPTION</Text>
                </View>
                <View style={{
                    height:70,
                    justifyContent:'flex-start',
                    alignItems:'center',
                    paddingHorizontal:15, 
                    backgroundColor:'white',
                    width:'100%',
                    marginBottom:5,
                    flexDirection:'row'
                }}>
                    <MaterialIcons
                        name={"cash"}
                        color={Color.icon}
                        size={35}

                    />

                    <Text style={{fontFamily:FontFamily.bold, color:Color.icon, marginHorizontal:15}}>CASH ON DELIVERY</Text>
                </View>
        </View>


        <View style={styles.subTotal}>
                <View style={{
                    height:40,
                    justifyContent:'center',
                    alignItems:'flex-start',
                    borderBottomColor:'#f1f1f1',
                    borderBottomWidth:1,
                    paddingHorizontal:15,

                }}>
                    <Text style={{fontFamily:FontFamily.black,fontSize:12, color:Color.icon}}>PRODUCT DETAILS ({totalItem})</Text>
                </View>
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
                </ScrollView>
               
                <View style={{
                height:60,
                backgroundColor:'white',
                paddingHorizontal:15,
                justifyContent:'center'
            }}>
                <TouchableOpacity 
                onPress={submitHandler}
                activeOpacity={0.9}
                style={{
                    backgroundColor:Color.button,
                    height:45,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:5,
                    
                }}>
                    <Text style={{color:'white', fontSize:16, fontFamily:FontFamily.bold}}>Place Now</Text>
                </TouchableOpacity>
            </View>

            <ModalLoader 
                    visible={isLoading || cartTotalItem < 1}
                />
        </>
        )
}

export default CheckoutScreen

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
        fontFamily:FontFamily.bold
    },
    subTotal:{
        backgroundColor:'white',
       
        paddingVertical:3,
        borderRadius:5,
        overflow:'hidden',
        marginVertical:10,
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
})
