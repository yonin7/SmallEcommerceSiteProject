import React from "react";
import { Link } from "react-router-dom";
import './Product.css'


const Product=({product:{name,description,price,discount,imgURL},handleClick, product})=>{
    
    
    return (
    <div className="ProductContainer">
        <img src={imgURL} alt="name"/>
        <h4>{name}</h4>
        <p>{description}</p>
        <div className="priceContainer">
            <span className="price">price:{price}$</span>
            <span className="discount">{discount}$</span>
        </div>
        <button onClick={()=>handleClick(product)}>ADD To Cart</button>
    </div>
    )
}
export default Product