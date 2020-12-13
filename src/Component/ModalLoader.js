import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Modal } from 'react-native-paper'
import Color from '../Constant/Color'

const ModalLoader = (props) => {
    return (
        <Modal visible={props.visible}>
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

    )
}

export default ModalLoader

const styles = StyleSheet.create({})
