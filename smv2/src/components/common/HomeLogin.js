import React, { Component } from 'react'


class HomeLogin extends Component {
  render() {
    return (
      <div>
        <form>
            <div className="homelogin">
                <div className="col-75"><label >Email</label></div>
                <div className="col-75" >
                    <input type="text"  placeholder="your email ..." id='email' />
                </div>
                <div className="col-75"><label >Password</label></div>
                <div className="col-75"><input type="text"  placeholder=" **** " id='password' /></div>
                <input   type="submit" value="Login"/>
            </div>
        </form>
    </div>
    )
  }
}

export default HomeLogin
