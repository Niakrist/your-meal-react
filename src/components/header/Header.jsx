import React from "react";
import s from "./Header.module.css";
import cn from "classnames";

import logoSrc from "../../assets/img/logo.svg";
import Container from "../container/Container";

const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.header__container}>
        <img className={s.header__logo} src={logoSrc} alt="Логотип YourMeal" />
        <div className={s.header__wrapper}>
          <h1 className={s.header__title}>
            <span>Только самые</span>
            <span className={s.header__red}>сочные бургеры!</span>
          </h1>

          <p className={s.header__appeal}>Бесплатная доставка от 599₽</p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
