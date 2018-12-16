import React from 'react';
import _ from 'lodash';

const Card = ({productlist}) => {
    var arr = _.values(productlist.productlist)
    const products2 = arr.map(product =>{
        return(
            <div className="card" key={product.id}>
                <div className="card-container">
                    <h2><b>{product.name}</b></h2> 
                    <h4>Price     : @KSH {product.price}</h4> 
                    <h4>Inventory : {product.inventory}</h4> 
                    <button >AddtoCart</button>
                </div>
                <p></p>
            </div>
        )
    })
    return (<div>{products2}</div>)
}
export default Card;
