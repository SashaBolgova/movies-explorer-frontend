import React, { useCallback } from "react";
import { Link } from 'react-router-dom';
import './Login.css'
import Logo from "../Logo/Logo";
import SubmitForm from "../SubmitForm/SubmitForm";
import { useFormWithValidation } from "../validation/validation";

const Login = (props) => {
  const { onSubmit } = props;
  const { values, handleChange, isValid } = useFormWithValidation();

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
            className='login__input'
            id='email'
            name='email'
            type="email"
            required
            value={values.email}
            onChange={handleChange}
          />
          <legend className='login__legend'>Пароль</legend>
          <input
            className='login__input'
            id='password'
            name='password'
            type="password"
            required
            value={values.password}
            onChange={handleChange}
          />
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
