import React from 'react';
import Home from '../assets/img/home.png';

const HomeIam = () => {
    return (

        <section className="home" id="home">
<div className="home__container bd-container bd-grid">
    <div className="home__data">
        <h1 className="home__title">eduardSando</h1>
        <h2 className="home__subtitle">Soy un development <br /> in process</h2>
        <a href="/" className="button">Mas sobre mi</a>
    </div>

    <img src={Home} alt="" className="home__img" />
</div>
</section>
    );
}

export default HomeIam;