export const ADD_TO_CART ='ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (product, userid) => {
    return {type : ADD_TO_CART, product:product, userid:userid};
}

export const removeFromCart = (productid) => {
    return {type: REMOVE_FROM_CART, pid:productid}
}