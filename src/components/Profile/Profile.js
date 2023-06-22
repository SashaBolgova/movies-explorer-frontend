import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Profile() {
    return (
        <section className="c">
            <Header>
                <Navigation />
            </Header>
            <div className="profile__container">
                <h2 className='profile__header'>Привет, Александра!</h2>
                <form className="profile__form" >
                    <div className="profile__user-info">
                        <label className="profile__label">Имя</label>
                        <input
                            className="profile__input"
                            type="text" />
                    </div>
                    <div className="profile__user-info">
                        <label className="profile__label">E-mail</label>
                        <input
                            className="profile__input"
                            type="email" />
                    </div>
                </form>
                <ul className="profile__links">
                    <Link className="profile__option"><button className="profile__link" type="button">Редактировать</button></Link>
                    <Link to="/signin" className="profile__option"><button className="profile__link" type="button">Выйти из аккаунта</button></Link>
                </ul>
            </div>
        </section>
    )
}

export default Profile;
