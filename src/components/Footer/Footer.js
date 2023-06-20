import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <section className="footer">
            <h3 className="footer__subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className='footer__container'>
                <p className='footer__copyright'>&#169; 2023</p>
                <ul className="footer__links">
                    <li className="footer__item">
                        <a className="footer__link"
                            href="https://practicum.yandex.ru/"
                            target="_blank"
                            rel="noreferrer">
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link"
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer">
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;
