import React from 'react';
import './cart.css'
import { CartCard } from '../CartCard/CartCard'


const Cart = ({cartList,newQuantity,handleDelete}) => {

    const totalPay = () => {
        let subtotal=0;
        let totalperproduct=0;
        let newAarry=cartList.map((product) => {
            return totalperproduct= product.quantity* product.product.price
        })
        newAarry.forEach((paiment) => {
            subtotal+=paiment
        })
        return subtotal
    };

    return (
        <div>
            <div className="cartContainer">
                {cartList.map((card)=>{ 
                return <CartCard  key={card.product.id} details={card} newQuantity={newQuantity} handleDelete={handleDelete}/>;
            })}
                <div className="subtotal">
                    <span className="subtotalTitle">Subtotal : </span>
                    <span> ${totalPay()}</span>
                </div>
            </div>
        </div>
    )
}

export default Cart
