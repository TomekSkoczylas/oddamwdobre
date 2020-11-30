import app from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBNX4n2-1l0eREv0h0ii1WFfOxwW9KjdVs",
    authDomain: "oddamwdobre.firebaseapp.com",
    databaseURL: "https://oddamwdobre.firebaseio.com",
    projectId: "oddamwdobre",
    storageBucket: "oddamwdobre.appspot.com",
    messagingSenderId: "683639355696",
    appId: "1:683639355696:web:7548024a970f4bdde130f5",
    measurementId: "G-1JVBQJFTSH"
  };

  class Firebase {
      constructor() {
          app.initializeApp(firebaseConfig);

          this.auth = app.auth();
      }

      //*** Auth API ***

        doCreateUserWithEmailAndPassword = (email, password) =>
            this.auth.createUserWithEmailAndPassword(email, password);

        doSignInWithEmailAndPassword = (email, password) =>
            this.auth.signInWithEmailAndPassword(email, password);  
  
        doSignOut = () => this.auth.signOut();

        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
        doPasswordUpdate = password =>
            this.auth.currentUser.updatePassword(password);

    }

  export default Firebase;