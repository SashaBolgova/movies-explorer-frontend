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
                ? "filter-checkbox__tumbler_on"
                : "filter-checkbox__tumbler_off"
        } onClick={handleFilterCheckbox}>
        </div>
    );
}

export default FilterCheckbox;
