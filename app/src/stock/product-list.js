import React from 'react';
import _ from 'lodash';

const Product = ({ productlist }) => {
    var arr = _.values(productlist.productlist)
    const products = arr.map(product =>{

        return(
            <div key={product.id}>
                <li>
                    <h4>{product.name}</h4>
                    <div className="status">
                        <h3>Category: {product.category}</h3>
                        <h3>Number: {product.inventory}</h3>
                        <h3>Price: @KSH {product.price}</h3>
                    </div>
                </li>
                <div className="btns">
                    <button >Update</button>
                    <button className='del'>Delete</button>
                </div>
            </div>
        )
    })
    return (
        <div>
            {products}
        </div>
    )
}
export default Product;
