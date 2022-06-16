import React from 'react';
// import img from "http://escueladevrock.com/store/0.png";
import "../assets/css/Item.css";
import cerebro from "../assets/statics/cerebroLoco.png";
import { Link } from 'react-router-dom';

const Item = () => {
  return (
    <>
        <div className="home-item">
                <img
                  src={cerebro}
                  alt=""
                  className="home-item-img"
                />
                <div className="home-item-info">
                <Link to="/cart">
                <h1 className="home-item-titulo">Cerebro loco</h1></Link>
                <p className="home-item-medidas">Medidas: 20x10</p>
                <div className="home-item-actions">
                <h3 className="home-item-precio">AR$ 150</h3>
                <button className="home-item-comprar">+</button>
                </div>
                </div>
              </div>
    </>
  )
}

export default Item
