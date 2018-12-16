import React, { Component } from 'react';
import Nav from '../nav/admin-nav';
import Product from './product-list';
import Products from '../products/products';
import { Route } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import Addproduct from './addProduct'
import './stock.css';


class Stock extends Component {
    state = {
        open : false

    }
    
    onOpenModal = () => {
        this.setState({ open: true });
      };
     
    onCloseModal = () => {
    this.setState({ open: false });
    };
    render(){
        const productList = this.props.productlist.length ? (
            <ul>
                <Product productlist = {this.props.productlist}/>
            </ul>
        ) : (
            <div>
                No products.
            </div>
        )
        return(
            <div>
                <Nav />
                <Route path='/products' component={Products}/>
                <div className="pcontainer">
                    <h1 >Available Products</h1>
                    <p id="output"></p>
                    <button onClick={this.onOpenModal}>AddProduct</button>
                    <Modal  open={ this.state.open } onClose={this.onCloseModal} center>
                        <Addproduct />
                    </Modal>
                    { productList }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        productlist : state.products.productlist
    }
}
export default connect(mapStateToProps)(Stock);