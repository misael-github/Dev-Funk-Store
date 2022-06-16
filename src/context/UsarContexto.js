import Contexto from "./Contexto";

import React from 'react';

const UsarContexto = (props) => {
    const {childrens} = props;
    const initState = {
        products: [],
        cart: [],
    }
    const getProducts = async () => { // pedir los productos

    }
    const setCart = () => { // agregar productos

    }
    const deleteCart = () => { // eliminar productos

    }
  return (
    <Contexto.Provider value={{
        products: initState.products,
        cart: initState.cart,
        getProducts,
        setCart,
        deleteCart
    }}>
      {childrens}
     
    </Contexto.Provider>
  )
}

export default UsarContexto;
