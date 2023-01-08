import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/watchLOgo.png'
import { AuthContext } from '../../../Context/AuthProvider/Authprovider';
import './Header.css'


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>

        {
            user?.email ?
                <>
                    <li><Link to='/dashbord'>Dashbord</Link></li>
                    <li>
                        <button onClick={handleLogout} className='btn-ghost'>Sign out</button>
                    </li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
        }
        {
            user?.photoURL &&
            <div className='uid-main'>
                <p>{user.displayName}</p>
                <img src={user.photoURL} alt="" />
            </div>
        }
        <li><Link to='/blogs'>Blogs</Link></li>
    </>

    return (
        <div className="navbar h-20 mb-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='w-24' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline">Subscribe</button>
            </div>
        </div>
    );
};

export default Header;