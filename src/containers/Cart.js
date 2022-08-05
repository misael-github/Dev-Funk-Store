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
             {cart.map((item, i) => ( // LA I COLOCA UNA KEY POR CADA ITERACION
              <ItemCart key={i} {...item} deleteCart = {deleteCart}></ItemCart> // ITERO LOS ITEMS CON EL COMPONENTE Y CON ...ITEM OBTENGO TODA  LA INFO QUE TIENE EL ITEM

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
