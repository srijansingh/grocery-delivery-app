import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../../Constant/Color"
import OrderOverviewScreen from '../../Screens/OrderScreen/OrderOverviewScreen';
import OrderDetailScreen from '../../Screens/OrderScreen/OrderDetailScreen';

const Stack = createStackNavigator();

const defaultNavOptions = {
    headerStyle: {
      backgroundColor: "white",
      elevation:0
    },
    headerTintColor:Colors.primary
  };

const OrderNavigator = () => {
    return (
        <Stack.Navigator screenOptions={defaultNavOptions}>
            <Stack.Screen
                name="OrderScreen"
                component={OrderOverviewScreen}
                options = {{
                  headerShown:false
              }}
            />

        <Stack.Screen
                name="OrderDetail"
                component={OrderDetailScreen}
                options = {{
                  headerShown:false
              }}
            />  
            
      </Stack.Navigator>
    )
}

export default OrderNavigator

