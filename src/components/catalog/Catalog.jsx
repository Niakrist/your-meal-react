import React from "react";
import Container from "../container/Container";
import s from "./Catalog.module.css";
import cn from "classnames";
import Order from "../order/Order";
import Product from "../product/Product";

const Catalog = () => {
  return (
    <section className={s.catalog}>
      <Container className={s.catalog__container}>
        <div className={cn(s.catalog__order, s.order)}>
          <Order />
        </div>

        <div className={s.catalog__wrapper}>
          <h2 className={s.catalog__title}>Бургеры</h2>

          <div className={s.catalog__wrap_list}>
            <ul className={s.catalog__list}>
              <li className={s.catalog__item}>
                <Product />
              </li>
              <li className={s.catalog__item}>
                <Product />
              </li>
              <li className={s.catalog__item}>
                <Product />
              </li>
              <li className={s.catalog__item}>
                <Product />
              </li>
              <li className={s.catalog__item}>
                <Product />
              </li>
              <li className={s.catalog__item}>
                <Product />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
