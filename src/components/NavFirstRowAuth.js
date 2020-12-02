import React from "react";

import { Link } from "react-router-dom";
import { AuthUserContext } from "./Session";

import LogoutBtn from './LogoutBtn';


const FirstRowAuth = () => (
    <div className="navigation__first-row">
        <AuthUserContext.Consumer>
            {authUser => (
                <span className="navigation__greeting">Cześć: {authUser.email}</span>
            )}
        </AuthUserContext.Consumer>
        <Link
            to='/oddaj-rzeczy'
            className="navigation__router-link nav-link"
            >Oddaj rzeczy    
        </Link>
        <LogoutBtn/> 
    </div>
)


export default FirstRowAuth;