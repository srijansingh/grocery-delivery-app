import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState } from 'react'
import { StyleSheet,  View } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import Color from '../../Constant/Color';
import { useDispatch, useSelector } from 'react-redux';
import * as authAction from '../../Store/action/auth';

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
                    <View style={styles.userInfoSection} >

                        <View style={styles.userProfileSection} >
                            <Avatar.Image
                                source={{
                                    uri : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'
                                }}
                                size={60}
                            />
                        

                            <View style={{marginLeft:10}} >
                            <Title style={styles.title}>{name}</Title>
                            <Caption style={styles.caption}>{email}</Caption>
                            </View>
                        </View>

                    </View>
                    
                    <Drawer.Section style={styles.drawerSection} >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcons name="home" size={size} color={color} />
                            )}
                            label="Home"
                            onPress={() => {
                                props.navigation.navigate('HomeStack')
                            }}
                        />

                    <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcons name="account-circle" size={size} color={color} />
                            )}
                            label="Profile"
                            onPress={() => {
                                props.navigation.navigate('UserStack')
                            }}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcons name="favorite" size={size} color={color} />
                            )}
                            label="Wishlist"
                            onPress={() => {
                                props.navigation.navigate('Fav')
                            }}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcons name="shopping-cart" size={size} color={color} />
                            )}
                            label="Cart"
                            onPress={() => {
                                props.navigation.navigate('CartStack')
                            }}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcons name="call" size={size} color={color} />
                            )}
                            label="Support"
                            onPress={() => {}}
                        />
                        
                    </Drawer.Section>

                    <Drawer.Section title="Preferences" >
                                <TouchableRipple onPress={() => toggleTheme()} >
                                    <View style={styles.preference} pointerEvents="none" >
                                        <Text>Dark Theme</Text>
                                        <Switch value={isDark} color={Color.primary} />
                                    </View>
                                </TouchableRipple>
                    </Drawer.Section>

                    

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection} >
                <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialIcons name="exit-to-app" size={size} color={color} />
                    )}
                    label="Sign Out"
                    onPress={() => {
                        dispatch(authAction.logout())
                    }} 
                />

                
            </Drawer.Section>

            
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    drawerContent : {
        flex:1
    },
    userInfoSection:{
        paddingHorizontal:15
        
    },
    userProfileSection:{
        height:70,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
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
    }
})
