import React, {useContext} from 'react'
import "../assets/css/Cart.css";
import ItemCart from '../components/ItemCart';
import Contexto from '../context/Contexto';
const Cart = () => {
  const {cart, deleteCart} = useContext(Contexto)
  return (
    <>
          <div className="carrito">
          <div className="carrito-listadito">
             {cart.map((item, i) => (
              <ItemCart key={i} {...item} ></ItemCart>

             ))}
          </div>
          <div className="carrito-precio">
            Total a pagar <br /><strong>U$D 3400</strong>
          </div>
        </div>
    
    </>
  )
}

export default Cart
