import React from "react";
import { Link } from "react-router-dom";

const HomeMain = () => {
    return (
        <div className="HomeMain" id="Main">
            <div className="main-title">
                <div className="main-title__text">Wystarczą 4 proste kroki
                    <div className="main-title__decoration decoration"></div>
                </div>
            </div>
            <div className="main-steps">
                <div className="main-steps__step-1 step">
                    <div className="step__img"></div>
                    <span className="step__title">Wybierz rzeczy</span>
                    <p className="step__text">ubrania, zabawki, <br/> sprzęt i inne</p>
                </div>
                <div className="main-steps__step-2 step">
                    <div className="step__img"></div>
                    <span className="step__title">Spakuj je</span>
                    <p className="step__text">skorzystaj z <br/> worków na śmieci</p>
                </div>
                <div className="main-steps__step-3 step">
                    <div className="step__img"></div>
                    <span className="step__title">Zdecyduj komu <br/> chcesz pomóc</span>
                    <p className="step__text">wybierz zaufane <br/> miejsce</p>
                </div>
                <div className="main-steps__step-4 step">
                    <div className="step__img"></div>
                    <span className="step__title">Zamów kuriera</span>
                    <p className="step__text">kurier przyjedzie <br/> w dogodnym terminie</p>
                </div>
            </div>
            <Link 
                to="./login"  
                className="main-button big-btn"
            >ODDAJ RZECZY</Link>
        </div>
    )
}

export default HomeMain;