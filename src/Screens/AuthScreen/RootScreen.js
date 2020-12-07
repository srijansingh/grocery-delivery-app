import React from 'react'
import { TouchableNativeFeedback, Dimensions, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import Color from '../../Constant/Color'

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontFamily from '../../Constant/FontFamily';

import * as Animatable from 'react-native-animatable';

const RootScreen = (props) => {
    return (
        <>
         {/* <StatusBar backgroundColor={Color.primary} /> */}
        <View style={styles.container}>
           
            <View 
                style={styles.image} 
               
                
            
            >
                <Animatable.Image 
                    source={require("../../../asset/images/logo.png")}
                    style={styles.logo}
                    resizeMode="stretch"
                    animation='bounceIn'
                    duration={3000}
                />
            </View>

            <Animatable.View 
                animation="fadeInUp"
                duration={1500}
                style={styles.footer}
            >
                <View style={{padding:30}}>
                    <Text style={styles.title} >Get your essentials delivered at home.</Text>
                    <Text style={styles.subTitle}>Sign in with account</Text>
                </View>

                <Animatable.View 
                    style={styles.bottonFooter}
                    animation="bounceInLeft"
                    duration={3000}
                >
                    <LinearGradient colors={['#FFA641', Color.accent]} style={styles.buttonBox} >
                            <TouchableNativeFeedback onPress={() => {props.navigation.navigate('Login')}}>
                                <View style={styles.button} >
                                    <Text style={styles.buttonText} >Get Started</Text>
                                    <MaterialIcons 
                                        name="arrow-forward"
                                        size={24}
                                        color="white"
                                    />
                                </View>
                            </TouchableNativeFeedback>
                       </LinearGradient>
                    
                </Animatable.View>
            </Animatable.View>
        </View>
        </>
    )
}


export default RootScreen;

const {height} = Dimensions.get("screen");
const heigh_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:Color.primary,
        
    },
    image:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        
        
    },
    logo:{
        height:heigh_logo,
        width:heigh_logo,
       
    },
    footer:{
        flex:1,
        backgroundColor:'white',
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        elevation:3,
        paddingBottom:30,
        //padding:30,
        // paddingVertical:30,
        // paddingHorizontal:30,
        justifyContent:'space-between'
    },
    title:{
        fontSize:25,
        fontFamily:FontFamily.bold
    },
    subTitle:{
        color:Color.icon,
        marginTop:5,
        fontSize:20,
        fontFamily:FontFamily.light
    },
    bottonFooter:{
        alignItems:'flex-end',
        paddingRight:30
    },
    buttonBox:{
        width:200,
        height:50,
        borderRadius:50,
        overflow:'hidden',
        elevation:2,
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
    }
    

})
