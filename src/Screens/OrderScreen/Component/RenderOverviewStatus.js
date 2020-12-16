import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Color from '../../../Constant/Color'
import FontFamily from '../../../Constant/FontFamily'

import Feather from 'react-native-vector-icons/Feather'
import IonIcons from 'react-native-vector-icons/Ionicons'
import moment from 'moment'



const RenderOverviewStatus = (props) => {

    const returnStatus = (status, date, update) => {
        switch (status) {
            case 'processing':
                return (
                    <View style={styles.headerBox}>
                        <View style={styles.statusContainer}>
                            <Feather
                                name="box"
                                color={'white'}
                                size={25}
                            />
                        </View>

                        <View style={{paddingHorizontal:15}}>
                            <Text style={{color:Color.darkgreen, fontFamily:FontFamily.bold, fontSize:13}}>Confirmed</Text>
                            <Text style={{color:Color.icon, fontFamily:FontFamily.light, fontSize:13}}>Arriving by {moment(date).add(5 ,'day').format('ddd, Do MMM')}</Text>
                        </View>
                    </View>
                )
            case 'shipped':
                return (
                    <View style={styles.headerBox}>
                        <View style={styles.statusContainer}>
                            <Feather
                                name="box"
                                color={'white'}
                                size={25}
                            />
                        </View>

                        <View style={{paddingHorizontal:15}}>
                            <Text style={{color:Color.darkgreen, fontFamily:FontFamily.bold, fontSize:13}}>Shipped</Text>
                            <Text style={{color:Color.icon, fontFamily:FontFamily.light, fontSize:13}}>Arriving by {moment(date).add(5 ,'day').format('ddd, Do MMM')}</Text>
                        </View>
                    </View>
                )
            
            case 'outfordelivery':
            return (
                <View style={styles.headerBox}>
                    <View style={styles.statusContainer}>
                        <Feather
                            name="box"
                            color={'white'}
                            size={25}
                        />
                    </View>

                    <View style={{paddingHorizontal:15}}>
                        <Text style={{color:Color.darkgreen, fontFamily:FontFamily.bold, fontSize:13}}>In Transit</Text>
                        <Text style={{color:Color.icon, fontFamily:FontFamily.light, fontSize:13}}>Arriving by {moment(date).add(5 ,'day').format('ddd, Do MMM')}</Text>
                    </View>
                </View>
            )

            case 'delivered':
                return (
                    <View style={styles.headerBox}>
                        <View style={[styles.statusContainer, {backgroundColor:'black'}]}>
                            <Feather
                                name="box"
                                color={'white'}
                                size={25}
                            />
                            <View style={styles.badges}>
                            <IonIcons
                                name="ios-checkmark-circle"
                                color={Color.darkgreen}
                                size={16}
                            />
                            </View>
                        </View>

                        <View style={{paddingHorizontal:15}}>
                            <Text style={{color:Color.darkgreen, fontFamily:FontFamily.bold, fontSize:13}}>Delivered</Text>
                            <Text style={{color:Color.icon, fontFamily:FontFamily.light, fontSize:13}}>Delivered on {moment(update).format('ddd, Do MMM')}</Text>
                        </View>
                    </View>
                )
            
                case 'cancelled':
                return (
                    <View style={styles.headerBox}>
                        <View style={[styles.statusContainer, {backgroundColor:'#f2f2f2'}]}>
                            <Feather
                                name="x"
                                color={Color.icon}
                                size={20}
                            />
                        </View>

                        <View style={{paddingHorizontal:15}}>
                            <Text style={{color:Color.icon, fontFamily:FontFamily.bold, fontSize:13}}>Cancelled</Text>
                            <Text style={{color:Color.icon, fontFamily:FontFamily.light, fontSize:13}}>Cancelled on {moment(update).format('ddd, Do MMM')}</Text>
                        </View>
                    </View>
                )
            
            
            
            default:
                break;
        }
        return;
    }



    return (
     
           returnStatus(props.status, props.date, props.update)
        
    )
}

export default RenderOverviewStatus

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
    statusContainer:{
        height:40,
        width:40,
        backgroundColor:Color.darkgreen,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
      marginLeft:8,
      fontSize:18,
      color:Color.icon,  
      fontFamily:FontFamily.bold
    },
    container:{
        marginTop:15,
        marginBottom:2,
        backgroundColor:'white',
    },
    headerBox:{
        height:60,
        paddingHorizontal:15,
        alignItems:'center',
        justifyContent:'flex-start',
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1,
        flexDirection:'row'
    },
    headerBoxText:{
        fontSize:12,
        fontFamily:FontFamily.light
    },
    productIndo:{
        width:'25%',
        height:'100%',
        backgroundColor:'#f1f1f1',
        alignItems:'center',
        justifyContent:'center',
    },
    dataBox:{
        width:'65%',
        height:'100%',
        backgroundColor:'#f1f1f1',
        alignItems:'center',
        justifyContent:'center',
    },
    btn:{
        width:'48%',
        height:35,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderColor:'#e6e6e6',
        borderWidth:1
    },
    btnText:{
        fontSize:14,
        fontFamily:FontFamily.bold,
        color:Color.icon
    },
    btnContainer:{
        height:50,
        backgroundColor:'#f1f1f1',
        justifyContent:'space-between',
        paddingHorizontal:10,
        flexDirection:'row'
    },
    badges:{
        position:'absolute',
        bottom:2,
        right:0,
        backgroundColor:'white',
        borderRadius:50,
        height:16,
        width:16,
        justifyContent:'center',
        alignItems:'center'
    }
})
