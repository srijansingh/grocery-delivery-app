import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './Drawer/DrawerNavigation';
import RootNavigator from './Stack/RootStackNavigator';



const MainNavigator = () => {
  return (
      <NavigationContainer>
        <DrawerNavigation />
        {/* <RootNavigator /> */}
      </NavigationContainer>
 
    
  );
};



export default MainNavigator;
