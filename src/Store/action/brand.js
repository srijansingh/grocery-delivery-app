import { URL } from "../../../BASE_URL";


export const SET_BRAND = 'SET_BRAND';

export const fetchBrand = () => {
    return async (dispatch,getState) => {
        
        try{
            const response =  await fetch(URL+'/brand');
            
            if(!response.ok){
                throw newError('Something went wrong')
            }
          const datas = await response.json();
          const resData = datas.data
          
          dispatch({
              type:SET_BRAND, 
              brands:resData
            });
        }
        catch(err){
            throw err;
        }

    }
}

