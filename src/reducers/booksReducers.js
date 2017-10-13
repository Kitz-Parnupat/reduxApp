"use strict"
export function booksReducers(state = {
    books:[
        {
            _id: 1,
            title: 'this is book the title',
            description: 'this is the book description.',
            price: '70.60 usd'
        },
        {
            _id: 2,
            title: 'this is book second the title',
            description: 'this is the book second description.',
            price: '50.20 usd'
        },
    ]
    }, action) {
    switch (action.type) {
        case "GET_BOOKS":
        return {...state,books:[...state.books]}
        break;
        case "POST_BOOK":
            // let books = state.books.concat(action.payload)
            // return {books}
            return {books:[...state.books,...action.payload]}
            break;
        case "DELETE_BOOK":
            const currentBookDelete = [...state.books]
            const indexToDelete = currentBookDelete.findIndex(
                function(book){
                    return book._id === action.payload._id;
                }
            )
            return {books:[...currentBookDelete.slice(0,indexToDelete),...currentBookDelete.slice(indexToDelete+1)]}
            // return state - action.payload;
            break;
        case "UPDATE_BOOK":
            const currentBookUpdate = [...state.books]
            const indexToUpdate = currentBookUpdate.findIndex(
                function(book){
                    return book._id === action.payload._id;
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