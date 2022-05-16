import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {closeAlert} from '../../../Reducer/AlertsReducer';
import './ModalInfo.css';

const ModalInfo = () => {
    const dispatch = useDispatch();
    const messageState = useSelector(state => state.alertsReducer.message);

    return (
        <div className="containerAlert">
            <p>{messageState}<span>más información</span></p>
            <span className="icon-cancel" onClick={()=> dispatch(closeAlert(0))}></span>
        </div>
    );
};

export default ModalInfo;