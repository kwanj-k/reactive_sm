import React, { Component } from 'react';
//import axios from 'axios';
import Nav from '../nav/general-nav';
import Card from './card';
import './card.css';
import { connect } from 'react-redux';


class Products extends Component {
    // state = {
    //     productlist :[]
    // }
    // componentDidMount(){
    //     axios.get('http://127.0.0.1:8000/products/')
    //         .then(res =>{
    //             this.setState({
    //                 productlist : res.data
    //             })
    //         })
    // }
    render(){
        const  products2  = this.props.productlist;
        const prolist = products2.length ? (
            <div>
                <Card productlist = {this.props.productlist}/>
            </div>
        ) : (
            <div>
                Yo don't have any products.
            </div>
        )
        return(
            <div>
                <Nav />
                <div className="products" >
                    <h1 >Available Products</h1>
                    {prolist}
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
export default connect(mapStateToProps)(Products);