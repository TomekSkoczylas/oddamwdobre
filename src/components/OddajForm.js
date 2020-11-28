import React, { useState } from "react";

const OddajForm = () => {
    const [page, setPage] = useState(2);

    
    const onChange = event => {
        console.log(event.target.value)
    }

    const pageAdd = () => {
        if (page < 6) {
            setPage(prevState => prevState + 1)
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
                        Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <a href="">TUTAJ</a></div>
                    </div>
                    <div className="grey-panel">
                        <div className="second-panel">
                            <div className="second-panel__counter">Krok 2/4</div>
                            <span className="second-panel__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy</span>
                            <label className="second-panel__label">Liczba 60l worków
                                <select value={"-wybierz-"}>
                                    <option value={"1"}>1</option>
                                    <option value={"2"}>2</option>
                                    <option value={"3"}>3</option>
                                    <option value={"4"}>4</option>
                                    <option value={"5"}>5</option>    
                                </select>
                            </label>
                            <div className="oddajForm__img"></div>
                        </div>
                    </div>
                </div>
            )
        }
        
        if (page === 3) {
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