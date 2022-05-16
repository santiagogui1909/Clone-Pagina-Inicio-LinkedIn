import React from 'react';
import {useSelector} from 'react-redux';
import './MoreOptions.css';

const MoreOptions = () => {

    const scrollValue = useSelector(state => state.alertsReducer.scroll);

    return (
        <div className={`container-menu ${scrollValue > 450 ? 'scroll' : null}`}>
            <article id="containerMyPages">
                <h2>mis páginas (2)</h2>
                <section className="pageReference">
                    <figure>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFkzaRXO1sCvQ/company-logo_200_200/0/1625163862547?e=2147483647&v=beta&t=zYC3Y2SLRETu7d2QEAtEgNAg67y5Tn6n7BCtHNcabxg" alt="imagenApp"></img>
                    </figure>
                    <section className="textPages">
                        <p>imagine apps</p>
                        <p>notificaciones de la...<span>6</span></p>
                    </section>
                </section>

                <hr />

                <section className="pageReference">
                    <figure>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFkzaRXO1sCvQ/company-logo_200_200/0/1625163862547?e=2147483647&v=beta&t=zYC3Y2SLRETu7d2QEAtEgNAg67y5Tn6n7BCtHNcabxg" alt="imagenApp"></img>
                    </figure>
                    <section className="textPages">
                        <p>imagine desarrollo</p>
                        <p>notificaciones de la...<span>0</span></p>
                    </section>
                </section>
            </article>

            <article id="containerOptions">
                <section className="sectionRecent">
                    <p className="recent">resientes</p>
                    <ul>
                        <li><span class="icon-group"></span>mentores sum</li>
                        <li><span class="icon-group"></span>networking san carlos</li>
                        <li><span class="icon-group"></span>latam fintech insights</li>
                        <li><span class="icon-right-big"></span>negocios</li>
                        <li><span class="icon-right-big"></span>emprendedores</li>
                    </ul>
                </section>
                <p className="options">grupos</p>
                <p className="options">eventos<span class="icon-plus"></span></p>
                <p className="options">hashtags seguidos</p>
                <button className="btnShowMore">Ver más</button>
            </article>
        </div>
    );
};

export default MoreOptions;