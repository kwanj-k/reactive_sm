import React from 'react';
import './nav.css';
import logo from './logo.Uy';

const Nav = ({ homelinks }) => {
    const links = homelinks.map(link => {
        return (
            <li key={link.id}><a href="#hfh.html" >{link.link}</a></li>
        )
    })
    return (
        <div className="nav-links">
            <nav>
                <ul>
                    <li>
                        <img src={logo} className="img-responsive" alt="+StoreManager" />
                    </li>
                    {links}
                </ul>
            </nav>
        </div>
    )
}
export default Nav;
