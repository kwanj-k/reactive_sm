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
                    <li ><a href="/newstore" >New Store</a></li>
                    <li ><a href="/login" >Login</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;
