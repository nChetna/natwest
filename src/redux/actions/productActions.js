import  {ActionTypes}  from "../constants/action-types";
export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const nextProducts = (nextproducts) => {
    return {
        type : ActionTypes.NEXT_PRODUCTS,
        payload: nextproducts,
    };
};
