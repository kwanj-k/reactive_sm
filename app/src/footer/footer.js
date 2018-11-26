import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <footer className="footercentered">
            <p className="footer-company-motto">Sit back.StoreManger will handle it.</p>
            <p className="footer-links">
                <a href="index.html">Home</a> ·
                <a href="index.html">Blog</a>   
            </p>
            <p className="footer-company-name">Store Manager.inc &copy; 2018</p>
        </footer>
    )
}
export default Footer;
