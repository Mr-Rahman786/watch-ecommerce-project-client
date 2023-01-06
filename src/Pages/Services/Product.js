import React, { useEffect, useState } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
        .then(data=>setProducts(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='font-semibold'>Apple watch</h1>
            </div>
            <div>
                <h1>{products.length}</h1>
                
                {
                    
                }
            </div>
        </div>
    );
};

export default Product;