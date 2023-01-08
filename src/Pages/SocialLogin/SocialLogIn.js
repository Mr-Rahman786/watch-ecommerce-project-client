import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';

const SocialLogIn = () => {
    const location = useLocation()
    const nevigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                nevigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err)
            })
    }
    return (
        <div className='mt-10 text-center'>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info">Signin with Google</button>
        </div>
    );
};

export default SocialLogIn;