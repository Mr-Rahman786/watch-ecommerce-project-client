import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';

const Cheackout = () => {
    const { _id, title, resale_price, price } = useLoaderData();
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const newPrice = form.orginalPrice.value;
        const usedPrice = form.resalePrice.value
        const email = user?.email || 'Unregister';
        const phone = form.phone.value;
        

        const order = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            phone,
            orginalPrice: newPrice,
            oldPrice:usedPrice,
        }
        if (phone.length > 10) {
            alert('Phone Numnber should be 10 carrecter longer')
        }
        else {

        }


        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Placed Successfully')
                    form.reset();
                }
            }
            )
            .catch(err => console.error(err));
    }

    return (
        <form onSubmit={handlePlaceOrder}>
            <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 w-1/2 mx-auto  gap-2'>
                <input value={title} type="text" placeholder="Product Name" readOnly className="input input-bordered text-white text-2xl" />

                <p>New Price</p>
                <input name='orginalPrice' type="text" placeholder={price} readOnly className="input input-bordered text-white" />
                <p>Used price</p>
                <input name='resalePrice' type="text" placeholder={resale_price} readOnly className="input input-bordered text-white" />

                <input name='firstName' type="text" placeholder="First Name" className="input input-bordered" />
                <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered" />
                <input name='phone' type="number" placeholder="Your phone" className="input input-bordered" />
                <input name='email' type="email" placeholder="Your Email" className="input input-bordered" defaultValue={user?.email} readOnly />
                <button type='submit' className="btn btn-outline btn-info">Place This Order</button>
            </div>
        </form>
    );
};

export default Cheackout;