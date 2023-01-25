import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css';

const Cart = ({cart}) => {

    let total = 0;
    let quantity = 0;
    for(const info of cart){
        quantity = quantity + info.quantity; 
        total = total + info.time * info.quantity;
    }
    
    return (
            <div className='cart'>
            <h5>Nazmul Hossain</h5>
            <small>Dhaka Bangladesh</small>
            <br></br>
            <strong>Selected Class: {quantity}</strong>
            <br></br>
            <b>Class Details</b>
            <h5>Class Time: {total}h</h5>
            <h5>Break Time: 30m</h5>

            <Button>Activity Completed</Button>
        </div>
    );
};

export default Cart;