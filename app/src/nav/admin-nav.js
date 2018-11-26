import React from 'react';
import './nav.css';
import logo from './logo.Uy';
import { NavLink,Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav-NavLinks">
            <nav>
                <ul>
                    <li>
                        <img src={logo} className="img-responsive" alt="+StoreManager" />
                    </li>
                    <li ><Link to="/" >Home</Link></li>
                    <li ><NavLink to="/stock" >Stock</NavLink></li>
                    <li ><NavLink to="/sales" >Sales</NavLink></li>
                    <li ><NavLink to="/newuser" >Add User</NavLink></li>
                    <li ><NavLink to="/products" >Attendant Site</NavLink></li>
                    <li ><NavLink to="/logout" >LogOut</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;
