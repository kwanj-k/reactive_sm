import React from 'react';
import '../../styles/css/nav.css';
import logo from '../../styles/images/logo.Uy';
import { Link,NavLink } from 'react-router-dom';

const HomeNav = () => {
    return (
        <div >
            <nav>
                <ul>
                    <li>
                        <img src={logo} className="img-responsive" alt="+StoreManager" />
                    </li>
                    <li ><Link to="/" >Home</Link></li>
                    <li ><NavLink to="/signup">Signup</NavLink></li>
                    <li ><NavLink to="/login" >Login</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default HomeNav;
