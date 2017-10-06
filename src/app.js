"use strict"
import {applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/index';
import {postCart} from './actions/cartActions';
import {postBook,deleteBook,updateBook} from './actions/booksActions'

// STEP 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducer,middleware);
// store.subscribe(function () {
//     console.log('current state is:', store.getState());
// })

// add the book 
store.dispatch(postBook([
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
]))
// delete the book
store.dispatch(deleteBook({id:2}))

//update the book
store.dispatch(updateBook({id:1,title:'learn React 24h.'}))

// post the cart 
store.dispatch(postCart([{id:1,title:'my cart'}]))