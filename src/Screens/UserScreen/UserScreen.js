import React from 'react'
import { Image, ScrollView, ScrollViewBase, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux';
import * as authAction from '../../Store/action/auth';
import Color from '../../Constant/Color'
import FontFamily from '../../Constant/FontFamily'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const UserScreen = (props) => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.auth.name);
    return (
        <>
             <View style={styles.header}>
                <View style={styles.headerText} >
                    <View>
                        <Text style={styles.title}>Profile</Text>
                    </View>
                </View>
            </View> 

            <ScrollView>
                <View style={styles.container}>
                    <LinearGradient colors={['#fff','#a6a6a6','#000']}  style={{height:190}} />

                    <View style={styles.user}>
                        <View style={styles.image}>
                            <Image
                                source={require('../../../asset/images/avatar.png')}
                                style={styles.logo}
                            />
                        </View>
                        <View style={{
                            height:120,
                    
                            justifyContent:'flex-end',
                            paddingHorizontal:15
                        }}>
                            <Text style={{height:50, fontFamily:FontFamily.bold, color:Color.icon, fontSize:20}}>{name.split(' ')[0]}</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity 
                onPress={() => props.navigation.jumpTo('OrderStack')}
                 activeOpacity={0.6}
                style={styles.tabContainer} >
                    <View style={styles.data}>
                        <View style={styles.icons}> 
                            <MaterialIcons name="border-all" size={24} color={Color.icon} />
                        </View>
                        <View>
                            <Text style={styles.headTitle}>Orders</Text>
                            <Text style={styles.subTitle}>Check your order status</Text>
                        </View>
                    </View>

                    <View style={styles.icons}>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color={Color.icon} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => props.navigation.navigate('CartScreen')} 
                 activeOpacity={0.6}
                style={styles.tabContainer} >
                    <View style={styles.data}>
                        <View style={styles.icons}> 
                            <MaterialIcons name="shopping-cart" size={24} color={Color.icon} />
                        </View>
                        <View>
                            <Text style={styles.headTitle}>Cart</Text>
                            <Text style={styles.subTitle}>Proceed with items into your cart</Text>
                        </View>
                    </View>

                    <View style={styles.icons}>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color={Color.icon} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => props.navigation.navigate('UserAddress')}
                 activeOpacity={0.6}
                style={styles.tabContainer} >
                    <View style={styles.data}>
                        <View style={styles.icons}> 
                            <MaterialIcons name="location-city" size={24} color={Color.icon} />
                        </View>
                        <View>
                            <Text style={styles.headTitle}>Address</Text>
                            <Text style={styles.subTitle}>Save address for a hassel-free checkout</Text>
                        </View>
                    </View>

                    <View style={styles.icons}>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color={Color.icon} />
                    </View>
                </TouchableOpacity>

               

                <TouchableOpacity 
                activeOpacity={0.6}
                style={styles.tabContainer} >
                    <View style={styles.data}>
                        <View style={styles.icons}> 
                            <MaterialIcons name="share" size={24} color={Color.icon} />
                        </View>
                        <View>
                            <Text style={styles.headTitle}>Share</Text>
                            <Text style={styles.subTitle}>Share application among your friend</Text>
                        </View>
                    </View>

                    <View style={styles.icons}>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color={Color.icon} />
                    </View>
                </TouchableOpacity>



                <View style={styles.infoContainer}>
                    <TouchableOpacity 
                    onPress={() => props.navigation.navigate('Faqs')}
                    style={styles.minitab}>
                        <View style={styles.tabIcon}></View>
                        <View style={styles.tabText}><Text style={{fontSize:12, fontFamily:FontFamily.regular, color:Color.icon}}>FAQS</Text></View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={() => props.navigation.navigate('Aboutus')}
                    style={styles.minitab}>
                        <View style={styles.tabIcon}></View>
                        <View style={styles.tabText}><Text style={{fontSize:12, fontFamily:FontFamily.regular, color:Color.icon}}>ABOUT US</Text></View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={() => props.navigation.navigate('Terms')}
                    style={styles.minitab}>
                        <View style={styles.tabIcon}></View>
                        <View style={styles.tabText}><Text style={{fontSize:12, fontFamily:FontFamily.regular, color:Color.icon}}>TERMS OF USE</Text></View>
                    </TouchableOpacity>

                   
                </View>
                
                <View style={{
                    height:100,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={() => {
                        dispatch(authAction.logout())
                    }} 
                    style={styles.logout}>
                        <Text style={{
                            color:Color.button,
                            fontFamily:FontFamily.bold
                        }}>LOG OUT</Text>
                    </TouchableOpacity>
                </View>

                
                
            </ScrollView>
        </>
    )
}

export default UserScreen

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height:55,
        width:'100%',
        backgroundColor:"white",
        justifyContent:'space-between',
        alignItems:'center',
        elevation:1
    },
    headerText:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    title:{
      marginLeft:20,
      fontSize:18,
      color:Color.icon,  
      fontFamily:FontFamily.bold
    },
    container:{
        height:300,
        backgroundColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'#f1f1f1'
    },
    user:{
        position:'absolute',
        width:'100%',
        bottom:0,
        height:220,
        paddingHorizontal:20,
        alignItems:'center',
        flexDirection:'row'
    },
    image:{
        height:120,
        width:120,
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        elevation:1
    },
    logo:{
        height:60,
        width:60,
        marginVertical:10
    },
    tabContainer:{
        height:80,
        backgroundColor:'white',
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#f1f1f1'
    },
    data:{
        width:'85%',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row'
    },
    icons:{
        width:'15%',
        justifyContent:'center',
        alignItems:'center'
    },
    headTitle:{
        paddingVertical:5,
        fontFamily:FontFamily.bold,
        color:Color.icon
    },
    subTitle:{
        fontFamily:FontFamily.light,
        fontSize:12,
        color:Color.icon
    },
    tabIcon:{
        width:'12%',
        justifyContent:'center',
        alignItems:'center'
    },
    tabText:{
        width:'80%'
    },
    minitab:{
        height:50,
        
        flexDirection:'row',
        alignItems:'center'
    },
    infoContainer:{
        backgroundColor:'white',
        marginVertical:15
    },
    logout:{
        height:45,
        width:'90%',
        justifyContent:'center',
    alignItems:'center',
        borderColor:Color.button,
        borderWidth:1
    }
})