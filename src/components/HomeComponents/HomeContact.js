import React, { useState } from "react";
import  { validateEmail } from '../functions'; 
    

const INITIAL_MESSAGE = {
    name: '',
    email: '',
    message: '',
}

const INIT_FEEDBACK = {
    nameok: true,
    mailok: true,
    messageok: true,
    responseok: false,

}

const HomeContact = () => {
    const [conact, setContact] = useState({...INITIAL_MESSAGE})
    const [feedback, setFeedback] = useState({...INIT_FEEDBACK});
    
    
    const {
        name,
        email,
        message, 
    } = conact;

    const {
        nameok,
        mailok,
        messageok,
        responseok,
    } = feedback;

    const onChange = event => {
        const { name, value } = event.target;
        setContact(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    };

   
    const onSubmit = (event) => {
        event.preventDefault();
        setFeedback({...INIT_FEEDBACK});
        if (name === "" || name.includes(" ")) {
            setFeedback(prevState => ({
                ...prevState,
                nameok: false,
            }))
        } else if (!validateEmail(email)) {
            setFeedback(prevState => ({
                ...prevState,
                mailok: false,
            }))
        } else if (message.length < 120) {
            setFeedback(prevState => ({
                ...prevState,
                messageok: false,
            }))
        } else {
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                body: JSON.stringify(conact),
                headers: {
                    "Content-Type": "application/json"
                    }
            } )
            .then(response => {
                if(response.ok) {
                    setFeedback(prevState => ({
                            ...prevState,
                            responseok: true,
                        })
                    )
                    setContact({...INITIAL_MESSAGE})
                }
            })
            .catch(error => console.log(error)); 
        }
    }
 


    return (
        <div className="HomeContact" id="Contact">
            <div className="overlay">
                <div className="contact">
                    <div className="contact-form">
                        <span className="contact-form__title">Skontaktuj się z nami</span>
                        <div className="decoration"></div>
                        <div className={`form__send-msg ${!responseok && "invisble"}`}>Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy.</div>
                        <form className="contact-form__form" onSubmit={onSubmit}>
                        <div className="contact-form__data-inputs">
                            <div className="contact-form__data-wrap">
                                <label htmlFor="name" className="contact-form__label">Wpisz swoje imię</label>
                                <input
                                    className="input home-input"
                                    name="name"
                                    type="text"
                                    value={name}
                                    placeholder="Krzysztof"
                                    onChange={onChange}

                                />
                                <div className={`form__valmess ${!!nameok && "invisble"}`} >Podane imię jest nieprawidłowe!</div>
                            </div>
                            <div>
                                <label htmlFor="email" className="contact-form__label">Wpisz swój email</label>
                                 <input
                                    className="input home-input"
                                    name="email"
                                    type="text"
                                    value={email}
                                    placehol="abc@xyz.pl"
                                    onChange={onChange}
                                />
                                <div className={`form__valmess ${!!mailok && "invisble"}`} >Podany email jest nieprawidłowy!</div>
                            </div>
                        </div>
                        <div className="contact-form__message-wrap">
                            <label htmlFor="message" className="contact-form__label">Wpisz swoją wiadomość</label>
                            <textarea
                                className="input message-input"
                                name="message"
                                value={message}
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat."
                                onChange={onChange}
                            />
                            <div className={`form__valmess ${!!messageok && "invisble"}`} >Wiadomość musi mieć conajmniej 120 znaków</div>
                        </div>
                        <button 
                            type="submit"
                            className="contact-form__submit-btn"
                            >Wyślij!
                        </button>
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