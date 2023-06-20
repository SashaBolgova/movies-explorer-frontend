import React from "react";
import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/SashaBolgova/how-to-learn.git" target="_blank" rel="noreferrer">Статичный сайт</a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/SashaBolgova/russian-travel.git" target="_blank" rel="noreferrer">Адаптивный сайт</a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/SashaBolgova/react-mesto-api-full-gha.git" target="_blank" rel="noreferrer">Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
