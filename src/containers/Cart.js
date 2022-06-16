import React from 'react'
import "../assets/css/Cart.css";
import ItemCart from '../components/ItemCart';

const Cart = () => {
  return (
    <>
          <div className="carrito">
          <div className="carrito-listadito">
             <ItemCart></ItemCart>
             <ItemCart></ItemCart>
             <ItemCart></ItemCart>
          </div>
          <div className="carrito-precio">
            Total a pagar <br /><strong>U$D 3400</strong>
          </div>
        </div>
    
    </>
  )
}

export default Cart
