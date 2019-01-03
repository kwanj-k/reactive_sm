import React, { Component } from 'react'
import { connect } from 'react-redux';
import loginUser from '../actions/auth.js'

class LoginUser extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) =>{
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.loginUser(this.state)

    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}  >
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

const mapDispatchToProps = dispatch =>{
  return {
      loginUser : (userdata) => dispatch(loginUser(userdata))
  }
}
export default connect(null, mapDispatchToProps)(LoginUser);
