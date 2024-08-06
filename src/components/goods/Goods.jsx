import React, { useState } from "react";
import s from "./Goods.module.css";
import cn from "classnames";
import Count from "../count/Count";

const Goods = ({ orderItem }) => {
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (count === 1) return;
    setCount((prev) => prev - 1);
  };

  return (
    <li className={s.order__item}>
      <img
        className={s.order__image}
        src="./img/burger_1.jpg"
        alt="Супер сырный"
      />

      <div className={cn(s.order__goods, s.goods)}>
        <h3 className={s.goods__title}>{orderItem}</h3>

        <p className={s.goods__weight}>512г</p>

        <p className={s.goods__price}>
          1279
          <span className={s.currency}>₽</span>
        </p>
      </div>
      <Count count={count} handlePlus={handlePlus} handleMinus={handleMinus} />
    </li>
  );
};

export default Goods;
