import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';

const Signup = () => {
    const { createUser }=useContext(AuthContext)
    const handelSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err));
    }

    return (

        <div className='max-w-fit mx-auto'>
            <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
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
                                        <Link to='/login'>Already have an Account?</Link>
                                        <Link to='/login'>login</Link>
                                    </div>
                                    <input type="submit" value="login" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Signup;