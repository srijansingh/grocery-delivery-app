import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BackButton from '../../Component/BackButton';
import Color from '../../Constant/Color';
import FontFamily from '../../Constant/FontFamily';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderTitle from '../../Component/HeaderTitle';
import { URL } from '../../../BASE_URL';
import ProductVerticalComponent from './Component/ProductVerticalComponent';
import { useDispatch, useSelector } from 'react-redux';
import * as cartAction from '../../Store/action/cart'
import BadgeButton from '../../Component/BadgeButton';
import CartButton from '../../Component/CartButton';

const {height, width} = Dimensions.get("screen")

const ProductDetailScreen = ({route, navigation}) => {
    const userid = useSelector(state => state.auth.userId);
    
    const {id, title, category, subcategory} = route.params;
    const [isDescriptionShow, setDescriptionShown] = useState(true);

    const handleDescription = () => {
        setDescriptionShown(!isDescriptionShow)
    }

    const dispatch = useDispatch()


    //Product Detail
    const availableProduct = useSelector(state => state.products.availableProduct);
    const productDetails = availableProduct.find(product => product._id === id);
    const productCategory = availableProduct.filter(product => product.category === category);
    const productSubcategory = availableProduct.filter(product => product.subcategory === subcategory);
    
    const cartItem = useSelector(state => state.cart.items);
    const cartCount = useSelector(state => state.cart.totalItem);
    const item = useSelector(state => state.cart.items);

    let addButton;

    if(item[id]){
        addButton = (
            <View style={styles.countBox}>
                <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={() => {
                    dispatch(cartAction.removeFromCart(id))
                }}
                style={styles.icon}>
                    <MaterialCommunityIcon
                        name="minus"
                        size={15}
                        color={'white'}
                    />
                </TouchableOpacity>
                <View style={styles.countText}>
                    <Text style={{color:Color.button,fontSize:12,fontFamily:FontFamily.bold}}>{item[id].quantity}</Text>
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
            style={styles.addButton}>
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
  

    const refContainer = useRef();

     useEffect(() => {
        refContainer.current.scrollTo({x: 0, y: 0, animated: true});
     },[id,refContainer])
   

     const renderSimilar = ({item, index}) => {
        return <ProductVerticalComponent 
            onButtonPress={() => {
                navigation.navigate('ProductDetail',{
                    category:item.category,
                    subcategory:item.subcategory,
                    id:item._id,
                    title:item.title
                })
            }}
            id={item._id}
            title={item.title}
            sp={item.sellingprice}
            cp={item.costprice}
            discount={item.discount*100}
            url={item.imageurl}

        />
     }

     const loader = (
         <View style={{
             width:width,
             padding:15,
             justifyContent:'center',
             alignItems:'center',
             marginBottom:8,
             backgroundColor:'white'
         }}>
             <ActivityIndicator color={Color.icon} size={20} size="large" />
         </View>
     )

    return (
        <>
        <View style={styles.header}>
                <View style={styles.headerText} >
                    <BackButton 
                        goBack={() => {navigation.goBack()}}
                        color={Color.primary}
                        name="arrow-back"
                    />
                    <View>
                        <Text style={styles.title}>{title.toUpperCase()}</Text>
                    </View>

                    
                </View>
                <BadgeButton
                       goBack={() => {navigation.navigate('CartScreen')}}
                        color={Color.icon}
                        name="shopping-cart"
                        count={cartCount}
                    />
            </View>
        <ScrollView 
            ref={refContainer}
            style={{paddingBottom:100}}
        >
        <View>
            <View style={styles.imageBox}>
            <Image 
                style={styles.image}
                source={{
                    uri:productDetails.imageurl
                }}
            />
        </View>
            

            <View style={{padding:15,backgroundColor:'white'}}>
                    <View style={styles.offer}>
                       <Text style={styles.offerText}>{productDetails.discount*100+'% OFF'}</Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>{productDetails.title}</Text>
                    </View>
                    <View style={styles.priceBox}>
                        <Text style={styles.costHead}>Product MRP:</Text>
                        <Text style={styles.costprice}>{'\u20B9'+productDetails.costprice}</Text>
                    </View>

                    <View style={styles.priceBox}>
                        <Text style={styles.sellingHead}>Selling Price:</Text>
                        <Text style={styles.sellingprice}>{'\u20B9'+productDetails.sellingprice}</Text>
                    </View>

                    <View style={[styles.priceBox,styles.buttonBox]}>
                        <Text style={styles.tinyText}>(Inclusive of all taxes)</Text>

                        {addButton}
                    </View>

            </View>

            <View style={{marginVertical:8,backgroundColor:'white'}}>
               <TouchableOpacity
                onPress={handleDescription}
                activeOpacity={0.8}
                style={styles.description}>
                    <Text style={styles.descriptionText}>Description</Text>

                    <View>
                        <MaterialIcons 
                            name={isDescriptionShow ? "keyboard-arrow-down": "keyboard-arrow-right"}
                            size={20}
                            color={Color.icon}
                        />
                    </View>
                </TouchableOpacity> 

                    {
                        isDescriptionShow ?
                        <View style={styles.details}>
                            <Text style={styles.detailsText}>{productDetails.description}</Text>
                        </View>
                        :
                        null
                    }
                
            </View>

           {
               subcategory &&
           
                <View style={{marginBottom:8,backgroundColor:'white'}} >
                    <HeaderTitle 
                        title="Similar Product"
                        themeColor="#FF4600"
                        headerColor={Color.icon}
                        backgroundColor={'#fff'}
                        buttonTitle="View All"
                        onButtonPress={() => alert( )}
                    />
    
                    <FlatList 
                        showsHorizontalScrollIndicator={false}
                        style={styles.similarBox}
                        horizontal={true}
                        data={productSubcategory}
                        keyExtractor={item => item._id}
                        renderItem={renderSimilar}
                        
                    />
    
                </View>

           }

                
           {
               subcategory &&
           
            
                <View style={{marginBottom:50,backgroundColor:'white'}} >
                    <HeaderTitle 
                        title="Frequently Bought together"
                        themeColor="#FF4600"
                        headerColor={Color.icon}
                        backgroundColor={'#fff'}
                        buttonTitle="View All"
                        onButtonPress={() => alert('Presses')}
                    />
    
                    <FlatList 
                        showsHorizontalScrollIndicator={false}
                        style={styles.similarBox}
                        horizontal={true}
                        data={productCategory}
                        keyExtractor={item => item._id}
                        renderItem={renderSimilar}
                        
                    />
    
                </View>
}
        </View>
        </ScrollView>
        <CartButton
                    onButtonPress={() => (
                        navigation.navigate('CartScreen')
                    )}
                />
        </>
    )
}

export default ProductDetailScreen

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
    imageBox:{
        height:250,
        
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1
    },
    image:{
        minHeight:200,
       minWidth:200,
       maxHeight:'100%',
       maxWidth:'100%'
    },
    offer:{
        width:70,
        paddingVertical:3,
        marginBottom:5,
        backgroundColor:Color.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3

    },
    offerText:{
        fontSize:12,
        fontFamily:FontFamily.light,
        color:'white'
    },
    title:{
        paddingVertical:5,
        width:'100%'
    },
    titleText:{
        fontFamily:FontFamily.regular,
        fontSize:16,
        width:'80%',
        color:Color.icon
    },
    priceBox:{
        paddingVertical:3,
        flexDirection:'row'
    },
    buttonBox:{
        justifyContent:'space-between', 
        flexDirection:'row', 
        alignItems:'center',
        marginRight:10, 
    },
    tinyText:{
        fontFamily:FontFamily.regular,
        color:Color.icon,
        fontSize:12
    },
    addButton:{
        width:110,
        height:30,
        flexDirection:'row',
        borderRadius:3, 
        overflow:'hidden',
        backgroundColor:Color.button,
        
    },
    similarBox:{
        width:'100%',
        paddingVertical:8,
    },

    addbuttonBox:{
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
        width:110,
        height:30,
        flexDirection:'row',
        borderRadius:3, 
        overflow:'hidden',
        backgroundColor:'white',
        
    },
    buttonText:{
        width:'75%',
        height:'100%',
        backgroundColor:Color.button,
        justifyContent:'center',
        alignItems:'center',
    },
    countText:{
        width:'50%',
        height:'100%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        width:'25%',
        height:'100%',
        borderRadius:5,
        backgroundColor:Color.button,
        justifyContent:'center',
        alignItems:'center',
        elevation:1
    },
    icons:{
        width:'25%',
        height:'100%',
        borderRadius:5,
        backgroundColor:Color.plus,
        justifyContent:'center',
        alignItems:'center',
        elevation:1
    },
    costprice:{
        fontFamily:FontFamily.light,
        fontSize:15,
        marginLeft:5,
        textDecorationLine:"line-through",
        color:Color.icon
    },
    costHead:{
        fontFamily:FontFamily.light,
        fontSize:15
    },
    sellingHead:{
        fontFamily:FontFamily.regular,
        fontSize:16
    },
    sellingprice:{
        fontFamily:FontFamily.bold,
        fontSize:16,
        marginLeft:5
    },
    description:{
        padding:15,
        borderBottomWidth:1,
        borderBottomColor:"#f1f1f1",
        justifyContent:'space-between',
        flexDirection:'row'
    },
    descriptionText:{
        fontSize:16,
        fontFamily:FontFamily.bold,
        color:Color.icon
    },
    details:{
        padding:15,
        minHeight:150
    },
    detailsText:{
        fontFamily:FontFamily.light,
        color:Color.icon,
        fontSize:13
    }

    
})
