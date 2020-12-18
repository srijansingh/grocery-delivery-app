import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ModalLoader from '../../Component/ModalLoader';
import { addAddress } from '../../Store/action/address';
import * as addressAction from '../../Store/action/address'
import FontFamily from '../../Constant/FontFamily';
import Color from '../../Constant/Color';
import BackButton from '../../Component/BackButton';
import SubTotalComponent from './Component/SubTotalComponent';
const SelectAddress = (props) => {
    const {addressId} = props.route.params
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const addressData = useSelector(state => state.address.address);
    const [id, setId] = useState(null);
    

    const data = addressData.find(product => product.id === id);

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
        if(addressData.length < 1){
            props.navigation.navigate('Address', {from:'choose'})
        }else{
            if(!addressId && addressData.length >0){
                setId(addressData[0].id)
            }
            else{
                setId(addressId)
            }
        }
        
    }, [addressId]);

    
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
                    <Text style={styles.title}>SELECT ADDRESS</Text>
                </View>
                
                
            </View>
            <BackButton 
                    goBack={() => {props.navigation.jumpTo('SearchStack', {id:'wwws'})}}
                    color={Color.icon}
                    name="search"
                />
        </View>
            <ScrollView>
                {data && 
                <>
                    <View style={styles.address}>
                        <View>
                            <Text style={styles.name}>{data.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.addressText}>{data.address}</Text>
                        </View>
                        <View>
                            <Text style={styles.addressText}>{data.locality}</Text>
                        </View>
                        <View>
                            <Text style={styles.addressText}>{data.district +', '+ data.state +', '+ data.pincode}</Text>
                        </View>
                        <View style={styles.mobileBox}>
                            <Text style={styles.mobileText}>Mobile:</Text><Text style={styles.phoneText}>{data.mobile}</Text>
                        </View>

                        <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={() => {
                            props.navigation.navigate('ChooseAddress', {selectedId:id})
                        }}
                        style={styles.button}>
                            <Text style={styles.buttonText}>CHANGE OR ADD ADDRESS</Text>
                        </TouchableOpacity>
                </View>
                <SubTotalComponent />
                </>
                }

           



               
            </ScrollView>
            <View style={{
                height:60,
                backgroundColor:'white',
                paddingHorizontal:15,
                justifyContent:'center'
            }}>
                <TouchableOpacity 
                onPress={() => {
                    props.navigation.navigate('Checkout', {selectedId:id})
                }}
                activeOpacity={0.9}
                style={{
                    backgroundColor:Color.button,
                    height:45,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:5,
                    
                }}>
                    <Text style={{color:'white', fontFamily:FontFamily.bold}}>Continue</Text>
                </TouchableOpacity>
            </View>
        
        <ModalLoader visible={isLoading} />
       </>
    )
}

export default SelectAddress

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
    address:{
        backgroundColor:'white',
        marginVertical:12,
        padding:15
    },
    name:{
        fontSize:14,
        fontFamily:FontFamily.bold,
        color:Color.icon,
        paddingBottom:4
    },
    addressText:{
        fontFamily:FontFamily.light,
        fontSize:12,
        color:Color.icon,
        paddingBottom:1
    },
    mobileText:{
        fontFamily:FontFamily.light,
        fontSize:13,
        color:Color.icon,
        marginHorizontal:2
    },
    phoneText:{
        fontFamily:FontFamily.bold,
        fontSize:13,
        color:Color.icon,
    },
    mobileBox:{
        flexDirection:'row',
        paddingVertical:10,
        alignItems:'center'
    },
    button:{
        height:40,
        borderColor:Color.icon,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginVertical:8
    },
    buttonText:{
        color:Color.icon,
        fontFamily:FontFamily.black
    }
})
