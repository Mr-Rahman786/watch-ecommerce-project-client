import React, { useEffect, useState } from 'react';
import SingleAccsories from './SingleAccsories';

const Accosories = () => {
    const [accsories, setAccsories] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/accsories')
            .then(res => res.json())
        .then(data =>setAccsories(data))
    },[])
    return (
        <div>
            <h1>Accsories</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-12'>
                {
                    accsories.map(accsore => <SingleAccsories
                        key={accsore._id}
                        accsore={accsore}
                    ></SingleAccsories>)
                }
            </div>
        </div>
    );
};

export default Accosories;