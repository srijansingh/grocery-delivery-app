import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Color from '../../../Constant/Color'
import FontFamily from '../../../Constant/FontFamily'

const RenderOverviewAction = (props) => {

    const renderActionButton =(item) => {
        switch (item.status) {
            case 'processing':
                return (
                    <View style={styles.btnContainer}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={props.onButtonPress}  activeOpacity={0.8}  style={styles.btn}>
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

                        <TouchableOpacity  onPress={props.onButtonPress}  activeOpacity={0.8}  style={styles.btn}>
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

                        <TouchableOpacity  onPress={props.onButtonPress}  activeOpacity={0.8}  style={styles.btn}>
                            <Text style={styles.btnText}>Track</Text>
                        </TouchableOpacity>
                    </View>
                )
            
            case 'delivered':
            return (
                <View style={styles.btnContainer}>
                    
                    <TouchableOpacity  onPress={props.onButtonPress}  activeOpacity={0.8} style={[styles.btn, {width:'100%'}]}>
                        <Text style={styles.btnText}>Track</Text>
                    </TouchableOpacity>
                </View>
            )

            case 'cancelled':
                return (
                    <View style={styles.btnContainer}>
                        <TouchableOpacity  onPress={props.onButtonPress}  activeOpacity={0.8}  style={[styles.btn, {width:'100%'}]}>
                            <Text style={styles.btnText}>Track</Text>
                        </TouchableOpacity>
                    </View>
                )
        
            default:
                break;
        }
        return;
    }




    return renderActionButton(props.item)
}

export default RenderOverviewAction

const styles = StyleSheet.create({
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
})
