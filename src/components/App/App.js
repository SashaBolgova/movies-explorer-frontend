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


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [currentUser, setCurrentUser] = useState({ data: {} });
  const [requestStatus, setRequestStatus] = useState(false);

  const navigate = useNavigate();

  //управление формой регистрации
  const handleSignUp = (data) => {
    auth
      .signUp(data)
      .then((res) => {
        if (res) {
          setRequestStatus(true);
        }
      })
      .then(() => handleSignIn(data))
      .then((data) => {
        auth.signIn(data.email, data.password);
      })
      .catch((err) => {
        console.log(err);
        setRequestStatus(false);
      });
  };

  function handleLogin() {
    setIsLoggedIn(true);
  }

  //управление формой авторизации
  const handleSignIn = (data) => {
    auth
      .signIn(data.email, data.password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
      })
      .then(() => {
        handleLogin();
      })
      .then(() => navigate('/movies'))
      .then(() => {
        auth.getUserData().then((data) => {
          setCurrentUser(data);
        });
      })
      .catch((err) => {
        setRequestStatus(false);
        console.log(err);
      })
  };

  //проверка токена
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth
        .getAuthentication(token)
        .then((res) => {
          if (res) {
            handleLogin();
            setIsChecking(false);
          }
        })
        .then(() => {
          mainApi.getUserInfo().then((data) => {
            setCurrentUser(data);
          });
        })
        .catch((err) => console.log(err));
    } else {
      setIsChecking(false);
    }
  }, [isLoggedIn, navigate]);

  //выход пользователя со страницы
  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('allMovies');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('isShort');
    localStorage.removeItem('search');
    localStorage.removeItem('allSavedMovies');
    setCurrentUser(null)
    setIsLoggedIn(false);
    navigate('/');
  }

  //редактирование информации о пользователе
  const handleUpdateUserData = async ({ name, email }) => {
    try {
      const updatedUserData = await mainApi.setUserInfo({ name, email });
      setCurrentUser(updatedUserData);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}
              isChecking={isChecking}>
                <Movies />
              </ProtectedRoute>
            } />
            <Route path="/saved-movies" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}
              isChecking={isChecking}>
                <SavedMovies />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}
              isChecking={isChecking}>
                <Profile onSignOut={handleSignOut} onUpdateUserData={handleUpdateUserData} />
              </ProtectedRoute>
            } />
            <Route path="/signup" element={isLoggedIn
              ? <Navigate to="/" />
              :
              <Register
                onSubmit={handleSignUp}
                isRequestStatus={requestStatus}
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
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
