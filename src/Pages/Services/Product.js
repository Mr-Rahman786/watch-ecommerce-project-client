import React, { useEffect, useState } from 'react';
import SingleProducts from './SingleProducts';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://final-projects-server.vercel.app/services')
            .then(res => res.json())
        .then(data=>setProducts(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='font-semibold text-4xl text-center'>Apple watch</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-6 mt-10'>
                {
                    products.map(product => <SingleProducts
                        key={product._id}
                        product={product}
                    ></SingleProducts>)
                }
            </div>
        </div>
    );
};

export default Product;