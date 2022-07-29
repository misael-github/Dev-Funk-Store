import Contexto from "./Contexto";
import { useReducer } from "react";
import React from 'react';
import axios from "axios";
import Reducer from "./Reducer";

const UsarContexto = (props) => {
    const {children} = props;
    const initState = {
      products: [],
      cart: [],
    }
    const [state, dispatch] = useReducer(Reducer, initState)
    const getProducts = async () => { // pedir los productos
        const res = await axios.get("https://devrockstore-default-rtdb.firebaseio.com/productos.json");
        
        dispatch({type:"GET_PRODUCTS", payload:res.data})
        console.log(res.data, "desde usar contexto")
    }
    
     const setCart = (item) => {
      console.log("agregamos", item)
     }
    
    const deleteCart = (item) => { // eliminar productos
      console.log("eliminar carrito", item)
    }
    return (
      <Contexto.Provider
       value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        setCart,
        deleteCart
    }}>
      {children}
    
    </Contexto.Provider>
  )
}


export default UsarContexto;
