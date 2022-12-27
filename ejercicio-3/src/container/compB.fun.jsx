import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contact.class';


const CompBFun = ({ contact }) => {
    return (
        <div>
            <h2>
                Nombre: { contact.nombre }
            </h2>
            <h2>
                Apellidos: { contact.apellidos }
            </h2>
            <h2>
                email: { contact.email }
            </h2>
            <h2>
                Conectado: { contact.completado ? "Contacto en Línea":"Contacto No Disponible"}
            </h2>
        </div>
    );
};


CompBFun.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
};


export default CompBFun;
