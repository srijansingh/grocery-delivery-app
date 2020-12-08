import { SET_CATEGORY } from "../action/category";

const initialState = {
    availableCategory: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case SET_CATEGORY:
            return {
                availableCategory:action.categories,
            }
    }

    return state;
}