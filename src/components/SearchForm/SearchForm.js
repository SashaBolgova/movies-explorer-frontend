import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <div className="search">
            <form className="search__container" >
                <input className="search__input"
                    placeholder="Фильм"
                    type="text"
                    required
                />
                <button className="search__button" type="submit">Найти</button>
            </form>
            <div className="search__checkbox">
                <FilterCheckbox />
                <label className="search__label">Короткометражки</label>
            </div>
        </div>
    );

}

export default SearchForm;
