import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { registerUser } from '../../actions/authActions';
import HomeNav from '../common/HomeNav'
import Footer from '../common/Footer'



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            errors: {}
          };
      }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push('/home');
        }
      }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
          }
        }
    onSubmit = e => {
        e.preventDefault();
    
        const userData = {
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        };
        this.props.registerUser(userData, this.props.history);
      }
    
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      }

  render() {
    const { errors } = this.state;
    return (
        <div>
            <HomeNav/>
            <form onSubmit={this.onSubmit}>>
                <div className="welcome">
                <div className="col-25"><label >Email Address</label></div>
                    <div className="col-75">
                        <input
                            id="email"
                            type="text"
                            placeholder="email@example.com.."
                            onChange={this.onChange}
                            error={errors.name}
                            />
                    </div>
                    <div className="col-25"><label >Username</label></div>
                    <div className="col-75">
                        <input
                            id="username"
                            type="text"
                            placeholder="zeus-k"
                            onChange={this.onChange}
                            error={errors.name}
                            />
                    </div>
                    <div className="col-25"><label >Password</label></div>
                    <div className="col-75">
                        <input
                            id="password"
                            type="password"
                            placeholder="*******"
                            onChange={this.onChange}
                            error={errors.name}
                            />
                    </div>
                    <p id="output"></p>
                    <input type="submit" value="Register"/>
                </div>
            </form>
            <Footer/>
        </div>
    )
  }
}

SignUp.propTypes = {
    registerUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(mapStateToProps, { registerUser })(withRouter(SignUp));

