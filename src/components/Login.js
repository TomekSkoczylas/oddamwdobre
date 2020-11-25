import React, {useState} from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "./functions";


const INIT_FEEDBACK = {
    mailok: true,
    passwordok: true,
}

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(''); 
    const [feedback, setFeedback] = useState({...INIT_FEEDBACK});

    const {
        mailok,
        passwordok,
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
        } else {
            console.log("zalogowałaś się!");
        }    

    }

    return (
        <div className="Login">
            <div className="login">
                <span className="login__title">Zaloguj się</span>
                <div className="decoration"/>
                <div className="login__form">
                    <form onSubmit={onSubmit}>
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
                                type="text"
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
                    <button 
                        type="submit"
                        className="login__btn smal-btn"
                        >Zaloguj się
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;