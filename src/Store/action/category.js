import { URL } from "../../../BASE_URL";


export const SET_CATEGORY = 'SET_CATEGORY';

export const fetchCategory = () => {
    return async (dispatch,getState) => {
        
        try{
            const response =  await fetch(URL+'/category');
            
            if(!response.ok){
                throw newError('Something went wrong')
            }
          const datas = await response.json();
          const resData = datas.data
          
          dispatch({
              type:SET_CATEGORY, 
              categories:resData
            });
        }
        catch(err){
            throw err;
        }

    }
}

