import React from "react";

import HomeContact from "./HomeComponents/HomeContact";
import OddajForm from './OddajForm';

const OddajRzeczy = () => {
    return (
        <div className="OddajRzeczy">
            <div className="oddaj-header">
                <div className="oddaj-header__img"></div>
                <div className="oddaj-header__content">
                    <span className="oddaj-header__title">Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</span>
                    <div className="decoration"></div>
                    <span className="oddaj-header__low-title">Wystarczą 4 proste kroki</span>
                    <div className="oddaj-header__steps">

                        <div className="oddaj-header__step-border">
                            <div className="oddaj-header__step step-1">
                                <div className="oddaj-header__step-number">1</div>Wybierz <br/> rzeczy
                            </div>
                        </div>
                        <div className="oddaj-header__step-border">
                            <div className="oddaj-header__step step-2">
                                <div className="oddaj-header__step-number">2</div>Spakuj je <br/> w worki
                            </div>
                        </div>
                        <div className="oddaj-header__step-border">
                            <div className="oddaj-header__step step-3">
                                <div className="oddaj-header__step-number">3</div>Wybierz <br/> fundacje
                            </div>
                        </div>
                        <div className="oddaj-header__step-border">
                            <div className="oddaj-header__step step-4">
                                <div className="oddaj-header__step-number">4</div>Zamów <br/> kuriera
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OddajForm/>    
            <HomeContact/>
        </div>
    )
}

export default OddajRzeczy;