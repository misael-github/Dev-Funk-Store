import React from 'react';
// import img from "http://escueladevrock.com/store/0.png";
import "../assets/css/Item.css";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Contexto from '../context/Contexto';

const Item = (props) => {
  const { id, medidas, precio, nombre, img} = props;
  const {setCart} = useContext(Contexto)
  const alertView = () => {
     Swal.fire({
     title:"¡Producto agregado al carro!",
     position:"top",
     buttonsStyling:"false",
     confirmButtonText:"Ir al carro de compras",
     showCancelButton: true,
     cancelButtonText: "Ver más productos",
     toast:true,
     confirmButtonColor:"red",
     popup: 'swal2-show',
     backdrop: 'swal2-backdrop-show',
     icon:"success",
     
    

     })
  }
  return (
    <>
        <div className="home-item">
          <Link to="/product" className='item-wrap-link'>
                <img
                  src={img}
                  alt=""
                  className="home-item-img"
                />
                </Link>
                <div className="home-item-info">
                <h1 className="home-item-titulo">{nombre}</h1>
                <p className="home-item-medidas">{medidas}</p>
                <div className="home-item-actions">
                <h3 className="home-item-precio">AR$ {precio}</h3>
                <button className="home-item-comprar" onClick={() => {
                  setCart(id)
                  alertView()
                }}>+</button>
                </div>
                </div>
              </div>
    </>
  )
}

export default Item
