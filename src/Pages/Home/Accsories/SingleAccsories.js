import React from 'react';
import { Link } from 'react-router-dom';

const SingleAccsories = ({ accsore }) => {
    const { _id, img, price, title } = accsore;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-5">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <Link to={`/accsoriesCheckout/${_id}`}>
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAccsories;