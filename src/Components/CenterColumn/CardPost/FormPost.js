import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { activeFormPost } from '../../../Reducer/AlertsReducer';
import { addPost } from '../../../Reducer/dataReducer';
import profileImage from '../../../Images/profileImg.jpg';
import './CardPost.css';

const FormPost = () => {

    const dispatch = useDispatch();
    const [spiner, setSpiner] = useState(true);
    const [alertConfirm, setAlertConfirm] = useState(false);
    const [hashtag, setHashtag] = useState("");
    const [disable, setDisable] = useState(false);
    const [comments, setComent] = useState({
        comment: ''
    });
    let { comment } = comments;

    const style = {
        background: '#2b7df9',
        color: '#ffffff',
        cursor: 'pointer'
    };

    // funtion for the spiner
    useEffect(() => {
        let timer = setTimeout(() => {
            setSpiner(false);
        }, 0 | (Math.random() * 1000));
        return () => clearTimeout(timer);
    }, []);

    const closeFormPost = () => {
        (comment !== "") ? setAlertConfirm(true) : dispatch(activeFormPost());
    }

    const closeAlertConfirm = () => setAlertConfirm(false);
    
    const discardPost = () => dispatch(activeFormPost());

    const getDataPost = (e) => {
        setHashtag("");
        setComent({ ...comments, comment: e.target.value })
    }

    const addHashtag = () => setHashtag("#");

    const publish = () => {

        if (comment !== "") {
            setDisable(true);
            dispatch(addPost(comment));
            dispatch(activeFormPost());
        }
    }

    return (
        <div className="modal">
            <article className="formPost">
                <header>
                    <h3>Crear una publicación</h3>
                    <span className="icon-cancel" onClick={closeFormPost}></span>
                </header>

                {spiner ?
                    <div className="spiner"></div>
                    :
                    <article>
                        <section className="boxUser">
                            <img src={profileImage} alt="user profile in the form"></img>
                            <div>
                                <p>santiago guillen ramirez</p>
                                <button>
                                    <span className="icon-globe"></span>cualquiera
                                    <span className="icon-down-dir"></span>
                                </button>
                            </div>
                        </section>

                        <textarea className="inputText" placeholder="De qué quieres hablar?"
                            onChange={(e) => getDataPost(e)}
                            value={hashtag !== "" ? hashtag : comment}>
                        </textarea>

                        <button className="btnAddHashtag" onClick={addHashtag}>Añadir hashtag</button>

                        <article className="formOtherOptions">
                            <ul className="sectionOptions">
                                <li>
                                    <p className="hoverInformation">añadir una foto</p>
                                    <span className="icon-picture"></span>
                                </li>
                                <li>
                                    <p className="hoverInformation">añadir un video</p>
                                    <span className="icon-youtube-play"></span>
                                </li>
                                <li>
                                    <p className="hoverInformation">añadir un documento</p>
                                    <span className="icon-newspaper"></span>
                                </li>
                                <li>
                                    <p className="hoverInformation">comparte que estás buscando personal</p>
                                    <span className="icon-briefcase"></span>
                                </li>
                                <li>
                                    <p className="hoverInformation">celebrar una ocasión especial</p>
                                    <span className="icon-chart-bar"></span>
                                </li>
                                <li>
                                    <p className="hoverInformation">crear una encuesta</p>
                                    <span className="icon-dot-3"></span>
                                </li>
                            </ul>

                            <button className="btnComents"><span className="icon-comment"></span>cualquiera</button>
                            <button className="btnPublish" onClick={publish}
                                style={comment !== "" ? style : null} disabled={disable}>publicar</button>
                        </article>
                    </article>
                }
            </article>

            {alertConfirm &&
                <article className="AlertConf">
                    <header>
                        <h3>descartar borrador</h3>
                        <span className="icon-cancel" onClick={closeAlertConfirm}></span>
                    </header>

                    <section className="questionAlert">
                        <p>Aún no has terminado tu publicación. ¿Seguro que quieres salir y descartar tu borrador?</p>
                    </section>
                    <section className="sectionBtnAlert">
                        <button className="btnBack" onClick={closeAlertConfirm}>volver</button>
                        <button className="btnDiscard" onClick={discardPost}>descartar</button>
                    </section>
                </article>
            }
        </div>
    );
};

export default FormPost;