import React, { useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {width} = Dimensions.get("window");

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);







const Placeholder = (props) => {
    const AnimatedValue = new Animated.Value(0);


    useEffect(() => {
        Animated.loop(
        Animated.timing(AnimatedValue, {
            toValue:1,
            duration:2000,
            easing:Easing.linear.inOut,
            useNativeDriver:true
        })).start()
    })

    const trandlateX = AnimatedValue.interpolate({
        inputRange:[0,1],
        outputRange:[-width,width]
    })

    return (
        <View style={{
            backgroundColor:'#eeeeee',
            borderRadius:8,
            height:props.height,
            width:props.width,
            overflow:'hidden'

        }}>

            <AnimatedLG 
                colors={['#f1f1f1', '#fff', '#f1f1f1']}
                start={{
                    x:0, y:0
                }}
                end={{
                    x:1,y:0
                }}

                style={{ ...StyleSheet.absoluteFill,
                    transform:[{
                        translateX:trandlateX
                    }]
                }}

            />
            
        </View>
    )
}

export default Placeholder

const styles = StyleSheet.create({})
