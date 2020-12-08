import { SET_SUBCATEGORY } from "../action/subcategory";

const initialState = {
    availableSubcategory: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case SET_SUBCATEGORY:
            return {
                availableSubcategory:action.subcategories,
            }
    }

    return state;
}