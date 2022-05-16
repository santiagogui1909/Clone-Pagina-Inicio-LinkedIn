import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeFormPost, activeDelete } from '../../Reducer/AlertsReducer';
import { deletePost, activeOptionsPost, orderArray } from '../../Reducer/dataReducer';
import CardPost from './CardPost/CardPost';
import FormPost from './CardPost/FormPost';
import profileImage from '../../Images/profileImg.jpg';

import './CenterColumns.css';

const News = () => {

    const dispatch = useDispatch();
    const formModal = useSelector(state => state.alertsReducer.formPost);
    const resDelete = useSelector(state => state.alertsReducer.delete);
    const idUser = useSelector(state => state.dataReducer.idSelected);
    const posts = useSelector(state => state.dataReducer.dataUsers);
    const [showOrder, setShowOrder] = useState(false);
    const [optionOrder, setOptionOrder] = useState("resientes");

    const openFormPost = () => {
        dispatch(activeFormPost());
        dispatch(activeOptionsPost(false));
    }

    const deletePostt = (value) => {

        if (value === true) {
            dispatch(deletePost(idUser));
            dispatch(activeDelete(false));
        } else {
            dispatch(activeDelete(false));
        }
    }

    const selectOrder = () => {
        setShowOrder(!showOrder);
    }

    // useEffect((optionOrder) => {
    //     if (optionOrder === "resientes") {
    //         dispatch(orderArray(posts.reverse()))
    //     } else if (optionOrder === "antiguos"){
    //         dispatch(orderArray(posts))
    //     }
    // },[optionOrder])

    const order = (valSelect) => {
        setOptionOrder(valSelect.target.textContent);
        setShowOrder(false);
        posts.reverse();
    }

    return (
        <div className="containerNews">
            <article className="boxNewPost">
                <a href="https://www.linkedin.com/in/santiago-guillen-ramirez-b162211a7/"><img className="imgProfile" src={profileImage} alt="user"></img></a>
                <button className="btnNewPost" onClick={openFormPost}>Crear publicacion</button>
                <section className="typeOptions">
                    <button className="btnTypePost"><span className="icon-picture"></span>foto</button>
                    <button className="btnTypePost"><span className="icon-youtube-play"></span>video</button>
                    <button className="btnTypePost"><span className="icon-calendar"></span>evento</button>
                    <button className="btnTypePost"><span className="icon-newspaper"></span>escribir articulo</button>
                </section>
            </article>

            {formModal && <FormPost />}

            <article className="orderPost">
                <p className="line"></p>
                <p className="infoOrder" onClick={selectOrder}>Ordenar por : {optionOrder}<span className="icon-down-dir"></span></p>

                {showOrder ?
                    <section className='optionsOrder'>
                        <p onClick={(e) => order(e)}>resientes</p>
                        <p onClick={(e) => order(e)}>antiguos</p>
                    </section>
                    : null
                }
            </article>

            <article>
                {

                    resDelete ?
                        <div className="modal">
                            <section className="alertConfirmDelete">
                                <h2>¿borrar publicación?</h2>
                                <p>¿Seguro que quieres eliminar esta publicación de LinkedIn para siempre?</p>
                                <div>
                                    <button className="btnBack" onClick={() => deletePostt(false)}>cancelar</button>
                                    <button className="btnDiscard" onClick={() => deletePostt(true)}>borrar</button>
                                </div>
                            </section>
                        </div>
                        : null
                }
                <CardPost />
            </article>
        </div>
    );
};

export default News;