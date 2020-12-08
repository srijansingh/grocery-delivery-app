import { URL } from "../../../BASE_URL";

export const SET_SUBCATEGORY = 'SET_SUBCATEGORY';

export const fetchSubcategory = (id) => {
    return async (dispatch,getState) => {
        
        try{
            const response =  await fetch(URL+'/category/'+id);
            
            if(!response.ok){
                throw newError('Something went wrong')
            }
          const datas = await response.json();
          const resData = datas.data
          
          dispatch({
              type:SET_SUBCATEGORY, 
              subcategories:resData
            });
        }
        catch(err){
            throw err;
        }

    }
}

