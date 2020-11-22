import React, { useState } from "react";


//The thing that should not be

const Fund = () => {
    const [page, setPage] = useState(1);

    const fundName = () => {
        if (page===1) {
            return ["Dbam o Zdrowie", "Dla dzieci", "Bez domu"]   
        } else if (page===2) {
            return ["Jak Malowana", "Laboria", "GreenLab"]
        } else {
            return ["Wrocławskie Hospicjum", "Na ratunek", "Potrafię pomóc"]
        }
    }
    
    const fundDscr = () => {
        if (page===1) {
            return ["Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", "Pomoc dzieciom z ubogich rodzin.", "Pomoc dla osób nie posiadających miejsca zamieszkania." ]   
        } else if (page===2) {
            return ["Prowadzenie Komitywy, żeby inni mieli się gdzie spotykać", "Pomoc socjalna dla ubogich doktorantów socjologii", "Ssanie jaknajwiększej kasy z grantów"]
        } else {
            return ["Had! Ujawnieniu Nuit.", "Każda liczba jest nieskończoną; nie ma różnicy.", "Khabs jest w Khu, nie Khu w Khabs"]
        }
    }

    const fundThings = () => {
        if (page===1) {
            return ["ubrania, jedzenie, sprzęt AGD, meble, zabawki", "ubrania, meble, zabawki", "ubrania, jedzenie, ciepłe koce"]   
        } else if (page===2) {
            return ["ubrania, jedzenie, ciepłe koce", "ubrania, jedzenie, sprzęt AGD, meble, zabawki", "ubrania, meble, zabawki"]
        } else {
            return ["ubrania, meble, zabawki", "ubrania, jedzenie, ciepłe koce", "ubrania, jedzenie, sprzęt AGD, meble, zabawki"]
        }
    }

    return (
        <div className="help-panel">
            <p className="help-panel__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br/>
                którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br/>
                komu pomagają i czego potrzebują.</p>
            <div className="help-panel__table">
                <div className="help-panel__row">
                    <div className="help-panel__client">
                    <span className="help-panel__client-name">Fundacja "{fundName()[0]}"</span>
                        <span className="help-panel__client-dscrp">Cel i mijsa: {fundDscr()[0]}</span>
                    </div>
                    <span className="help-panel__things">{fundThings()[0]}</span> 
                </div>
                <div className="help-panel__row">
                    <div className="help-panel__client">
                        <span className="help-panel__client-name">Fundacja "{fundName()[1]}"</span>
                        <span className="help-panel__client-dscrp">Cel i mijsa: {fundDscr()[1]}</span>
                    </div>
                    <span className="help-panel__things">{fundThings()[1]}</span> 
                </div>
                <div className="help-panel__row">
                    <div className="help-panel__client">
                        <span className="help-panel__client-name">Fundacja "{fundName()[2]}"</span>
                        <span className="help-panel__client-dscrp">Cel i mijsa: {fundDscr()[2]}</span>
                    </div>
                    <span className="help-panel__things">{fundThings()[2]}</span> 
                </div>
            </div>
            <div className="help-panel__btns">
                <div 
                    className={`help-panel__btn ${(page===1) ? "btn--active" : ""}`}
                    onClick={()=> setPage(1)}
                    >1
                </div>
                <div 
                    className={`help-panel__btn ${(page===2) ? "btn--active" : ""}`}
                    onClick={()=> setPage(2)}
                    >2
                </div>
                <div 
                    className={`help-panel__btn ${(page===3) ? "btn--active" : ""}`}
                    onClick={()=> setPage(3)}
                    >3
                </div>
            </div>    
        </div>
    )
}

const Ngo = () => {
    const [page, setPage] = useState(1);

    const ngoName = () => {
        if (page===1) {
            return ["Ankh-af-na-Khonsu", "Ra-Hoor-Khu-ita", "Thelema"]   
        } else if (page===2) {
            return ["Hadit", "Aiwassa", "Hoor-paar-kraata"]
        } 
    }

    const ngoDscr = () => {
        if (page===1) {
            return ["Wtedy radości mej miłości wyzwolą was od wszelkiego bólu.", "Więc teraz, wam jestem znana pod imieniem Nuit, lecz jemu pod imieniem tajemnym.", "Jestem nad wami i w was. Moja ekstaza jest w waszej." ]   
        } else if (page===2) {
            return ["Wtedy kapłan wpadł w głęboki trans lub omdlenie, i rzekł do Królowej Nieba.", "Wpisz w nas próby; wpisz w nas rytuały; wpisz w nas prawo!", "Czcij więc Khabs, i ujrzyj me światło rozlane nad wami!"]
        } 
    }

    const ngoThings = () => {
        if (page===1) {
            return ["ubrania, jedzenie, sprzęt AGD, meble, zabawki", "ubrania, meble, zabawki", "ubrania, jedzenie, ciepłe koce"]   
        } else if (page===2) {
            return ["ubrania, jedzenie, ciepłe koce", "ubrania, jedzenie, sprzęt AGD, meble, zabawki", "ubrania, meble, zabawki"]
        } 
    }


    return (
        <div className="help-panel">
            <p className="help-panel__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/> 
            do eiusmod tempor incididunt ut labore et dolore magna<br/>
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div className="help-panel__table">
                <div className="help-panel__row">
                    <div className="help-panel__client">
                    <span className="help-panel__client-name">Organizacja "{ngoName()[0]}"</span>
                        <span className="help-panel__client-dscrp">Cel i mijsa: {ngoDscr()[0]}</span>
                    </div>
                    <span className="help-panel__things">{ngoThings()[0]}</span> 
                </div>
                <div className="help-panel__row">
                    <div className="help-panel__client">
                        <span className="help-panel__client-name">Organizacja "{ngoName()[1]}"</span>
                        <span className="help-panel__client-dscrp">Cel i mijsa: {ngoDscr()[1]}</span>
                    </div>
                    <span className="help-panel__things">{ngoThings()[1]}</span> 
                </div>
                <div className="help-panel__row">
                    <div className="help-panel__client">
                        <span className="help-panel__client-name">Organizacja "{ngoName()[2]}"</span>
                        <span className="help-panel__client-dscrp">Cel i mijsa: {ngoDscr()[2]}</span>
                    </div>
                    <span className="help-panel__things">{ngoThings()[2]}</span> 
                </div>
            </div>
            <div className="help-panel__btns">
                <div 
                    className={`help-panel__btn ${(page===1) ? "btn--active" : ""}`}
                    onClick={()=> setPage(1)}
                    >1
                </div>
                <div 
                    className={`help-panel__btn ${(page===2) ? "btn--active" : ""}`}
                    onClick={()=> setPage(2)}
                    >2
                </div>
            </div>    
        </div>
    )
}


const Local = () => {
    return (
        <div className="help-panel">
            <p className="help-panel__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/> 
            do eiusmod tempor incididunt ut labore et dolore magna<br/>
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div className="help-panel__table">
                <div className="help-panel__row">
                    <div className="help-panel__client">
                    <span className="help-panel__client-name">Osiedle: Nadodrze</span>
                        <span className="help-panel__client-dscrp">Opis: patologia przekształcona w atrakcję turystyczną</span>
                    </div>
                    <span className="help-panel__things">pizze krafotwe, butelki po wódce</span> 
                </div>
                <div className="help-panel__row">
                    <div className="help-panel__client">
                        <span className="help-panel__client-name">Osiedle: Psie Pole</span>
                        <span className="help-panel__client-dscrp">Opis: niczym nie dojedziesz</span>
                    </div>
                    <span className="help-panel__things">psy i pola</span> 
                </div>
                <div className="help-panel__row">
                    <div className="help-panel__client">
                        <span className="help-panel__client-name">Osiedle: Kozanów</span>
                        <span className="help-panel__client-dscrp">Opis: jak się wam powodzi? U nas się nie przelewa.</span>
                    </div>
                    <span className="help-panel__things">tratwy, pontony, kapoki, szalupy</span> 
                </div>
            </div>   
        </div>
    )
}

export { Fund, Ngo, Local }; 