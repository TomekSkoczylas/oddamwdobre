import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


const HomeHeader = () => {
    return (
        <div className="HomeHeader" id="Header">
            <Navigation/>
            <HeaderMain/>
        </div>
    )
}


const Navigation = () => {
    return (
        <div className="navigation-section">
            <div className="navigation__first-row">
                <RouterLink 
                    to="./login" 
                    className="navigation__router-link"
                    >Zaloguj
                </RouterLink>
                <RouterLink 
                    to="./register" 
                    className="navigation__router-link"
                    >Załuż konto
                </RouterLink>
            </div>
            <div className="navigation__second-row">
                <ScrollLink 
                    to="Header" 
                    smooth={true} 
                    duration={500} 
                    className="navigation__scroll-link"
                    >Start
                </ScrollLink>
                <ScrollLink 
                    to="Main"   
                    smooth={true} 
                    duration={500} 
                    className="navigation__scroll-link"
                    >O co chodzi?
                </ScrollLink>
                <ScrollLink 
                    to="About" 
                    smooth={true} 
                    duration={500} 
                    className="navigation__scroll-link"
                    >O nas
                </ScrollLink>
                <ScrollLink 
                    to="WhoHelp" 
                    smooth={true} 
                    duration={500}  
                    className="navigation__scroll-link"
                    >Fundacje i organizacje
                </ScrollLink>
                <ScrollLink 
                    to="Contact" 
                    smooth={true} 
                    duration={500} 
                    className="navigation__scroll-link"
                    >Kontakt
                </ScrollLink>
            </div>
        </div>
    )
}

const HeaderMain = () => {
    return (
        <div className="HeaderMain">
            <div className="header-main__btns">
                <RouterLink 
                    to="./login" 
                    className="header-main__btn"
                    >Oddaj rzeczy
                </RouterLink>
                <RouterLink  
                    to="./login" 
                    className="header-main__btn"
                    >Zorganizuj zbiórkę 
                </RouterLink>
            </div>
        </div>
    )
}


export default HomeHeader;

export { Navigation, HeaderMain }