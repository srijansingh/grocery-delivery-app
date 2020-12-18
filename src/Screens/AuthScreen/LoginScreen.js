import React, { useEffect, useState } from 'react'
import { Dimensions,TextInput, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View, TouchableNativeFeedback, TouchableOpacity, Alert } from 'react-native'

import Color from '../../Constant/Color'
import FontFamily from '../../Constant/FontFamily'
import InputBox from '../../Component/InputBox'
import * as Animatable from 'react-native-animatable';
import CustomButton from '../../Component/CustomButton'

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import * as authAction from '../../Store/action/auth';
import ModalLoader from '../../Component/ModalLoader'

const LoginScreen = (props) => {
    const [isError, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    const notif_token = useSelector(state => state.notif.token);

    const handleClick=() => {
        setIsLoading(true)
    }

    const authHandler = async() => {
        let action;
        action = authAction.login(email, password, notif_token[0])
        setError(null)
        setIsLoading(true)

        try {
            await dispatch(action);
        } catch (err) {
            setError(err.message)
            setIsLoading(false)
        }

       
    }

    
    useEffect(()=>{
        if(isError){
            Alert.alert('An error occurred', isError, [
                {text:'Okay'}
            ])
        }
  },[isError])

    // const renderHeader = () => {
    //     return (
    //         <View style={styles.header}>
    //             <View style={styles.panelHeader}>
    //                 <View style={styles.panelHandle} />
    //             </View>
    //         </View>
    //     )
    // }

    const renderInner = () => (
        <View style={styles.panel}>
            <View style={styles.header}>
                <View style={styles.panelHeader}>
                    <View style={styles.panelHandle} />
                </View>
            </View>
           <Text style={styles.panelTitle}>{'Reset Password'}</Text>
           <View style={{marginTop:20}}>
           <InputBox 
                icon="email-outline"
                placeholder="Email"
                label="email"
           />

            <View style={styles.loginButton}>
            <CustomButton 
                title="Send Reset Link"
                icon="arrow-forward"
                onButtonPress={handleClick}
                isLoading={isLoading}

            />
           </View>
            </View>
        </View>
    )

    const bs = React.useRef();
    const fall = new Animated.Value(1);

    return (
       <>
       <ScrollView>
          
           <Animated.View style={[{...styles.container}, {
               opacity:Animated.add(0.2, Animated.multiply(fall, 1.0)),
           }]}>
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
                            <Text style={styles.loginText}>Let's sign you in</Text>
                    </View> 

                    <Animatable.View 
                            animation="fadeInUp"
                            duration={500}
                            style={styles.loginContainer}
                            
                    >
                        <InputBox 
                            label="Email"
                            placeholder="Email"
                            icon="account-circle-outline"
                            value={email.includes('@')}
                            set={setEmail}
                            keyboardType="email-address"
                            required
                            email
                            autoCapitalize="none"
                        />

                        <InputBox 
                            label="Password"
                            placeholder="Password"
                            icon="key-outline"
                            value={password.length >=6}
                            set={setPassword}
                            secureTextEntry={password !== null}
                            required
                            minLength={5}
                            autoCapitalize="none"
                        />

                        <View  
                            style={styles.loginButton}
                        >

                            <CustomButton 
                                title="SIGN IN"
                                icon="arrow-forward"
                                onButtonPress={authHandler}
                                isLoading={isLoading}
                                disabled={!email.includes('@') || password.length < 6}

                            />

                            

                            <View style={styles.info}>
                                <View style={styles.infoBox}>                                                                                                
                                    <View>
                                        <Text style={styles.extraText}>
                                            Forget password?
                                        </Text>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => {bs.current.snapTo(0)}}  >
                                    <View>
                                        <Text style={styles.textButton}>
                                            Reset Here.  
                                        </Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.infoBox}>
                                    <View>
                                        <Text style={styles.extraText}>
                                            Don't have an account?
                                        </Text>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => {
                                            props.navigation.navigate('Signup')
                                        }} 
                                    >
                                        <View>
                                            <Text style={styles.textButton}>
                                                Create new one.
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </Animatable.View>  
                </View>
           </Animated.View>
       </ScrollView>
      
        <BottomSheet 
                ref={bs}
                snapPoints={['40%', 0]}
                renderContent={renderInner}
                // renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />

            <ModalLoader 
                visible={isLoading}
            />
      
       </>
 
    )
}

export default LoginScreen


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
        minHeight:Dimensions.get("screen").height*2/3,
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
    },
    panel:{
        paddingHorizontal: 20,
        paddingVertical:10,
        marginHorizontal:10,
        borderTopColor:'#f2f2f2',
        borderTopWidth:2,
        backgroundColor: 'white',
        elevation:3,
        height:'100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    header: {
        
        marginHorizontal:10,
        backgroundColor:'white',
        padding:10,
        alignItems:'center',
       
        justifyContent:'center'
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 50,
        height: 8,
        borderRadius: 5,
        backgroundColor: '#f1f1f1',
        elevation:1,
      },
      panelTitle: {
          width:'100%',
          paddingHorizontal:5,
        fontSize: 20,
        color:Color.primary,
        textAlign:'center',
       fontFamily:FontFamily.bold,
        justifyContent:'center',
        alignItems:'center',
       
      },
    

    
})
