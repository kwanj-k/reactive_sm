import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HomeNav from './HomeNav'
import '../../styles/css/home.css';
import HomeLogin from './HomeLogin'
import Footer from './Footer'



class Home extends Component {
    render(){
        return(
            <div>
                <div className="helper">
                    <HomeNav/>
                    <h1>Store Manager.inc</h1>
                    <p>Store Manager is a web application that helps store owners
                      manage sales and product inventory records. 
                      This application is meant for use in a single store.</p>
                      <p>Store Manager is a web application that helps store owners
                      manage sales and product inventory records. 
                      This application is meant for use in a single store.</p>
                    <div className="start">
                      <Link to="newstore.html">
                        <input type="submit" value="Get Started"/>
                      </Link>
                    </div>
                    
                </div>
                <HomeLogin/>
                <Footer/>
            </div>
        );
    }
}
export default Home;
