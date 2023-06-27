import React, { useContext, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../validation/validation"

function Profile(props) {
    const { onUpdateUserData, onSignOut } = props;
    const { values, handleChange, isValid, resetForm } = useFormWithValidation();
    const currentUser = useContext(CurrentUserContext);
    const [isUpdatedUserData, setIsUpdatedUserData] = useState(false);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        onUpdateUserData({
            name: values.name,
            email: values.email
        })
    }, [values.name, values.email, onUpdateUserData])

    useEffect(() => {
        values.name !== currentUser.name || values.email !== currentUser.email
            ? setIsUpdatedUserData(true)
            : setIsUpdatedUserData(false)
    }, [values.name, currentUser.name, values.email, currentUser.email])

    useEffect(() => {
        resetForm({ name: currentUser.name, email: currentUser.email }, {}, false)
    }, [resetForm, currentUser])
    return (
        <section className="profile">
            <Header>
                <Navigation />
            </Header>
            <div className="profile__container">
                <h2 className='profile__header'>Привет, {currentUser.name}!</h2>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <div className="profile__user-info">
                        <label className="profile__label">Имя</label>
                        <input
                            className="profile__input"
                            type="text"
                            name="name"
                            id="name"
                            value={values.name || currentUser.name}
                            onChange={handleChange} />
                    </div>
                    <div className="profile__user-info">
                        <label className="profile__label">E-mail</label>
                        <input
                            className="profile__input"
                            type="email"
                            name="email"
                            id="email"
                            value={values.email || currentUser.email}
                            onChange={handleChange} />
                    </div>
                </form>
                <ul className="profile__links">
                    <Link className="profile__option"><button className="profile__link" type="submit" disabled={!isUpdatedUserData || !isValid}>Редактировать</button></Link>
                    <Link to="/signin" className="profile__option"><button className="profile__link" type="button" onClick={onSignOut}>Выйти из аккаунта</button></Link>
                </ul>
            </div>
        </section>
    )
}

export default Profile;
