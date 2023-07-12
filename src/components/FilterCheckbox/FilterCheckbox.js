import { React } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox (props) {
    const { value, onChange } = props;

    const handleFilterCheckbox = () => {
        onChange(!value);
    }

    return (
        <>
            <div className={
                value
                    ? "filter-checkbox__tumbler_on"
                    : "filter-checkbox__tumbler_off"
            } onClick={handleFilterCheckbox}>
            </div>
            <label className="filter-checkbox__label" onClick={handleFilterCheckbox}>Короткометражки</label>
        </>
    );
}

export default FilterCheckbox;
