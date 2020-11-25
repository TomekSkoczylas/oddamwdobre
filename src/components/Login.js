import React, {useState} from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(''); 


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