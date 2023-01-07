import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {


    const handleLogin = event => {
        event.preventDefault();
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
                                    <input type="submit" value="login" />
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