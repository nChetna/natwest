import { ActionTypes } from "../constants/action-types";

const initialState ={
    products:[],
    nextproducts:[],
};
export const productReducer= (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products:payload };
        default:
            return state;
    }

}

export const nextProductReducer= (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.NEXT_PRODUCTS:
            return { ...state, nextproducts:payload };
        default:
            return state;
    }

}