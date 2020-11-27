import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


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
                {/* <ScrollLink 
                    to="About" 
                    smooth={true} 
                    duration={500} 
                    className="navigation__scroll-link smal-btn"
                    >O nas
                </ScrollLink> */}
                <a href="/#About" className="smal-btn">O nas</a>
                {/* <ScrollLink 
                    to="WhoHelp" 
                    smooth={true} 
                    duration={500}  
                    className="navigation__scroll-link smal-btn"
                    >Fundacje i organizacje
                </ScrollLink> */}
                <a 
                    href='/'
                    onClick={e=> {
                        let help = document.getElementById("WhoHelp");
                        e.preventDefault();
                        help && help.scrollIntoView();
                    }}
                    className="smal-btn"
                    >Fundacje i organizacje 
                </a>        
                <ScrollLink 
                    to="Contact" 
                    smooth={true} 
                    duration={200} 
                    className="navigation__scroll-link smal-btn"
                    >Kontakt
                </ScrollLink>
            </div>
        </div>
    )
}

export default Navigation;