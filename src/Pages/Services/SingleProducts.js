import React from 'react';

const SingleProducts = ({ product }) => {
    const { title, img, price, description, resale_price, use, posted, sellerName, sellerProfile } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl p-5">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h5 className='font-semibold'>New Price : $ {price}</h5>
                <h6>Used Price : $ {resale_price}</h6>
                <div className="badge badge-secondary">used</div>
                <p></p>
                <div className="card-actions justify-end">
                    <small>Used Products : {use}</small>
                    <small>Posted Date : { posted}</small>
                </div>
                <div>
                    <img className='w-10 rounded-xl' src={sellerProfile} alt="" />
                    <small>{ sellerName}</small>
                </div>
                <button className="btn btn-outline btn-success mt-5">Purchese</button>
            </div>
        </div>
    );
};

export default SingleProducts;