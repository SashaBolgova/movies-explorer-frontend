import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import "./Movies.css";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import card__pic1 from "../../images/card__pic1.jpg";
import card__pic2 from "../../images/card__pic2.jpg";
import card__pic3 from "../../images/card__pic3.jpg";
import card__pic4 from "../../images/card__pic4.jpg";
import card__pic5 from "../../images/card__pic5.jpg";
import card__pic6 from "../../images/card__pic6.jpg";
import card__pic7 from "../../images/card__pic7.jpg";
import card__pic8 from "../../images/card__pic8.jpg";
import card__pic9 from "../../images/card__pic9.jpg";
import card__pic10 from "../../images/card__pic10.jpg";
import card__pic11 from "../../images/card__pic11.jpg";
import card__pic12 from "../../images/card__pic12.jpg";

function Movies(props) {
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
                    <MoviesCard>
                        <img className="movies-card__cover" src={card__pic4} alt="кадр из фильма" />
                        <div className="movies-card__legend">
                            <h3 className="movies-card__title">Баския: Взрыв реальности</h3>
                            {location.pathname === '/movies' ?
                                <button
                                    className={`movies-card__like ${isLikedMovie ? 'movies-card__like_active' : ''}`}
                                    type="button"
                                    onClick={handleLikes}>
                                </button>
                                :
                                <button className="movies-card__delete" type="button"></button>}
                        </div>
                        <label className="movies-card__duration">1ч 21м</label>
                    </MoviesCard>
                    <MoviesCard>
                        <img className="movies-card__cover" src={card__pic5} alt="кадр из фильма" />
                        <div className="movies-card__legend">
                            <h3 className="movies-card__title">Бег это свобода</h3>
                            {location.pathname === '/movies' ?
                                <button
                                    className={`movies-card__like ${isLikedMovie ? 'movies-card__like_active' : ''}`}
                                    type="button"
                                    onClick={handleLikes}>
                                </button>
                                :
                                <button className="movies-card__delete" type="button"></button>}
                        </div>
                        <label className="movies-card__duration">1ч 44м</label>
                    </MoviesCard>
                    <MoviesCard>
                        <img className="movies-card__cover" src={card__pic6} alt="кадр из фильма" />
                        <div className="movies-card__legend">
                            <h3 className="movies-card__title">Книготорговцы</h3>
                            {location.pathname === '/movies' ?
                                <button
                                    className={`movies-card__like ${isLikedMovie ? 'movies-card__like_active' : ''}`}
                                    type="button"
                                    onClick={handleLikes}>
                                </button>
                                :
                                <button className="movies-card__delete" type="button"></button>}
                        </div>
                        <label className="movies-card__duration">1ч 37м</label>
                    </MoviesCard>
                    <MoviesCard>
                        <img className="movies-card__cover" src={card__pic7} alt="кадр из фильма" />
                        <div className="movies-card__legend">
                            <h3 className="movies-card__title">Когда я думаю о Германии ночью</h3>
                            {location.pathname === '/movies' ?
                                <button
                                    className={`movies-card__like ${isLikedMovie ? 'movies-card__like_active' : ''}`}
                                    type="button"
                                    onClick={handleLikes}>
                                </button>
                                :
                                <button className="movies-card__delete" type="button"></button>}
                        </div>
                        <label className="movies-card__duration">1ч 56м</label>
                    </MoviesCard>
                    <MoviesCard>
                        <img className="movies-card__cover" src={card__pic8} alt="кадр из фильма" />
                        <div className="movies-card__legend">
                            <h3 className="movies-card__title">Gimme Danger: История Игги и The Stooge...</h3>
                            {location.pathname === '/movies' ?
                                <button
                                    className={`movies-card__like ${isLikedMovie ? 'movies-card__like_active' : ''}`}
                                    type="button"
                                    onClick={handleLikes}>
                                </button>
                                :
                                <button className="movies-card__delete" type="button"></button>}
                        </div>
                        <label className="movies-card__duration">1ч 59м</label>
                    </MoviesCard>
                    <MoviesCard>
                        <img className="movies-card__cover" src={card__pic9} alt="кадр из фильма" />
                        <div className="movies-card__legend">
                            <h3 className="movies-card__title">Дженис: Маленькая девочка грустит</h3>
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
                    <MoviesCard>
                        <img className="movies-card__cover" src={card__pic10} alt="кадр из фильма" />
                        <div className="movies-card__legend">
                            <h3 className="movies-card__title">Соберись перед прыжком</h3>
                            {location.pathname === '/movies' ?
                                <button
                                    className={`movies-card__like ${isLikedMovie ? 'movies-card__like_active' : ''}`}
                                    type="button"
                                    onClick={handleLikes}>
                                </button>
                                :
                                <button className="movies-card__delete" type="button"></button>}
                        </div>
                        <label className="movies-card__duration">1ч 10м</label>
                    </MoviesCard>
                    <MoviesCard>
                        <img className="movies-card__cover" src={card__pic11} alt="кадр из фильма" />
                        <div className="movies-card__legend">
                            <h3 className="movies-card__title">Пи Джей Харви: A dog called money</h3>
                            {location.pathname === '/movies' ?
                                <button
                                    className={`movies-card__like ${isLikedMovie ? 'movies-card__like_active' : ''}`}
                                    type="button"
                                    onClick={handleLikes}>
                                </button>
                                :
                                <button className="movies-card__delete" type="button"></button>}
                        </div>
                        <label className="movies-card__duration">1ч 4м</label>
                    </MoviesCard>
                    <MoviesCard>
                        <img className="movies-card__cover" src={card__pic12} alt="кадр из фильма" />
                        <div className="movies-card__legend">
                            <h3 className="movies-card__title">По волнам: Искусство звука в кино</h3>
                            {location.pathname === '/movies' ?
                                <button
                                    className={`movies-card__like ${isLikedMovie ? 'movies-card__like_active' : ''}`}
                                    type="button"
                                    onClick={handleLikes}>
                                </button>
                                :
                                <button className="movies-card__delete" type="button"></button>}
                        </div>
                        <label className="movies-card__duration">1ч 7м</label>
                    </MoviesCard>
                </MoviesCardList>
                <div className="movies-more-wrap">
                    <button className="movies-more-button" type="button">Ещё</button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Movies;
