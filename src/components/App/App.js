import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import auth from "../../utils/auth";
import { mainApi } from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";
import InfoTooltip from "../InfoTooltip/InfoTooltip";


function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ data: {} });
  const [isLoading, setIsLoading] = useState(true);
  const [isNotifyPopupOpen, setIsNotifyPopupOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState(true);

  const navigate = useNavigate();

  //управление формой регистрации
  const handleSignUp = async ({ name, email, password }) => {
    try {
      const data = await auth.signUp({ name, email, password });
      if (data) {
        localStorage.setItem('token', data.token)
        setIsLoggedIn(true);
        navigate("/movies");
        setStatusMessage(`Вы успешно зарегистрированы! Сейчас будете перенаправлены на страницу "Фильмы"`)
      }
    } catch (err) {
      console.log(err);
      setIsNotifyPopupOpen(true)
      setStatusMessage(`Произошла ошибка регистрации:${err}`)
    } finally {
      setIsNotifyPopupOpen(true)
    }
  }

  //управление формой авторизации
  const handleSignIn = async ({ email, password }) => {
    try {
      const data = await auth.signIn({ email, password })
      if (data) {
        localStorage.setItem('token', data.token)
        setIsLoggedIn(true);
        navigate("/movies");
      }
    } catch (err) {
      console.log(err);
      setIsNotifyPopupOpen(true)
      setStatusMessage(`Произошла ошибка авторизации:${err}`)
    }
  }

  //проверка
  const checkToken = () => {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    auth.getAuthentication(token)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    checkToken();
  }, []);

  //выход пользователя со страницыgetUserInfo
  const handleSignOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setStatusMessage(`Вы успешно вышли!`);
    setCurrentUser({ data: {} });
    setIsNotifyPopupOpen(true);
    navigate('/');
  }

  //получение информации о пользователе с сервера
  const getCurrentUserInfo = async () => {
    try {
      const currentUserInfo = await mainApi.getUserInfo();
      setCurrentUser(currentUserInfo);
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  //редактирование информации о пользователе
  const handleUpdateUserData = async ({ name, email }) => {
    try {
      const updatedUserData = await mainApi.setUserInfo({ name, email });
      setCurrentUser(updatedUserData);
      setStatusMessage(`Данные успешно обновлены!`)
    } catch (err) {
      console.log(err)
      setStatusMessage(`Ошибка обновления данных.`)
    } finally {
      setIsNotifyPopupOpen(true)
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      getCurrentUserInfo();
    }
  }, [isLoggedIn])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={
              <ProtectedRoute element={Movies} isLoggedIn={isLoggedIn} isLoading={isLoading} setIsLoading={setIsLoading} />
            } />
            <Route path="/saved-movies" element={
              <ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} isLoading={isLoading} setIsLoading={setIsLoading} />
            } />
            <Route path="/profile" element={
              <ProtectedRoute element={Profile} isLoggedIn={isLoggedIn} onSignOut={handleSignOut} onUpdateUserData={handleUpdateUserData} />
            } />
            <Route path="/signup" element={isLoggedIn
              ? <Navigate to="/" />
              :
              <Register
                onSubmit={handleSignUp}

              />}
            />
            <Route path="/signin" element={isLoggedIn
              ? <Navigate to="/" />
              :
              <Login
                onSubmit={handleSignIn}
              />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <InfoTooltip
            name="notify"
            isOpen={isNotifyPopupOpen}
            setPopupOpened={setIsNotifyPopupOpen}
            statusMessage={statusMessage}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
