import React, { useCallback } from "react";
import { Link, Redirect } from 'react-router-dom';
import './Register.css'
import Logo from "../Logo/Logo";
import SubmitForm from "../SubmitForm/SubmitForm";
import { useFormWithValidation } from "../validation/validation";

const Register = (props) => {
    const { onSubmit, isRequestStatus, loggedIn } = props;
    const { values, handleChange, isValid } = useFormWithValidation();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        onSubmit({
            name: values.name,
            email: values.email,
            password: values.password
        });
    }, [values, onSubmit])

    if (loggedIn || isRequestStatus) {
        return <Redirect to='/movies' />;
      }

    return (
        <div className='registration'>
            <Logo />
            <h1 className='registration__header'>Добро пожаловать!</h1>
            <form className='registration__form' onSubmit={handleSubmit} isValid={isValid}>
                <fieldset className='registration__info'>
                    <legend className='registration__legend'>Имя</legend>
                    <input
                        className='registration__input'
                        id="name-profile"
                        type="text"
                        name="name"
                        required
                        value={values.name}
                        onChange={handleChange}
                        minLength="2"
                        maxLength="40"
                        errorText="Что-то пошло не так..."
                    />
                    <legend className='registration__legend'>E-mail</legend>
                    <input
                        className='registration__input'
                        id='email'
                        name='email'
                        type="email"
                        required
                        value={values.email}
                        onChange={handleChange}
                        errorText="Что-то пошло не так..."
                    />
                    <legend className='registration__legend'>Пароль</legend>
                    <input
                        className='registration__input'
                        id='password'
                        name='password'
                        type="password"
                        required
                        value={values.password}
                        onChange={handleChange}
                        errorText="Что-то пошло не так..."
                    />
                </fieldset>
                <SubmitForm buttonText="Зарегистрироваться" isValid={!isValid}>
                    <p className='submit__text'>Уже зарегистрированы?
                        <Link to='/signin' className='submit__span'> Войти</Link>
                    </p>
                </SubmitForm>
            </form>
        </div>
    )
}
export default Register;
