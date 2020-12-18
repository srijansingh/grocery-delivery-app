import React, { useEffect } from 'react'
import { StyleSheet,ActivityIndicator, View, StatusBar } from 'react-native'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import color from "../../Constant/Color";
import * as authAction from "../../Store/action/auth";
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'react-native-firebase';
import * as notifAction from '../../Store/action/notif_token';
const StartupScreen = (props) => {

    const dispatch = useDispatch();
   
    const getFcmToken = async() => {
        const firebaseToken = await firebase.messaging().getToken();
        
        dispatch(notifAction.createNotif(firebaseToken))
        
      }

    useEffect(()=>{
        getFcmToken();
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if(!userData){
                dispatch(authAction.setDidTryAl())
                return;
            }
            const transformData = JSON.parse(userData)
            const {token, userId, name, email, expiryDate} = transformData;

            const expirationDate = new Date(expiryDate);
            
            if(!token || !userId){
                dispatch(authAction.setDidTryAl())
                return;
            }
            const expiryTime = expirationDate.getTime() - new Date().getTime();
            dispatch(authAction.authenticate(userId, token, name, email, expiryTime));
        }
            setTimeout(() => {
                tryLogin()
            }, 3000);
    }, [dispatch])

    return (
        <View style={styles.screen}>
             <StatusBar backgroundColor="white" barStyle="dark-content" />
            <ActivityIndicator size="large" color={color.primary} />
        </View>
    )
}

export default StartupScreen

const styles = StyleSheet.create({
    screen:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    }
})
