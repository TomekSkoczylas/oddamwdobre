import React from "react";

import { Link as RouterLink } from "react-router-dom";

import { AuthUserContext } from "../Session";

const HomeHeader = () => {
    return (
        <div className="clearfix">
        <div className="header__img"/>
        <div className="HomeHeader" id="Header">
            <div className="header__right-side">
                <HeaderMain/>
            </div>
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
                    <AuthUserContext.Consumer>
                        {authUser => (
                            <RouterLink 
                                to={ authUser ? "./oddaj-rzeczy" : "./login"} 
                                className="header-main__btn big-btn"
                                >Oddaj rzeczy
                            </RouterLink>
                        )}
                    </AuthUserContext.Consumer>
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

export { HeaderMain }