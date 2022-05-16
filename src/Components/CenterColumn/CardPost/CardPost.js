import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {activeDelete} from '../../../Reducer/AlertsReducer';
import {setLikePost , showMenuOptions , activeOptionsPost} from '../../../Reducer/dataReducer';
import ModalOptionsPost from '../ModalOptions/ModalOptionsPost';
import ModalOptionsUser from '../ModalOptions/ModalOptionsUser';
import './CardPost.css';

const CardPost = () => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.dataReducer.dataUsers);
    const idUser = useSelector(state => state.dataReducer.idSelected);
    const active = useSelector(state => state.dataReducer.activeLike);
    const activeOptions = useSelector(state => state.dataReducer.activeOptions);
    const style = { color: '#0678ea' };

    useEffect(() => {
        dispatch(dispatch(setLikePost()));
    }, [active]);

    useEffect(() => {
        dispatch(activeOptionsPost(true));
    },[idUser])

    const openOptions = (id , correo) => {
        dispatch(activeOptionsPost(!activeOptions));
        dispatch(showMenuOptions(id , correo));
        dispatch(activeDelete(false));
    }

    return (
        <>
            {
                post.map((post) => {
                    return <div className="cardPost" id={post.id}>
                        <section className="sectionInfoUser">
                            <img className="userImg" src={post.imgPerfil} alt="user"></img>
                            <section className="dataUser">
                                <h2>{post.nombre}</h2>
                                <p>{post.cargo}</p>
                                <p>{post.fecha}<span className="icon-globe"></span></p>
                            </section>
                            <button className="btnOptionsCard" 
                                onClick={()=>openOptions(post.id , post.correo)}>
                                <span className="icon-dot-3"></span>
                            </button>
                        </section>

                        <div className="boxMenuOptions">
                            { activeOptions && idUser === post.id ? 
                                post.correo === "devsantiago@gmail.com" ? <ModalOptionsUser /> : <ModalOptionsPost /> 
                                : null
                            }
                        </div>

                        <section className="sectionPost">
                            <p>{post.descripcion}</p>
                            {post.post !== undefined ? <img src={post.post} alt="post"></img> : null}
                        </section>

                        <section className="countInteractions">
                            <p onC><span className="icon-thumbs-up"></span>{post.countLike}</p>
                            <p>{post.comentarios} comentarios</p>
                        </section>

                        <section className="interaction">
                            <p style={post.like === true ? style : null}
                                onClick={() => dispatch(setLikePost(post.id, true))}>
                                <span className="icon-thumbs-up"></span>recomendar
                            </p>
                            <p><span className="icon-commenting"></span>comentar</p>
                            <p><span className="icon-share"></span>compartir</p>
                            <p><span className="icon-paper-plane"></span>enviar</p>
                        </section>
                    </div>
                }).reverse()
            }
        </>
    );
};

export default CardPost;