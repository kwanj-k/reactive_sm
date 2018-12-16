import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';


class Home extends Component {
    render(){
        return(
            <div>
                <div className="helper">
                    <h1>Store Manager.inc</h1>
                    <p>Store Manager is a web application that helps store owners manage sales and product inventory records. 
                        This application is meant for use in a single store.</p>
                        <p>Store Manager is a web application that helps store owners manage sales and product inventory records. 
                                This application is meant for use in a single store.</p>
                    <div className="start">
                        <Link to="newstore.html"><input type="submit" value="Get Started"/></Link>
                    </div>
                </div>
                <form >
                    <div className="homelogin">
                        <div className="col-75"><label >Email Address</label></div>
                        <div className="col-75"><input id="email" type="text"  placeholder="email@example.com.."/></div>
                        <div className="col-25"><label >Password</label></div>
                        <div className="col-75"><input id="password" type="password"  placeholder="*******"/></div>
                        <p id="output"></p>
                        <div className="col-25">
                            <Link to="/products" className="afix">LogIn</Link>
                        </div> 
                    </div>
                </form>
            </div>
        );
    }
}
export default Home;
