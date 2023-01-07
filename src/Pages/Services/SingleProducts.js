import React from 'react';
import { Link } from 'react-router-dom';

const SingleProducts = ({ product }) => {
    const {_id, title, img, price, description, resale_price, use, posted, sellerName, sellerProfile } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl p-5">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h1 className='text-center text-2xl font-semibold text-white'>{ title}</h1>
                <h5 className='font-semibold'>New Price : $ {price}</h5>
                <h6 className='text-white'>Used Price : $ {resale_price}</h6>
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
                <Link to={`/cheackout/${_id}`}>
                    <button className="btn btn-outline btn-success mt-5">Purchese</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleProducts;