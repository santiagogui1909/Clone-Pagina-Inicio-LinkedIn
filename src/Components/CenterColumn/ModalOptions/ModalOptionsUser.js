import React from 'react';
import {useDispatch} from 'react-redux';
import {activeOptionsPost} from '../../../Reducer/dataReducer';
import {activeDelete} from '../../../Reducer/AlertsReducer';
import './ModalOptionsPost.css';

const ModalOptionsUser = () => {

    let dispatch = useDispatch();

    const showAlertDelete = () => {
        dispatch(activeDelete(true))
        dispatch(activeOptionsPost(false));
    }

return (
    <div className="boxOptionsPost">
        <ul>
            <li>
                <span className="icon-star-empty">Destacar en la parte superior del perfil</span>
            </li>
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
                <span className="icon-pencil">Editar publicación</span>
            </li>
            <li onClick={showAlertDelete}>
                <span className="icon-trash">Borrar publicación</span>
            </li>
            <li>
                <span className="icon-commenting">¿Quien puede comentar esta publicación?</span>
            </li>
            <li>
                <span className="icon-eye">¿Quien puede ver esta publicacion?</span>
                <p>Visible para cualquier persona dentro o fuera de LinkedIn</p>
            </li>
        </ul>
    </div>
);
};

export default ModalOptionsUser;