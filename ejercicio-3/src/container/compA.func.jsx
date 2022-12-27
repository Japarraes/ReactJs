import React from 'react';
import { Contacto } from '../models/contact.class';
import CompBFun from './compB.fun';

const CompAFunc = () => {

    const defaultContact = new Contacto("Juan", "Parra", "miemail@miemail.com", false);

    return (
        <div>
            <h1>Contacto:</h1>
            <CompBFun contact={defaultContact}></CompBFun>
        </div>
    )
};

export default CompAFunc;
