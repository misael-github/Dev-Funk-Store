import React from 'react';
import iconCart from "../assets/statics/carrito.png"
import iconBack from "../assets/statics/volver.png"

const Header = () => {
  return (
    <>
      <a href="carrito.html"><img src={iconCart} alt="" class="carritou"/></a>
          <a href=""><img src={iconBack} alt="" class="volver"/></a>
    
    <h1 className="titulo">
          Dev <br />
          RockStore
        </h1>
    
    </>
  )
}

export default Header
