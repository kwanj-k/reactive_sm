import React, { Component } from 'react'

class Login extends Component {
    
  render() {
    return (
      <div>
          <form  >
            <div className="homelogin">
                <div className="col-75"><label >Email</label></div>
                <div className="col-75" >
                    <input type="text"  placeholder="your email ..." id='email' onChange={this.handleChange} />
                </div>
                <div className="col-75"><label >Password</label></div>
                <div className="col-75"><input type="text"  placeholder=" **** " id='password' onChange={this.handleChange} /></div>
                <input   type="submit" value="Login"/>
            </div>
        </form>
      </div>
    )
  }
}

export default Login;
