import React, { Component } from 'react';
import Nav from '../nav/admin-nav';
import Product from './product-list';
import Products from '../products/products';
import { Route } from 'react-router-dom';
import './stock.css';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';

class Stock extends Component {
    state = {
        open : false
    }
    handleChange = (e) =>{
        console.log(this.state)
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)

    }
    onOpenModal = () => {
        this.setState({ open: true });
      };
     
    onCloseModal = () => {
    this.setState({ open: false });
    };
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
                        <form onSubmit={this.handleSubmit}  >
                            <div className="col-75"><label >Product Name</label></div>
                            <div className="col-75" >
                                <input type="text"  placeholder="name of product.." onChange={this.handleChange} />
                            </div>
                            <div className="col-75"><label >Number_Of_Items</label></div>
                            <div className="col-75"><input type="text"  placeholder="20 "  onChange={this.handleChange} /></div>
                            <div className="col-75"><label >Price KSH</label></div>
                            <div className="col-75"><input type="text"  placeholder="200"  onChange={this.handleChange} /></div>
                            <input   type="submit" value="AddProduct"/>
                        </form>
                    </Modal>
                    <ul>
                        <Product productlist = {this.props.productlist}/>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        productlist : state.productlist
    }
}
export default connect(mapStateToProps)(Stock);