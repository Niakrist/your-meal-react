import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import s from "./Navigation.module.css";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import {
  changeActiveCategory,
  categoryFetch,
} from "../../store/category/categorySlice";
import { API_URL } from "../../constans";

const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryFetch());
  }, []);

  const handleClick = (index) => {
    dispatch(changeActiveCategory({ indexCategory: index }));
  };

  if (!category) return <h1>Загрузка</h1>;

  return (
    <nav className={s.navigation}>
      <Container className={s.container}>
        <ul className={s.list}>
          {category.map((elem, index) => (
            <li key={elem.title} className={s.item}>
              <button
                onClick={() => handleClick(index)}
                style={{ backgroundImage: `url(${API_URL}${elem.image})` }}
                className={cn(
                  s.button,
                  index === activeCategory ? s.button_active : ""
                )}>
                {elem.rus}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
