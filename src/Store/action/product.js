import { URL } from "../../../BASE_URL";
import Product from "../model/product";

export const SET_PRODUCT = 'SET_PRODUCT';

export const fetchProduct = () => {
    return async (dispatch,getState) => {
        
        try{
            const response =  await fetch(URL+'/product');
            
            if(!response.ok){
                throw newError('Something went wrong')
            }
          const datas = await response.json();
          const resData = datas.data
         
          const loadedData = [];

          for(const key in resData){
              loadedData.push(new Product(
                    key, 
                    resData[key]._id,
                    resData[key].title, 
                    resData[key].sellingprice,
                    resData[key].costprice,
                    resData[key].discount,
                    resData[key].imageurl, 
                    resData[key].description, 
                    resData[key].category,
                    resData[key].subcategory
                  ));
          }
          
          dispatch({
              type:SET_PRODUCT, 
              products:loadedData
            });
        }catch(err){
            throw err;
        }

    }
}