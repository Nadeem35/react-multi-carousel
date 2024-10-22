import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { productData, responsive } from './Data.js'



function Page() {

    const product = productData.map((item) => <Product name={item.name} url={item.imageurl}
        price={item.price}
        description={item.description}
    />);


    return (
        <div className='page'>
            <h1 className='heading'>ReactJS Carousel</h1>
            <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={true}
                // customTransition="all .5"
                transitionDuration={500}
                // containerClass="carousel-container"
                showDots={true}
            >
                {product}
            </Carousel>
        </div>
    )
}

export default Page
