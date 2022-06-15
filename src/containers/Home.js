import React from 'react';
import "../assets/css/Home.css";
import Item from '../components/Item';

const Home = () => {
  return (
    <>
    <div class="container">
      <div class="wraper">
        <Item></Item>
   
        <div classNameName="home">
        
          <div className="home-item">
            <img
              src="http://escueladevrock.com/store/2.png"
              alt=""
              className="home-item-img"
            />
            <div className="home-item-info">
            <h1 className="home-item-titulo">Cerebro loco</h1>
            <p className="home-item-medidas">Medidas: 20x10</p>
            <div className="home-item-actions">
            <h3 className="home-item-precio">AR$ 150</h3>
            <button className="home-item-comprar">+</button>
            </div>
            </div>
          </div>
          <div className="home-item">
            <img
              src="http://escueladevrock.com/store/1.png"
              alt=""
              className="home-item-img"
            />
            <div className="home-item-info">
            <h1 className="home-item-titulo">Cerebro loco</h1>
            <p className="home-item-medidas">Medidas: 20x10</p>
            <div className="home-item-actions">
            <h3 className="home-item-precio">AR$ 150</h3>
            <button className="home-item-comprar">+</button>
            </div>
            </div>
          </div>
          <div className="home-item">
            <img
              src="http://escueladevrock.com/store/3.png"
              alt=""
              className="home-item-img"
            />
            <div className="home-item-info">
            <h1 className="home-item-titulo">Cerebro loco</h1>
            <p className="home-item-medidas">Medidas: 20x10</p>
            <div className="home-item-actions">
            <h3 className="home-item-precio">AR$ 150</h3>
            <button className="home-item-comprar">+</button>
            </div>
            </div>
          </div>
          <div className="home-item">
            <img
              src="http://escueladevrock.com/store/5.png"
              alt=""
              className="home-item-img"
            />
            <div className="home-item-info">
            <h1 className="home-item-titulo">Cerebro loco</h1>
            <p className="home-item-medidas">Medidas: 20x10</p>
            <div className="home-item-actions">
            <h3 className="home-item-precio">AR$ 150</h3>
            <button className="home-item-comprar">+</button>
            </div>
            </div>
          </div>
          <div className="home-item">
            <img
              src="http://escueladevrock.com/store/13.png"
              alt=""
              className="home-item-img"
            />
            <div className="home-item-info">
            <h1 className="home-item-titulo">Cerebro loco</h1>
            <p className="home-item-medidas">Medidas: 20x10</p>
            <div className="home-item-actions">
            <h3 classNameName="home-item-precio">AR$ 150</h3>
            <button className="home-item-comprar">+</button>
            </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Home;
