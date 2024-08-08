import React, { useEffect } from "react";
import s from "./Order.module.css";
import Goods from "../goods/Goods";
import { useDispatch, useSelector } from "react-redux";
import { orderRequestAsync } from "../../store/order/orderSlice";

const Order = () => {
  const { orderGoods, totalPrice, totalCount, orderProduct } = useSelector(
    (state) => state.order
  );

  // const { productsInCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderProduct.length]);

  return (
    <section className={s.order__wrapper}>
      <div className={s.order__header} tabIndex="0" role="button">
        <h2 className={s.order__title}>Корзина</h2>

        <span className={s.order__count}>{totalCount}</span>
      </div>

      <div className={s.order__wrap_list}>
        <ul className={s.order__list}>
          {orderGoods.map((orderItem) => (
            <Goods key={orderItem.id} orderItem={orderItem} />
          ))}
        </ul>

        <div className={s.order__total}>
          <p>Итого</p>
          <p>
            <span className={s.order__amount}>{totalPrice}</span>
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
