import React, { Component } from 'react';
import Nav from '../nav/admin-nav';
import Product from './product-list';
import Products from '../products/products';
import { Route } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import Addproduct from './addProduct'
import * as actionCreators from '../actions/index.js'
import './stock.css';


class Stock extends Component {
    state = {
        open : false

    }
    componentDidMount(){
        this.props.loadProducts()
    }
    onOpenModal = () => {
        this.setState({ open: true });
      };
     
    onCloseModal = () => {
    this.setState({ open: false });
    };
    myproducts (){
        if (this.props.products.productlist === undefined) {
            return(<div>You don't have any products.</div>)
        }else{return(<Product productlist={ this.props.products } />)}
    }
   
    render(){
        return(
            <div>
                <Nav />
                <Route path='/products' component={Products}/>
                <div className="pcontainer">
                    <h1 >Available Products</h1>
                    <p id="output"></p>
                    <button onClick={this.onOpenModal}>AddProduct</button>
                    <Modal  open={ this.state.open } onClose={this.onCloseModal} center>
                        < Addproduct />
                    </Modal>
                    { this.myproducts() }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return state
}
export default connect(mapStateToProps,actionCreators)(Stock);
