import React from "react";

const HomeThreeColumn = () => {
    return (
        <div className="HomeThreeColumn">
            <div className="first-column column">
                <h1 className="colunm__number">10</h1>
                <span className="column__title">ODDANYCH WORKÓW</span>
                <p className="colunm__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a 
                elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="second-column column">
                <h1 className="colunm__number">5</h1>
                <span className="column__title">WSPARTYCH ORGANIZACJI</span>
                <p className="colunm__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a 
                elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="third-column column">
                <h1 className="colunm__number">7</h1>
                <span className="column__title">ZORGANIZOWANYCH ZBIÓREK</span>
                <p className="colunm__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a 
                elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </div>
    )
}

export default HomeThreeColumn;