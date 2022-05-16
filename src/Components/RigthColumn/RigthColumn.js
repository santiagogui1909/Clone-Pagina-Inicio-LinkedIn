import React from 'react';
import { useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {showUsers} from '../../Reducer/dataReducer';

import Advertisement from '../RigthColumn/Advertisement/Advertisement.js';
import Suggestions from '../RigthColumn/Suggestions/Suggestions.js';
import './RigthColumn.css';

const RigthColumn = () => {

    const dispatch = useDispatch();
    const update = useSelector(state => state.dataReducer.valueOne);
    const scrollValue = useSelector(state => state.alertsReducer.scroll);  

    useEffect(() => {
        dispatch(showUsers());
    },[update]);

    return (
        <div>
            <Suggestions />
            <article className={`container-menu ${scrollValue > 780 ? 'scroll2' : null}`}>
                <Advertisement />
            </article>
        </div>
    );
};

export default RigthColumn;