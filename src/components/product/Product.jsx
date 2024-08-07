import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../constans";
import { addToCart } from "../../store/order/orderSlice";
import s from "./Product.module.css";
const Product = ({ good }) => {
  const { orderProduct } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  return (
    <article className={s.product}>
      <img
        src={API_URL + good.image}
        alt={good.title}
        className={s.product__image}
      />

      <p className={s.product__price}>
        {good.price}
        <span className={s.currency}>₽</span>
      </p>

      <h3 className={s.product__title}>
        <button className={s.product__detail}>{good.title}</button>
      </h3>

      <p className={s.product__weight}>{good.weight}г</p>

      <button
        onClick={() => dispatch(addToCart({ id: good.id, quantity: 1 }))}
        className={s.product__add}
        type="button">
        Добавить
      </button>
    </article>
  );
};

export default Product;
