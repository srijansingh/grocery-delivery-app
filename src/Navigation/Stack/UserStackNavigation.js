import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from '../../Screens/UserScreen/UserScreen';
import Colors from "../../Constant/Color"
const Stack = createStackNavigator();

const defaultNavOptions = {
    headerStyle: {
      backgroundColor: "white",
      elevation:0
    },
    headerTintColor:Colors.primary
  };

const UserNavigator = () => {
    return (
        <Stack.Navigator screenOptions={defaultNavOptions}>
            <Stack.Screen
                name="User"
                component={UserScreen}
                options={{ title: 'Srijan' }}
            />
            
      </Stack.Navigator>
    )
}

export default UserNavigator

