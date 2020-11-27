import React, {useState} from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "./functions";

const INIT_FEEDBACK = {
    mailok: true,
    passwordok: true,
    secndpassok: true,
}

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secndPass, setSecndPass] = useState('');
    const [feedback, setFeedback] = useState({...INIT_FEEDBACK})

    const {
        mailok,
        passwordok,
        secndpassok,
    } = feedback;


    const onSubmit = event => {
        event.preventDefault();
        setFeedback({...INIT_FEEDBACK})
        if (!validateEmail(email)) {
            setFeedback(prevState => ({
                ...prevState,
                mailok: false,
            }))
        } else if (password.length < 6) {
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
            console.log("zarejestorwałeś się")
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
                                onChange={event => setEmail(event.target.value)}
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
                                onChange={event => setPassword(event.target.value)}
                            />
                            <div className={`form__valmess ${!!passwordok && "invisble"}`} >Podane hasło jest za krótkie!</div>
                        </div>
                        <div className="register__input-wraper">
                            <label htmlFor="secndpass" className="register__label">Hasło</label>
                            <input
                                className="input register-input"
                                name="secndpass"
                                type="password"
                                value={secndPass}
                                onChange={event => setSecndPass(event.target.value)}
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

export default Register;