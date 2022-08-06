import React, {useContext} from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "../assets/css/Cart.css";
import ItemCart from '../components/ItemCart';
import Contexto from '../context/Contexto';

const Cart = () => {
  const {cart, deleteCart} = useContext(Contexto)

  const [cuenta, setCuenta] = useState(0)
  
  const Total = () => {
    cart.map((item) => setCuenta(cuenta + item[0].precio)) 
      
    
  };
    useEffect(() => {
      Total()
    }, [])
  return (
    <>
          <div className="carrito">
          <div className="carrito-listadito">
             {cart.map((item, i) => ( // LA I COLOCA UNA KEY POR CADA ITERACION
              <ItemCart key={i} {...item} deleteCart = {deleteCart}></ItemCart> // ITERO LOS ITEMS CON EL COMPONENTE Y CON ...ITEM OBTENGO TODA  LA INFO QUE TIENE EL ITEM
              // Y PASO COMO PROP DELETECART LA FUNCION
             ))}
          </div>
          <div className="carrito-precio">
            <strong>Total a pagar </strong><br/>${cuenta} {console.log(cuenta)}
          </div>
        </div>
    
    </>
  )
}

export default Cart
