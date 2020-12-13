import { getCartData, insertCart } from "../sqlite/db";
export const ADD_TO_CART ='ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const GET_CART = 'GET_CART';

export const addToCart = (product, userid) => {
    return {type:ADD_TO_CART,product:product, userid:userid }
}

export const removeFromCart = (productid) => {
    return {type: REMOVE_FROM_CART, pid:productid}
}

// export const getCart = () => {
//     return async dispatch => {
//         const dbResult = await getCartData();
//         let products = [];
//         var len = dbResult.rows.length;
//         for (let i = 0; i < len; i++) {
//             products.push(dbResult.rows.item(i))
//         }

//         dispatch({type:GET_CART, products:products })
//     }
// }

