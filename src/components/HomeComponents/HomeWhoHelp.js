import React, { useState } from "react";

const HomeWhoHelp = () => {
    const [podmiot, setPodmiot] = useState("fund");

    const renderHelp = () => {
        if (podmiot === "fund") {
            return (
                <div className="fund">
                    <p className="fund__descr"></p>
                    <div className="fund__table">

                    </div>

                </div>
            )
        }
    }


    return (
        <div className="HomeWhoHelp" id="WhoHelp">
            <div className="help">
                <h1 className="help__title">Komu pomagamy?</h1>
                <div className="help__decoration decoration"></div>
                <div className="help__btns">
                    <div 
                        className="help__fund_btn smol_btn"
                        onClick={() => setPodmiot("fund")}
                    >Fundacjom
                    </div>
                    <div 
                        className="help__ngo_btn smol_btn"
                        onClick={() => setPodmiot("ngo")}
                        >Organizacją pozarządowym
                    </div>
                    <div 
                        className="help__local_btn smol_btn"
                        onClick={() => setPodmiot("local")}
                        >Lokalnym zbiórką
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default HomeWhoHelp;