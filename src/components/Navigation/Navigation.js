import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__links">
                <Link to="/movies" className='navigation__link'>Фильмы</Link>
                <Link to="/saved-movies" className='navigation__link'>Сохранённые фильмы</Link>
            </div>
        </nav>
    )
}

export default Navigation;
