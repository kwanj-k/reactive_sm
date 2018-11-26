import React from 'react';


const Card = ({ productlist }) => {
    const products = productlist.map(product =>{
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
    return (
        <div>
            {products}
        </div>
    )
}
export default Card;