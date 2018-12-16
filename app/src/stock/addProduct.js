import React, { Component } from 'react'
import { connect } from 'react-redux';
import addProduct from '../actions/index.js'
import './stock.css';

class Addproduct extends Component {
    state = {
        name : "",
        inventory : "",
        price : ""
    }
    handleChange = (e) =>{
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addProduct(this.state)

    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}  >
            <div className="col-75"><label >Product Name</label></div>
              <div className="col-75" >
                  <input type="text"  placeholder="name of product.." id='name' onChange={this.handleChange} />
              </div>
              <div className="col-75"><label >Number_Of_Items</label></div>
              <div className="col-75"><input type="text"  placeholder="20 " id='inventory' onChange={this.handleChange} /></div>
              <div className="col-75"><label >Price KSH</label></div>
              <div className="col-75"><input type="text"  placeholder="200" id='price' onChange={this.handleChange} /></div>
              <input   type="submit" value="AddProduct"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return {
      addProduct : (product) => dispatch(addProduct(product))
  }
}
export default connect(null, mapDispatchToProps)(Addproduct);
