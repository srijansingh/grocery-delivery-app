import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BackButton from '../../Component/BackButton';
import Color from '../../Constant/Color';
import FontFamily from '../../Constant/FontFamily';
const {height, width} = Dimensions.get("screen")
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import HeaderTitle from '../../Component/HeaderTitle';
import { URL } from '../../../BASE_URL';
import ProductVerticalComponent from './Component/ProductVerticalComponent';

const ProductDetailScreen = ({route, navigation}) => {

    const {id, title, cp, sp,url, discount, description, category, subcategory} = route.params;
    const [isDescriptionShow, setDescriptionShown] = useState(true);
    const [similarProduct, setsimilarProduct] = useState([])
    const [isSimilarLoading, setisSimilarLoading] = useState(false)
    const [recommendedProduct, setrecommendedProduct] = useState([])
    const [isRecommendLoading, setisRecommendLoading] = useState(false)

    const handleDescription = () => {
        setDescriptionShown(!isDescriptionShow)
    }


    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        setisLoading(true)
        fetch(URL+'/product/'+id,{
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
          setisLoading(false)
      })
      .catch(err => {
         console.log(err)
         setisLoading(false)
      })
      },[id])


    useEffect(() => {
        setisSimilarLoading(true)
        fetch(URL+'/product/sub/'+subcategory,{
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
         console.log(response.data)
          setsimilarProduct(response.data)
          setisSimilarLoading(false)
      })
      .catch(err => {
         console.log(err)
         setisSimilarLoading(false)
      })
      },[id])




      useEffect(() => {
        setisRecommendLoading(true)
        fetch(URL+'/product/category/'+category,{
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
            setrecommendedProduct(response.data)
          setisRecommendLoading(false)
      })
      .catch(err => {
         console.log(err)
         setisRecommendLoading(false)
      })
      },[id])


     const renderSimilar = ({item, index}) => {
        return <ProductVerticalComponent 
            onButtonPress={() => {
                navigation.navigate('ProductDetail',{
                    category:item.category,
                    subcategory:item.subcategory,
                    id:item._id,
                    discount:item.discount*100,
                    cp:item.costprice,
                    sp:item.sellingprice,
                    url:item.imageurl,
                    title:item.title,
                    description:item.description
                })
            }}
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

     

     let newdiscount = 0;
     if(discount >= 1){
         newdiscount = discount.toFixed(0)
     }



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
            </View>
        <ScrollView>
        <View>
            

          

               <View style={styles.imageBox}>
               <Image 
                   style={styles.image}
                   source={{
                       uri:url
                   }}
               />
           </View>
            

            <View style={{
                padding:15,
                backgroundColor:'white'
            }}>
                    <View style={styles.offer}>
                       <Text style={styles.offerText}>{newdiscount+'% OFF'}</Text>
                    </View>

                    <View style={styles.title}>
                        <Text style={styles.titleText}>{title}</Text>
                    </View>

                    <View style={styles.priceBox}>
                        <Text style={{
                            fontFamily:FontFamily.light,
                            fontSize:15
                        }}>Product MRP:</Text><Text style={{
                            fontFamily:FontFamily.light,
                            fontSize:15,
                            marginLeft:5,
                            textDecorationLine:"line-through",
                            color:Color.icon
                        }}>{'\u20B9'+cp}</Text>
                    </View>

                    <View style={styles.priceBox}>
                        <Text style={{
                            fontFamily:FontFamily.regular,
                            fontSize:16
                        }}>Selling Price:</Text><Text style={{
                            fontFamily:FontFamily.bold,
                            fontSize:16,
                            marginLeft:5
                        }}>{'\u20B9'+sp}</Text>
                    </View>

                    <View style={[styles.priceBox,styles.buttonBox]}>
                        <Text style={styles.tinyText}>(Inclusive of all taxes)</Text>

                        <View style={styles.addButton}>
                            <View style={{
                                    width:'75%',
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
                            <View  
                                style={{
                                    width:'25%',
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

            </View>

            <View style={{
                marginVertical:8,
                backgroundColor:'white',
               
            }}>
               <TouchableOpacity
                onPress={handleDescription}
                activeOpacity={0.8}
                style={{
                    padding:15,
                    borderBottomWidth:1,
                    borderBottomColor:"#f1f1f1",
                    justifyContent:'space-between',
                    flexDirection:'row'
                }}
                >
                    <Text style={{
                        fontSize:16,
                        fontFamily:FontFamily.bold,
                        color:Color.icon
                    }}>Description</Text>

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
                        <View style={{
                            padding:15,
                            minHeight:150
                        }}>
                            <Text 
                            style={{
                                fontFamily:FontFamily.light,
                                color:Color.icon,
                                fontSize:13
                            }}>{description}</Text>
                        </View>
                        :
                        null
                    }
                
            </View>

            {
                isSimilarLoading ?

                loader 
                :
                <View style={{
                    marginBottom:8,
                    backgroundColor:'white',
                   
                }} >
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
                        data={similarProduct}
                        keyExtractor={item => item._id}
                        renderItem={renderSimilar}
                        
                    />
    
                </View>

                

            }

            {
                isSimilarLoading && isRecommendLoading 

                ?

                null :
                <View style={{
                    marginBottom:8,
                    backgroundColor:'white',
                
                }} >
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
                        data={recommendedProduct}
                        keyExtractor={item => item._id}
                        renderItem={renderSimilar}
                        
                    />
    
                </View>
            }

            
        </View>
        </ScrollView>
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
        backgroundColor:'red',
        height:30,
        flexDirection:'row',
        borderRadius:3, 
        overflow:'hidden',
        backgroundColor:'red',
        
    },
    similarBox:{
        width:'100%',
        paddingVertical:8,
    }
    
})
