import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icon.png'


const NavBar = () => {

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutme">About Me</Link></li>
        <li><Link to="/blog">Blog</Link></li>

        {/* <li><Link to="/projects">Projects</Link></li> */}

    </React.Fragment>


    return (
        <div className="navbar flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="flex justify-around">
                    <img className='h-12 w-12 bg-white' src={logo} alt="" />
                    <span className='btn btn-ghost normal-case text-xl'>Marzia Mostafa</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="navbar-end">
                <a

                    href='https://drive.google.com/file/d/17awvUt2d2auwMXf1FNTVOeEAoyLTrjFp/view?usp=sharing'

                    target='blank'
                    className="btn">Resume</a>
            </div>
        </div>
    );
};

export default NavBar;