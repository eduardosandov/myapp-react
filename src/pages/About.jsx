import React from "react";
import AboutImg from '../assets/img/about.jpg';

const About = () => {
    return (

        <section className="about section bd-container" id="about">
            <div className="about__container  bd-grid">
                <div className="about__data">
                    <span className="section-subtitle about__initial">Hacerca de Mi</span>
                    <h2 className="section-title about__initial">Eduardo Sandoval</h2>
                    <p className="about__description">Soy Ingeniero en Sistemas Computacionales, con experiencia en el ambito de la tecnologia y evaluacion de la conformidad de acuerdo a las normas mexicas NOM y NMX</p>
                    <a href="/" className="button">Skills</a>
                </div>

                <img src={AboutImg} alt="" className="about__img" />
            </div>
        </section>

    );
}
export default About;
