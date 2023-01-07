import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';
import DashBordRow from './DashBordRow';

const DashBord = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrder] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [user?.email])
    return (
        <div>
            <h1>You Have an {orders.length} Orders</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th>
                                Product Name & Image
                            </th>
                            
                            <th>Price</th>
                            <th>Customer phone or Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <DashBordRow
                                key={order._id}
                                order={order}
                            ></DashBordRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default DashBord;