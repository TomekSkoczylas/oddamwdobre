import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AuthUserContext } from "./components/Session";

import Home from "../src/components/Home";
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import Logout from '../src/components/Logout';
import Navigation from "../src/components/navigation";
import OddajRzeczy from '../src/components/OddajRzeczy';

import { withFirebase } from './components/Firebase';

const App = (props) => {
  const [user, setUser] = useState({authUser: null});


  useEffect(()=> {
    const listner = props.firebase.auth.onAuthStateChanged(authUser =>  {
      authUser 
        ? setUser({authUser}) 
        : setUser({authUser: null}) 
    });
    return ()=> {
      listner();
    } 
  }, [props.firebase.auth]); 


  return (
    <AuthUserContext.Provider value={user.authUser}>
    <Router>
        <Navigation authUser={user.authUser}/>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/oddaj-rzeczy' component={OddajRzeczy}/>
        </div>
    </Router>
    </AuthUserContext.Provider>
  );
}

export default withFirebase(App);
