import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { sub } from 'react-native-reanimated';
import { URL } from '../../../../BASE_URL';
import Color from '../../../Constant/Color';
import FontFamily from '../../../Constant/FontFamily';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import Animated from 'react-native-reanimated';
import Placeholder from '../../../Component/Placeholder';

const {width, height} = Dimensions.get("screen")

const AccordianComponent = (props) => {
    const [showDetails, setShowDetails] = useState(false);
    const [subCategory, setSubCategory] = useState([]);
    const [subtitle, setSubtitle] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        setIsLoading(true)
        fetch(URL+'/category/' + props.id,{
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
            setIsLoading(false)
          setSubCategory(response.data)
          setSubtitle(response.data.map(list => (
              list.subcategory
          )).join(', '))
           
        })
        .catch(err => {
           console.log(err)
           setIsLoading(false)
        })
    }, [props.id])


    const data = subCategory.map((list, index) => {
        return (

            
           
            <TouchableRipple
                onPress={() => {
                    props.navigation.navigate('Category',{
                      title:props.title,
                      id:props.id,
                      subId:list._id,
                      subIndex:index
                    } )
                  }} 
                key={index}
                style={styles.subcategory}
                rippleColor="#f1f1f1"
            >
               <View>
                <View style={styles.imageContainer}>
                    <Image  
                            style={styles.image}
                            source={{
                                uri:list.imageurl
                            }}
                    />
                </View>

                <View style={styles.titleContainer}>
                        <Text 
                            numberOfLines={2}
                            style={styles.title}>
                                    {list.subcategory}
                        </Text>
                </View>
               </View>
           
           </TouchableRipple>
        )
    })

    const loader = (
        <View style={{flexDirection:'column'}}>
            <View style={{padding:2}}>
                <Placeholder height={10} width={110} />
            </View>
            <View style={{padding:2}}>
                <Placeholder height={10} width={80} />
            </View>
            <View style={{padding:2}}>
                <Placeholder height={10} width={90} />
            </View>
        </View>
    )

    return (
        <View style={{
            marginVertical:3,
            elevation:showDetails ? 2 : 0,
            backgroundColor:'white'
        }}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{ height:150,width:width }}
                onPress={() => setShowDetails(prev => !prev) }
            >
                <View style={styles.mainContainer}>
                    <View style={styles.mianImageContainer}>
                        <Image 
                            style={styles.mainImage}
                            source={{
                                uri:props.url
                            }}
                        />
                    </View>

                    <View style={styles.description}>
                        <Text style={styles.offer}>Up to 50% OFF</Text>
                        <Text style={styles.titles}>{props.title}</Text>
                        <Text style={styles.subtitle} numberOfLines={3}>
                            {
                                isLoading ? 
                                    loader
                                :
                                subtitle
                            }
                        </Text>
                    </View>

                    <View style={styles.icon}>

                            <MaterialIcons 
                                name={showDetails ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                                color={Color.accent}
                                size={30}
                            />

                    </View> 
                </View>
            </TouchableOpacity>

            {
                showDetails ?
                <View style={styles.data}>
                    <View style={styles.dataContainer}> 
                        {data}
                    </View>
                </View>

            :
            null
            }
        </View>
    )
}

export default AccordianComponent

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10
    },
    mianImageContainer:{
        width:'40%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    mainImage:{
        maxHeight:'80%',
        height:'100%',
        maxWidth:'80%',
        width:'100%'
    },
    data:{
        width:'100%',
        padding:10,
        justifyContent:'space-around'
    },
    dataContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        flexWrap:'wrap',
        backgroundColor:'white',
    
        overflow:'hidden'
    },
    description:{
        width:'50%',
        backgroundColor:'white',
        height:'90%',
        paddingHorizontal:8
    },
    icon:{
        width:'10%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderLeftColor:'#f1f1f1',
        borderLeftWidth:1
    },
    subtitle:{
        paddingTop:6,
        fontFamily:FontFamily.light,
        color:Color.icon,
        fontSize:12
    },
    titles:{
        fontSize:16,
        fontFamily:FontFamily.bold,
        color:'#1e1e1e'
    },
    offer:{
        fontSize:13,
        fontFamily:FontFamily.bold,
        paddingVertical:3,
        color:Color.green 
    },
    subcategory:{
        width:'33.33333%',
        height:160,
        backgroundColor:'white',
        borderLeftWidth:0.5,
        borderRightWidth:0.5,
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderColor:'#e6e6e6',
        elevation:1
   },
   imageContainer:{
        width:'100%',
        height:'70%',
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        maxWidth:'90%',
        width:'100%',
        height:'90%'
    },
    titleContainer:{
        width:'100%',
        height:'30%',
        padding:10,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    title:{
        fontSize:12,
        fontFamily:FontFamily.light,
        color:Color.icon
    }
})
