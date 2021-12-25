import React, {useState} from "react";
import { Link } from "react-router-dom";
import './products.css'
import data from "../../Store";
import Product from "../Product/Product";


const Products =({addToCart})=>{
    const [products,setProducts]=useState(data)

    return(
        <div className="products-container">
            {products.map((product)=>{

               return <Product key={product.id} product={product} handleClick={addToCart}></Product>

            })
            }
        </div>
    )
}
// class Products extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { data: [] };
//     }

//     componentDidMount(){
//          this.setState({data: Store});
//     }

//     displayProduct=()=>{
//         const items =this.state.data
//         return items.map((item)=>{
//             return <Link className="product" key={item.id}  to={`/product/${item.id}`} >{item.title }</Link>;
            
//         })
//     }
//     // 
//     // <Link className="product" key={index}  to=`/product/${}` >{item.title } <img src={item.imageUrl} alt="item"/>{item.price}</Link>;
    
//     render() {
//         return <div className="container">
//             {this.displayProduct()}
//         </div> 

//     }
  

// }
export default Products