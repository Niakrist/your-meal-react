import React from "react";
import s from "./Product.module.css";
const Product = () => {
  return (
    <article className={s.product}>
      <img
        src="./img/photo-5.jpg"
        alt="Мясная бомба"
        className={s.product__image}
      />

      <p className={s.product__price}>
        689<span className={s.currency}>₽</span>
      </p>

      <h3 className={s.product__title}>
        <button className={s.product__detail}>Мясная бомба</button>
      </h3>

      <p className={s.product__weight}>520г</p>

      <button className={s.product__add} type="button">
        Добавить
      </button>
    </article>
  );
};

export default Product;
