"use strict"
import { createStore } from 'redux';

// STEP 3 define reducer
const reducer = function (state = {books:[]}, action) {
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
// STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function () {
    console.log('current state is:', store.getState());
})
// STEP 2 create and dispatch actions

store.dispatch({
    type: 'POST_BOOK', payload:[
        {
            id: 1,
            title: 'this is book the title',
            description: 'this is the book description.',
            price: '70.60 usd'
        },
        {
            id: 2,
            title: 'this is book second the title',
            description: 'this is the book second description.',
            price: '50.20 usd'
        },
    ]
})

// add the book 

store.dispatch({
    type: 'POST_BOOK',payload: [{
        id: 3,
        title: 'this is book third the title',
        description: 'this is the book third description.',
        price: '80.30 usd'
    }],
})
// delete the book
store.dispatch({
    type:'DELETE_BOOK',payload:{
        id:2
    }
})

//update the book
store.dispatch({
    type:'UPDATE_BOOK',payload:{
        id:3,
        title: 'learn React 24h.'
    }
})