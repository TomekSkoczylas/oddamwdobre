import React from "react";

const HomeContact = () => {
    return (
        <div className="HomeContact" id="Contact">
            <div className="overlay">
                <div className="contact">
                    <div className="contact-form">
                        <span className="contact-form__title">Skontaktuj się z nami</span>
                        <div className="decoration"></div>
                        <form className="contact-form__form" onSubmit={null}>
                        <div className="contact-form__data-inputs">
                            <div className="contact-form__data-wrap">
                            <label htmlFor="name" className="contact-form__label">Wpisz swoje imię</label>
                            <input
                                className="input home-input"
                                name="name"
                                type="text"
                                placeholder="Krzysztof"
                            />
                            </div>
                            <div>
                            <label htmlFor="email" className="contact-form__label">Wpisz swój email</label>
                             <input
                                className="input home-input"
                                name="email"
                                type="email"
                                placeholder="abc@xyz.pl"
                            />
                            </div>
                        </div>
                        <div className="contact-form__message-wrap">
                        <label htmlFor="message" className="contact-form__label">Wpisz swoją wiadomość</label>
                        <textarea
                            className="input message-input"
                            name="message"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat."
                        />
                        </div>
                        <button type="submit" className="contact-form__submit-btn">Wyślij!</button>
                    </form>
                    </div>
                </div>
                <div className="footer">
                    <div/>
                    <div className="footer__CL-logo">Copyright by Coders Lab</div>
                    <div className="footer__icons">
                        <div className="footer__fb"/>
                        <div className="footer__insta"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContact;