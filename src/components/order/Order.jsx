import React from "react";
import s from "./Order.module.css";
import cn from "classnames";

const Order = () => {
  return (
    <section className={s.order__wrapper}>
      <div className={s.order__header} tabIndex="0" role="button">
        <h2 className={s.order__title}>Корзина</h2>

        <span className={s.order__count}>4</span>
      </div>

      <div className={s.order__wrap_list}>
        <ul className={s.order__list}>
          <li className={s.order__item}>
            <img
              className={s.order__image}
              src="./img/burger_1.jpg"
              alt="Супер сырный"
            />

            <div className={cn(s.order__goods, s.goods)}>
              <h3 className={s.goods__title}>Супер сырный</h3>

              <p className={s.goods__weight}>512г</p>

              <p className={s.goods__price}>
                1279
                <span className={s.currency}>₽</span>
              </p>
            </div>

            <div className={s.count}>
              <button className={s.count__minus}>-</button>
              <p className={s.count__amount}>1</p>
              <button className={s.count__plus}>+</button>
            </div>
          </li>

          <li className={s.order__item}>
            <img
              className={s.order__image}
              src="./img/free_1.jpg"
              alt="Картошка фри"
            />

            <div className={cn(s.order__goods, s.goods)}>
              <h3 className={s.goods__title}>Картошка фри</h3>

              <p className={s.goods__weight}>180г</p>

              <p className={s.goods__price}>
                245
                <span className={s.currency}>₽</span>
              </p>
            </div>

            <div className={s.count}>
              <button className={s.count__minu}>-</button>
              <p className={s.count__amount}>2</p>
              <button className={s.count__plus}>+</button>
            </div>
          </li>

          <li className={s.order__item}>
            <img
              className={s.order__image}
              src="./img/hot-dog_1.jpg"
              alt="Жгучий хот-дог"
            />

            <div className={cn(s.order__goods, s.goods)}>
              <h3 className={s.goods__title}>Жгучий хот-дог</h3>

              <p className={s.goods__weight}>245г</p>

              <p className={s.goods__price}>
                239
                <span className={s.currency}>₽</span>
              </p>
            </div>

            <div className={s.count}>
              <button className={s.count__minus}>-</button>
              <p className={s.count__amount}>1</p>
              <button className={s.count__plus}>+</button>
            </div>
          </li>
        </ul>

        <div className={s.order__total}>
          <p>Итого</p>
          <p>
            <span className={s.order__amount}>1279</span>
            <span className={s.currency}>₽</span>
          </p>
        </div>

        <button className={s.order__submit}>Оформить заказ</button>

        <div className={s.order__apeal}>
          <p className={s.order__text}>Бесплатная доставка</p>
          <button className={s.order__close}>Свернуть</button>
        </div>
      </div>
    </section>
  );
};

export default Order;
