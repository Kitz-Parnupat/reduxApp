"use strict"
export function booksReducers(state = {books:[]}, action) {
    switch (action.type) {
        case "POST_BOOK":
            // let books = state.books.concat(action.payload)
            // return {books}
            return {books:[...state.books,...action.payload]}
            break;
        case "DELETE_BOOK":
            const currentBookDelete = [...state.books]
            const indexToDelete = currentBookDelete.findIndex(
                function(book){
                    return book.id === action.payload.id;
                }
            )
            return {books:[...currentBookDelete.slice(0,indexToDelete),...currentBookDelete.slice(indexToDelete+1)]}
            // return state - action.payload;
            break;
        case "UPDATE_BOOK":
            const currentBookUpdate = [...state.books]
            const indexToUpdate = currentBookUpdate.findIndex(
                function(book){
                    return book.id === action.payload.id;
                }
            )
            console.log(action.payload.title,indexToUpdate)
            const newBookToUpdate = {
                ...currentBookUpdate[indexToUpdate],
                title:action.payload.title
            }
            return {books:[...currentBookUpdate.slice(0,indexToUpdate),newBookToUpdate,...currentBookUpdate.slice(indexToUpdate+1)]}
            break;
    }
    return state
}