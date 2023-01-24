import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css';

const Cart = () => {
    
    return (
            <div className='cart'>
            <h5>Nazmul Hossain</h5>
            <small>Dhaka Bangladesh</small>
    
            <h5>Add a Break</h5>
            <b>Class Details</b>
            <h5>Full Class: </h5>
            <h5>Break Time: </h5>

            <Button>Activity Completed</Button>
        </div>
    );
};

export default Cart;