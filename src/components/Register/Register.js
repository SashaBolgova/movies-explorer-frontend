import React, { useCallback } from "react";
import { Link } from 'react-router-dom';
import './Register.css'
import Logo from "../Logo/Logo";
import SubmitForm from "../SubmitForm/SubmitForm";
import { useFormWithValidation } from "../validation/validation";

const Register = (props) => {
    const { onSubmit } = props;
    const { values, handleChange, isValid } = useFormWithValidation();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        onSubmit({
            name: values.name,
            email: values.email,
            password: values.password
        });
    }, [values, onSubmit])


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
                        value={values.name || ''}
                        onChange={handleChange}
                        autoComplete="off"
                        minLength="2"
                        maxLength="40"
                    />
                    <legend className='registration__legend'>E-mail</legend>
                    <input
                        className='registration__input'
                        id='email'
                        name='email'
                        type="email"
                        required
                        value={values.email || ''}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <legend className='registration__legend'>Пароль</legend>
                    <input
                        className='registration__input'
                        id='password'
                        name='password'
                        type="password"
                        required
                        value={values.password || ''}
                        onChange={handleChange}
                        autoComplete="off"
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
