import React, { useState } from "react";
import { Fund, Ngo, Local } from "./HomeWhoHelpPanel";


const HomeWhoHelp = () => {
    const [podmiot, setPodmiot] = useState("fund");

    const renderHelp = () => {
        if (podmiot === "fund") {
            return <Fund/>
        } else if (podmiot === "ngo") {
            return <Ngo/>
        } else {
            return <Local/>
        }
    }


    return (
        <div className="HomeWhoHelp" id="WhoHelp">
            <div className="help">
                <span className="help__title">Komu pomagamy?</span>
                <div className="help__decoration decoration"></div>
                <div className="help__btns">
                    <div 
                        className={`med-btn ${(podmiot==="fund") ? "btn--active" : ""}`}
                        onClick={() => setPodmiot("fund")}
                    >Fundacjom
                    </div>
                    <div 
                        className={`med-btn ${(podmiot==="ngo") ? "btn--active" : ""}`}
                        onClick={() => setPodmiot("ngo")}
                        >Organizacją <br/> pozarządowym
                    </div>
                    <div 
                        className={`med-btn ${(podmiot==="local") ? "btn--active" : ""}`}
                        onClick={() => setPodmiot("local")}
                        >Lokalnym <br/> zbiórką
                    </div>                    
                </div>
                <div>
                    {renderHelp()}
                </div>
            </div>
        </div>
    )
}

export default HomeWhoHelp;