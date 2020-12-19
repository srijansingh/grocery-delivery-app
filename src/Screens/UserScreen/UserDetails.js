import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import * as authAction from '../../Store/action/auth';
import Color from '../../Constant/Color'
import FontFamily from '../../Constant/FontFamily'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { URL } from '../../../BASE_URL';
import { shouldUseActivityState } from 'react-native-screens';
import ModalLoader from '../../Component/ModalLoader';
const UserDetails = () => {
    const dispatch = useDispatch();
    const names = useSelector(state => state.auth.name);
    const userid = useSelector(state => state.auth.userId);

    const [modelOpen, setModalOpen] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [name, setName] = useState(null)
    const [emailError, setEmailError] = useState(false)
    const [email, setEmail] = useState('')
    const [nameMsg, setNameMsg] = useState(null)
    const [mobile, setMobile] = useState(null)
    const [mobileError, setMobileError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(URL+'/user/'+userid, {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(result => {
            if(!result){
                throw new Error('Something went wrong')
            }
            return result.json()
        })
        .then(result => {
            setName(result.data.name)
            setEmail(result.data.email)
            setMobile(result.data.mobile)
            setIsLoading(false)
        })
        .catch(err => {
            setIsLoading(false)
        })
    },[])


    const updateUser = () => {
        setIsLoading(true)
        fetch(URL+'/user/'+userid, {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:name, email:email, mobile:mobile})
        })
        .then(result => {
            console.log(result)
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
        })
    }



    const nameBlurHandler = () => {
        if(!name){
            setNameError(true)
            setNameMsg("Name should not be empty")
        }
        else if(name.length < 3){
            setNameError(true)
            setNameMsg("Name should not be less than 3 character")
        }
        else if(name.includes('@') || !isNaN(name)){
            setNameError(true)
            setNameMsg("Name should include not include numeric character")
        }
    }

    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerText} >
                    <View>
                        <Text style={styles.title}>Profile</Text>
                    </View>
                </View>
            </View> 
            <ScrollView>
            <View style={styles.container}>
                    <LinearGradient colors={['#fff','#a6a6a6','#000']}  style={{height:190}} />

                    <View style={styles.user}>
                        <View style={styles.image}>
                            <Image
                                source={require('../../../asset/images/avatar.png')}
                                style={styles.logo}
                            />
                        </View>
                        <View style={{
                            height:120,
                            justifyContent:'flex-end',
                            paddingHorizontal:15
                        }}>
                            <Text style={{height:0, fontFamily:FontFamily.bold, color:Color.icon, fontSize:20}}>{names}</Text>
                        </View>  
                    </View>
                </View>
                <View>
                    <View style={styles.textBoxContainer}>
                    <View style={styles.textBox}>
                            <TextInput 
                                theme={{ colors: { primary: Color.icon}}}
                                label="Name"
                                mode="outlined"
                                value={name}
                                dense={false}
                                autoCapitalize="words"
                                keyboardAppearance="light"
                                keyboardType="name-phone-pad"
                                style={styles.textInput}
                                error={nameError}
                                onChangeText={(value) => setName(value)}
                                onBlur={nameBlurHandler}
                                onFocus={() => setNameError(false)} 
                            />

                           {nameError &&  <HelperText type="error" visible={nameError}>
                                {nameMsg}
                            </HelperText>}
                        </View>

                       
                        <View style={styles.textBox}>
                            <TextInput 
                             theme={{ colors: { primary: Color.icon}}}
                                label="Mobile"
                                mode="outlined"
                                value={mobile}
                                error={mobileError}
                                style={styles.textInput}
                                keyboardType="number-pad"
                                dataDetectorTypes="phoneNumber"
                                maxLength={10}
                                onChangeText={(value) => setMobile(value)}
                                onBlur={() => {!mobile || mobile.length < 10 || isNaN(mobile) ? setMobileError(true) :  setMobileError(false)}}
                                // onFocus={() => setMobileError(false)}
                            />

                            {mobileError &&  <HelperText type="error" visible={mobileError}>    
                                Mobile number error
                            </HelperText>}
                        </View>

                        <View style={styles.textBox}>
                            <TextInput 
                            disabled
                                theme={{ colors: { primary: Color.icon}}}
                                label="Email (Cannot be edited)*"
                                mode="outlined"
                                value={email}
                                dense={false}
                                autoCapitalize="words"
                                keyboardAppearance="light"
                                keyboardType="email-address"
                                style={styles.textInput}
                                error={emailError}
                                onChangeText={(value) => setEmail(value)}
                                onBlur={() => {!email.includes('@') || !email ? setEmailError(true) :setEmailError(false)}}
                                onFocus={() => setEmailError(false)}
                            />

                           {emailError &&  <HelperText type="error" visible={emailError}>
                                Invalid Email
                            </HelperText>}
                        </View>

                    </View>
                </View>
            </ScrollView>
            <View style={{
                height:60,
                backgroundColor:'white',
                paddingHorizontal:15,
                justifyContent:'center',
                borderTopColor:'#f2f2f2',
                borderTopWidth:1,
            }}>
                <TouchableOpacity 
                onPress={updateUser}
                activeOpacity={0.9}
                style={{
                    backgroundColor:Color.button,
                    height:45,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:5,
                  
                }}>
                   
                    <Text style={{color:'white', fontFamily:FontFamily.bold}}>SAVE DETAILS</Text>
                </TouchableOpacity>
            </View>
            <ModalLoader visible={isLoading} />
        </>
    )
}

export default UserDetails

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height:55,
        width:'100%',
        backgroundColor:"white",
        justifyContent:'space-between',
        alignItems:'center',
        elevation:1
    },
    headerText:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    title:{
      marginLeft:20,
      fontSize:18,
      color:Color.icon,  
      fontFamily:FontFamily.bold
    },
    container:{
        height:250,
        backgroundColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'#f1f1f1'
    },
    user:{
        position:'absolute',
        width:'100%',
        bottom:0,
        height:150,
        paddingHorizontal:20,
        alignItems:'center',
        flexDirection:'row'
    },
    image:{
        height:100,
        width:100,
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        elevation:1
    },
    logo:{
        height:50,
        width:50,
        marginVertical:10
    },
    textInput:{
        height:45,
        fontSize:14,
        fontFamily:FontFamily.light,
        backgroundColor:'white'
    },
    textBoxContainer:{
        backgroundColor:'white',
        marginVertical:10,
        paddingHorizontal:15,
        paddingVertical:15

     },
    textBox:{
        marginVertical:8
    },
})
