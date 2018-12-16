import React, { Component } from 'react';
import Nav from '../nav/general-nav';
import Card from './card';
import './card.css';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/index.js'

class Products extends Component {
    componentDidMount(){
        this.props.loadProducts()
    }
    myproducts (){
        if (this.props.products.productlist === undefined) {
            return(<div>You don't have any products.</div>)
        }else{return(<Card productlist={ this.props.products } />)}
    }
    render(){
        return(
            <div>
                <Nav />
                <div className="products" >
                    <h1 >Available Products</h1>
                    { this.myproducts() }
                </div>
            </div>
        )
       
    }
}

const mapStateToProps = (state) =>{
    return state
}
export default connect(mapStateToProps,actionCreators)(Products);
