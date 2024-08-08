import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/order/orderSlice";
import s from "./Count.module.css";
const Count = ({ count, id }) => {
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(addToCart({ id }));
  };

  const handleMinus = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className={s.count}>
      <button onClick={handleMinus} className={s.count__minus}>
        -
      </button>
      <p className={s.count__amount}>{count}</p>
      <button onClick={handlePlus} className={s.count__plus}>
        +
      </button>
    </div>
  );
};

export default Count;
