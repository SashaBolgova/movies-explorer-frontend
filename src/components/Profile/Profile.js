import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import InputError from "../InputError/InputError";

function Profile (props) {
    const { onUpdateUserData, onSignOut } = props;
    const { values, handleChange, isValid, resetForm, errors } = useFormWithValidation();
    const currentUser = useContext(CurrentUserContext);
    const [isUpdatedUserData, setIsUpdatedUserData] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const handleClickBtn = () => {
        if (isEdit) {
            onUpdateUserData({
                name: values.name,
                email: values.email
            })
        } else {
            setIsEdit(true)
        }
    }

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
                <form className="profile__form">
                    <div className="profile__user-info">
                        <label className="profile__label">Имя</label>
                        <input
                            className="profile__input"
                            minLength={6}
                            maxLength={30}
                            type="text"
                            name="name"
                            id="name"
                            value={values.name || currentUser.name}
                            onChange={handleChange} />
                    </div>
                    <InputError error={errors.name} />
                    <div className="profile__border"></div>
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
                    <InputError error={errors.email} />
                </form>
                <ul className="profile__links">
                    <Link className="profile__option">
                        <button className={`profile__link ${isEdit ? 'profile__link_btn' : ''}`} onClick={handleClickBtn} type="submit" disabled={isEdit ? !isValid || !isUpdatedUserData : false}>
                            Редактировать
                        </button>
                    </Link>
                    <Link to="/" className="profile__option"><button className="profile__link" type="button" onClick={onSignOut}>Выйти из аккаунта</button></Link>
                </ul>
            </div>
        </section >
    )
}

export default Profile;
