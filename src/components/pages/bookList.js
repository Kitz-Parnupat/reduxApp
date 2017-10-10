"use strict"
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getBook} from '../../actions/booksActions'
import {Grid,Col,Row,Button} from 'react-bootstrap'
import Cart from './cart'
import BookItem from './bookItem'
import BookForm from './booksForm'
class BookList extends React.Component{
    componentDidMount(){
        this.props.getBook()
    }
    render(){
       const BookList = this.props.books.map(function(item){
           return (
                <Col xs={12} sm={6} md={4} key={item.id}>
                    <BookItem 
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}/>
                </Col>
           )
       })
        return (
           <Grid>
               <Row>
                   <Cart />
               </Row>
               <Row>
                   <Col xs={12} sm={6}>
                        <BookForm/>
                   </Col>
                    {BookList}
               </Row>
           </Grid>
        )
    }
}
function mapStateToProps(state){
    return{
        books:state.books.books
    }
}
function mapDispathToProps(dispatch){
    return bindActionCreators({
        getBook:getBook
    },dispatch)
}
export default connect(mapStateToProps,mapDispathToProps)(BookList)