import React, { useEffect, useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BackButton from '../../Component/BackButton'
import Color from '../../Constant/Color'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontFamily from '../../Constant/FontFamily';
import * as Animatable from 'react-native-animatable';


import Animated from 'react-native-reanimated';

const ConfirmationScreen = ({navigation, route}) => {
    const {orderid} = route.params;

    useEffect(() => {
        navigation.addListener('hardwareBackPress', (e) => {
            e.preventDefault()
        })
    }, [navigation])

    const information = (
        <Animatable.View 
        animation="fadeInUp"
        duration={1000}
        style={{flex:1}}
        >
        <ScrollView>
                <View
                style={styles.container}>
                    <View style={styles.info}>
                        
                        <View style={styles.infoHead}>
                            <Text style={styles.bold}>ORDER CONFIRMED</Text>
                        </View>
                        <View style={styles.infoBox}>
                        <View style={styles.infoBox2}>
                            <Image
                                source={require('../../../asset/images/confirm.png')}
                                style={{
                                    height:50,
                                    width:50
                                }}
                            />
                            <Text style={{fontSize:12, fontFamily:FontFamily.light, color:Color.green}}>ORDER ID : {orderid}</Text>
                        </View>
                        </View>
                        
                       
                        
                    </View>

                    <View style={{
                            height:80,
                            marginVertical:10,
                            backgroundColor:'white',
                          
                            justifyContent:'flex-start',
                            alignItems:'center',
                            flexDirection:'row'
                        }}>
                            <View style={{
                                width:'15%',
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                            <MaterialIcons
                                name={"email-check-outline"}
                                color={Color.icon}
                                size={35}

                            />
                            </View>
                            <View style={{
                                width:'85%',
                                paddingRight:20
                            }}>
                                <Text style={styles.infoText}>You will recieve order confirmation email shortly with expected delivery time. 
                               </Text>
                            </View>
                        </View>

                        <View style={{
                            height:150,
                            marginVertical:0,
                            backgroundColor:'white',
                          
                            justifyContent:'flex-start',
                            alignItems:'center',
                            flexDirection:'row'
                        }}>
                            <View style={styles.imageContainer}>
                            <Image 
                                source={require('../../../asset/images/bag.png')}
                                style={{
                                    height:70,
                                    width:70
                                }}
                            />
                            </View>
                            <View style={{
                                width:'70%',
                                paddingRight:20
                            }}>
                               <Text style={styles.bagText}>Track & Manage your order easily</Text>
                               <TouchableOpacity
                                 style={styles.viewBtn}
                               >
                                <Text style={styles.viewText}>View Orders</Text>
                               </TouchableOpacity>
                            </View>
                        </View>

                       
                </View>
            </ScrollView>
            
            <View style={{
                height:60,
                backgroundColor:'white',
                paddingHorizontal:15,
                justifyContent:'center',
                borderTopColor:'#f2f2f2',
                borderTopWidth:1,
            }}>
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Home')
                }}
                activeOpacity={0.9}
                style={{
                    backgroundColor:Color.button,
                    height:45,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:5,
                  
                }}>
                   
                    <Text style={{color:'white', fontFamily:FontFamily.bold}}>Continue Shopping </Text>
                </TouchableOpacity>
            </View>
            </Animatable.View>
    )

    const animate = (
        <View style={{
            height:'100%',
            backgroundColor:Color.button
        }}>
            <Animatable.View 
                animation="bounceInUp"
                duration={2000}
                style={{
                    height:200,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                    <Image 
                            source={require('../../../asset/images/confirmlight.png')}
                            style={{
                                height:100,
                                width:100
                            }}
                        />
                </Animatable.View>
        </View>
    )

    const [isConfirmed, setIsConfirmed] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsConfirmed(false)
        }, 1500);
    })



    return (
        
        <>
            <View style={styles.header}>
                <View style={styles.headerText} >
                    <BackButton 
                        goBack={() => {navigation.navigate('Home')}}
                        color={Color.primary}
                        name="arrow-back"
                    />
                    <View>
                        <Text style={styles.title}>CONFIRMATION</Text>
                    </View>
                </View>
            </View>

            {
                isConfirmed ?
                animate : information
            }
            
        </>
    )
}

export default ConfirmationScreen

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
    container:{
        marginVertical:10
    },
    info:{
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:'white'
    },
    infoHead:{
        height:35,
        justifyContent:'center'
    },
    bold:{
        fontFamily:FontFamily.bold, 
        color:Color.icon
    },
    infoText:{
        fontSize:12, 
        fontFamily:FontFamily.light
    },
    orderid:{
        fontFamily:FontFamily.bold, 
        fontSize:11
    },
    viewBtn:{
                                     
        height:40,
       borderColor:Color.button,
       borderWidth:1,
       width:120,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:5
    },
    viewBtns:{
                                     
        height:40,
       borderColor:Color.button,
       borderWidth:1,
       width:200,
       backgroundColor:'white',
       justifyContent:'center',
       alignItems:'center',
       borderRadius:5
    },
    bagText:{
        height:30,
        fontSize:14,
        fontFamily:FontFamily.bold,
        color:Color.icon
    },
    viewText:{
        color:Color.button,
        fontFamily:FontFamily.bold
    },
    imageContainer:{
        width:'30%',
        justifyContent:'center',
        alignItems:'center'
    },
    infoBox:{
        height:120,
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    infoBox2:{
        height:'70%',
        width:'70%',
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'column'
    }
})
