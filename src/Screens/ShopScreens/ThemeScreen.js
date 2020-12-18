import React, { useCallback, useState, useEffect } from 'react'
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../Component/BackButton';
import Color from '../../Constant/Color';
import FontFamily from '../../Constant/FontFamily';
import AccordianComponent from './Component/AccordianComponent';
import AccordianSkeleton from './Component/Placeholder/AccordianSkeleton';
import * as categoryAction from '../../Store/action/category';

const ThemeScreen = (props) => {

    

    const [isCategoryLoading, setCategoryLoading] = useState(false)
    const [error, setError] = useState(null)
  const categoryData = useSelector(state => state.categories.availableCategory);
const dispatch = useDispatch()

  const loadCategory = useCallback(async () => {
    setError(null)
    setCategoryLoading(true)
    try{
        await dispatch(categoryAction.fetchCategory());
    }catch(err){
        setError(err.message)
    }

    setCategoryLoading(false)
}, [dispatch,setCategoryLoading,setError]);

useEffect(() => {
    loadCategory();
}, [dispatch,loadCategory]);

  
  const accordian = categoryData.map((list, index) => {
    if(list.subcategory.length > 0)
    {
      return <AccordianComponent {...props} key={index} url={list.imageurl} title={list.category} id={list._id} />
    }
  })

  const accordianLoading = (
    <> 
      <AccordianSkeleton />
      <AccordianSkeleton />
      <AccordianSkeleton />
    </>
  )




    return (
        <View>
            <View style={styles.header}>
                    <View style={styles.headerText} >
                        <BackButton 
                            goBack={() => {props.navigation.goBack()}}
                            color={Color.primary}
                            name="arrow-back"
                        />
                        <View>
                            <Text style={styles.title}>Theme Store</Text>
                        </View>
                    </View>

                    <BackButton 
                        goBack={() => {props.navigation.jumpTo('SearchStack', {id:'wwws'})}}
                        color={Color.icon}
                        name="search"
                    />
                </View>
           <ScrollView style={{marginVertical:8}}>
                {isCategoryLoading ? accordianLoading : accordian}
           </ScrollView>
        </View>
    )
}

export default ThemeScreen

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height:55,
        width:'100%',
        backgroundColor:"white",
        justifyContent:'space-between',
        alignItems:'center',
        elevation:2
    },
    headerText:{
        width:'80%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    title:{
        fontSize:18,
        color:'#707070',
        fontFamily:FontFamily.bold
    },
})
