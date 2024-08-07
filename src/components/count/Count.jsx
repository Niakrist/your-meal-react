import React from "react";
import s from "./Count.module.css";
const Count = ({ count, handleMinus, handlePlus }) => {
  return (
    <div className={s.count}>
      <button
        onClick={handleMinus}
        className={s.count__minus}
        disabled={count === 1}>
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
