import React from "react";

import { withFirebase } from './Firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const LogoutBtnBase = (props) => {

    const onClick = () => {
        props.firebase.doSignOut()
            .then(()=> {
                props.history.push('./logout')
            })
    }

    return (
        <button type="button" onClick={onClick} className="logout_btn nav-link">
            Wyloguj się
        </button>
    )
}

const LogoutBtn = compose(
    withFirebase,
    withRouter
)(LogoutBtnBase)

export default LogoutBtn;