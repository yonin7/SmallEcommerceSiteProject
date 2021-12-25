import React, {useState} from "react";
import './products.css'
import data from "../../Store";
import Product from "../Product/Product";


const Products =({addToCart})=>{
    const [products]=useState(data)

    return(
        <div className="products-container">
            {products.map((product)=>{

               return <Product key={product.id} product={product} handleClick={addToCart}></Product>

            })
            }
        </div>
    )
}
export default Products