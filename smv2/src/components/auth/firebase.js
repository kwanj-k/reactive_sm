import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyBlkQgGFcMnwBK5DUJR5_6SF-tKhkJOi9M",
  authDomain: "drf-sm.firebaseapp.com"
});

// Export all providers to be user
export const auth = firebase.auth();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const TwitterProvider = new firebase.auth.TwitterAuthProvider();
