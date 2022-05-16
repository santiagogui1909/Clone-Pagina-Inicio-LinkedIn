import React from 'react';
import adLinkedin from '../../../Images/ad-linkedin.png';

const advertisement = () => {

    return (
        <>
            <figure className="advertisement">
                <img src={adLinkedin} alt="this is a ad"></img>
            </figure>

            <article className="helpLinks">
                <section className="links">
                    <a href='https://about.linkedin.com/es-es?lr=1' target='_blank' rel="noreferrer">acerca de</a>
                    <a href='https://es.linkedin.com/accessibility?' target='_blank' rel="noreferrer">accesibilidad</a>
                    <a href='https://www.linkedin.com//help/linkedin?trk=footer_d_flagship3_feed' target='_blank' rel="noreferrer">centro de ayuda</a>
                </section>

                <p className="otherHelps">privacidad y términos<span className="icon-angle-down"></span></p>

                <section className="links">
                    <a href='https://www.linkedin.com/help/linkedin/answer/62931' target='_blank' rel="noreferrer">opciones de publicidad</a>
                    <a href='https://www.linkedin.com/ad/start?trk=n_nav_ads_rr&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BxqxbJepxQtW1LmRDLEnU7g%3D%3D' target='_blank' rel="noreferrer">publicidad</a>
                </section>

                <p className="otherHelps">  servicios empresariales<span className="icon-angle-down"></span></p>

                <section className="links">
                    <p>descargar la aplicación de Linkedin</p>
                    <p>mas</p>
                </section>
            </article>

            <section className="copyrigth">
                <p><span className="icon-linkedin-squared"></span>LinkedIn Corporation © 2022</p>
            </section>
        </>
    );
};

export default advertisement;