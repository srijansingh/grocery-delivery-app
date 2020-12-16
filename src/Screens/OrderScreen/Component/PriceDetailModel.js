import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { Modal } from 'react-native-paper'
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Color from '../../../Constant/Color';
import FontFamily from '../../../Constant/FontFamily';
import { ScrollView } from 'react-native';

const PriceDetailModel = (props) => {

  

    let totalPrice;
    if(props.total >499){
        totalPrice=props.total
    }
    else{
        totalPrice = 50+parseInt(props.total);
    }
    return (
        <Modal visible={props.visible}>
            <Animatable.View 
                animation="bounceInUp"
                duration={1000} 
                easing="ease-out"
                style={{height:'100%', justifyContent:'space-between'}}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.modelBack}
                    onPress={props.onActionClose}
                >
                    <View style={styles.handle}></View>
                </TouchableOpacity>
                
                <View style={styles.detail}>
                        <View style={styles.heading}>
                           <Text style={{fontSize:16, fontFamily:FontFamily.bold, color:Color.icon}}>Payment Information</Text>
                           <TouchableOpacity onPress={props.onActionClose}>
                           <Feather
                                name="x"
                                color={Color.icon}
                                size={20}
                            />
                           </TouchableOpacity>
                       </View>
                       <ScrollView style={{
                    backgroundColor:'white'
                }}>
                        <View style={{
                                paddingHorizontal:10    
                            }}>
                            {
                                props.item.map((list, index) => {
                                    return (
                                        <View key={index} style={styles.mainContainer}>
                                            <View style={styles.itemTitle}>
                                                <Text style={styles.text}>{list.quantity} x {list.title}</Text>
                                                <Text style={styles.textBold}>{'\u20B9'}{list.quantity*list.costprice}</Text>
                                            </View>
                                            <View style={styles.itemDiscount}>
                                                <Text style={styles.text}>Discount</Text>
                                                <Text style={styles.textDiscount}>-{'\u20B9'}{(list.costprice-list.sellingprice)*list.quantity}</Text>
                                            </View>

                                            
                                        </View>
                                    )
                                })
                            }

                                        <View style={styles.mainContainer}>
                                            <View style={styles.discounted}>
                                                <Text style={styles.text}>Discounted Price</Text>
                                                <Text style={styles.textBold}>{'\u20B9'+props.total}</Text>
                                            </View> 
                                        </View>

                                        <View style={styles.mainContainer}>
                                            <View style={styles.discounted}>
                                                <Text style={styles.text}>Delivery Fee</Text>
                                               {props.total > 499 ?  <Text style={[styles.textBold, {color:Color.darkgreen}]}>FREE</Text> :  <Text style={styles.textBold}>{'\u20B9'+50}</Text>}
                                            </View> 
                                        </View>

                                        <View style={[styles.mainContainer,{borderBottomWidth:0}]}>
                                            <View style={styles.discounted}>
                                                <Text style={[styles.text, {fontFamily:FontFamily.bold}]}>Total Payable</Text>
                                                <Text style={styles. textTotalBold}>{'\u20B9'+totalPrice}</Text>
                                            </View> 
                                        </View>

                                        <View style={styles.mainContainer}>
                                            <View style={styles.discounted}>
                                                <View style={{
                                                    flexDirection:'row',
                                                    alignItems:'center',
                                                    width:'100%',
                                                    height:'80%',
                                                    backgroundColor:'#f1f1f1',
                                                    paddingHorizontal:15
                                                }}>
                                                    <View style={{
                                                        paddingHorizontal:8,
                                                        paddingVertical:1,
                                                        backgroundColor:'white'
                                                    }}>
                                                        <MaterialCommunityIcons 
                                                            name="cash"
                                                            size={25}
                                                            color={Color.icon}
                                                        />
                                                    </View>
                                                    <Text style={[styles.text, {fontFamily:FontFamily.bold, paddingHorizontal:15}]}>Cash on Delivery</Text>
                                                </View>
                                            </View> 
                                        </View>
                        </View>
                        </ScrollView>
                    </View>
                    
            </Animatable.View>
        </Modal>
    )
}

export default PriceDetailModel

const styles = StyleSheet.create({
    modelBack:{
        height:'45%',
        justifyContent:'flex-end',
        alignItems:'center',
        
    },
    handle:{
        width:60,
        height:5,
        backgroundColor:'white',
        marginBottom:15,
        borderRadius:20,
       
    },
    heading:{
        height:70,
        paddingHorizontal:20,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1
    },
    detail:{
        height:'55%',
        backgroundColor:'white',
        borderTopEndRadius:5,
        borderTopLeftRadius:5
    },
    text:{
        fontFamily:FontFamily.light,
        fontSize:13
    },
    textBold:{
        fontFamily:FontFamily.bold,
        fontSize:13,
        color:Color.icon
    },
    textTotalBold:{
        fontFamily:FontFamily.black,
        fontSize:14,
        color:'black'
    },
    textDiscount:{
        fontFamily:FontFamily.bold,
        fontSize:14,
        color:Color.darkgreen
    },
    itemTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:30
    },
    discounted:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:60
    },
    itemDiscount:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:30
    },
    mainContainer:{  
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1,
        paddingHorizontal:15,
        justifyContent:'center'
    }
})
