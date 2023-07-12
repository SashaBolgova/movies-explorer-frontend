import React, { useMemo, useState, useEffect, useCallback } from "react";
import "./SavedMovies.css";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { SERVER_ERROR_MSG, NOTFOUND_ERROR_MSG } from "../../utils/constants";
import { mainApi } from "../../utils/MainApi";


function SavedMovies (props) {
    const { error, isLoading, setIsLoading } = props;
    const [savedMoviesList, setSavedMoviesList] = useState([]);
    const [isShortFilm, setIsShortFilm] = useState(false);
    const [searchSavedMovies, setSearchSavedMovies] = useState('')
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    //получение сохраненных фильмов с сервера
    const getSavedMovies = useCallback(async () => {
        setIsLoading(true);
        try {
            const apiSavedMovies = await mainApi.getSavedMovies();
            console.log(apiSavedMovies);
            setSavedMoviesList(apiSavedMovies);
            localStorage.setItem("savedMovies", JSON.stringify(apiSavedMovies));
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }, [])

    //хук загрузки фильмов на страницу
    useEffect(() => {
        const savedMoviesInLS = localStorage.getItem("savedMovies") ? JSON.parse(localStorage.getItem("savedMovies")) : false;
        if (savedMoviesInLS) {
            setSavedMoviesList(savedMoviesInLS)
        } else {
            getSavedMovies()
        }
    }, [])

    //удаление фильма из сохраненных
    const handleDeleteMovie = async (movie) => {
        try {
            await mainApi.deleteMovie(movie._id);
            const newArray = savedMoviesList.filter((m) => m._id === movie._id ? '' : m._id);
            setSavedMoviesList(newArray)
            localStorage.setItem('savedMovies', JSON.stringify(newArray))
        } catch (err) {
            console.log(err)
        }
    }

    //управление шириной экрана
    const handleResize = useCallback(() => {
        setScreenWidth(window.innerWidth);
    }, [])

    // хук изменения ширины экрана
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    // фильтр фильмов по ключевым словам и короткометражкам
    const filteredMovies = useMemo(() => {
        const filtered = savedMoviesList.filter((movie) => {
            const nameRU = movie.nameRU.toLowerCase();
            const nameEN = movie.nameEN.toLowerCase();
            if (isShortFilm && movie.duration > 40) {
                return false;
            }
            return nameRU.includes(searchSavedMovies) || nameEN.includes(searchSavedMovies);
        })

        return filtered
    }, [savedMoviesList, isShortFilm, searchSavedMovies]);

    // отображение карточек с фильмами в зависимости от разрешения
    const moviesToRender = useMemo(() => {
        return filteredMovies
            .map((movie) => ({
                ...movie,
                isLiked: savedMoviesList.some((m) => m.movieId === movie.id)
            }));

    }, [filteredMovies, screenWidth, savedMoviesList]);

    const MoviesBlock = () => {

        return (
            <MoviesCardList>
                {!moviesToRender.length ? (<h2 className="movies-error-title">{NOTFOUND_ERROR_MSG}</h2>) : ''}
                {moviesToRender.map((movie) => (
                    <MoviesCard
                        key={movie._id}
                        movie={movie}
                        onMovieDelete={handleDeleteMovie}
                        isOnSavedList={`https://api.nomoreparties.co${movie.image.url}`}
                    />
                ))}
            </MoviesCardList>
        )
    }

    return (
        <>
            <Header />
            <main>
                <SearchForm
                    onSubmit={filteredMovies}
                    setIsShortFilm={setIsShortFilm}
                    isShortFilm={isShortFilm}
                    onSearchFormSubmit={setSearchSavedMovies}
                    initialValue={searchSavedMovies}
                    isLoading={isLoading}
                />

                {isLoading
                    ? <Preloader />
                    : (
                        <>
                            {error && <h2 className="movies-error-title">{SERVER_ERROR_MSG}</h2>}
                            <MoviesBlock />
                        </>
                    )}
            </main>
            <div className="saved-movies-gap"></div>
            <Footer />
        </>
    )
}

export default SavedMovies;
