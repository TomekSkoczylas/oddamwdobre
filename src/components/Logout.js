import React from "react";
import { Link } from "react-router-dom";


const Logout = () => {
    return (
        <div className="Logout">
            <div className="logout">
                <span className="logout__title">Wylogowanie nastąpiło <br/> pomyślnie!</span>
                <div className="decoration"/>
                <div className="logout__btns">
                    <Link
                        to="/"
                        className="logout__btn smal-btn"
                        >Strona główna
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Logout;