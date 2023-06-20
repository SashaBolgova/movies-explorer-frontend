import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";
import LogoIcon from "../../images/header__logo.svg"

function Logo() {
    return (
        <Link to="/">
            <img className="logo" src={LogoIcon} alt="Белый круг на черном квадрате" />
        </Link>
    )
}

export default Logo;
