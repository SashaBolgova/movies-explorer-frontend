import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm (props) {
    const { onSearchFormSubmit, isShortFilm, setIsShortFilm, initialValue, isLoading = false } = props;
    const [search, setSearch] = useState(initialValue ?? '');
    const [error, setError] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        if (search === '') {
            setError('Нужно ввести ключевое слово');
        } else {
            onSearchFormSubmit(search);
            setError('');
        }

    };

    return (
        <div className="search">
            <form className="search__container" onSubmit={handleSearchSubmit}>
                <input className="search__input"
                    placeholder="Фильм"
                    type="text"
                    required
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                />
                <button className="search__button" type="submit" disabled={isLoading}>Найти</button>
            </form>
            {!search && (<span className="search__error-text">{error}</span>)}
            <div className="search__checkbox">
                <FilterCheckbox value={isShortFilm} onChange={setIsShortFilm} />
            </div>
        </div>
    );

}

export default SearchForm;
