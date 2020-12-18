import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, ScrollViewBase, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import BackButton from '../../Component/BackButton'
import ModalLoader from '../../Component/ModalLoader'
import Color from '../../Constant/Color'
import FontFamily from '../../Constant/FontFamily'
import * as orderAction from '../../Store/action/order'
import OrderComponent from './Component/OrderComponent'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Feather from 'react-native-vector-icons/Feather'
import IonIcons from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
import { TouchableOpacity } from 'react-native'
import TrackingComponent from './Component/TrackingComponent'
import RenderOverviewStatus from './Component/RenderOverviewStatus'
import RenderOverviewAction from './Component/RenderOverviewAction'
import NocartItem from '../CartScreen/Component/NocartItem'

const OrderOverviewScreen = (props) => {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const orders = useSelector(state => state.order.orders)
    
    const dispatch = useDispatch();

    const loadProduct = useCallback(async () => {
        setError(null)
        setIsLoading(true)
        try{
            await dispatch(orderAction.fetchOrder());
        }catch(err){
            setError(err.message)
        }
    
        setIsLoading(false)
    }, [dispatch,setIsLoading,setError]);

    useEffect(() => {
        loadProduct()
    }, [dispatch,loadProduct])

   

    // Tracking Handle
        const [isTrackingOpen, setIsTrackingOpen] = useState(false);
        const [selectedId, setSelectedId] = useState(null);
        const [orderid, setOrderid] = useState(null)
        const [selectedStatus, setSelectedStatus] = useState(null)
        const [selectedDate, setSelectedDate] = useState(null)


        const handleTracking = (id, orderid,status, date) => {
            setSelectedId(id)
            setSelectedStatus(status)
            setOrderid(orderid)
            setSelectedDate(date)
            setIsTrackingOpen(true)
        }

        const handleTrackingClose = () => {
            setIsTrackingOpen(false)
            setSelectedId(null)
            setOrderid(null)
            setSelectedStatus(null)
            setSelectedDate(null)
            
        }



    // Tracking handle close

    const renderActionButton =(status, item) => {
        switch ('processing') {
            case 'processing':
                return (
                    <View style={styles.btnContainer}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleTracking(item.id,item.orderid, item.status, item.date)}  activeOpacity={0.8}  style={styles.btn}>
                            <Text style={styles.btnText}>Track</Text>
                        </TouchableOpacity>
                    </View>
                )
            case 'shipped':
                return (
                    <View style={styles.btnContainer}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleTracking(item.id,item.orderid, item.status, item.date)}  activeOpacity={0.8}  style={styles.btn}>
                            <Text style={styles.btnText}>Track</Text>
                        </TouchableOpacity>
                    </View>
                )

            case 'outfordelivery':
                return (
                    <View style={styles.btnContainer}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleTracking(item.id,item.orderid, item.status, item.date)}  activeOpacity={0.8}  style={styles.btn}>
                            <Text style={styles.btnText}>Track</Text>
                        </TouchableOpacity>
                    </View>
                )
            
            case 'delivered':
            return (
                <View style={styles.btnContainer}>
                    
                    <TouchableOpacity onPress={() => handleTracking(item.id,item.orderid, item.status, item.date)}  activeOpacity={0.8} style={[styles.btn, {width:'100%'}]}>
                        <Text style={styles.btnText}>Track</Text>
                    </TouchableOpacity>
                </View>
            )

            case 'cancelled':
                return (
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => handleTracking(item.id,item.orderid, item.status, item.date)}  activeOpacity={0.8}  style={[styles.btn, {width:'100%'}]}>
                            <Text style={styles.btnText}>Track</Text>
                        </TouchableOpacity>
                    </View>
                )
        
            default:
                break;
        }
        return;
    }




    const orderList = orders.map((item, index) => {



        return (
            <TouchableOpacity 
            onPress={() => {
                props.navigation.navigate('OrderDetail', {id:item.id,orderid : item.orderid})
            }}
            activeOpacity={0.7}
            key={index} style={styles.container}>
                <RenderOverviewStatus 
                    status={item.status}
                    date={item.date}
                    update={item.update}
                />
          
                <View style={{
                    padding:15,
                    backgroundColor:'white',
                    
                }}>
                    <View style={{
                            height:120,
                            flexDirection:'row',
                            backgroundColor:'#f1f1f1',
                        }}>
                        <View style={styles.productIndo}>
                            <OrderComponent 
                                items={item.items}
                            />
                        </View>

                        <View style={styles.dataBox}>
                            <View style={{
                                height:90,
                                width:'100%'
                            }}> 
                                <Text style={{fontSize:13,paddingBottom:5, fontFamily:FontFamily.regular, color:Color.icon}}>ORDER ID : <Text style={{fontSize:13, fontFamily:FontFamily.regular, color:Color.icon}}>#{item.orderid}</Text></Text>
                                <Text style={{fontSize:12,paddingVertical:2, fontFamily:FontFamily.light, color:Color.icon}}>Total Items : {item.items.length}</Text>
                                <Text style={{fontSize:12,paddingVertical:2, fontFamily:FontFamily.light, color:Color.icon}}>Total Quantity : {item.totalitems}</Text>
                                <Text style={{fontSize:12,paddingVertical:2, fontFamily:FontFamily.light, color:Color.icon}}>Total Amount: {'\u20B9'+item.totalamount}</Text>
                            </View>
                        </View>

                        <View style={{
                            width:'10%',
                            backgroundColor:'#f1f1f1',
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <MaterialIcons 
                                name="keyboard-arrow-right"
                                color={Color.icon}
                                size={25}
                            />
                        </View>
                    </View>
                    <RenderOverviewAction 
                        onButtonPress={() => handleTracking(item.id,item.orderid, item.status, item.date)}
                        item={item}
                    />
                   {/* {renderActionButton(item.status, item)} */}
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
                        <Text style={styles.title}>Orders</Text>
                    </View>
                </View>
            </View>  

           <ScrollView>
               { orders.length < 1 ? <NocartItem goToHome={() => props.navigation.navigate('Home')} message="No item ordered"/> : orderList}
           </ScrollView>
            <TrackingComponent 
                visible={isTrackingOpen} 
                onCloseAction={handleTrackingClose} 
                status={selectedStatus}
                id={selectedId}
                date={selectedDate}    
                orderid={orderid}
            />
            <ModalLoader 
                visible={isLoading}
            />
        </>
    )
}

export default OrderOverviewScreen

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
