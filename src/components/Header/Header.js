import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <div className='header'>
            <nav>
                <Link to={'/home'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/products'}>Product</Link>
                <Link to={'/login'}>Login</Link>
            </nav>
            <h3>this is new</h3>
        </div>
    );
};

export default Header;