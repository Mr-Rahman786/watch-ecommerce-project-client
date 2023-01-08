import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';
import DashBordRow from './DashBordRow';

const DashBord = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrder] = useState([]);



    useEffect(() => {
        fetch(`https://final-projects-server.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to want to cancel this item?')
        if (proceed) {
            fetch(`https://final-projects-server.vercel.app/orders/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrder(remaining)
                    }
                })
        }
    }

    // const handleUpdate = id => {
    //     fetch(`https://final-projects-server.vercel.app/orders/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type':'application/json'
    //         },
    //         body:JSON.stringify({status:'Approved'})
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //         console.log(data)
    //     })
    // }

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
                            
                            <th></th>
                            <th>Customer phone or Name</th>
                            <th>Email</th>
                            <th> Approved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <DashBordRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                // handleUpdate={handleUpdate}
                            ></DashBordRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default DashBord;