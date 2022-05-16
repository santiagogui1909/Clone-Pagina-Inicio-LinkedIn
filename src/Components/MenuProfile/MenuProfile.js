import React from 'react';
import profileImg from '../../Images/profileImg.jpg';
import './MenuProfile.css';

const MenuProfile = () => {
    return (
        <div className="modalMenu">
            <a href="https://www.linkedin.com/in/santiago-guillen-ramirez-b162211a7/" className="sectionProfile">
                <figure>
                    <img className="imgUserMenu" src={profileImg} alt="user configuration"></img>
                </figure>
                <section>
                    <h2>santiago guillen ramirez</h2>
                    <p>Analista - Desarrollador Front-End Jr</p>
                </section>
                <button className="btnShowProfile">ver perfil</button>
            </a>

            <section className="configurations">
                <h3>cuenta</h3>
                <p>configuracion y privacidad</p>
                <p>ayuda</p>
                <p>idioma</p>
            </section>

            <section className="configurations">
                <h3>gestionar</h3>
                <p>publicaciones y actividad</p>
                <p>cuenta de anuncio de empleo</p>
            </section>

            <section className="btnSignOff">
                <bottom>cerrar sesion</bottom>
            </section>
        </div>
    );
};

export default MenuProfile;