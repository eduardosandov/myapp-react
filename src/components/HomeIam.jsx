import React from 'react';
import Home from '../assets/img/logo insta.png';
import '../styles/home.scss';
import '../styles/styles.scss';


const HomeIam = () => {
    return (
        <section className="home" id="home">
            <div className="home__container bd-container bd-grid">
                <div className="home__data">
                    <h1 className="home__title">Eduardo Sandoval</h1>
                    <h2 className="home__subtitle">full stack developer</h2>
                    <a href="/" className="button">Mas sobre mi</a>
                </div>

                <img src={Home} alt="" className="home__img" />
            </div>
        </section>
    );
}
export default HomeIam;