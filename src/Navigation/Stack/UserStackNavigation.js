import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from '../../Screens/UserScreen/UserScreen';
import AddressScreen from '../../Screens/UserScreen/AddressScreen';
import Colors from "../../Constant/Color"
import FaqsScreen from '../../Screens/UserScreen/FaqsScreen';
import AboutusScreen from '../../Screens/UserScreen/AboutusScreen';
import TermsScreen from '../../Screens/UserScreen/TermsScreen';
import UserDetails from '../../Screens/UserScreen/UserDetails';
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
                options = {{
                  headerShown:false
              }}
            />
        <Stack.Screen
                name="UserDetail"
                component={UserDetails}
                options = {{
                  headerShown:false
              }}
            />

        <Stack.Screen
                name="UserAddress"
                component={AddressScreen}
                options = {{
                  headerShown:false
              }}
            /> 

        <Stack.Screen
                name="Faqs"
                component={FaqsScreen}
                options = {{
                  headerShown:false
              }}
            />  

        <Stack.Screen
                name="Aboutus"
                component={AboutusScreen}
                options = {{
                  headerShown:false
              }}
            /> 

        <Stack.Screen
                name="Terms"
                component={TermsScreen}
                options = {{
                  headerShown:false
              }}
            /> 
            
      </Stack.Navigator>
    )
}

export default UserNavigator

