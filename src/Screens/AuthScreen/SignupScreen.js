import React, { useState } from 'react'
import { Dimensions,TextInput, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View, TouchableNativeFeedback, TouchableOpacity } from 'react-native'

import Color from '../../Constant/Color'
import FontFamily from '../../Constant/FontFamily'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import InputBox from '../../Component/InputBox'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';
import CustomButton from '../../Component/CustomButton'


const SignupScreen = (props) => {
    const [isBlur, setIsBlur] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleClick=() => {
        setIsLoading(true)
    }

    return (
       
        <ScrollView>
           <View style={styles.container}>
             
                <View style={styles.image} >
                    <View >
                        <Image
                            source={require('../../../asset/images/illustration3.png')}
                            style={styles.background}
                        />
                    </View>
                </View>

                <View style={styles.footer} >
                    <View style={styles.login}>
                        <Text style={styles.loginText}>Let's register </Text>
                    </View> 

                    <Animatable.View 
                        animation="fadeInUp"
                        duration={500}
                        style={styles.loginContainer}
                    >

                        <InputBox 
                            label="Name"
                            placeholder="Name"
                            icon="account-circle-outline"
                        />

                        <InputBox 
                            label="Email"
                            placeholder="Email"
                            icon="email-outline"
                        />

                        <InputBox 
                            label="Choose Password"
                            placeholder="Password"
                            icon="key-outline"
                        />

                        <InputBox 
                            label="Confirm  Password"
                            placeholder="Password"
                            icon="key-outline"
                        />

                        <View style={styles.loginButton}>

                            <CustomButton 
                                title="REGISTER"
                                icon="arrow-forward"
                                onButtonPress={handleClick}
                                isLoading={isLoading}
                            />

                            <View style={styles.info}>
                                <View style={styles.infoBox}>
                                    <View>
                                        <Text style={styles.extraText}>
                                            Already have account?
                                        </Text>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => {
                                        props.navigation.navigate('Login')
                                    }} >
                                        <View>
                                            <Text style={styles.textButton}>
                                                Login now.
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </Animatable.View>  
                </View>
                
           </View>
           </ScrollView>
 
    )
}

export default SignupScreen


const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        backgroundColor:'white',
        justifyContent:'space-between'
    },
    image:{
        height:Dimensions.get("window").height/3,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white' 
    },
    background:{ 
       width:Dimensions.get("window").width,
       height:'100%'
    },
   
    footer:{
        
        backgroundColor:'white'
    },
    login:{
        justifyContent:'center',
        alignItems:'center'
    },
    loginText:{
        fontSize:25,
        fontFamily:FontFamily.bold,
        color:Color.primary
    },

    loginContainer:{
       marginTop:30,
        paddingHorizontal:30
    },
    loginButton:{
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },


    buttonBox:{
        width:'100%',
        height:50,
        borderRadius:5,
        overflow:'hidden',
       
        backgroundColor:Color.accent,
    },
    button:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:25
       
    },
    buttonText:{
        fontSize:20,
        fontFamily:FontFamily.regular,
        color:'white'
    },
    info:{
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center'
    },
    infoBox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:1
    },  
    extraText:{
        fontSize:14,
        fontFamily:FontFamily.light,
        paddingHorizontal:5
    },
    textButton:{
        fontSize:14,
        fontFamily:FontFamily.bod,
        color:Color.primary
    }
    
   

    
})
