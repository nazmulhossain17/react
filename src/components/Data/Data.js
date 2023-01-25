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
        .then(data => setInfo(data))
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
    },[info])

    const handleClick = (selectedInfo) =>{
      // console.log(info);
      let newCart = [];
      const exists = cart.find(info => info.id === selectedInfo.id);
      if(!exists){
        selectedInfo.quantity = 1;
        newCart = [...cart, selectedInfo];
      }
      else{
        const rest = cart.filter(info => info.id !== selectedInfo.id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists]
      }
      setCart(newCart);
      addToDb(selectedInfo.id);
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