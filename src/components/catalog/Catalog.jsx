import React, { useEffect } from "react";
import Container from "../container/Container";
import s from "./Catalog.module.css";
import cn from "classnames";
import Order from "../order/Order";
import Product from "../product/Product";

import { useDispatch, useSelector } from "react-redux";
import { productFetch } from "../../store/product/productSlice";

const Catalog = () => {
  const { product } = useSelector((state) => state.product);
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productFetch(category[activeCategory]?.title));
  }, [category, activeCategory]);

  return (
    <section className={s.catalog}>
      <Container>
        <div className={s.catalog__container}>
          <div className={cn(s.catalog__order, s.order)}>
            <Order />
          </div>

          <div className={s.catalog__wrapper}>
            <h2 className={s.catalog__title}>
              {category[activeCategory]?.rus}
            </h2>
            <div className={s.catalog__wrap_list}>
              {product.length < 1 && (
                <h3>К сожалению товаров данной категории нет</h3>
              )}

              <ul className={s.catalog__list}>
                {product.map((good) => (
                  <li key={good.id} className={s.catalog__item}>
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
