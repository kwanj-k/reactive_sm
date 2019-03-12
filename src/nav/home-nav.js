import React from 'react';
import './nav.css';
import logo from './logo.png';
import { Link,NavLink } from 'react-router-dom';

const homeNav = () => {
    return (
        <div >
            <nav>
                <ul>
                    <li>
                        <img src={logo} className="img-responsive" alt="+StoreManager" />
                    </li>
                    <li ><Link to="/" >Home</Link></li>
                    <li ><NavLink to="/newstore" >New Store</NavLink></li>
                    <li ><NavLink to="/products" >Products</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default homeNav;
