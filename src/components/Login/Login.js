import React, { useCallback } from "react";
import { Link } from 'react-router-dom';
import './Login.css'
import Logo from "../Logo/Logo";
import SubmitForm from "../SubmitForm/SubmitForm";
import InputError from "../InputError/InputError";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

const Login = (props) => {
  const { onSubmit } = props;
  const { values, handleChange, isValid, errors } = useFormWithValidation();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    onSubmit({
      email: values.email,
      password: values.password
    });
  }, [values, onSubmit])

  return (
    <div className='login'>
      <Logo />
      <h1 className='login__header'>Рады видеть!</h1>
      <form className='login__form' onSubmit={handleSubmit}>
        <fieldset className='login__info'>
          <legend className='login__legend'>E-mail</legend>
          <input
            className={`login__input ${errors?.email ? 'login__input_error' : ''}`}
            id='email'
            name='email'
            type="email"
            required
            value={values.email || ''}
            onChange={handleChange}
            pattern="^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$"
            placeholder="ваш Email вида email@mail.com"
          />
          <InputError error={errors.email} />
          <legend className='login__legend'>Пароль</legend>
          <input
            className='login__input'
            id='password'
            name='password'
            type="password"
            required
            value={values.password || ''}
            onChange={handleChange}
            minLength={6}
            maxLength={30}
          />
          <InputError error={errors.password} />
        </fieldset>
        <SubmitForm buttonText="Войти" isValid={!isValid}>
          <p className='submit__text'>Ещё не зарегистрированы?
            <Link to='/signup' className='submit__span'> Регистрация</Link>
          </p>
        </SubmitForm>
      </form>
    </div>
  )
}

export default Login
