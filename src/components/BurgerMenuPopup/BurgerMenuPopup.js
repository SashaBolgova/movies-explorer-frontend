import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenuPopup.css";
import '../AccountIcon/AccountIcon.css'
import IconProfile from "../../images/icon__profile.svg"

const BurgerMenuPopup = (props) => {
    const { isOpen, onClose, } = props;

    useEffect(() => {
        if (!isOpen) return;

        const handleEscBtn = (e) => {
            if (e.keyCode === 27)
                onClose()
        }
        document.addEventListener('keydown', handleEscBtn)
        return () => document.removeEventListener('keydown', handleEscBtn)
    }, [isOpen, onClose])

    return (
        <section className={`burger-menu-popup ${isOpen ? 'burger-menu-popup_opened' : ''}`}>
            <div className="burger-menu-popup__container">
                <button className="burger-menu-popup__close-btn" onClick={onClose}></button>
                <div className="burger-menu-popup__content">
                    <nav className="burger-menu-popup__nav">
                        <NavLink to="/" className="burger-menu-popup__link">Главная</NavLink>
                        <NavLink to="/movies" className="burger-menu-popup__link">Фильмы</NavLink>
                        <NavLink to="/saved-movies" className="burger-menu-popup__link">Сохранённые фильмы</NavLink>
                    </nav>
                    <NavLink to="/profile" className="account__link">
                        <button className='account__button'>
                            <img className='account__icon' src={IconProfile} alt='Схематичный человечек' />
                            <p className='account__title'>Аккаунт</p>
                        </button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default BurgerMenuPopup;
