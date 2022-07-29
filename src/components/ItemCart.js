import React from 'react'

import "../assets/css/CartItem.css";
import { useContext } from 'react';
import Contexto from '../context/Contexto';


const ItemCart = (props) => {
  const {nombre, precio, img, id, deleteCart} = props[0]
  console.log(props, "como vienen al item")
  const handleBorrar = () =>{ 
    deleteCart(id)
  }
  return (
    <>
    
    <div className="carrito-item">
              <img
                src={img}
                alt=""
                className="carrito-item-img"
              />
              <div className="carrito-txt">
                <h1 className="carrito-item-titulo">{nombre}</h1>
                <h3 className="carrito-item-precio">{precio}</h3>
              </div>
              <img src="borrar.png" alt="" className="carrito-item-borrar" onClick={handleBorrar}/>
            </div>
    
    </>
  )
}

export default ItemCart;
