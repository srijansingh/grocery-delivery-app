import React, { useEffect, useState } from 'react'
import {  ActivityIndicator, Keyboard, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableOpacityBase, TouchableWithoutFeedback, View } from 'react-native'
import { TextInput,Modal, HelperText } from 'react-native-paper'
import BackButton from '../../Component/BackButton'
import Color from '../../Constant/Color'
import FontFamily from '../../Constant/FontFamily'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';
import * as addressAction from '../../Store/action/address'

import Animated from 'react-native-reanimated';
import { useSelector, useDispatch } from 'react-redux'
import ModalLoader from '../../Component/ModalLoader'
import { Alert } from 'react-native'

const AddressScreen = (props) => {
    const {from } = props.route.params;
    const userid = useSelector(state => state.auth.userId);
    const [modelOpen, setModalOpen] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [name, setName] = useState(null)
    const [nameMsg, setNameMsg] = useState(null)
    const [mobile, setMobile] = useState(null)
    const [mobileError, setMobileError] = useState(false)

    // const addressData = useSelector(state => state.address.address)

    // console.log('ADDRESS ',addressData)

    const dispatch = useDispatch();

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
    
    //pincode and address

    const [pincode, setPincode] = useState('')
    const [pinError, setPinError] = useState(false)
    const [pinMsg, setPinMsg] = useState("Pincode is invalid")
    const [district, setDistrict] = useState(null)
    const [state, setState] = useState(null)
    const [pinLocality, setPinLocality] = useState([])
    const [locality, setLocality] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const [address, setAddress] = useState(null)
    const [addressError, setAddressError] = useState(false)

    const pinChangeHandler = (value) => {
        setPincode(value)

        if(pincode.length <=6){
            setState(null)
            setDistrict(null)
            setLocality(null)
        }
    }

    

    useEffect( () => {
        setPinMsg("Pincode Empty / Invalid")
                setPinError(false)
        setIsLoading(true)
            if(pincode.length > 5){
                Keyboard.dismiss();
                fetch('https://api.postalpincode.in/pincode/'+pincode, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(response => {

               return response.json()
            })
            .then(response => {
                setDistrict(response[0].PostOffice[0].District)
                setState(response[0].PostOffice[0].Circle)
                setPinLocality(response[0].PostOffice)
                setIsLoading(false)
            })
            .catch(err => {
                setPinMsg('Pincode does not exist')
                setPinError(true)
                setIsLoading(false)
            })
            }
            
      
    },[pincode])

    const handleLocality = (local) => {
        setLocality(local)
        setTimeout(() => {
        setModalOpen(!modelOpen)
       }, 500);
    }


    const pinLocatorModel = pinLocality.map((list,index) => {
       
        return (
            <TouchableOpacity 
                activeOpacity={0.9}
                onPress={() => handleLocality(list.Name)}
                key={index}
                style={styles.singleLocality}
            > 
          
                <View>
                    <MaterialIcons
                        name={list.Name ===  locality ?  "radio-button-checked" : "radio-button-unchecked"}
                        color={list.Name ===  locality  ? Color.button : Color.icon}
                        size={20}

                    />
                </View>
                
                <Text style={styles.localityText}>{list.Name}</Text>
            </TouchableOpacity>
        )
    })

    const [isAdding, setIsAdding] = useState(false)
    const [error, setError] = useState(false);
    const onAddButtonPress = async () => {
        
        if(!userid || !name || !mobile || !pincode || !locality || !district || !state){
            setError(true)
            return;
        }

        setIsAdding(true)
        const data = {
            userid:userid,
            name:name,
            mobile:mobile,
            pincode:pincode,
            address:address,
            locality:locality,
            district:district,
            state:state
        }
        
        try{
            await dispatch(addressAction.addAddress(data));
            setIsAdding(false)

            if(from === 'choose'){
                props.navigation.navigate('ChooseAddress', {add:true})
            }else{
                props.navigation.goBack()
            }   

        }catch(err){
            setError(true)
        }
       
    }

    useEffect(()=>{
        if(error){
            Alert.alert('An error occurred','All fields are required' [
                {text:'Okay'}
            ])
        }
  },[error])


    return (
        <>
        <View style={styles.header}>
            <View style={styles.headerText} >
                <BackButton 
                    goBack={() => {props.navigation.goBack()}}
                    color={Color.primary}
                    name="arrow-back"
                />
                <View>
                    <Text style={styles.title}>ADD ADDRESS</Text>
                </View>
                
                
            </View>
            <BackButton 
                    goBack={() => {props.navigation.jumpTo('SearchStack', {id:'wwws'})}}
                    color={Color.icon}
                    name="search"
                />
        </View>

        <ScrollView>
            <View>
                <View style={styles.addressContainer}>
                    <View style={styles.addressHeader}>
                        <Text style={styles.addressHeaderText}>CONTACT DETAILS</Text>
                    </View>

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
                    </View>
                </View>

                <View style={styles.addressContainer}>
                    <View style={styles.addressHeader}>
                        <Text style={styles.addressHeaderText}>ADDRESS DETAILS</Text>
                    </View>

                    <View style={styles.textBoxContainer}>
                        <View style={styles.textBox}>
                            <TextInput 
                                theme={{ colors: { primary: Color.icon}}}
                                label="Pin Code*"
                                mode="outlined"
                                value={pincode}
                                dense={false}
                                keyboardType="number-pad"
                                dataDetectorTypes="phoneNumber"
                                maxLength={6}
                                style={styles.textInput}
                                error={pinError}
                                onChangeText={pinChangeHandler}
                                onBlur={() => {!pincode || pincode.length < 6 || isNaN(pincode) ? setPinError(true) :  setPinError(false)}}
                                onFocus={() => setPinError(false)}
                            />
                         
                            
                      
                           {pinError &&  <HelperText type="error" visible={pinError}>
                                {pinMsg}
                            </HelperText>}
                        </View>

                        <View style={styles.textBox}>
                        <TextInput 
                                theme={{ colors: { primary: Color.icon}}}
                                label="Address (House No, Building, Area)*"
                               
                                mode="outlined"
                                value={address}
                                dense={false}
                                autoCapitalize="words"
                                keyboardAppearance="light"
                                keyboardType="name-phone-pad"
                                style={styles.textInput}
                                error={addressError}
                                onChangeText={(value) => setAddress(value)}
                                onBlur={() => {!address || address.length < 8 ? setAddressError(true) : setAddressError(false)}}
                                onFocus={() => setAddressError(false)}
                            />

                           {addressError &&  <HelperText type="error" visible={addressError}>
                                House No. or Area Required
                            </HelperText>}
                        </View>


                        <View style={styles.textBox}>
                        {
                            !locality
                        ?
                         <TouchableOpacity 
                           disabled={isLoading}
                            activeOpacity={1}
                            style={styles.localityButton}
                            onPress ={() => setModalOpen(true)}
                         >
                             <Text style={{fontSize:14, color:Color.icon}}>Locality / Town*</Text>
                         </TouchableOpacity>
                         :
                        <TouchableOpacity
                        activeOpacity={1}
                            onPress ={() => setModalOpen(true)}
                        >
                            <TextInput 
                                theme={{ colors: { primary: Color.icon}}}
                                label="Locality"
                                mode="outlined"
                                dense={false}
                                editable={false}
                                value={locality}
                                style={styles.textInput}
                               
                            />
                        </TouchableOpacity>
                        }

                        </View>


                        <View style={[styles.textBox, {flexDirection:'row', justifyContent:'space-between'}]}>
                        <TextInput 
                                theme={{ colors: { primary: Color.icon}}}
                                label="Address"
                                mode="outlined"
                                value={district}
                                dense={false}
                                editable={false}
                                style={[styles.textInput, {width:'48%'}]}
                               
                                
                            />

                        <TextInput 
                                theme={{ colors: { primary: Color.icon}}}
                                label="Address"
                                mode="outlined"
                                value={state}
                                editable={false}
                                style={[styles.textInput, {width:'48%'}]}
                                
                            />

                        </View>
                    </View>
                </View>


            </View>
        </ScrollView>
        <View style={{
            height:60,
            backgroundColor:'white',
            paddingHorizontal:15,
            justifyContent:'center'
        }}>
            <TouchableOpacity 
            onPress={onAddButtonPress}
            activeOpacity={0.9}
            style={{
                backgroundColor:Color.button,
                height:45,
                justifyContent:'center',
                alignItems:'center',
                borderRadius:5,
                
            }}>
                <Text style={{color:'white', fontFamily:FontFamily.bold}}>ADD ADDRESS</Text>
            </TouchableOpacity>
        </View>
        

       

        <Modal visible={modelOpen}>
            <Animatable.View 
                animation="fadeInUp"
                duration={500} 
                style={{height:'100%', justifyContent:'space-between'}}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.modelBack}
                    onPress={() => setModalOpen(false)}
                >
                    <View style={styles.handle}></View>
                </TouchableOpacity>
   
                <View style={{
                        height:'60%',
                        backgroundColor:'white'
                    }}>
                        <ScrollView>
                            <View >
                               {pinLocatorModel}
                            </View>
                        </ScrollView>
                    </View>
            </Animatable.View>
        </Modal>

        
        <Modal visible={isLoading && pincode.length > 5}>
            <View style={{height:'100%', justifyContent:'center', alignItems:'center',}}>
                    <View style={{
                        height:50,
                        width:50,
                        backgroundColor:'white',
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:50,
                    }}>

                    <ActivityIndicator 
                        size="large"
                        color={Color.button}
                    />
                    </View>
            </View>
        </Modal>

        <ModalLoader
            visible={isAdding}
        />

       
        
    </>
    )
}

export default AddressScreen

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height:55,
        width:'100%',
        backgroundColor:"white",
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1
    },
    headerText:{
        width:'80%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    title:{
        fontSize:15,
        color:'#707070',
        fontFamily:FontFamily.bold
    },
    textInput:{
        height:45,
        fontSize:14,
        fontFamily:FontFamily.light,
        backgroundColor:'white'
    },
    textBox:{
        marginVertical:8
    },
    addressContainer:{
        marginVertical:8
    },
    addressHeader:{
        height:30,
        justifyContent:'center',
        paddingHorizontal:15
    },
    addressHeaderText:{
        fontSize:12,
        color:Color.icon,
        fontFamily:FontFamily.bold
    },
    textBoxContainer:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:15

     },
     modelBack:{
        height:'40%',
       
        
        justifyContent:'flex-end',
        alignItems:'center',
        
    },
    handle:{
        width:60,
        height:5,
        backgroundColor:'white',
        marginBottom:15,
        borderRadius:20,
        elevation:1
    },
    localityButton:{
        height:45,
        borderRadius:5,
        marginVertical:5,
        borderColor:Color.icon,
        borderWidth:1,
        justifyContent:'center',
        paddingHorizontal:12
    },
    singleLocality:{
        width:'100%',
        height:60,
        paddingHorizontal:20,
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    localityText:{
        paddingHorizontal:15
    }
})
