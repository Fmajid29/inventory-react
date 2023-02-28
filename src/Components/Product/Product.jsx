import React from 'react'
import img from './img.jpg';
import './Product.css';
const Product = () => {
  return (
    <div className='mainDiv'>
        
        <img src={img} alt='ProductImage'/>
        
        <div className='Pname'>
            <h2>NAME</h2>
        </div>
    </div>
  )
}

export default Product