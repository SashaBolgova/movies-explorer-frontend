import React from "react";
import "./NavTab.css";

function NavTab() {
    return (
        <nav className="nav-menu">
            <ul className="nav-menu__links">
                <li className="nav-menu__item"><a className="nav-menu__link" href="#about-project">О проекте</a></li>
                <li className="nav-menu__item"><a className="nav-menu__link" href="#techs">Технологии</a></li>
                <li className="nav-menu__item"><a className="nav-menu__link" href="#about-me">Студент</a></li>
            </ul>
        </nav>
    );

}

export default NavTab;
