import React from "react";
import "./NavigationOut.css";
import { Link } from "react-router-dom";

function NavigationOut() {
    return (
        <nav className="navigation-out">
            <Link to="/signup" className="navigation-out__signup">Регистрация</Link>
            <Link to="/signin" className="navigation-out__signin">Войти</Link>
        </nav>
    )
}

export default NavigationOut;
