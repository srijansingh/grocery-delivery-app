import { ADD_NOTIF } from "../action/notif_token";

const initialState = {
    token: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_NOTIF:
            return {
                token:action.tokens,
            }
    }

    return state;
}