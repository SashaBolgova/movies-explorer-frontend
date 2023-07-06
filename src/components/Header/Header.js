import React, { useContext } from "react";
import { useLocation } from 'react-router-dom';
import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import NavigationOut from "../NavigationOut/NavigationOut";
import AccountIcon from "../AccountIcon/AccountIcon";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header() {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  return (
    <header className={`header__logging ${location.pathname !== "/" ? 'header__logging_in' : ''}`}>
      <div className="header__container">
        <div className="header__nav">
          <Logo />
          <div className="header__links">{currentUser.name ? <Navigation /> : null}</div>
        </div>
        <div className="header__menu">
          {currentUser.name ? (
            <>
              <AccountIcon />
              <BurgerMenu />
            </>
          ) : (
            <NavigationOut />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header;
