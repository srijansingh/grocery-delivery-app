import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState } from 'react'
import { StyleSheet,  View, Image, TouchableOpacity,  Text, } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import {
    Title,
    Drawer,
} from 'react-native-paper'
import Color from '../../Constant/Color';
import { useDispatch, useSelector } from 'react-redux';
import * as authAction from '../../Store/action/auth';
import LinearGradient from 'react-native-linear-gradient';
import FontFamily from '../../Constant/FontFamily';
import TabComponent from './TabComponent';

const DrawerContent = (props) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    const dispatch = useDispatch();

    const name = useSelector(state => state.auth.name);
    const email = useSelector(state => state.auth.email);

    return (
        <View style={{flex:1}}> 
            <DrawerContentScrollView {...props} > 
                <View style={styles.drawerContent}>
                   <TouchableOpacity activeOpacity={0.8}>
                   <LinearGradient colors={['#fff','#a6a6a6','#000']}  style={styles.userInfoSection} >

                        <View style={styles.userProfileSection} >
                            <View style={{
                                height:70,
                                width:70,
                                backgroundColor:'white',
                                borderRadius:5,
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                            <Image
                                source={require('../../../asset/images/avatar.png')}
                                style={{
                                    height:40,
                                    width:40,
                                    marginVertical:10
                                }}
                            />
                            </View>


                            <View  >
                                <Title style={styles.title}>{name}</Title>
                            </View>                                
                        </View>

                        </LinearGradient>
                   </TouchableOpacity>
                    
                    <View style={styles.drawerSection} >
                        <TouchableOpacity 
                                onPress={() => {
                                    props.navigation.navigate('HomeStack')
                                }}
                                style={styles.tab}
                            >
                            <View style={styles.tabIcon}><MaterialIcons name="store" size={20} color={Color.icon} /></View>
                            <View style={styles.tabText}><Text style={{fontSize:16, fontFamily:FontFamily.regular, color:Color.icon}}>Store</Text></View>
                        </TouchableOpacity>

                        <TouchableOpacity 
                                onPress={() => {
                                    props.navigation.navigate('UserStack')
                                }}
                                style={styles.tab}
                            >
                            <View style={styles.tabIcon}><MaterialIcons name="account-circle" size={20} color={Color.icon} /></View>
                            <View style={styles.tabText}><Text style={{fontSize:16, fontFamily:FontFamily.regular, color:Color.icon}}>My Profile</Text></View>
                        </TouchableOpacity>
                        

                        <TouchableOpacity 
                             onPress={() => {
                                props.navigation.navigate('CartScreen')
                            }}
                            style={styles.tab}
                        >
                            <View style={styles.tabIcon}><MaterialIcons name="shopping-cart" size={20} color={Color.icon} /></View>
                            <View style={styles.tabText}><Text style={{fontSize:16, fontFamily:FontFamily.regular, color:Color.icon}}>Cart</Text></View>
                        </TouchableOpacity>

                        <TouchableOpacity 
                             onPress={() => {
                                props.navigation.navigate('OrderStack')
                            }}
                            style={styles.tab}
                        >
                            <View style={styles.tabIcon}><MaterialIcons name="border-all" size={20} color={Color.icon} /></View>
                            <View style={styles.tabText}><Text style={{fontSize:16, fontFamily:FontFamily.regular, color:Color.icon}}>Orders</Text></View>
                        </TouchableOpacity>

                        <View style={{
                            paddingVertical:10
                        }}>
                            <TouchableOpacity 
                                onPress={() => {
                                    props.navigation.navigate('Faqs')
                                }}
                                style={styles.minitab}
                            >
                                <View style={styles.tabIcon}></View>
                                <View style={styles.tabText}><Text style={{fontSize:12, fontFamily:FontFamily.regular, color:Color.icon}}>FAQS</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress={() => {
                                    props.navigation.navigate('Aboutus')
                                }}
                                style={styles.minitab}
                            >
                                <View style={styles.tabIcon}></View>
                                <View style={styles.tabText}><Text style={{fontSize:12, fontFamily:FontFamily.regular, color:Color.icon}}>CONTACT US</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => {
                                    props.navigation.navigate('HomeStack')
                                }}
                                style={styles.minitab}
                            >
                                <View style={styles.tabIcon}></View>
                                <View style={styles.tabText}><Text style={{fontSize:12, fontFamily:FontFamily.regular, color:Color.icon}}>SHARE</Text></View>
                            </TouchableOpacity>

                          
                        </View>


                            
                        
                     
                    </View>

                   

                    

                </View>
            </DrawerContentScrollView>
            
            
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    drawerContent : {
        flex:1,
        backgroundColor:'white'
    },
    userInfoSection:{
        paddingHorizontal:15,
        paddingBottom:5,
        elevation:1
    },
    userProfileSection:{
        height:130,
        justifyContent:'flex-end'
    },
    title:{
        fontSize:16,
        paddingTop:3,
        fontFamily:FontFamily.bold,
        color:'white'
    },
    caption:{
        fontSize:14,
        lineHeight:16
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:"bold",
        marginRight:3
    },
    bottomDrawerSection :{
        marginBottom:1,
        borderTopColor:"#f4f4f4",
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    },
    tab:{
        height:75,
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center'
    },
    tabIcon:{
        width:'20%',
        justifyContent:'center',
        alignItems:'center'
    },
    tabText:{
        width:'80%'
    },
    minitab:{
        height:35,
        
        flexDirection:'row',
        alignItems:'center'
    },
})
