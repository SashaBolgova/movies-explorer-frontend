import React from "react";
import "./AboutMe.css";
import photo from "../../images/me.jpg";
import TitlePage from '../TitlePage/TitlePage';

function AboutMe() {
    return (
        <section className="about-me" id="about-me">
            <div className="about-me__container">
                <TitlePage title="Студент" />
                <div className="about-me__info">
                    <img className="about-me__avatar" src={photo} alt="фотография" />
                    <h3 className="about-me__subtitle">Александра</h3>
                    <p className="about-me__caption">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__text">
                        Я родилась в небольшом городке на севере Пермского края. Закончила химико-технологический факультет ПНИПУ. 
                        В 2021 году переехала с семьей в Санкт-Петербург. После окончания обучения в Я.Практикуме собираюсь работать 
                        в сфере IT и заниматься frontend разработкой, так как хочу иметь удаленную работу, чтобы чаще играть со своей собакой.
                    </p>
                    <ul className="about-me__links">
                        <li><a className="about-me__link" href="https://github.com/SashaBolgova" target="_blank" rel="noreferrer">Github</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );

}

export default AboutMe;
