import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeFormPost, activeDelete } from '../../Reducer/AlertsReducer';
import { deletePost, activeOptionsPost, orderDate , orderLikes} from '../../Reducer/dataReducer';
import CardPost from './CardPost/CardPost';
import FormPost from './CardPost/FormPost';
import profileImage from '../../Images/profileImg.jpg';

import './CenterColumns.css';

const News = () => {

    const dispatch = useDispatch();

    // get the diferents state with useSelector
    const formModal = useSelector(state => state.alertsReducer.formPost);
    const resDelete = useSelector(state => state.alertsReducer.delete);
    const idUser = useSelector(state => state.dataReducer.idSelected);
    const [showOrder, setShowOrder] = useState(false);
    const [optionOrder, setOptionOrder] = useState("resientes");

    const openFormPost = () => {
        dispatch(activeFormPost());
        dispatch(activeOptionsPost(false));
    }

    // This funtion select the id post selected and send for
    // parameter a the function deletePost for delete this element in the estate global

    const deletePostt = (value) => {
        if (value === true) {
            dispatch(deletePost(idUser));
            dispatch(activeDelete(false));
        } else {
            dispatch(activeDelete(false));
        }
    }

    // Here management the funtions for select the order type for show the post (date, count likes)

    const selectOrder = () => {
        setShowOrder(!showOrder);
    }

    const orderForDate = (valSelect) => {
        setOptionOrder(valSelect.target.textContent);
        setShowOrder(false);
        dispatch(orderDate(optionOrder));
    }

    const orderForLike = (valSelect) => {
        setOptionOrder(valSelect.target.textContent);
        setShowOrder(false);
        dispatch(orderLikes(optionOrder));
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

            {/* windows modal */}

            {formModal && <FormPost />}

            <article className="orderPost">
                <p className="line"></p>
                <p className="infoOrder" onClick={selectOrder}>Ordenar por : {optionOrder}<span className="icon-down-dir"></span></p>

                {showOrder ?
                    <section className='optionsOrder'>
                        <p onClick={(e) => orderForDate(e)}>resientes</p>
                        <p onClick={(e) => orderForDate(e)}>antiguos</p>
                        <p onClick={(e) => orderForLike(e)}>mayor cantidad likes</p>
                        <p onClick={(e) => orderForLike(e)}>menor cantidad likes</p>
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