import React from 'react'
import './Product.css'

function Product(props) {
    return (
        <div className='card'>
            <img className='product--image' src={props.url} alt="product-image" />
            <h3>{props.name}</h3>
            <p className='price'>{props.price}</p>
            <p>{props.description}</p>
            <p><button>Add to Card</button></p>
        </div>
    )
}

export default Product
