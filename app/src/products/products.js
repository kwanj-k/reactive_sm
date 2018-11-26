import React, { Component } from 'react';
import Nav from '../nav/general-nav';
import Card from './card';
import './card.css';

class Products extends Component {
    state = {
        productlist :[
            {name:'Monster',price:200,"inventory":20,id:1},
            {name:'Monster1',price:200,"inventory":20,id:2},
            {name:'Monster2',price:200,"inventory":20,id:3},
            {name:'Monster3',price:200,"inventory":20,id:4},
            {name:'Monster',price:200,"inventory":20,id:5},
            {name:'Monster1',price:200,"inventory":20,id:6},
            {name:'Monster2',price:200,"inventory":20,id:7},
            {name:'Monster3',price:200,"inventory":20,id:8}
        ]
    }
    render(){
        return(
            <div>
                <Nav />
                <div className="products" >
                    <h1 >Available Products</h1>
                    <p id="output"></p>
                    <Card productlist = {this.state.productlist}/>
                </div>
            </div>
        )
    }
}
export default Products;