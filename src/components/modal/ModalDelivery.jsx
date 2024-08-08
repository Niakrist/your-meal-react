import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { submitform, upDateFormValue } from "../../store/form/formSlice";
import { toggleModal } from "../../store/modal/modalSlice";
import style from "./ModalDelivery.module.css";

export const ModalDelivery = () => {
  const { isModal } = useSelector((state) => state.modal);
  // const { name, phone, format, address, floor, intercom } = useSelector(
  //   (state) => state.form
  // );
  const form = useSelector((state) => state.form);
  const { orderProduct } = useSelector((state) => state.order);
  const dispath = useDispatch();

  const closeModal = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      dispath(toggleModal(false));
    }
  };

  const handleChange = ({ target }) => {
    dispath(upDateFormValue({ field: target.name, value: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispath(
      submitform({
        ...form,
        orderProduct,
      })
    );
  };

  return (
    isModal && (
      <div onClick={closeModal} className={style.modal}>
        <div className={style.mdelivery}>
          <div className={style.container}>
            <h2 className={style.title}>Доставка</h2>

            <form className={style.form} id="delivery" onSubmit={handleSubmit}>
              <fieldset className={style.fieldset}>
                <input
                  className={style.input}
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="Ваше имя"
                  onChange={handleChange}
                />
                <input
                  className={style.input}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  placeholder="Телефон"
                  onChange={handleChange}
                />
              </fieldset>

              <fieldset className={style.fieldset_radio}>
                <label className={style.label}>
                  <input
                    className={style.radio}
                    type="radio"
                    name="format"
                    value="pickup"
                    checked={form.format === "pickup"}
                    onChange={handleChange}
                  />
                  <span>Самовывоз</span>
                </label>

                <label className={style.label}>
                  <input
                    className={style.radio}
                    type="radio"
                    name="format"
                    value="delivery"
                    checked={form.format === "delivery"}
                    onChange={handleChange}
                  />
                  <span>Доставка</span>
                </label>
              </fieldset>

              {form.format === "delivery" && (
                <fieldset className={style.fieldset}>
                  <input
                    className={style.input}
                    type="text"
                    name="address"
                    value={form.address}
                    placeholder="Улица, дом, квартира"
                    onChange={handleChange}
                  />
                  <input
                    className={classNames(style.input, style.input_half)}
                    type="number"
                    name="floor"
                    placeholder="Этаж"
                    value={form.floor}
                    onChange={handleChange}
                  />
                  <input
                    className={classNames(style.input, style.input_half)}
                    type="number"
                    name="intercom"
                    placeholder="Домофон"
                    value={form.intercom}
                    onChange={handleChange}
                  />
                </fieldset>
              )}
            </form>

            <button className={style.submit} type="submit" form="delivery">
              Оформить
            </button>
          </div>

          <button
            className={style.modal__close}
            type="button"
            onClick={() => dispath(toggleModal(false))}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="5.07422"
                y="5.28247"
                width="1"
                height="20"
                transform="rotate(-45 5.07422 5.28247)"
              />
              <rect
                x="5.78125"
                y="19.4246"
                width="1"
                height="20"
                transform="rotate(-135 5.78125 19.4246)"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};
