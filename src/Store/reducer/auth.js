import { SET_DID_TRY_AL } from "../action/auth"
import { AUTHENTICATE, LOGOUT } from "../action/auth"

const initialState = {
    token:null,
    userId:null,
    name:null,
    email:null,
    didTryAutoLogin:false
}

export default (state = initialState, action) => {
    switch(action.type){
        case AUTHENTICATE:
            return {
                token:action.token,
                userId:action.userId,
                name:action.name,
                email:action.email,
                didTryAutoLogin:true
            }
        case SET_DID_TRY_AL:
            return {
                ...state,
                didTryAutoLogin:true
            }
        case LOGOUT:
            return {
                initialState
            }
        default:
            return state;
    }
}