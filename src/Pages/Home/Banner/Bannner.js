import React from 'react';
import './Bannner.css'
import product1 from '../../../assets/banner/banner-1.png';
import product2 from '../../../assets/banner/banner-2.png';
import product3 from '../../../assets/banner/banner-3.png';
import product4 from '../../../assets/banner/banner-4.png';
const Bannner = () => {
    return (
        <div>
            <div className="carousel  w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={ product1} alt="" className=" w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={product2} alt="" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={product3} alt="" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={product4} alt="" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Bannner;