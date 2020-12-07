import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../../Constant/Color"
import CartScreen from '../../Screens/CartScreen/CartScreen';
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
                options={{ title: 'My Cart' }}
            />
            
      </Stack.Navigator>
    )
}

export default CartNavigator

