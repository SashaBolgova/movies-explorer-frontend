import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import Logo from "../Logo/Logo";
import SubmitForm from "../SubmitForm/SubmitForm";

const Login = ({ onLogin }) => {
  const [inputs, setInput] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { email, password, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [email]: value,
      [password]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inputs

    if (onLogin && email && password) {
      onLogin(email, password)
    }
  }

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
            value={inputs.email}
            onChange={handleChange}
          />
          <legend className='login__legend'>Пароль</legend>
          <input
            className='login__input'
            id='password'
            name='password'
            type="password"
            required
            value={inputs.password}
            onChange={handleChange}
          />
        </fieldset>
        <SubmitForm buttonText="Войти">
          <p className='submit__text'>Ещё не зарегистрированы?
            <Link to='/signup' className='submit__span'> Регистрация</Link>
          </p>
        </SubmitForm>
      </form>
    </div>
  )
}

export default Login
