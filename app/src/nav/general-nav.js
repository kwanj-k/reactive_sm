import React from 'react';
import './nav.css';
import logo from './logo.Uy';

const Nav = () => {
    return (
        <div className="nav-links">
            <nav>
                <ul>
                    <li>
                        <img src={logo} className="img-responsive" alt="+StoreManager" />
                    </li>
                    <li ><a href="/" >Home</a></li>
                    <li ><a href="/products" >Products</a></li>
                    <li ><a href="/cart" >Cart</a></li>
                    <li ><a href="/profile" >Your Profile</a></li>
                    <li ><a href="/stock" >Admin Site</a></li>
                    <li ><a href="/logout" >LogOut</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;
