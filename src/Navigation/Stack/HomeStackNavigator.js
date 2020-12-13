import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../Screens/ShopScreens/HomeScreen';
import CategoryScreen from '../../Screens/ShopScreens/CategoryScreen';
import Colors from "../../Constant/Color"
import ProductDetailScreen from '../../Screens/ShopScreens/ProductDetailScreen';



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
            
      </Stack.Navigator>
    )
}

export default HomeNavigator


