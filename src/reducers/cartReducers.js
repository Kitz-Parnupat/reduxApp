"use strict"
export function cartReducers(state = {cart:[]},action){
    switch (action.type) {
        case "POST_CART":
            return {cart:[...state,...action.payload]}
            break;
    }
    return state
}