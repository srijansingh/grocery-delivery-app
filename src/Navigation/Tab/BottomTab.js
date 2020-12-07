import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import UserNavigator from '../Stack/UserStackNavigation';
import HomeNavigator from '../Stack/HomeStackNavigator';

import  color  from "../../Constant/Color"
import SearchScreen from '../../Screens/ShopScreens/SearchScreen';
import CartScreen from '../../Screens/CartScreen/CartScreen';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Tab = createMaterialBottomTabNavigator();


const BottomTab = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Home"
            barStyle={{ backgroundColor: "white" }}
             shifting = {false}
             labeled={true}
             activeColor={color.button}
             inactiveColor={color.icon}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeNavigator} 
                options={{
                    tabBarLabel: 'Store',
                    tabBarIcon: (tabInfo) => (
                        <MaterialCommunityIcons name="home-variant" size={24} color={tabInfo.color} />
                    )
                  }}
            />

            <Tab.Screen 
                name="UserTab" 
                component={UserNavigator} 
                options={{
                    tabBarLabel: 'My Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-circle-outline" size={24} color={color} />
                    )
                  }}
            />
            
        </Tab.Navigator>
    )
}

export default BottomTab



{/* <Tab.Screen 
                name="Sea" 
                component={SearchNavigator} 
                options={{
                    tabBarLabel: 'Explore',
                    
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="search" size={24} color={color} />
                    )
                  }}
            />
            <Tab.Screen 
                name="Cart" 
                component={CartScreen} 
                options={{
                    tabBarLabel: 'Cart',
                    tabBarBadge:'1',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="shopping-cart" size={24} color={color} />
                    ),
                  }}
            />
            <Tab.Screen 
                name="User" 
                component={UserNavigator} 
                options={{
                    tabBarLabel: 'My Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="account-circle" size={24} color={color} />
                    )
                  }}
            /> */}