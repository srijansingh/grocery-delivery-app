import { ADD_TO_CART, GET_CART, REMOVE_FROM_CART } from "../action/cart";
import CartItem from "../model/cart";


const initialState = {
    items:{},
    totalAmount:0,
    totalCost:0,
    totalItem :0
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const addeProduct = action.product;
            const userid = action.userid;
            const productid = addeProduct._id;
            const imageurl = addeProduct.imageurl;
            const title = addeProduct.title;
            const costprice = addeProduct.costprice;
            const sellingprice = addeProduct.sellingprice;

            let updatedNewCartItem;
            if(state.items[addeProduct._id]){
                updatedNewCartItem = new CartItem (
                    userid,
                    productid, 
                    imageurl, 
                    title, 
                    state.items[addeProduct._id].quantity+1,
                    costprice,
                    sellingprice,
                    parseInt(state.items[addeProduct._id].total) + parseInt(sellingprice)
                );
            }
            else{
                updatedNewCartItem = new CartItem(
                    userid,
                    productid, 
                    imageurl, 
                    title, 
                    1,
                    costprice,
                    sellingprice,
                    sellingprice
                    );
            }

            
            
            return {
                ...state,
                items:{...state.items, [addeProduct._id]:updatedNewCartItem},
                totalAmount: parseInt(state.totalAmount) + parseInt(sellingprice),
                totalCost: parseInt(state.totalCost) + parseInt(costprice),
                totalItem: state.totalItem + 1
            }; 
            
        case REMOVE_FROM_CART:
            const selectedItem = state.items[action.pid];
            const currentQty = state.items[action.pid].quantity;
            let updatedCartItems;
            if(currentQty > 1){
                const updatedCartItem = new CartItem(
                    selectedItem.userid,
                    selectedItem.productid,
                    selectedItem.imageurl,
                    selectedItem.title,
                    selectedItem.quantity - 1, 
                    selectedItem.costprice, 
                    selectedItem.sellingprice, 
                    parseInt(selectedItem.total) - parseInt(selectedItem.sellingprice)
                )
                updatedCartItems = {...state.items, [action.pid]:updatedCartItem}
            }else{
                updatedCartItems = { ...state.items};
                delete updatedCartItems[action.pid];
            }
            return {
                ...state,
                items:updatedCartItems,
                totalAmount:parseInt(state.totalAmount) - parseInt(selectedItem.sellingprice),
                totalCost: parseInt(state.totalCost) - parseInt(selectedItem.costprice),
                totalItem:state.totalItem - 1
            }
            // case ADD_ORDER:
            //     return initialState;
            // case DELETE_PRODUCT:
            //     if(!state.items[action.pid]){
            //         return state;
            //     }
            //     const updatedItems = {...state.items};
            //     const itemTotal = state.items[action.pid].sum;
            //     delete updatedItems[action.pid];
            //     return {
            //         ...state,
            //         items: updatedItems,
            //         totalAmount: state.totalAmount - itemTotal
            //     }
    };
    
        
    return state;
}