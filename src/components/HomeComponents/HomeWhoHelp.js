import React, { useState } from "react";

const HomeWhoHelp = () => {
    const [ help, setHelp ] = useState("fund");

    // const renderHelp = () => {
    //     if (help === "fund") {
    //         return (
    //             <div className="fund">
    //                 <p className="fund__descr"></p>

    //             </div>
    //         )
    //     }
    // }


    return (
        <div className="HomeWhoHelp" id="WhoHelp">
            <div className="help">
                <h1 className="help__title">Komu pomagamy?</h1>
                <div className="help__decoration decoration"></div>
                <div className="help__btns">
                    <div 
                        className="help__fund_btn smol_btn"
                        onClick={setHelp("fund")}
                    >Fundacjom
                    </div>
                    <div 
                        className="help__ngo_btn smol_btn"
                        onClick={setHelp("ngo")}
                        >Organizacją pozarządowym
                    </div>
                    <div 
                        className="help__local_btn smol_btn"
                        onClick={setHelp("local")}
                        >Lokalnym zbiórką
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default HomeWhoHelp;