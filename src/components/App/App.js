import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [currentUser, setcurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={
              <Movies />
            } />
            <Route path="/saved-movies" element={
              <SavedMovies />
            } />
            <Route path="/profile" element={
              <Profile />
            } />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
