import React, {
  Component
} from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import axios from 'axios';
import {
  connect
} from 'react-redux';
import  * as SocialFunc from '../../actions/authActions';

import {
  auth,
  GoogleProvider,
  FacebookProvider,
  TwitterProvider
} from './firebase';

import {
  FACEBOOK,
  GOOGLE,
  TWITTER
} from '../../actions/types';
import '../../styles/css/login.css'
class SocialAuthActions extends Component {
  constructor(props) {
    super(props);

    this.onsubmitHandler = this.onsubmitHandler.bind(this);
    this.getSocialstuff = this.getSocialstuff.bind(this);
    this.consumeEndPoint = this.consumeEndPoint.bind(this);
    this.actionCaller = this.actionCaller.bind(this);
    //this.renderbutton = this.renderbutton.bind(this);
  }
  uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID
        ]
  };
  onsubmitHandler(access) {
    let tokenData = null;
    console.log(access.provider)
    if (access.provider === "twitter") {
      tokenData = {
        "provider": access.provider,
        "access_token": access.accessToken,
        "access_token_secret": access.accessSecret
      };

    } else {
      tokenData = {
        "provider": access.provider,
        "access_token": access.accessToken
      };

    }
    this.consumeEndPoint(tokenData);
    return tokenData;
  }

  getSocialstuff(oauthprovider, platform, the_type) {
    auth.signInWithPopup(oauthprovider).then(function (result) {
      return {
        type: the_type,
        payload: {
          authData: {
            provider: platform,
            accessToken: result.credential.accessToken,
            accessSecret: result.credential.secret
          },
          userDetails: {
            name: result.user.displayName,
            photo: result.user.photoURL,
            email: result.user.email
          }
        }
      };
    }).then((response) => {
      this.actionCaller(response);
    });
  }

  consumeEndPoint(tokenData){
    const passedData = this.props;
    let url = process.env.SOCIAL_AUTH_API_URL;
    passedData.fetchingCall();
    let fetch = axios.post(url, tokenData, {
        headers: {
          Accept: "application/json" }, crossDomain: true
      })
      .then((response) => {
        passedData.receivedUsers(response.data);
        //let username = response.data.login_data.username;
        //bake_cookie("loggedInUsername", username);// Set username cookie

        let token = response.data.social_token;
        token = token.replace("Token","").trim();
        //bake_cookie("token", token);// Set cookie
        //redirectUrl('/a/home');
      })
      .catch((err) => {
        passedData.failedCall(err);
        //toast.error('🦄 Something went horribly wrong!',{ position: toast.POSITION.TOP_RIGHT });
      });
      return fetch;
  }

  actionCaller(response){
    const dataFetch = this.props;
    switch (response.type) {
      case FACEBOOK:
        dataFetch.FacebookAuth(response);
        break;

      case GOOGLE:
        dataFetch.GoogleAuth(response);
        break;

      case TWITTER:
        dataFetch.TwitterAuth(response);
        break;

      default:
        break;
    }
    this.onsubmitHandler(response.payload.authData);
  }

  // renderbutton(authProvider, platform, type, btn_name, btn_class, btn_type){
  //   return (
  //     <button type="button" className={btn_type} onClick={() => this.getSocialstuff(authProvider, platform, type)}>
  //       <i className={btn_class} />
  //       &nbsp;
  //       {btn_name}
  //     </button>
  // );
  // }
 

  render() {
    return (
      <div>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={this.getSocialstuff()}/>
      </div>

    );
  }
}

  export function mapStateToProps(state, myProps) {
    return {
      socialAuth: state.socialAuth,
      myProps
    };
  }

  export function mapDispatchToProps(dispatch) {
    return {
      // Authentication functions
      FacebookAuth: (data) => dispatch(SocialFunc.FacebookAuth(data)),
      GoogleAuth: (data) => dispatch(SocialFunc.GoogleAuth(data)),
      TwitterAuth: (data) => dispatch(SocialFunc.TwitterAuth(data)),

      // Messaging functions
      receivedUsers: fetched_data => dispatch(SocialFunc.receivedUsers(fetched_data)),
      fetchingCall: () => dispatch(SocialFunc.fetchingCall()),
      failedCall: error => dispatch(SocialFunc.failedCall(error)),
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SocialAuthActions);
