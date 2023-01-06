import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='body'>
            <div className='box'>
                <div className="form">
                    <h2>Sign In</h2>
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
                        <Link>Signup</Link>
                    </div>
                    <input type="submit" value="login" />
                </div>
            </div>
        </div>
    );
};

export default Login;