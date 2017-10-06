"use strict"

export function postCart(book){
    return {
        type:'POST_CART',
        payload:book
    }
}