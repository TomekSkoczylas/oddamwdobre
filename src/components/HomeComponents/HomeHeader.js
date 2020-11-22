import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


const HomeHeader = () => {
    return (
        <div className="HomeHeader" id="Header">
            <div className="header__img"/>
            <div className="header__right-side">
                <Navigation/>
                <HeaderMain/>
            </div>
        </div>
    )
}


const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation__first-row">
                <RouterLink 
                    to="./login" 
                    className="navigation__router-link nav-link"
                    >Zaloguj
                </RouterLink>
                <RouterLink 
                    to="./register" 
                    className="navigation__router-link nav-link"
                    >Załuż konto
                </RouterLink>
            </div>
            <div className="navigation__second-row">
                <ScrollLink 
                    to="Header" 
                    smooth={true} 
                    duration={500} 
                    className="navigation__scroll-link smal-btn"
                    >Start
                </ScrollLink>
                <ScrollLink 
                    to="Main"   
                    smooth={true} 
                    duration={500} 
                    className="navigation__scroll-link smal-btn"
                    >O co chodzi?
                </ScrollLink>
                <ScrollLink 
                    to="About" 
                    smooth={true} 
                    duration={500} 
                    className="navigation__scroll-link smal-btn"
                    >O nas
                </ScrollLink>
                <ScrollLink 
                    to="WhoHelp" 
                    smooth={true} 
                    duration={500}  
                    className="navigation__scroll-link smal-btn"
                    >Fundacje i organizacje
                </ScrollLink>
                <ScrollLink 
                    to="Contact" 
                    smooth={true} 
                    duration={500} 
                    className="navigation__scroll-link smal-btn"
                    >Kontakt
                </ScrollLink>
            </div>
        </div>
    )
}

const HeaderMain = () => {
    return (
        <div className="HeaderMain">
            <div className="header-main">
                <span className="header-main__text">Zacznij pomagać! <br/> 
                        Oddaj niechciane rzeczy w zaufane ręce</span>
                <div className="decoration"></div>
                <div className="header-main__btns">
                    <RouterLink 
                        to="./login" 
                        className="header-main__btn big-btn"
                        >Oddaj rzeczy
                    </RouterLink>
                    <RouterLink  
                        to="./login" 
                        className="header-main__btn big-btn"
                        >Zorganizuj zbiórkę 
                    </RouterLink>
                </div>
            </div>
        </div>
    )
}


export default HomeHeader;

export { Navigation, HeaderMain }