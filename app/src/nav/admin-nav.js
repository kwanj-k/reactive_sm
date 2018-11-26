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
                    <li ><a href="/stock" >Stock</a></li>
                    <li ><a href="/sales" >Sales</a></li>
                    <li ><a href="/newuser" >Add User</a></li>
                    <li ><a href="/products" >Attendant Site</a></li>
                    <li ><a href="/logout" >LogOut</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;
