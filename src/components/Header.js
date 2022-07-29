import React from 'react';
import iconCart from "../assets/statics/carrito.png"
import iconBack from "../assets/statics/volver.png"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to="/cart"><img src={iconCart} alt="" className="carritou"/></Link>
          <Link to=""><img src={iconBack} alt="" className="volver"/></Link>
    
    <h1 className="titulo">
          Dev <br />
          RockStore
        </h1>
    
    </>
  )
}

export default Header
