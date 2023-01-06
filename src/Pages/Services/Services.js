import React from 'react';
import { Link } from 'react-router-dom';
import catagory1 from '../../assets/watchBanner/watchBanner-1.jpg'
import catagory2 from '../../assets/watchBanner/watchBanner-2.jpg'
import catagory3 from '../../assets/watchBanner/watchBanner-3.jpg'
const Services = () => {
    return (
        <div className='pt-10'>
            <h1 className='text-center text-5xl'>Our Catagories</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-10 '>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={catagory1} alt="Shoes" /></figure>
                    <div className="card-body mt-40 ">
                        <h2 className="card-title text-5xl">Apple Watch Resale</h2>
                        
                        <div className="card-actions justify-start mt-24">
                            <Link to='/watch'><button className="btn btn-outline">Go Somewhere</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={catagory2} alt="Shoes" /></figure>
                    <div className="card-body mt-40">
                        <h2 className="card-title text-5xl">Watch Accosories</h2>
                        
                        <div className="card-actions justify-start mt-24">
                            <Link to='/accosories'><button className="btn btn-outline">Go Somewhere</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={catagory3} alt="Shoes" /></figure>
                    <div className="card-body mx-auto mt-40">
                        <h2 className="card-title text-5xl">Watch Buy & Sell</h2>
                        
                        <div className="card-actions justify-start mt-24">
                            <Link to='/watch'><button className="btn btn-outline">Go Somewhere</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;