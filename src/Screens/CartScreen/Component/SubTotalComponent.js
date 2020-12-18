import moment from 'moment';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import Color from '../../../Constant/Color';
import FontFamily from '../../../Constant/FontFamily';

const SubTotalComponent = () => {
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
            <View>
            <View style={{
                    height:30,
                    justifyContent:'center',
                    alignItems:'flex-start',
                    borderBottomColor:'#f1f1f1',
                    borderBottomWidth:1,
                    paddingHorizontal:15,

                }}>
                    <Text style={{fontFamily:FontFamily.black,fontSize:12, color:Color.icon}}>DELIVERY ESTIMATE</Text>
                </View>
                <View style={{
                    paddingHorizontal:15, 
                    backgroundColor:'white',
                    width:'100%',
                    marginBottom:5
                }}>
                    {
                        cartItem.map((list, index) => {
                            return (
                                <View 
                                key={index}
                                style={{
                                    flexDirection:'row',
                                    justifyContent:'flex-start',
                                    alignItems:'center',
                                    height:70,
                                    borderBottomWidth:1,
                                    borderBottomColor:'#f1f1f1'
                                }}>
                                    <Image 
                                        source={{uri:list.imageurl}}
                                        style={{height:50, width:50}}
                                    />
                                    <View style={{
                                        flexDirection:'row',
                                        marginHorizontal:15
                                    }}>
                                        <Text style={{fontFamily:FontFamily.light, color:Color.icon}}>Estimate delivery by </Text>
                                        <Text style={{fontFamily:FontFamily.regular, color:Color.icon}}>{moment().add(5,'day').format('DD MMM yyyy')}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
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
        </>
    )
}

export default SubTotalComponent

const styles = StyleSheet.create({
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
