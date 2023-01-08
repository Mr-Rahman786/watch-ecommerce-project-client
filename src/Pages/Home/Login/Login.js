import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/Authprovider';
import SocialLogIn from '../../SocialLogin/SocialLogIn';
import './Login.css'
const Login = () => {
    const { logIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    return (

        <div className='max-w-fit mx-auto'>
            <div className="mockup-phone border-primary">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        {/* start */}

                        <div className='body'>
                            <div className='box'>
                                <form onSubmit={handleLogin} className="form">
                                    <h2>Login</h2>
                                    <div className="inputBox">
                                        <input type="email" name="email" id="" required />
                                        <span> Enter Your Email</span>
                                        <i></i>
                                    </div>
                                    <div className="inputBox">
                                        <input type="password" name="password" id="" required />
                                        <span>Enter Password</span>
                                        <i></i>
                                    </div>
                                    <div className="links">
                                        <Link>Forget Password</Link>
                                        <Link to='/signup'>Signup</Link>
                                    </div>
                                    <button><input type="submit" value="login" /></button>
                                    <SocialLogIn></SocialLogIn>
                                </form>
                            </div>
                        </div>
                        {/* finished */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;