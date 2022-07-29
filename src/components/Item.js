import React from 'react';
// import img from "http://escueladevrock.com/store/0.png";
import "../assets/css/Item.css";

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Contexto from '../context/Contexto';

const Item = (props) => {
  const { id, medidas, precio, nombre, img} = props
  const {setCart} = useContext(Contexto)
  return (
    <>
          <Link to="/product" className='item-wrap-link'>
        <div className="home-item">
                <img
                  src={img}
                  alt=""
                  className="home-item-img"
                />
                <div className="home-item-info">
                <h1 className="home-item-titulo">{nombre}</h1>
                <p className="home-item-medidas">{medidas}</p>
                <div className="home-item-actions">
                <h3 className="home-item-precio">AR$ {precio}</h3>
                <button className="home-item-comprar" onClick={() => {
                  setCart(id)
                }}>+</button>
                </div>
                </div>
              </div>
              </Link>
    </>
  )
}

export default Item
