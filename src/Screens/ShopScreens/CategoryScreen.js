import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Animated, Button, Dimensions, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useDispatch, useSelector } from 'react-redux';
import { URL } from '../../../BASE_URL';
import BackButton from '../../Component/BackButton';
import Color from '../../Constant/Color';
import FontFamily from '../../Constant/FontFamily';
import ProductHorizontalSkeleton from './Component/Placeholder/ProductHorizontalSkeleton';
import ProductHorizontalComponent from './Component/ProductHorizontalComponent';
import SubcategoryComponent from './Component/SubcategoryComponent';
const {width, height} = Dimensions.get("screen");

import * as subcategoryAction from '../../Store/action/subcategory'
import CartButton from '../../Component/CartButton';

const CategoryScreen = ({route, navigation}) => {
    const { title,id,subId, subIndex } = route.params;
    const [product, setProduct] = useState([])
    const [subcategory, setSubcategory] = useState([])
    const [isProductLoading, setProductLoading] = useState(false)
    const [sub, setSub] = useState(subId)
    const [activeIndex, setActiveIndex] = useState(subIndex)

    const cartSellingPrice = useSelector(state => state.cart.totalAmount);
    const cartCostPrice = useSelector(state => state.cart.totalCost);
    const cartTotalItem= useSelector(state => state.cart.totalItem);


    const availableProduct = useSelector(state => state.products.availableProduct);
    const productSubcategory = availableProduct.filter(product => product.subcategory === sub);

    const renderRef = useRef();

      
      const getItemLayout = (data, index) =>{
        return {
            length:80, offset:80*index, index
        }
      }
   

    useEffect(() => {
            renderRef.current.scrollToOffset({
                animated : true, offset:activeIndex*80
            })
        
      },[sub])


      const dispatch = useDispatch();
      const subcategoryData = useSelector(state => state.subcategories.availableSubcategory);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] =useState()

      const loadCategory = useCallback(async () => {
        setError(null)
        setIsLoading(true)
        try{
            await dispatch(subcategoryAction.fetchSubcategory(id));
        }catch(err){
            setError(err.message)
        }
    
        setIsLoading(false)
    }, [dispatch,id,setIsLoading,setError]);
    
    useEffect(() => {
        loadCategory();
    }, [dispatch,loadCategory]);


      const renderItem = ({item,index}) => {
       
        let style={
               borderBottomColor:Color.button,
               borderBottomWidth:4
           }
       
          return <SubcategoryComponent 
                    style={activeIndex === index ? style: null}
                    color={activeIndex === index ? '#000' : '#666666'}
                    borderColor={activeIndex === index ? Color.button : '#e6e6e6'}
                    borderWidth={activeIndex === index ? 1 : 1}
                    title={item.subcategory}
                    image={item.imageurl}
                    onButtonPress={() => {
                        handleSucategory(item._id, index)
                    }}
                />
      }

      const loader = (
        <>
          <ProductHorizontalSkeleton />
          <ProductHorizontalSkeleton />
          <ProductHorizontalSkeleton />
          <ProductHorizontalSkeleton />
          <ProductHorizontalSkeleton />
          
        </>
    )

    
      const handleSucategory = (id, index) => {
            setSub(id)
            setActiveIndex(index)
      }

      const scrollY = new Animated.Value(0);
      const diffclmp = Animated.diffClamp(scrollY,0,60)
      const transllateY = diffclmp.interpolate({
          inputRange:[0,60],
          outputRange:[0,-60]
      })



      // Swiper

      


    return (
 
             <View style={{flex:1}}> 
             <Animated.View
                style={{
                    transform:[
                        {translateY:transllateY}
                    ]
                }}
             >
                <View >
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

                    <BackButton 
                        goBack={() => {navigation.jumpTo('SearchStack', {id:'wwws'})}}
                        color={Color.icon}
                        name="search"
                    />
                </View>

                <View style={styles.subcategory}>
                    <FlatList
                        getItemLayout={getItemLayout}
                        extraData={subcategoryData} 
                        ref={renderRef}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={subcategoryData}
                        keyExtractor={item => item._id}
                        renderItem={renderItem}
                    />
                </View>
                </View>

               
                <View>
                {
                    isProductLoading ?  
                       loader
                    :
                    <FlatList 
                    style={{marginBottom:230}}
                    data={productSubcategory}
                    keyExtractor={item => item._id}
                    renderItem={itemData => (
                     
                        <ProductHorizontalComponent 
                        marginTop={6}
                        marginBottom={2}
                        borderRadius={5}
                        marginHorizontal="2%"
                        width={'96%'}
                            onButtonPress={() => {
                                navigation.navigate('ProductDetail',{
                                    category:itemData.item.category,
                                    subcategory:itemData.item.subcategory,
                                    id:itemData.item._id,
                                    title:itemData.item.title
                                })
                            }}
                            id={itemData.item._id}
                            title={itemData.item.title}
                            onSwipeFromLeft={() => alert('hello')}
                            discount={itemData.item.discount*100}
                            cp={itemData.item.costprice}
                            sp={itemData.item.sellingprice}
                            url = {itemData.item.imageurl}
                        />
                       
                    )}
                    onScroll={(e) => {
                        scrollY.setValue(e.nativeEvent.contentOffset.y)
                    }}
                />
                }
                </View>
               
                </Animated.View>
                
            
                <CartButton 
                    onButtonPress={() => (
                        navigation.navigate('CartStack')
                    )}
                />
                    

            </View>
           

    )
}

export default CategoryScreen

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height:55,
        width:'100%',
        backgroundColor:"white",
        justifyContent:'space-between',
        alignItems:'center',
        elevation:2
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
    subcategory:{
        width:'100%',
        backgroundColor:'white',
        elevation:2,
        paddingHorizontal:6,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
       
       
    }
   
   
})
