import React, {useContext, useEffect} from 'react';
import Contexto from '../context/Contexto';
import "../assets/css/Home.css";
import Item from '../components/Item';

const Home = () => {
  useEffect(() => {
    getProducts()
  },[])
  const {getProducts, products} = useContext(Contexto)
  return (
    <>
    <div className="container">
      {/* <div className="wraper"> */}
       {products.map((item) => (
        <Item {...item} key={item.id}></Item>
       ))}
       
  
    </div>
    {/* </div> */}
    
    
    </>
  )
}

export default Home;
