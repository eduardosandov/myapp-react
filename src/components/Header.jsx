import React from "react";
import '../styles/styles.scss';
import perfil from '../assets/img/plate2.png';


const Header = () => {

    
    return (
        <header className="header">
            <a href="/" className="header__logo">edua</a>

            <ion-icon name="menu-outline" class="header__toggle" id="nav-toggle"></ion-icon>

            <nav className="nav" id="nav-menu">

                <div className="nav__content bd-grid">
                <ion-icon name="close-outline" class="nav__close" id="nav-close"></ion-icon>
                    <div className="nav__perfil">
                        <div className="nav__img">
                            <img src={perfil} alt="" />
                        </div>
                        <div>
                            <a href="/" className="nav__name">eduardo</a>
                            <span class="nav__profesion">Web designer</span>
                        </div>
                    </div>

                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
                            <li className="nav__item"><a href="/" className="nav__link">About</a></li>
                            <li className="nav__item"><a href="/" className="nav__link">Skills</a></li>
                            <li className="nav__item"><a href="/" className="nav__link">Portfolio</a></li>
                            <li className="nav__item"><a href="/" className="nav__link">Contact</a></li>
                        </ul>
                    </div>

                    <div className="nav__social">
                        <a href="/" className="nav__social-icon">linkedin</a>
                    </div>
                </div>
            </nav>
        </header>
        
    );
}

export default Header;

