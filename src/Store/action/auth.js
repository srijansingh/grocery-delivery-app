import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from '../../../BASE_URL';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';
let timer;


export const setDidTryAl = () => {
    return {type: SET_DID_TRY_AL}
}

export const authenticate = (userId, token, name, email, expiryTime) => {
    return dispatch => {
        // dispatch(setLogoutTimer(expiryTime));
        dispatch({
            type:AUTHENTICATE,
            userId:userId,
            token:token,
            name:name,
            email:email,
        });
    }
}



export const signup = (name, email, password) => {
    return async dispatch => {
        const response = await fetch(
            URL+'/signup',
            {
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name:name,
                    email:email,
                    password:password
                })
            }
        );

        if(!response.ok){
            const errorResData = await response.json();
            console.log(errorResData.data[0].msg)
            const errorId = errorResData.data[0].msg;
            let message = 'Something went wrong';
            if(errorId === 'EMAIL_EXIST') {
                message = 'Email already exist'
            }
            throw new Error(message)
        }

        const resData = await response.json();
        console.log("signup ",resData)

        const expirationDate = new Date(new Date().getTime() + 7)
        dispatch(authenticate(resData.userId,resData.token, resData.name, resData.email,  expirationDate));
        saveDataStorage(resData.userId,resData.token,resData.name, resData.email, expirationDate)
    }
}





export const login = (email, password, notif_token) => {
    return async dispatch => {
        const response = await fetch(
            URL+'/login',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email:email,
                    password:password,
                    notif_token:notif_token
                })
            }
        );

        if(!response.ok){
            const errorResData = await response.json();
            const errorId = errorResData.message;
            let message = 'Something went wrong';
            if(errorId === 'EMAIL_NOT_FOUND') {
                message = 'Email does not exist'
            }
            throw new Error(message)
        }

        const resData = await response.json();
        console.log(resData)

        const expirationDate = new Date(new Date().getTime() + 7)
        dispatch(authenticate(resData.userId,resData.token, resData.name, resData.email, expirationDate));
        saveDataStorage(resData.userId,resData.token,resData.name, resData.email, expirationDate)
    }
}


export const logout = () => {
    AsyncStorage.removeItem('userData');
    return {
        type: LOGOUT
    }
}

// const clearLogoutTimer = () => {
//     if(timer){
//         clearTimeout(timer)
//     }
    
// }

// const setLogoutTimer = expirationTime => {
//     return dispatch => {
//        timer =  setTimeout(() => {
//             dispatch(logout())
//         }, expirationTime)
//     }
    
// }


const saveDataStorage = ( userId,token,name,email, expirationDate) => {
    AsyncStorage.setItem('userData', JSON.stringify({
        token:token,
        userId:userId,
        name:name,
        email:email,
        expiryDate:expirationDate.toISOString()
    }))
}