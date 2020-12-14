import { ADD_ORDER, SET_ORDER } from "../action/order"
import Order from "../model/order"

const initialState = {
    orders : []
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_ORDER:
            return {
                orders:action.orders
            }
        case ADD_ORDER:
            const newOrder = new Order(
                action.orders._id,
                action.orders.orderid,
                action.orders.items,
                action.orders.totalamount,
                action.orders.totalitems,
                action.orders.address,
                action.orders.status,
                action.orders.createdAt
            )
            return {
                ...state,
                orders:state.orders.concat(newOrder)
            }
        
    }

    return state;
}