import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../../Constant/Color"
import CartScreen from '../../Screens/CartScreen/CartScreen';
import AddressScreen from '../../Screens/CartScreen/AddressScreen';
import CheckoutScreen from '../../Screens/CartScreen/CheckoutScreen';
import SelectAddress from '../../Screens/CartScreen/SelectAddress';
import ChooseAddress from '../../Screens/CartScreen/ChooseAddress';
const Stack = createStackNavigator();

const defaultNavOptions = {
    headerStyle: {
      backgroundColor: "white",
      elevation:0
    },
    headerTintColor:Colors.primary
  };

const CartNavigator = () => {
    return (
        <Stack.Navigator screenOptions={defaultNavOptions}>
            <Stack.Screen
                name="Cart"
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
            
      </Stack.Navigator>
    )
}

export default CartNavigator

