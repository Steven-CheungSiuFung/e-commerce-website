import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const CATEGORIES_INITIAL_STATE = {
    categories: [],
}

export const CategoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return ({...state, categories: payload});
        default:
            return state;
    }
}