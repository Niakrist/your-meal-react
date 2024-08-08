export const calcTotal = (orderGoods) => {
  return orderGoods.reduce(
    ([totalCount, totalPrice], item) => {
      const sumCount = totalCount + item.quantity;
      const sumPrice = totalPrice + item.price * item.quantity;
      return [sumCount, sumPrice];
    },
    [0, 0]
  );
};
