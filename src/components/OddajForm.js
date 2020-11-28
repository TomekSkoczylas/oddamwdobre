import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const OddajForm = () => {
    const [page, setPage] = useState(3);
    const [visibility, setVisibility] = useState(false);
    const [bags, setBags] = useState(null);
    const [area, setArea] = useState('');
    
    const onChange = event => {
        console.log(event.target.value)
    }

    const onClickBags = n => {
        setBags(n);
        setVisibility(false);
    }

    const onClickArea = a => {
        setArea(a);
        setVisibility(false);
    }

    const pageAdd = () => {
        setVisibility(false);
        if (page < 6) {
            setPage(prevState => prevState + 1)
            
        }
    }

    const pageSubtract = () => {
        setVisibility(false);
        if (page > 1 ) {
            setPage(prevState => prevState -1)
        }
    }

    const oddajFormRender = () => {
        if (page === 1) {
            return (
                <div className="oddajForm">
                    <div className="yellow-band">
                        <h3 className="yellow-band__exclamation">Ważne!</h3> 
                        <div className="yellow-band__message">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć, komu najlepiej je przekazać.</div>
                    </div>
                    <div className="grey-panel">
                    <div className="first-panel">
                        <div className="first-panel__counter">Krok 1/4</div>
                        <div className="first-panel__radio-group" onChange={onChange}>
                        <span className="first-panel__title">Zaznacz co chcesz oodać</span>
                            <label className="first-panel__radio-label">
                            <input
                                type="radio"
                                name="what"
                                value="ubrania, które nadają się do noszenia"
                            />
                            <span></span>
                            ubrania, które nadają się do noszenia
                            </label>
                            <label className="first-panel__radio-label">
                            <input
                                type="radio"
                                name="what"
                                value="ubrania, do wyrzucenia"
                            />
                            <span></span>
                            ubrania, do wyrzucenia
                            </label>
                            <label className="first-panel__radio-label">
                            <input
                                type="radio"
                                name="what"
                                value="zabawki"
                            />
                            <span></span>
                            zabawki
                            </label>
                            <label className="first-panel__radio-label">
                            <input
                                type="radio"
                                name="what"
                                value="książki"
                            />
                            <span></span>
                            książki
                            </label>
                            <label className="first-panel__radio-label">
                            <input
                                type="radio"
                                name="what"
                                value="inne"
                            />
                            <span></span>
                            inne
                            </label>
                    </div>
                    </div>
                        <div onClick={pageAdd} className="oddajForm__btn">Dalej</div>
                    </div>
                </div>
            )
        }
    
        if (page === 2) {
            return (
                <div className="oddajForm">
                    <div className="yellow-band">
                        <h3 className="yellow-band__exclamation">Ważne!</h3>
                        <div className="yellow-band__message">Wszystkie rzeczy do oddania zapakuj w 60l worki. 
                        Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <a href="https://youtu.be/v0_Y5H_6qd4">TUTAJ</a></div>
                    </div>
                    <div className="grey-panel">
                        <div className="second-panel">
                            <div className="second-panel__counter">Krok 2/4</div>
                            <div className="second-panel__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</div>
                            <span className="second-panel__label">Liczba 60l worków:</span>
                            <span className="second-panel__select" 
                                onClick={()=> setVisibility(true)}
                                >{bags ? bags : "- wybierz -"} 
                                {visibility ? <FiChevronUp className="chevron"/> : <FiChevronDown className="chevron"/>}</span>
                            <div className={`second-panel__options ${!visibility && "invisible"}`}>
                                <div className="second-panel__option" onClick={()=>onClickBags(1)}>1</div>
                                <div className="second-panel__option" onClick={()=>onClickBags(2)}>2</div>
                                <div className="second-panel__option" onClick={()=>onClickBags(3)}>3</div>
                                <div className="second-panel__option" onClick={()=>onClickBags(4)}>4</div>
                                <div className="second-panel__option" onClick={()=>onClickBags(5)}>5</div>
                            </div>
                            <div className="second-panel__btns">
                                <div onClick={pageSubtract} className="second-panel__btn wstecz">Wstecz</div>
                                <div onClick={pageAdd} className="second-panel__btn dalej">Dalej</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        
        if (page === 3) {
            return (
                <div className="oddajForm">
                    <div className="yellow-band">
                        <h3 className="yellow-band__exclamation">Ważne!</h3> 
                        <div className="yellow-band__message">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji 
                        w wyszukiwarce. Możesz też filtorować organizacje <br/> 
                        po ich lokalizacjach bądź celu ich pomocy.</div>
                    </div>
                    <div className="grey-panel">
                        <div className="third-panel">
                            <div className="third-panel__counter">Krok 3/4</div>
                            <div className="third-panel__forms">
                                <div className="third-panel__area">
                                    <span className="third-panel__area-label">Lokalizacja:</span><br/>
                                    <span className="third-panel__area-select" onClick={()=>setVisibility(true)}>
                                        {area ? area : "-wybierz-"}
                                        {visibility ? <FiChevronUp className="chevron"/> : <FiChevronDown className="chevron"/>}
                                    </span>
                                        <div className={`third-panel__area-options ${!visibility && "invisible"}`}>
                                            <div className="third-panel__area-option" onClick={()=>onClickArea("Poznań")}>Poznań</div>
                                            <div className="third-panel__area-option" onClick={()=>onClickArea("Warszawa")}>Warszawa</div>
                                            <div className="third-panel__area-option" onClick={()=>onClickArea("Kraków")}>Karków</div>
                                            <div className="third-panel__area-option" onClick={()=>onClickArea("Wrocław")}>Wrocław</div>
                                            <div className="third-panel__area-option" onClick={()=>onClickArea("Katowice")}>Katowice</div>
                                        </div> 
                                </div>
                                <div className="third-panel__who">
                                    <span className="third-panel__who-title">Komu chcesz pomóc?</span>
                                    <div className="third-panel__who-radios" onChange={onChange}>
                                        <label className="third-panel__who-label">
                                            <input
                                                type="radio"
                                                name="who"
                                                value="dzieciom"
                                            />
                                            <span>dzieciom</span>
                                        </label>
                                        <label className="third-panel__who-label">
                                            <input
                                                type="radio"
                                                name="who"
                                                value="samotnym matkom"
                                            />
                                            <span>samotnym matkom</span>
                                        </label>
                                        <label className="third-panel__who-label">
                                            <input
                                                type="radio"
                                                name="who"
                                                value="bezdomnym"
                                            />
                                            <span>bezdomnym</span>                                        
                                        </label>
                                        <label className="third-panel__who-label">
                                            <input
                                                type="radio"
                                                name="who"
                                                value="niepełnosprawnym"
                                            />
                                            <span>niepełnosprawnym</span>
                                        </label>
                                        <label className="third-panel__who-label">
                                            <input
                                                type="radio"
                                                name="who"
                                                value="osobom starszym"
                                            />
                                            <span>osobom starszym</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="third-panel__org">
                                    <span className="third-panel__org-title">Wpisz nazwę konkrentej organizacji (opcjonalne)</span><br/>
                                    <input 
                                        className="third-panel__org-input"
                                        type='text'
                                        name="organization"
                                    />
                                </div>
                            </div>
                            <div className="third-panel__btns">
                                <div onClick={pageSubtract} className="third-panel__btn wstecz">Wstecz</div>
                                <div onClick={pageAdd} className="third-panel__btn dalej">Dalej</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    
        if (page === 4) {
            return (
                <div className="oddajForm">
                    <div className="oddajForm__yellow-band"></div>
                    <div className="oddajForm__grey-panel">
                        <div className="form-panel"></div>
                        <div className="oddajForm__img"></div>
                    </div>
                </div>
            )
        }
    
        if (page === 5) {
            return (
                <div className="oddajForm">
                    <div className="oddajForm__grey-panel">
                        <div className="form-panel"></div>
                        <div className="oddajForm__img"></div>
                    </div>
                </div>
            )
        }
    
        if (page === 6) {
            return (
                <div className="oddajForm">
                    <div className="oddajForm__grey-panel">
                        <div className="form-panel"></div>
                        <div className="oddajForm__img"></div>
                    </div>
                </div>
            )
        }
    
    }


    return (
        <div className="OddajForm">
            {oddajFormRender()}
        </div>
    )
    
}

export default OddajForm;