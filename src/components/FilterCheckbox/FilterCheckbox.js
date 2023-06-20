import { React, useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
    const { shortFilm } = props;
    const [isFilterCheckboxOn, setIsFilterCheckboxOn] = useState(shortFilm);

    const handleFilterCheckbox = () => {
        setIsFilterCheckboxOn(!isFilterCheckboxOn);
    }

    return (
        <div className={
            isFilterCheckboxOn
                ? "filter-checkbox__on"
                : "filter-checkbox__off"
        } onClick={handleFilterCheckbox}>
        </div>
    );
}

export default FilterCheckbox;
