import React from 'react'
import './cartCard.css'


export const CartCard = ({newQuantity,handleDelete,details,details:{quantity, product:{id,name,price,imgURL}}}) => {

    return (
        <div className="cardContainer">
            <div className="rigthPriceTitle">
                price
            </div>
            <div className="productDetails">

                <img className="imgCard" src={imgURL} alt={name} />
                <div className="text">
                    <h5 className="productName">{name}</h5>
                    <div className="counterContainer">
                        <div className="quantity">
                            <div className="quantityTitle">Quantity</div>
                            <div className="plus-min">
                            <button className="quantityCounterPlus" onClick={()=>newQuantity(details,-1)}>❮</button>
                            <button className="quantityCounter">{quantity}</button>
                            <button className="quantityCounterPlus"onClick={()=>newQuantity(details,1)}>❯</button>
                            </div>
                        </div>
                        <hr/>
                        <div className="delete">
                            <div className="deleteTitle">Delete</div>
                            <button className="deleteIcon"onClick={()=>handleDelete(id)} >🗑️</button>

                        </div>
                    </div>


                </div>
            </div>
        <div className="price" >${price*quantity}</div>
    </div>
    )
}
