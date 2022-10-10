import React from "react";
import '../styles/styles.scss';


const Header = () => {
    return (
        <nav className="nav bd-container">
            <a href="/" className="nav__logo">esando</a>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="/" className="nav__link active-link">Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="/about" className="nav__link">About</a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link">Services</a>
                    </li>
                    <li className="nav__item">
                        <a href="#menu" className="nav__link">Menu</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">Contact us</a>
                    </li>

                    <li><i className='bx bx-moon change-theme' id="theme-button"></i></li>
                </ul>
            </div>

            <div className="nav__toggle" id="nav-toggle">
                <i className='bx bx-menu'></i>
            </div>
        </nav>

    );
}

export default Header;