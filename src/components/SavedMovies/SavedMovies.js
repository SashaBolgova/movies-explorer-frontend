import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import "./SavedMovies.css";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import card__pic1 from "../../images/card__pic1.jpg";
import card__pic2 from "../../images/card__pic2.jpg";
import card__pic3 from "../../images/card__pic3.jpg";

function SavedMovies(props) {
    const { isLiked } = props;
    const location = useLocation();
    const [isLikedMovie, setIsLikedMovie] = useState(isLiked);

    const handleLikes = () => {
        setIsLikedMovie(!isLikedMovie);
    }


    return (
        <>
            <Header />
            <main>
                <SearchForm />
                <MoviesCardList>
                    <MoviesCard>
                        <img className="movies-card__cover" src={card__pic1} alt="кадр из фильма" />
                        <div className="movies-card__legend">
                            <h3 className="movies-card__title">33 слова о дизайне</h3>
                            {location.pathname === '/movies' ?
                                <button
                                    className={`movies-card__like ${isLikedMovie ? 'movies-card__like_active' : ''}`}
                                    type="button"
                                    onClick={handleLikes}>
                                </button>
                                :
                                <button className="movies-card__delete" type="button"></button>}
                        </div>
                        <label className="movies-card__duration">1ч 47м</label>
                    </MoviesCard>
                    <MoviesCard>
                        <img className="movies-card__cover" src={card__pic2} alt="кадр из фильма" />
                        <div className="movies-card__legend">
                            <h3 className="movies-card__title">Киноальманах "100 лет дизайна"</h3>
                            {location.pathname === '/movies' ?
                                <button
                                    className={`movies-card__like ${isLikedMovie ? 'movies-card__like_active' : ''}`}
                                    type="button"
                                    onClick={handleLikes}>
                                </button>
                                :
                                <button className="movies-card__delete" type="button"></button>}
                        </div>
                        <label className="movies-card__duration">1ч 3м</label>
                    </MoviesCard>
                    <MoviesCard>
                        <img className="movies-card__cover" src={card__pic3} alt="кадр из фильма" />
                        <div className="movies-card__legend">
                            <h3 className="movies-card__title">В погоне за Бенкси</h3>
                            {location.pathname === '/movies' ?
                                <button
                                    className={`movies-card__like ${isLikedMovie ? 'movies-card__like_active' : ''}`}
                                    type="button"
                                    onClick={handleLikes}>
                                </button>
                                :
                                <button className="movies-card__delete" type="button"></button>}
                        </div>
                        <label className="movies-card__duration">1ч 42м</label>
                    </MoviesCard>
                </MoviesCardList>
            </main>
            <div className="saved-movies-gap"></div>
            <Footer />
        </>
    )
}

export default SavedMovies;
