import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {updateSuggestions} from '../../../Reducer/dataReducer';
import {messageSelect} from '../../../Reducer/AlertsReducer';
import ModalInfo from '../ModalInfo/ModalInfo';

const RigthColumn = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.dataReducer.userSuggestion);  
    const alert = useSelector(state => state.alertsReducer.alert);  
    
    const follow = () => dispatch(updateSuggestions());

    const showModalInfo = (numberAlert) => {

        if (numberAlert === 1) { 
            dispatch(messageSelect(1,"Sigue temas que te interesen para personalizar tu feed."));
        } else {
            dispatch(messageSelect(2,"Mantente actualizado con todos los cursos que LinkedIn tiene para ti."));
        }
    }

    return (
        <aside>
            <article className="containerSuggestion">
                {alert === 1 && <ModalInfo />}

                <header>
                    <h2>Añadir a tu feed</h2>
                    <span className="btnExplanation" onClick={() => showModalInfo(1)}>i</span>
                </header>

                { users.length > 0 ?
                    users.map((users) => {
                        return <> 
                            <article className="bulletPointSuggestion" id={users.id}>
                                <img className="userSuggestionImg" src={users.imgPerfil} alt="user suggestion"></img>
                                <section className="infoUserSuggestion">
                                    <strong>{users.nombre}</strong>
                                    <p>{users.cargo}</p>
                                </section>
                            </article>
                            <button className="followBtn" onClick={follow}><span className="icon-plus"></span>seguir</button>
                        </>
                })
                :
                <p className="noResults">No hay mas sugerencias para mostrar</p>
                }
                <button className="moreRecommendationsBtn">Ver todas las recomendaciones <span className="icon-right-big"></span></button>
            </article>

            <article className="containerSuggestion">
                {alert === 2 && <ModalInfo />}
                
                <header>
                    <h2>Los cursos más vistos hoy</h2>
                    <span className="btnExplanation" onClick={() => showModalInfo(2)}>i</span>
                </header>

                <ol className="listCourses">
                    <li>
                        como aumentar la resiliencia
                        <p>tatiana kolovou</p>
                    </li>
                    <li>
                        navegar el cambio en tiempo difici...
                        <p>izanami martinez</p>
                    </li>
                    <li>
                        aprende a usar linkedin learning
                        <p>sara ramadoro</p>
                    </li>
                </ol>
                <button className="moreRecommendationsBtn">Ver mas en Linkedin Learning <span className="icon-right-big"></span></button>
            </article>
        </aside>
    );
};

export default RigthColumn;