import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../Component/BackButton';
import ModalLoader from '../../Component/ModalLoader';
import Color from '../../Constant/Color';
import FontFamily from '../../Constant/FontFamily';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as addressAction from '../../Store/action/address'

const AddressScreen = (props) => {
   
    const addressData = useSelector(state => state.address.address);
    const [isLoading, setIsLoading] = useState(true)
    const [selected, setSelected] = useState()
    const [error, setError] = useState(null);

    const [isAddressLoading, setIsAddressLoading] = useState(false)
    const loadCategory = useCallback(async () => {
        setIsLoading(true)
        try{
            await dispatch(addressAction.fetchAddress());
            setIsLoading(false)
        }catch(err){
           
           setIsLoading(false)
        }
      
    }, [dispatch, setIsLoading]);
    
    useEffect(() => {
        loadCategory();
    }, [dispatch]);

    const dispatch = useDispatch();
    
   

    const data = addressData.map((data, index) => {

        return (
            <TouchableOpacity 
            activeOpacity={0.9}
            onPress={() => setSelected(data.id)}
            key={index} style={styles.container}>
            <View 
                key={index}
                style={styles.address}>
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
                
                <View style={styles.buttonBox}>
                <TouchableOpacity 
                style={styles.button}
                    activeOpacity={0.8}
                    onPress={() => {
                        props.navigation.navigate('Address')
                    }}
                    
                >
                    <Text style={{fontFamily:FontFamily.bold, color:Color.icon}}>Remove</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity 
                style={styles.button}
                    activeOpacity={0.8}
                    onPress={() => {
                        props.navigation.navigate('Address')
                    }}
                    
                >
                    <Text style={{fontFamily:FontFamily.bold, color:Color.icon}}>Edit</Text>
                </TouchableOpacity> */}
                </View>
            </View>
            </TouchableOpacity>
        )
    })

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
                    <Text style={styles.title}>ADDRESS</Text>
                </View>
                
                
            </View>
        </View>
        <ScrollView>
                    <View style={{
                        height:80,
                        marginVertical:10,
                        backgroundColor:'white',
                        paddingHorizontal:15,
                        justifyContent:'center'
                    }}>
                        <TouchableOpacity 
                            activeOpacity={0.8}
                            onPress={() => {
                                props.navigation.navigate('Address', props.navigation.navigate('Address', {from:'user'}))
                            }}
                            style={styles.addButn}>
                                <Text style={styles.buttonText}> ADD NEW ADDRESS</Text>
                        </TouchableOpacity>
                    </View>
            { data}
        </ScrollView>


       
        
      
                {/* <AlertComponent visible={alert} /> */}
       

        <ModalLoader visible={isLoading} />
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
    container:{
        flexDirection:'row',
        backgroundColor:'white',
        marginVertical:8,
        padding:15
    },
    address:{
        width:'90%',
        backgroundColor:'white',
        marginVertical:12,
        paddingLeft:5
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
    addButn:{
        height:40,
        borderColor:Color.icon,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginVertical:8
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
    buttonBox:{
        height:40,
        width:'50%',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:5,
        marginVertical:8
    },
    button:{
        borderColor:Color.icon,
        borderWidth:1,
        paddingHorizontal:15,
        paddingVertical:6,
        borderRadius:4
    },
    buttonText:{
        color:Color.icon,
        fontFamily:FontFamily.black
    }
})
