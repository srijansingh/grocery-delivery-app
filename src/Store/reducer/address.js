import { ADD_ADDRESS, SET_ADDRESS } from "../action/address";
import Address from '../model/address';
const initialState = {
    address : []
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_ADDRESS:
            return {address : action.address}
        case ADD_ADDRESS:
            const newAddress = new Address(
                action.address._id,
                action.address.userid,
                action.address.name,
                action.address.pincode,
                action.address.address,
                action.address.locality,
                action.address.district,
                action.address.state
            )
            return {
                ...state,
                address : state.address.concat(newAddress)
            }
    }
    return state;
}