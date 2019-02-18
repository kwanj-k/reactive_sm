import React, { Component } from 'react'
import HomeNav from '../common/HomeNav'
import Footer from '../common/Footer'
import '../../styles/css/login.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import Social from './Social';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push('/home');
        }
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
          }
    }
    onSubmit = e => {
        e.preventDefault();
    
        const userData = {
          email: this.state.email,
          password: this.state.password
        };
        this.props.loginUser(userData);
      }
    
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      }

  render() {
    const { errors } = this.state;
    return (
        <div>
            <HomeNav/>
            <form onSubmit={this.onSubmit}>
                <div className="welcome">
                    <div className="col-25"><label >Email Address</label></div>
                    <div className="col-75">
                        <input
                            id="email"
                            type="text"
                            placeholder="email@example.com.."
                            onChange={this.onChange}
                            error={errors.email}
                            />
                    </div>
                    <div className="col-25"><label >Password</label></div>
                    <div className="col-75">
                        <input
                            id="password"
                            type="password"
                            placeholder="*******"
                            onChange={this.onChange}
                            error={errors.password}
                            />
                    </div>
                    <p id="output"></p>
                    <input type="submit" value="LogIn"/>
                </div>
            </form>
            <Social/>
            <Footer/>
        </div>
    )
  }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  

export default connect(mapStateToProps, { loginUser })(Login);

