import React, { useCallback, useEffect, useState } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { Searchbar, TouchableRipple } from 'react-native-paper';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../Component/BackButton';
import Color from '../../Constant/Color';
import FontFamily from '../../Constant/FontFamily';
import * as productAction from '../../Store/action/product';

const SearchScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
    const products = useSelector(state => state.products.availableProduct);
    const dispatch = useDispatch();

    const loadProduct = useCallback(async () => {
        setError(null)
        setIsLoading(true);
        try{
            await dispatch(productAction.fetchProduct());
        }catch(err){
            setError(err.message)
        }

        setIsLoading(false)
    }, [dispatch,setIsLoading,setError]);

    useEffect(() => {
        loadProduct();
    }, [dispatch,loadProduct]);

    useEffect(() => {
        const willFocusSub = props.navigation.addListener('willFocus', loadProduct);
        return () => {
            willFocusSub.remove();
        }
    }, [loadProduct]);

    const render = products.map((list, index) => {
        return (
            <View key={list._id}>
                <Text>{list.title}</Text>
            </View>
        )
    })
    

    return (
        <View style={{flex:1,justifyContent:'space-between', alignItems:'center'}}>
            <View style={styles.header}>
                <BackButton 
                        goBack={() => {props.navigation.goBack()}}
                        color={Color.primary}
                        name="arrow-back"
                />

                <View style={styles.searchBar}>
                    <TextInput  
                        placeholder="Search"
                        style={styles.searchText} 
                        color='black'
                        keyboardType="web-search"
                        selectionColor={Color.icon}
                        autoFocus={true}
                    
                    />
                    {/* <TouchableRipple  style={styles.searchIcon} onPress={() => {}} >
                        <MaterialIcons 
                            name="search" 
                            size={24} 
                            color={Color.icon}
                        />
                    </TouchableRipple> */}
                </View>
            </View>

            {
                isLoading ?
                <View>
                    <Text>Loading...</Text>
                </View>
                :
                render
            }

            
            
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height:55,
        width:'100%',
       backgroundColor:"white",
        justifyContent:'flex-start',
        alignItems:'center',
        overflow:'hidden',
       // paddingHorizontal:10,
       
    },
    searchBar:{
        
        maxWidth:'84%',
        alignSelf:'center',
        backgroundColor:'white',
        // elevation:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:5,
        overflow:'hidden',
        height:45,
       
    },
    searchText:{
        width:'85%',
        fontFamily:FontFamily.light,
        fontSize:16,
        paddingHorizontal:8,
        color:'black',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5
        
    },
    searchIcon:{
       
        height:45,
        width:'15%',
        justifyContent:'center',
        alignItems:'center'
    }
})
