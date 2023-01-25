import React from 'react';
import { Button } from 'react-bootstrap';
import './Classes.css';

const Calculate = ({infos, handleClick}) => {
    const {img, name, time,des, seller} = infos;
    
    return (
        <div>
            <div className='product'>
            <img src={img} alt=''/>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <small>{des}</small>
            <h4>Time required: {time}h</h4>
            </div>
            <Button onClick={()=>handleClick(infos)} className='btn-success'>Add To List</Button>
        </div>
        </div>
    );
};

export default Calculate;