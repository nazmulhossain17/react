import React from 'react';
import { Button } from 'react-bootstrap';
import './Classes.css';

const Calculate = ({infos}) => {
    const {img, name, price, time,des, seller} = infos;
    return (
        <div>
            <div className='product'>
            <img src={img} alt=''/>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <small>{des}</small>
            <h4>Time required: {time}h</h4>
            </div>
            <Button className='btn-success'>Add To List</Button>
        </div>
        </div>
    );
};

export default Calculate;