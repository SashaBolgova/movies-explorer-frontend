import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import Logo from "../Logo/Logo";
import SubmitForm from "../SubmitForm/SubmitForm";

const Register = ({ onRegister }) => {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, email, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value,
            [email]: value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password } = formValue;
        if (onRegister && email && password && name) {
            onRegister(name, email, password);
        }
    }
    return (
        <div className='registration'>
            <Logo />
            <h1 className='registration__header'>Добро пожаловать!</h1>
            <form className='registration__form' onSubmit={handleSubmit}>
                <fieldset className='registration__info'>
                    <legend className='registration__legend'>Имя</legend>
                    <input
                        className='registration__input'
                        id="name-profile"
                        type="text"
                        name="name"
                        required
                        value={formValue.name}
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
                        value={formValue.email}
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
                        value={formValue.password}
                        onChange={handleChange}
                        errorText="Что-то пошло не так..."
                    />
                </fieldset>
                <SubmitForm buttonText="Зарегистрироваться">
                    <p className='submit__text'>Уже зарегистрированы?
                        <Link to='/signin' className='submit__span'> Войти</Link>
                    </p>
                </SubmitForm>
            </form>
        </div>
    )

}
export default Register;
