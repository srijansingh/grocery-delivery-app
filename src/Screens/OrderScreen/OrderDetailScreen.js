import React, { useState } from 'react'
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import BackButton from '../../Component/BackButton';
import Color from '../../Constant/Color';
import FontFamily from '../../Constant/FontFamily';
import moment from 'moment'
import Feather from 'react-native-vector-icons/Feather'
import StatusComponent from './Component/StatusComponent';
import ActionComponent from './Component/ActionComponent';
import TrackingComponent from './Component/TrackingComponent';
import { color } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PriceDetailModel from './Component/PriceDetailModel';

const OrderDetailScreen = (props) => {
    const {orderid, id} = props.route.params;
    const availableOrder = useSelector(state => state.order.orders);
    const order = availableOrder.find(order => order.id === id)
    const products = order.items.map((list, index) => {
        return (
            <View 
            key={index}
            style={{
                backgroundColor:'#f1f1f1',
                padding:10,
                flexDirection:'row',
                borderBottomWidth:1,
                borderBottomColor:'#e6e6e6'
            }}>
                <View style={{
                    height:90,
                    width:70,
                    backgroundColor:'white',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Image 
                        source={{
                            uri:list.imageurl
                        }}
                        style={{
                            height:50,
                            width:50
                        }}
                    />
                </View>

                <View style={{
                    marginHorizontal:15,
                    height:90,
                    justifyContent:'center'
                }}>
                    <View>
                        <Text style={{fontFamily:FontFamily.bold, fontSize:13,color:Color.icon}}>{list.title}</Text>
                        <Text style={{fontFamily:FontFamily.regular,fontSize:12, color:Color.icon}}>Quantity : {list.quantity}</Text>
                        <Text style={{fontFamily:FontFamily.regular,fontSize:12, color:Color.icon}}>Cost : {'\u20B9'+list.sellingprice}</Text>
                    </View>
                </View>
            </View>
        )
    })


    const [isTrackingOpen, setIsTrackingOpen] = useState(false);
   

    const handleTracking = () => {
        setIsTrackingOpen(true)
    }

    const handleTrackingClose = () => {
        setIsTrackingOpen(false)
        
    }

    const [isPriceOpen, setIsPriceOpen] = useState(false);

    const handlePriceDetailOpen = () => {
        setIsPriceOpen(true)
    }

    const handlePriceDetailClose = () => {
        setIsPriceOpen(false)
    }

    



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
                        <Text style={styles.title}># {orderid}</Text>
                    </View>
                </View>
            </View>

            <ScrollView>
                <View style={{
                    padding:15,
                    backgroundColor:'white',
                    marginVertical:10
                }}>
                    <View style={{
                        height:40,
                        justifyContent:'flex-start'
                    }}>
                        <Text style={{fontFamily:FontFamily.bold, fontSize:18,paddingVertical:2, color:Color.icon}}>Items in this order</Text>
                        <Text style={{fontFamily:FontFamily.light, fontSize:12, color:Color.icon}}>Order ID # {orderid}</Text>
                    </View>

                    <View style={{marginTop:15}}>
                    {products}
                    </View>

                    
                </View>
                
                <StatusComponent date={order.date} update={order.update} status={order.status} />
                
                <ActionComponent 
                    onCancelPress={() => {}}
                    onTrackPress={handleTracking}
                />

                <View style={styles.delivery}>
                    <View style={styles.deliveryHead}>
                        <Text style={styles.deliveryText}>Delivery Address </Text>
                    </View>

                    <View style={{
                        height:60
                    }}>
                        <View style={styles.nameContainer}>
                            <Text style={{fontSize:12, fontFamily:FontFamily.bold,color:Color.icon,paddingRight:15, borderRightWidth:1, borderRightColor:'#f1f1f1'}}>{order.address.name}</Text>
                            <Text style={{fontSize:12, fontFamily:FontFamily.bold,color:Color.icon,paddingLeft:15, borderLeftWidth:1, borderLeftColor:'#f1f1f1'}}>{order.address.mobile}</Text>
                        </View>

                        <View style={styles.address}>
                            <Text style={{fontSize:13, fontFamily:FontFamily.light,color:Color.icon}}>{order.address.address}, {order.address.locality}, {order.address.district} - {order.address.pincode} </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.delivery}>
                    <View style={{
                            height:30,
                            alignItems:'center',
                            flexDirection:'row',
                            justifyContent:'space-between'
                        }}>
                        <Text style={styles.deliveryText}>Total Order Price </Text>
                        <View style={{
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                        <Text style={styles.deliveryText}>{'\u20B9'}{order.totalamount > 500 ? order.totalamount : parseInt(order.totalamount)+50} </Text>
                        <TouchableOpacity activeOpacity={0.8} onPress={handlePriceDetailOpen}>
                        <Text style={styles.viewBtn}>View Details </Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>

                <View style={styles.delivery}>
                    <View style={{
                            height:60,
                            justifyContent:'center',
                           
                        }}>
                        <Text style={styles.deliveryText}>Updates sent to</Text>
                        <View style={{
                            height:50,
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                            <View style={{
                                paddingHorizontal:8,
                                paddingVertical:1,
                                backgroundColor:'white'
                            }}>
                                <Feather
                                    name="phone-call"
                                    color={Color.icon}
                                    size={15}
                                />
                            </View>
                            <Text style={[styles.text, {fontFamily:FontFamily.light, paddingHorizontal:15}]}>{order.address.mobile}</Text>
                        </View>
                    </View>
                    
                </View>

                <View style={styles.delivery}>
                    <View style={{
                            height:25,
                            justifyContent:'center',
                           
                        }}>
                        
                        <View style={{
                            height:25,
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                            
                            <Text style={[styles.text, {fontFamily:FontFamily.light}]}>ORDER ID #{orderid}</Text>
                        </View>
                    </View>
                    
                </View>

                
            </ScrollView> 
            <TrackingComponent 
                    visible={isTrackingOpen} 
                    onCloseAction={handleTrackingClose} 
                    status={order.status}
                    id={id}
                    date={order.date} 
                    update={order.update}   
                    orderid={orderid}
                />
            
            <PriceDetailModel 
                visible={isPriceOpen}
                onActionClose={handlePriceDetailClose}
                total={order.totalamount}
                item={order.items}
            />

       </>
    )
}

export default OrderDetailScreen

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
      marginLeft:8,
      fontSize:14,
      color:Color.icon,  
      fontFamily:FontFamily.bold
    },
    delivery:{
        padding:20,
        marginVertical:8,
        backgroundColor:'white'
    },
    deliveryHead:{
        height:30,
        justifyContent:'center'
    },
    deliveryText:{
        fontSize:16,
        fontFamily:FontFamily.bold,
        color:Color.icon
    },
    nameContainer:{
        height:'50%',
        alignItems:'center',
        flexDirection:'row'
    },
    address:{
        height:'50%',
        alignItems:'center',
        flexDirection:'row'
    },
    viewBtn:{
        fontSize:10,
        fontFamily:FontFamily.bold,
        color:Color.button,
    }
})
