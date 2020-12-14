import { URL } from '../../../BASE_URL';
import Order from '../model/order'

export const ADD_ORDER = 'ADD_ORDER';
export const SET_ORDER ='SET_ORDER';



export const fetchOrder = () => {
    return async (dispatch,getState) => {
        const token=getState().auth.token
        const userId=getState().auth.userId
        try{
            const response =  await fetch(URL+`/order/${userId}`)
            
            if(!response.ok){
                throw newError('Something went wrong')
            }
          const resData = await response.json();
          const loadedOrder = [];

          for(const key in resData){
            loadedOrder.push(new Order(
                resData[key]._id,
                resData[key].orderid,
                resData[key].items,
                resData[key].totalamount,
                resData[key].totalitems,
                resData[key].address,
                resData[key].status,
                resData[key].createdAt
              ));
          }
          
          dispatch({type:SET_ORDER, orders:loadedOrder})
        }catch(err){
            throw err;
        }

    }
} 

export const addOrder = (orderid, items, totalamount, totalitems, address) => {
    return async (dispatch,getState) => { 
        const token=getState().auth.token
        const userId=getState().auth.userId
        const date = new Date();
        const response =  await fetch(URL+`/order`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                userid : userId,
                orderid : orderid,
                items : items,
                totalamount : totalamount,
                totalitems : totalitems,
                data: date.toISOString(),
                address:address
            })
        });

        const resData = await response.json();

       dispatch({
        type: ADD_ORDER, 
        orders: resData.data 
       })
}}