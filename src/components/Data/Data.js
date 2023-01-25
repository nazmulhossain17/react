import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Classes from '../Classes/Classes'
import './Data.css';

const Data = () => {
    const [info, setInfo] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
      console.log('products load before fetch')
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
          setInfo(data)
          // console.log('product loaded')
          })
      },[])

    useEffect(()=>{
      console.log('local storage 1st line', info)
      const storedCart = getStoredCart();
      const savedCart = [];
      for(const id in storedCart){
        const addedInfo = info.find(n => n.id === id);
        if(addedInfo){
          const quantity = storedCart[id]
          addedInfo.quantity = quantity
          savedCart.push(addedInfo)
        }
      }
      setCart(savedCart)
      // console.log('local storage finished')
    },[info])

    const handleClick = (info) =>{
      // console.log(info);
      const newCart = [...cart, info];
      setCart(newCart);
      addToDb(info.id);
  }
    return (
        <div className='shop-container'>
        <div className='products-container'>
          {
            info.map(infos => <Classes 
            key={infos.id}
            infos={infos}
            handleClick={handleClick}
            />)
          }
        </div>
        <div className='cart-container'>
            <Cart cart={cart}/>
            
        </div>
    </div>
    );
};

export default Data;