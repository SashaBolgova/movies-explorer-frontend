import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
import { useNavigate } from 'react-router-dom';

function PageNotFound () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    };
    return (
        <div className="page-not-found">
            <h2 className="page-not-found__title">404</h2>
            <p className="page-not-found__text">Страница не найдена</p>
            <Link onClick={handleClick} className="page-not-found__link">Назад</Link>
        </div>
    )
}

export default PageNotFound;
