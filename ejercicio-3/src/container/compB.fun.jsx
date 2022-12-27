import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contact.class';


const CompBFun = ({ contact }) => {
    return (
        <div>
            <h5>
                Nombre: { contact.nombre }
            </h5>
            <h5>
                Apellidos: { contact.apellidos }
            </h5>
            <h5>
                email: { contact.email }
            </h5>
            <h5>
                Conectado: { contact.conectado ? "Contacto en Línea":"Contacto No Disponible" }
            </h5>
        </div>
    );
};


CompBFun.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
};


export default CompBFun;
