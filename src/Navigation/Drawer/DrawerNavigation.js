import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from "./DrawerContent"
import HomeNavigator from '../Stack/HomeStackNavigator';
import CartNavigator from '../Stack/CartStackNavigator';
import UserNavigator from '../Stack/UserStackNavigation';
import BottomTab from '../Tab/BottomTab';
import SearchScreen from '../../Screens/ShopScreens/SearchScreen';
import CategoryScreen from '../../Screens/ShopScreens/CategoryScreen';


const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator();

    
      return (

          <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen 
              name="HomeStack" 
              component={HomeNavigator} 
              options={{swipeEnabled:false}}
            />
            <Drawer.Screen 
              name="SearchStack" 
              component={SearchScreen} 
              options={{swipeEnabled:false}}
            />
            {/* <Drawer.Screen 
              name="CartStack" 
              component={CartNavigator} 
              options={{swipeEnabled:false}}
            /> */}
            <Drawer.Screen 
              name="UserStack" 
              component={UserNavigator} 
              options={{swipeEnabled:false}}
            />
          </Drawer.Navigator>

      );
    
}

export default DrawerNavigation
