// import firebase from "firebase";
// import React, { Component } from 'react'
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// firebase.initializeApp({
//   apiKey: "AIzaSyBlkQgGFcMnwBK5DUJR5_6SF-tKhkJOi9M",
//   authDomain: "drf-sm.firebaseapp.com"
// });

// class Social extends Component {
//   state = { isSignedIn: false };
//   uiConfig = {
//     signInFlow: "popup",
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       firebase.auth.TwitterAuthProvider.PROVIDER_ID
//     ],
//     callbacks: {
//       signInSuccess: () => false
//     }
//   };
    
//   componentDidMount = () => {
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({ isSignedIn: !!user });
//       console.log("user", user);
//       console.log("tokens", firebase.auth().app.INTERNAL.getToken()['I']);
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         {this.state.isSignedIn ? (
//           <span>
//             <div>Signed In!</div>
//             <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
//             <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
//           </span>
//         ) : (
//           <StyledFirebaseAuth
//             uiConfig={this.uiConfig}
//             firebaseAuth={firebase.auth()}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default Social;
