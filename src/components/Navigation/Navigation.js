import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation () {
    const setLinkClass = (navLink) =>
        navLink.isActive
            ? 'navigation__link navigation__link_active'
            : 'navigation__link';

    return (
        <nav className="navigation">
            <div className="navigation__links">
                <NavLink to="/movies" className={setLinkClass}>Фильмы</NavLink>
                <NavLink to="/saved-movies" className={setLinkClass}>Сохранённые фильмы</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;
