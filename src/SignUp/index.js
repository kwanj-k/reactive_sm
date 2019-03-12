import React, { Component } from 'react'
import './signup.css';

class SignUp extends Component {
    
  render() {
    return (
      <div>
        <form id="addStore"  >
            <div className="welcome">
                <div className="col-25"><label >Store Name</label></div>
                <div className="col-75"><input id="storename" type="text" placeholder="The name of your store"/></div>
                <div className="col-25"><label >Type of Store</label></div>
                <div className="col-75"><input id="category" type="text" placeholder="StoreType eg grocery.."/></div>
                <div className="col-75"><label >Email Address</label></div>
                <div className="col-75"><input id="email" type="text"  placeholder="email@example.com.."/></div>
                <div className="col-25"><label >Password</label></div>
                <div className="col-75"><input id="password" type="password"  placeholder="*******"/></div>
                <div className="col-75"><label >Confirm Password</label></div>
                <div className="col-75"><input id="confirmpassword" type="password"  placeholder="*******"/></div>
                <p id="output"></p>
                <div className="col-75">
                    <input type="submit" value="CreateStore"/>
                </div>     
            </div>
        </form>
    </div>
    )
  }
}
export default SignUp;
