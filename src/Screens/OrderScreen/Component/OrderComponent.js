import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const OrderComponent = (props) => {
    console.log(props.items[0])

    return (
        <View style={{
            height:90,
            width:70,
            borderColor:'#f1f1f1',
            backgroundColor:'white',
            borderWidth:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            {
                props.items.slice(0,1).map(list => (
                    <Image 
                        key={list.productid}
                        source={{
                            uri:list.imageurl
                        }}
                        style={{
                            height:55,
                            width:55
                        }}
                        />
                    ))
            }
        </View>
    )
}

export default OrderComponent

const styles = StyleSheet.create({})
