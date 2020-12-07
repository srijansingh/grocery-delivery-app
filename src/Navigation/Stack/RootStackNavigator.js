import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../../Constant/Color"
import SearchScreen from '../../Screens/ShopScreens/SearchScreen';
import RootScreen from '../../Screens/AuthScreen/RootScreen';
import LoginScreen from '../../Screens/AuthScreen/LoginScreen';
import SignupScreen from '../../Screens/AuthScreen/SignupScreen';
const Stack = createStackNavigator();

const defaultNavOptions = {
    headerStyle: {
      backgroundColor: "white",
      elevation:0
    },
    headerTintColor:Colors.primary
  };

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={defaultNavOptions}>
            <Stack.Screen
                name="Root"
                component={RootScreen}
                options={{ title: 'Root', headerShown:false  }}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'Login', headerShown:false }}
            />

            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{ title: 'Signup', headerShown:false }}
            />
            
      </Stack.Navigator>
    )
}

export default RootNavigator

