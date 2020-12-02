import React, {useState} from "react";

import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

import { validateEmail } from "./functions";

import { withFirebase } from './Firebase';

const INIT_FEEDBACK = {
    mailok: true,
    passwordok: true,
}

const LoginBase = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(''); 
    const [feedback, setFeedback] = useState({...INIT_FEEDBACK});

    const {
        mailok,
        passwordok,
    } = feedback;
   

    const onSubmit = event => {
        event.preventDefault();
        setFeedback({...INIT_FEEDBACK});
        console.log("submit");
        if (!validateEmail(email)) {
            console.log(email);
            setFeedback(prevState => ({
                ...prevState,
                mailok: false,
            }))
        } else if (password.length < 6) {
            setFeedback(prevState => ({
                ...prevState,
                passwordok: false,
            }))
        } else {
           props.firebase
           .doSignInWithEmailAndPassword(email, password)
           .then(()=> {
               setEmail('');
               setPassword('');
           }) 
           .catch(error => {console.log(error)});
        }    
    }

    return (
        <div className="Login">
            <div className="login">
                <span className="login__title">Zaloguj się</span>
                <div className="decoration"/>
                <div className="login__form">
                    <form>
                        <div className="login__input-wraper">
                            <label htmlFor="email" className="login__label">Email</label>
                            <input
                                className="input login-input"
                                name="email"
                                type="text"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                             <div className={`form__valmess ${!!mailok && "invisble"}`} >Podany email jest nieprawidłowy!</div>
                        </div>
                        <div className="login__input-wraper">
                            <label htmlFor="password" className="login__label">Hasło</label>
                            <input
                                className="input login-input"
                                name="password"
                                type="password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                            <div className={`form__valmess ${!!passwordok && "invisble"}`} >Podane hasło jest za krótkie!</div>
                        </div>
                    </form>
                </div>
                <div className="login__btns">
                    <Link
                        to="/register"
                        className="login__btn smal-btn"
                        >Załuż konto
                    </Link>
                    <div
                        onClick={onSubmit}
                        className="login__btn smal-btn"
                        >Zaloguj się
                    </div>
                </div>
            </div>
        </div>
    )
}

const Login = compose(
    withRouter,
    withFirebase,
    )(LoginBase);

export default Login;