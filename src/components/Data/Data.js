import React, { useEffect, useState } from 'react';
import Classes from '../Classes/Classes'
import './Data.css';

const Data = () => {
    const [info, setInfo] = useState([])
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
            
        </div>
    </div>
    );
};

export default Data;