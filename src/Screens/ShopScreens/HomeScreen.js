import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Dimensions, Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { URL } from '../../../BASE_URL';
import HeaderButton from "../../Component/HeaderButton";
import HeaderTitle from '../../Component/HeaderTitle';
import Color from '../../Constant/Color';
import FontFamily from '../../Constant/FontFamily';
import Font from '../../Constant/FontFamily';
import CategoryComponent from './Component/CategoryComponent';
import ProductComponent from './Component/ProductComponent';
import Swiper from 'react-native-swiper'
import Placeholder from '../../Component/Placeholder';
import ProductSkeleton from './Component/Placeholder/ProductSkeleton';
import CategorySkeleton from './Component/Placeholder/CategorySkeleton';
import SliderSkeleton from './Component/Placeholder/SliderSkeleton';
import OfferComponent from './Component/OfferComponent';
import AccordianComponent from './Component/AccordianComponent';
import SubcategoryComponent from './Component/SubcategoryComponent';
import AccordianSkeleton from './Component/Placeholder/AccordianSkeleton';

import { useDispatch, useSelector } from 'react-redux';
import * as productAction from '../../Store/action/product';
import * as categoryAction from '../../Store/action/category';
import * as authAction from '../../Store/action/auth';


const {width, height} = Dimensions.get("screen")

const HomeScreen = (props) => {

 



  // const handleClick = (list) => {
  //   alert(list)
  // }

  const [category, setCategory] = useState([])
  const [product, setProduct] = useState([])
  const [error, setError] = useState();
  const [slider, setSlider] = useState([]);
  const [isSwiperLoading, setSwiperLoading] = useState(false)


  // Category
  const [isCategoryLoading, setCategoryLoading] = useState(false)

  const categoryData = useSelector(state => state.categories.availableCategory);
  const dispatch = useDispatch();

  const loadCategory = useCallback(async () => {
    setError(null)
    setCategoryLoading(true)
    try{
        await dispatch(categoryAction.fetchCategory());
    }catch(err){
        setError(err.message)
    }

    setCategoryLoading(false)
}, [dispatch,setCategoryLoading,setError]);

useEffect(() => {
    loadCategory();
}, [dispatch,loadCategory]);




  //Product
  const [isProductLoading, setProductLoading] = useState(false);
  const productData = useSelector(state => state.products.availableProduct);

  const loadProduct = useCallback(async () => {
    setError(null)
    setProductLoading(true)
    try{
        await dispatch(productAction.fetchProduct());
    }catch(err){
        setError(err.message)
    }

    setProductLoading(false)
}, [dispatch,setProductLoading,setError]);

useEffect(() => {
    loadProduct();
}, [dispatch,loadProduct]);

//Product finished

  useEffect(() => {
    setSwiperLoading(true)
    fetch(URL+'/brand',{
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if(res.status !==200){
          throw new Error('Failed to fetch the product')
      }
      return res.json()
  }).then(response => {
      setSlider(response.data)
      setSwiperLoading(false)
  })
  .catch(err => {
     console.log(err)
     setSwiperLoading(false)
  })
  },[])



  const categories = categoryData.map((list, index) => {
    return <CategoryComponent 
              key={index}
              onButtonPress={() => {
                props.navigation.navigate('Category',{
                  title:list.category,
                  id:list._id,
                  subId:list.subcategory[0],
                  subIndex:0
                } )
              }}  
              title={list.category}
              url={list.imageurl}
            />
        })

  
  const products = productData.slice(10, 20).map((list, index) => {
    return <ProductComponent 
            key={index}
            onButtonPress={() => {
              props.navigation.navigate('ProductDetail',{
                  category:list.category,
                  subcategory:list.subcategory,
                  id:list._id,
                  discount:list.discount*100,
                  cp:list.costprice,
                  sp:list.sellingprice,
                  url:list.imageurl,
                  title:list.title,
                  description:list.description
              })
          }}
            title={list.title}
            discount={list.discount*100}
            cp={list.costprice}
            sp={list.sellingprice}
            url = {list.imageurl}
    
          />
  })

  const productLoader = (
    <>
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </>
  )

  const categoryLoader = (
    <View style={{
      width:width,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      flexWrap:'wrap'
    }}>
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      
    </View>
  )


  const swipers = slider.map((list, index) => {
    return  <View key={index} style={{


    }}>
      <ImageBackground 
              index={index}
              
              style={{
                height:'100%',
                maxWidth:'100%',
                width:'auto',
                borderRadius:5
              }}
              source={{
                uri:list.imageurl
              }}
            />
    </View>
  })


  const swiperLoading = (
    <SliderSkeleton />
  )


  const accordian = categoryData.map((list, index) => {
    if(list.subcategory.length > 0)
    {
      return <AccordianComponent {...props} key={index} url={list.imageurl} title={list.category} id={list._id} />
    }
  })

  const accordianLoading = (
    <> 
      <AccordianSkeleton />
      <AccordianSkeleton />
      <AccordianSkeleton />
    </>
  )


    return (
        <View style={{
          justifyContent:'flex-start', 
          alignItems:'center',
         
        }}>
              <StatusBar backgroundColor={'white'} barStyle="dark-content" />  
              <ScrollView style={{width:width, paddingVertical:5}} showsVerticalScrollIndicator={false} >
                <View style={styles.swiper}>
                <Swiper horizontal={true} loop={true} autoplay={true} activeDotColor={Color.accent} >
                  {isSwiperLoading ? swiperLoading : swipers}
                </Swiper>
                </View>


                
                <LinearGradient colors={['#FF4600','#FF4600', Color.accent,'#FD7600',]} style={styles.offer}>
                    <View style={{
                      height:40,
                      width:'100%',
                      justifyContent:'center',
                      alignItems:'flex-start',
                      paddingHorizontal:15
                    }}>
                        <Text style={{
                          fontSize:20,
                          fontFamily:FontFamily.black,
                          color:'white'
                        }}>Offers for you</Text>

                    </View>

                    <View style={styles.slider}>
                      <ScrollView horizontal={true} 
                        style={{
                          flexDirection:'row'
                        }}  
                        showsHorizontalScrollIndicator={false}
                      >  
                        <OfferComponent />
                        <OfferComponent />
                        <OfferComponent />
                        <OfferComponent />
                      </ScrollView>
                    </View>

                  </LinearGradient>

                <View style={styles.info}>
                  <Image 
                    style={{
                        height:'100%',
                        width:width
                        }}
                    source={{
                      uri:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=280/layout-engine/2020-11/Citi-Bank_web.jpg'
                    }}
                  />
                </View>
                      <LinearGradient colors={['#fff','#fff']} style={styles.box}>
                        <HeaderTitle 
                          title="Latest Product"
                          headerColor={Color.icon}
                          themeColor="#FF4600"
                          backgroundColor={'#fff'}
                          buttonTitle="View All"
                          onButtonPress={() => alert('Presses')}
                        />

                        <View style={styles.slider}>
                          <ScrollView horizontal={true} 
                            style={{
                              flexDirection:'row'
                            }}  
                            showsHorizontalScrollIndicator={false}
                          >  
                            {
                              isProductLoading ? productLoader  :  products
                            } 
                          </ScrollView>
                        </View>

                      </LinearGradient>
                      <View style={styles.mainContainer}>
                        <View style={styles.catagoryContainer}>
                          <HeaderTitle 
                            title="Categories"
                            headerColor={Color.icon}
                            themeColor={Color.accent}
                            backgroundColor="white"
                            buttonTitle="View All"
                            onButtonPress={() => alert('Presses')}
                            style={{
                              marginBottom:6
                            }}
                          />
                          <View  style={styles.catagoryBox}> 
                              {
                                isCategoryLoading ? categoryLoader : categories
                              }
                          </View>
                      </View>
                    </View>


                    <View style={{
                      marginVertical:6
                    }}>
                      
                      {isCategoryLoading ? accordianLoading : accordian}
                    </View>

              </ScrollView>
        </View>
    )
}

export default HomeScreen;


export const screenOptions = navData => {


    return {
    headerTitle:() => (
        <View style={{alignSelf:'flex-start' }}>
            <Text style={{fontSize:20,color:Color.icon,  fontFamily:Font.black}}>Dholpurshare</Text>
        </View>
    ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName= 'menu'
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
            title="Search"
            iconName='search' 
            onPress={() => {
              navData.navigation.navigate('SearchStack');
            }}
          />
        <Item
            title="Cart"
            iconName='shopping-cart' 
            onPress={() => {
              navData.navigation.navigate('CartStack');
            }}
          />
        </HeaderButtons>
      )
    };
  };
  



const styles = StyleSheet.create({
  swiper:{
    backgroundColor:'#fff',
    height:250,
    width:width,
    marginBottom:5,
    alignItems:'center',
    justifyContent:'center',
  },

  info:{
    backgroundColor:'#d4d4d4',
    marginVertical:5,
    height:80,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  
  box:{
    width:'100%',
    maxHeight:330,
    marginVertical:5,
    padding:5,
    backgroundColor:Color.accent,
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    
   },

   offer:{
    width:'100%',
    maxHeight:230,
    marginVertical:5,
    padding:5,
    backgroundColor:'#FF4600',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    
   },
  slider:{
    height:'80%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    },
   
  mainContainer:{
    padding:2.5
  },
  catagoryContainer:{
    width:'100%',
    borderRadius:8,
    padding:5,
    backgroundColor:'white',
    elevation:1,
    marginVertical:5,
  },
  catagoryBox:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    flexWrap:'wrap',
   },
  
   
  
})
