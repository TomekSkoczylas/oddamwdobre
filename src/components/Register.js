import React, {useState} from "react";

import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "./Firebase";
import { validateEmail } from "./functions";

const INIT_FEEDBACK = {
    mailok: true,
    passwordok: true,
    secndpassok: true,
}

const INIT_USERDATA = {
    email: '',
    password: '',
    secndPass: '',
}

const RegisterBase = (props) => {
    const [userData, setUserData] = useState({...INIT_USERDATA}); 
    const [feedback, setFeedback] = useState({...INIT_FEEDBACK});

    const {
        mailok,
        passwordok,
        secndpassok,
    } = feedback;

    const {
        email,
        password,
        secndPass,
    } = userData;

    const onChange = event => {
        setUserData(prevState => (
            {
                ...prevState,
                [event.target.name]: event.target.value
            }
        ))
    }

    const onSubmit = event => {
        event.preventDefault();
        setFeedback({...INIT_FEEDBACK})
        if (!validateEmail(email)) {
            setFeedback(prevState => ({
                ...prevState,
                mailok: false,
            }))
        } else if (password.length < 6) {
            console.log(password.length);
            setFeedback(prevState => ({
                ...prevState,
                passwordok: false,
            }))
        } else if (secndPass !== password) {
            setFeedback(prevState => ({
                ...prevState,
                secndpassok: false,
            }))
        } else {
            props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                setUserData({...INIT_USERDATA});
                props.history.push('/oddaj-rzeczy');
            })
            .catch(error => {
                console.log(error.message)  
            });
        }
    }

    return (
        <div className="Register">
            <div className="register">
                <span className="register__title">Załóż konto</span>
                <div className="decoration"/>
                <div className="register__form">
                    <form>
                        <div className="register__input-wraper">
                            <label htmlFor="email" className="register__label">Email</label>
                            <input
                                className="input register-input"
                                name="email"
                                type="text"
                                value={email}
                                onChange={onChange}
                            />
                             <div className={`form__valmess ${!!mailok && "invisble"}`} >Podany email jest nieprawidłowy!</div>
                        </div>
                        <div className="register__input-wraper">
                            <label htmlFor="password" className="register__label">Hasło</label>
                            <input
                                className="input register-input"
                                name="password"
                                type="password"
                                value={password}
                                onChange={onChange}
                            />
                            <div className={`form__valmess ${!!passwordok && "invisble"}`} >Podane hasło jest za krótkie!</div>
                        </div>
                        <div className="register__input-wraper">
                            <label htmlFor="secndpass" className="register__label">Hasło</label>
                            <input
                                className="input register-input"
                                name="secndPass"
                                type="password"
                                value={secndPass}
                                onChange={onChange}
                            />
                            <div className={`form__valmess ${!!secndpassok && "invisble"}`} >Hasła nie są takie same!</div>
                        </div>
                    </form>
                </div>
                <div className="register__btns">
                    <Link
                        to="/login"
                        className="register__btn smal-btn"
                        >Zaloguj się
                    </Link>
                    <div 
                        onClick={onSubmit}
                        className="register__btn smal-btn"
                        >Złóż konto
                    </div>
                </div>
            </div>
        </div>
    )
}

const Register = compose(
        withRouter,
        withFirebase,
        )(RegisterBase);

export default Register;