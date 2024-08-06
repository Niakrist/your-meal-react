import React from "react";
import Container from "../container/Container";
import s from "./Catalog.module.css";
import cn from "classnames";
import Order from "../order/Order";
import Product from "../product/Product";

import { goodsList } from "../../data/goodsList.js";

const Catalog = () => {
  return (
    <section className={s.catalog}>
      <Container>
        <div className={s.catalog__container}>
          <div className={cn(s.catalog__order, s.order)}>
            <Order />
          </div>

          <div className={s.catalog__wrapper}>
            <h2 className={s.catalog__title}>Бургеры</h2>

            <div className={s.catalog__wrap_list}>
              <ul className={s.catalog__list}>
                {goodsList.map((good) => (
                  <li key={good.title} className={s.catalog__item}>
                    <Product good={good} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
