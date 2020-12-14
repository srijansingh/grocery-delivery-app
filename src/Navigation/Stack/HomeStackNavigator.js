import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../Screens/ShopScreens/HomeScreen';
import CategoryScreen from '../../Screens/ShopScreens/CategoryScreen';
import Colors from "../../Constant/Color"
import ProductDetailScreen from '../../Screens/ShopScreens/ProductDetailScreen';

import CartScreen from '../../Screens/CartScreen/CartScreen';
import AddressScreen from '../../Screens/CartScreen/AddressScreen';
import CheckoutScreen from '../../Screens/CartScreen/CheckoutScreen';
import SelectAddress from '../../Screens/CartScreen/SelectAddress';
import ChooseAddress from '../../Screens/CartScreen/ChooseAddress';
import ConfirmationScreen from '../../Screens/CartScreen/ConfirmationScreen';

const Stack = createStackNavigator();

const defaultNavOptions = {
    headerStyle: {
      backgroundColor:'white',
      elevation:2
    }
  };

const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={defaultNavOptions}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options = {{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="Category" 
                component={CategoryScreen} 
                options = {{
                    title:"Cat",
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="ProductDetail" 
                component={ProductDetailScreen} 
                options = {{
                    headerShown:false
                }}
            />

            <Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options = {{
                  headerShown:false
              }}
            />

            <Stack.Screen
                name="SelectAddress"
                component={SelectAddress}
                options = {{
                  headerShown:false
              }}
            />  

            <Stack.Screen
                name="ChooseAddress"
                component={ChooseAddress}
                options = {{
                  headerShown:false
              }}
            />    

            <Stack.Screen
                name="Checkout"
                component={CheckoutScreen}
                options = {{
                  headerShown:false
              }}
            />

            <Stack.Screen
                name="Address"
                component={AddressScreen}
                options = {{
                  headerShown:false
              }}
            />

            <Stack.Screen
                name="Confirmation"
                component={ConfirmationScreen}
                options = {{
                  headerShown:false
              }}
            />
            
      </Stack.Navigator>
    )
}

export default HomeNavigator


