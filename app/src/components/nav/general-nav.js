import React from 'react';
import './nav.css';
import logo from './logo.Uy';
import { NavLink,Link } from 'react-router-dom';

const generalNav = () => {
    return (
        <div className="nav-NavLinks">
            <nav>
                <ul>
                    <li>
                        <img src={logo} className="img-responsive" alt="+StoreManager" />
                    </li>
                    <li ><Link to="/" >Home</Link></li>
                    <li ><NavLink to="/products" >Products</NavLink></li>
                    <li ><NavLink to="/cart" >Cart</NavLink></li>
                    <li ><NavLink to="/profile" >Your Profile</NavLink></li>
                    <li ><NavLink to="/stock" >Admin Site</NavLink></li>
                    <li ><NavLink to="/logout" >LogOut</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default generalNav;
