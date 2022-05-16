import React from 'react';
import background from '../../../Images/background.png';
import profileImage from '../../../Images/profileImg.jpg';
import './Profile.css';

const Profile = () => {
    return (
        <div id="containerProfile">
            <article className="profile">
                <figure>
                    <img className="backgroundProfile" src={background} alt="backgraundProfile" />
                    <img className="profileimg" src={profileImage} alt="ProfileImg" />
                </figure>

                <section className="profileInfo">
                    <h2>santiago guillen ramirez</h2>
                    <p>analista - desarrollador front-end Jr</p>
                </section>
            </article>

            <article className="viewsSection">
                <section className="views">
                    <p>Quién ha visto tu perfil</p>
                    <span>1325</span>
                </section>
                
                <section className="views">
                    <p>Visualizaciones de tu publicacion</p>
                    <span>973</span>
                </section>
            </article>

            <section className="premiumAd">
                <p>Accede a informacion y herramientas exclusivas</p>
                <strong className="linkPremium">reactivar premium</strong>
            </section>

            <button className="btnBookmark"><span className="icon-bookmark"></span>marcapáginas</button>
        </div>
    );
};

export default Profile;