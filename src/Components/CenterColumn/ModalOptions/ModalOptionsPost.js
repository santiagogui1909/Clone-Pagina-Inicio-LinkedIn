import React from 'react';
import './ModalOptionsPost.css';

const ModalOptionsPost = () => {
    return (
        <div className="boxOptionsPost">
            <ul>
                <li>
                    <span className="icon-link">Copiar enlace a la publicacion</span>
                </li>
                <li>
                    <span className="icon-bookmark">Guardar</span>
                    <p>Guardar para más tarde</p>
                </li>
                <li>
                    <span className="icon-code">Insertar esta publicacion</span>
                    <p>Copia y pega el codigo insertado en tu sitio web</p>
                </li>
                <li>
                    <span className="icon-eye-off">No quiero ver esto</span>
                    <p>Dinos por que no quieres ver esta publicacion</p>
                </li>
                <li>
                    <span className="icon-flag">Denunciar esta publicacion</span>
                    <p>Esta publicacion es ofenciva o la cuenta se ha pirateado</p>
                </li>
                <li>
                    <span className="icon-eye">¿Quien puede ver esta publicacion?</span>
                    <p>Visible para cualquier persona dentro o fuera de LinkedIn</p>
                </li>
            </ul>
        </div>
    );
};

export default ModalOptionsPost;