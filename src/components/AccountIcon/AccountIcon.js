import React from "react";
import "./AccountIcon.css";
import { Link } from "react-router-dom";
import IconProfile from "../../images/icon__profile.svg"

function AccountIcon() {
    return (
        <div className="account">
            <Link to="/profile" className="account__link">
                <button className='account__button'>
                    <img className='account__icon' src={IconProfile} alt='Схематичный человечек' />
                    <p className='account__title'>Аккаунт</p>
                </button>
            </Link>
        </div>
    )
}

export default AccountIcon;
