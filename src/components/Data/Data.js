import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Classes from '../Classes/Classes'
import './Data.css';

const Data = () => {
    const [info, setInfo] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setInfo(data))
    },[])
    return (
        <div className='shop-container'>
        <div className='products-container'>
          {
            info.map(infos => <Classes 
            key={infos.id}
            infos={infos}/>)
          }
        </div>
        <div className='cart-container'>
            <Cart cart={cart}/>
        </div>
    </div>
    );
};

export default Data;