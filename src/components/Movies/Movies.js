import React, { useMemo, useState, useEffect, useCallback } from "react";
import "./Movies.css";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { SERVER_ERROR_MSG, NOTFOUND_ERROR_MSG } from "../../utils/constants";

function Movies (props) {
    const { error, isLoading, setIsLoading } = props;
    const [movies, setMovies] = useState([]);
    const [filteredMoviesList, setFilteredMoviesList] = useState([]);
    const [savedMoviesList, setSavedMoviesList] = useState([]);
    const [isShortFilm, setIsShortFilm] = useState(() => {
        const savedIsShort = localStorage.getItem("isShort");
        return savedIsShort === "true"
    });
    const [search, setSearch] = useState(localStorage.getItem('search') ?? '');
    const [firstSearch, setFirstSearch] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [cardsToLoad, setCardsToLoad] = useState(0);

    //добавление фильма в сохраненные, управление кнопкой лайка
    const handleAddMovieToSaved = async (movie) => {
        try {
            if (!movie.isLiked) {
                const newMovie = await mainApi.saveMovie(movie);
                const newArray = [newMovie, ...savedMoviesList];
                localStorage.setItem('savedMovies', JSON.stringify(newArray))
                setSavedMoviesList(newArray);
            } else {
                await handleDeleteMovie(movie)
            }

        } catch (err) {
            console.log(err);
        }
    }

    //удаление фильма из сохраненных
    const handleDeleteMovie = async (movie) => {
        try {
            const movieToDelete = savedMoviesList.find((m) => m.movieId === movie.id)
            await mainApi.deleteMovie(movieToDelete._id);
            const newArray = savedMoviesList.filter((m) => m.movieId !== movie.id);
            localStorage.setItem('savedMovies', JSON.stringify(newArray))
            setSavedMoviesList(newArray)
        } catch (err) {
            console.log(err)
        }
    }

    //управление шириной экрана
    const handleResize = useCallback(() => {
        setScreenWidth(window.innerWidth);
    }, [])

    //получение фильмов с сервера beatfilm-movies
    const getMovies = useCallback(async () => {
        setIsLoading(true);
        try {
            const apiMovies = await moviesApi.getMovies();
            setMovies(apiMovies);
            // setMovies(initialFilmList);
            localStorage.setItem("allMovies", JSON.stringify(apiMovies));
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false)
        }
    }, [])

    //получение сохраненных фильмов с сервера
    const getSavedMovies = async () => {
        setIsLoading(true)
        try {
            const apiSavedMovies = await mainApi.getSavedMovies();
            setSavedMoviesList(apiSavedMovies);
            // setSavedMoviesList(initialSavedFilms)
            localStorage.setItem("savedMovies", JSON.stringify(apiSavedMovies));

        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false)
        }
    }

    // загрузкa фильмов на страницу
    useEffect(() => {
        const allMoviesInLS = localStorage.getItem("allMovies");
        const savedMoviesInLS = localStorage.getItem("savedMovies");
        if (!allMoviesInLS) { getMovies() } else { setMovies(JSON.parse(allMoviesInLS)) }
        if (!savedMoviesInLS) { getSavedMovies() } else { setSavedMoviesList(JSON.parse(savedMoviesInLS)) }
    }, [])

    // изменение ширины экрана
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    //сохранение состояния фильтра короткометражек
    useEffect(() => {
        localStorage.setItem('isShort', String(isShortFilm)); // проверить, правильно ли превращается в текст
    }, [isShortFilm]);



    // фильтр фильмов по ключевым словам и короткометражкам
    const filteredMovies = useMemo(() => {
        if (!search) {
            return [];
        }
        const filtered = movies.filter((movie) => {
            const nameRU = movie.nameRU.toLowerCase();
            const nameEN = movie.nameEN.toLowerCase();
            if (isShortFilm && movie.duration > 40) {
                return false;
            }
            return nameRU.includes(search) || nameEN.includes(search);
        })

        localStorage.setItem("search", search);
        localStorage.setItem("isShort", String(isShortFilm));
        localStorage.setItem("filteredMovies", JSON.stringify(filtered));
        setFilteredMoviesList(filtered);

        return filtered
    }, [movies, isShortFilm, search]);

    // отображение карточек с фильмами в зависимости от разрешения
    const moviesToRender = useMemo(() => {
        const countToRender = screenWidth < 768 ? 5 : screenWidth < 1280 ? 8 : 12;

        return filteredMovies
            .slice(0, countToRender + cardsToLoad)
            .map((movie) => ({
                ...movie,
                isLiked: savedMoviesList.some((m) => m.movieId === movie.id)
            }));

    }, [filteredMovies, cardsToLoad, screenWidth, savedMoviesList]);

    // управление кнопкой "Еще"
    const handleMoreClick = useCallback(() => {
        if (screenWidth < 1280) {
            setCardsToLoad((prev) => prev + 2);
        } else {
            setCardsToLoad((prev) => prev + 3);
        }

    }, [screenWidth]);

    return (
        <>
            <Header />
            <main>
                <SearchForm
                    onSubmit={filteredMovies}
                    setIsShortFilm={setIsShortFilm}
                    isShortFilm={isShortFilm}
                    onSearchFormSubmit={setSearch}
                    initialValue={search}
                    isLoading={isLoading}
                    setFirstSearch={setFirstSearch}
                />
                {isLoading
                    ? <Preloader />
                    : (
                        <MoviesCardList>
                            {search && moviesToRender.length
                                ? (
                                    moviesToRender.map((movie) => (
                                        <MoviesCard
                                            key={movie.id}
                                            movie={movie}
                                            onMovieLike={handleAddMovieToSaved}
                                            onMovieDelete={handleDeleteMovie}
                                        />
                                    ))
                                ) : (<h2 className="movies-error-title">{error ? SERVER_ERROR_MSG : NOTFOUND_ERROR_MSG}</h2>)}
                        </MoviesCardList>
                    )}
                <div className="movies-more-wrap">
                    {(filteredMovies > moviesToRender) ? (
                        <button className="movies-more-button" type="button" onClick={handleMoreClick}>Ещё</button>) : ''}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Movies;
