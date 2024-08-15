import React from "react";
import "./productCard.css";

const ProductCardComponent = ({data})=>{
   
    return(
        <div className="main-product-card-container">
            <div className="product-card-image-container">
                <img className="product-card-image" src={data.image} alt={data.name} />
            </div>
            <ul className="product-card-details">
                <li className="product-card-name">{data.name}</li>
                <li className="product-card-price">{data.price}</li>
                <li className="product-card-buy"><a href="./">Buy</a></li>
            </ul>
        </div>
    )
}

export default ProductCardComponent;