import { URL } from '../../../BASE_URL';
import Address from '../model/address'
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const SET_ADDRESS = 'SET_ADDRESS';


export const fetchAddress = () => {
    return async (dispatch, getState) => {
        const userId=getState().auth.userId;
       
        try{
            const response =  await fetch(URL+ '/address/'+userId);
            if(!response.ok){
                throw newError('Something went wrong')
            }
            const data = await response.json();
            
            const resData = data.data;
            
            const loadedData = [];

            for(const key in resData){
                loadedData.push(new Address(
                    resData[key]._id,
                    resData[key].userid,
                    resData[key].name,
                    resData[key].mobile,
                    resData[key].pincode,
                    resData[key].address,
                    resData[key].locality,
                    resData[key].district,
                    resData[key].state
                ));
            }

            dispatch({type:SET_ADDRESS, address : loadedData})
        }catch(err){
            throw err;
        }


       
    }
}

export const addAddress = (data) => {
    return async dispatch => {
        const response = await fetch(
            URL+'/address',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    userid:data.userid,
                    name:data.name,
                    mobile:data.mobile,
                    pincode:data.pincode,
                    address:data.address,
                    locality:data.locality,
                    district:data.district,
                    state:data.state
                })
            }
        );

        if(!response.ok){
            let message = 'Something went wrong';
            throw new Error(message)
        }

        const resData = await response.json();

        dispatch({type:ADD_ADDRESS, address:resData.data })
    }
}