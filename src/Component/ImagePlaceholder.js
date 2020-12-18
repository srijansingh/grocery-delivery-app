import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const ImagePlaceholder = () => {
    return (
        <View style={{
            position:'absolute',
            top:0,
            left:0,
            height:'100%',width:'100%',
           
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row'
        }}>

            <View style={{
                height:30,width:30,
               
            }}>
                <Image 
                    source={
                        require('../../asset/images/image.png')
                    }
                    style={{
                        height:'100%',
                        width:'100%'
                    }}
                />
            </View>

        </View>
    )
}

export default ImagePlaceholder

const styles = StyleSheet.create({})
