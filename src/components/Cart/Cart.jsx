import React from 'react';
import './cart.css'
import { CartCard } from '../CartCard/CartCard'
import Payment from '../Payment/Payment'


const Cart = ({cartList,clearCart,newQuantity,handleDelete}) => {
 
    const totalPay = () => {
        let subtotal=0;
        let newAarry=cartList.map((product) => {
            return product.quantity* product.product.price
        })
        newAarry.forEach((paiment) => {
            subtotal+=paiment
        })
        return subtotal
    };
    const reset=()=>{
        clearCart()
         }

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
                <Payment reset={reset} />
            </div>
        </div>
    )
}

export default Cart
