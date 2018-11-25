import React, { Component } from 'react';
import Nav from '../nav/nav';
import Footer from '../footer/footer';
import './home.css';

class Home extends Component {
    state = {
        homelinks : [
            {link:'Home',id:1},
            {link:'NewStore',id:2},
            {link:'Login',id:3}
        ]
    }
    
    render(){
        return(
            <div>
                <Nav homelinks = {this.state.homelinks}/>
                <div className="helper">
                    <h1>Store Manager.inc</h1>
                    <p>Store Manager is a web application that helps store owners manage sales and product inventory records. 
                        This application is meant for use in a single store.</p>
                        <p>Store Manager is a web application that helps store owners manage sales and product inventory records. 
                                This application is meant for use in a single store.</p>
                    <div className="start">
                        <a href="newstore.html"><input type="submit" value="Get Started"/></a>
                    </div>
                </div>
                <form >
                    <div className="homelogin">
                        <div className="col-75"><label >Email Address</label></div>
                        <div className="col-75"><input id="email" type="text"  placeholder="email@example.com.."/></div>
                        <div className="col-25"><label >Password</label></div>
                        <div className="col-75"><input id="password" type="password"  placeholder="*******"/></div>
                        <p id="output"></p>
                        <div className="col-75">
                            <a href="products.html"> <input type="submit" cssStyle="background-color: #0BC474" value ="LogIn"/></a>
                        </div> 
                    </div>
                </form>
                <Footer/>
            </div>
        );
    }
}
export default Home;
