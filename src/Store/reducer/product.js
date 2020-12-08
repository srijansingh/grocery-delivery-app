import { SET_PRODUCT } from "../action/product";

const initialState = {
    availableProduct: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case SET_PRODUCT:
            return {
                availableProduct:action.products,
            }
    }

    return state;
}