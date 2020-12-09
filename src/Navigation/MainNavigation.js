import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './Drawer/DrawerNavigation';
import RootNavigator from './Stack/RootStackNavigator';
import StartupScreen from '../Screens/AuthScreen/StartupScreen';
import { useSelector } from 'react-redux';



const MainNavigator = () => {
  const isAuth = useSelector(state => state.auth.token);
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

  
  return (
      <NavigationContainer>
        {isAuth && <DrawerNavigation />}
        {!isAuth && didTryAutoLogin && <RootNavigator />}
        {!isAuth && !didTryAutoLogin &&<StartupScreen />}
      </NavigationContainer>
 
    
  );
};



export default MainNavigator;


// useEffect(()=>{
//   const tryLogin = async () => {
//       const userData = await AsyncStorage.getItem('userData');
//       if(!userData){
//         setIsAuth(false)
//         return;
//       }

//       const transformData = JSON.parse(userData)
//       const {token, userId, name, email, expiryDate} = transformData;
//       if(token !== null && userId !== null){
//         setIsAuth(true)
//         return
//       }
//   }

//   tryLogin()
// }, [])