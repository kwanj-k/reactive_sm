import React, { Component } from 'react';
import Nav from '../nav/admin-nav';
import Product from './product-list';
import Products from '../products/products';
import { Route } from 'react-router-dom';
import './stock.css';

class Stock extends Component {
    state = {
        productlist :[
            {name:'Monster',price:200,"inventory":20,category:'drink',id:1},
            {name:'Monster1',price:200,"inventory":20,category:'drink',id:2},
            {name:'Monster2',price:200,"inventory":20,category:'drink',id:3},
            {name:'Monster3',price:200,"inventory":20,category:'drink',id:4},
            {name:'Monster',price:200,"inventory":20,category:'drink',id:5},
            {name:'Monster1',price:200,"inventory":20,category:'drink',id:6},
            {name:'Monster2',price:200,"inventory":20,category:'drink',id:7},
            {name:'Monster3',price:200,"inventory":20,category:'drink',id:8}
        ]

    }
    render(){
        return(
            <div>
                <Nav />
                <Route path='/products' component={Products}/>
                <div className="pcontainer">
                    <h1 >Available Products</h1>
                    <p id="output"></p>
                    <button >AddProduct</button>
                    <ul>
                        <Product productlist = {this.state.productlist}/>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Stock;