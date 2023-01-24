import React from 'react';
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
            {/* <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}/>
            {/* </button> */} 
        </div>
        </div>
    );
};

export default Calculate;