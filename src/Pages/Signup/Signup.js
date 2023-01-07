import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const handelSignUp = event => {
        event.preventDefault();
    }

    return (
        <div className='body'>
            <div className='box'>
                <form onSubmit={handelSignUp} className="form">
                    <h2>Sign Up</h2>
                    <div className="inputBox">
                        <input type="text" name="name" id="" required />
                        <span> Enter Your Name</span>
                        <i></i>
                    </div>
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
    );
};

export default Signup;