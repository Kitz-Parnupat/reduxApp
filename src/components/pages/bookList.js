"use strict"
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getBook} from '../../actions/booksActions'
import {Grid,Row,Button} from 'react-bootstrap'
class BookList extends React.Component{
    componentDidMount(){
        this.props.getBook()
    }
    render(){
       const BookList = this.props.books.map(function(item){
           return (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <h2>{item.description}</h2>
                    <h2>{item.price}</h2>
                    <Button bsStyle="primary">Buy now</Button>
                </div>
           )
       })
        return (
           <Grid>
               <Row style={{marginTop:'15px'}}>
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