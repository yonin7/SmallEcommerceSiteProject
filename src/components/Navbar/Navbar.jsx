import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'


const Navbar=({cartCounter})=>{
    return (
    <nav className="navbar-container">
        <Link className='btn home' to='/'>Home</Link>
        <div className='nav-rigth'>
           <Link className='btn products' to='/products'>Products</Link>
           <Link className='btn cart' to='/cart'>
               <div className='Counter'>{cartCounter}</div>
               <div className="fas"><i className="fas fa-shopping-cart"></i></div>
               </Link>

        </div>

    </nav>
    )
}
export default Navbar