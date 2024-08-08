import React, { useState } from "react";
import s from "./Goods.module.css";
import cn from "classnames";
import Count from "../count/Count";
import { API_URL } from "../../constans";

const Goods = ({ orderItem }) => {
  return (
    <li className={s.order__item}>
      <img
        className={s.order__image}
        src={API_URL + orderItem.image}
        alt={orderItem.title}
      />

      <div className={cn(s.order__goods, s.goods)}>
        <h3 className={s.goods__title}>{orderItem.title}</h3>

        <p className={s.goods__weight}>{orderItem.weight}г</p>

        <p className={s.goods__price}>
          {orderItem.price * orderItem.quantity}
          <span className={s.currency}>₽</span>
        </p>
      </div>
      <Count id={orderItem.id} count={orderItem.quantity} />
    </li>
  );
};

export default Goods;
