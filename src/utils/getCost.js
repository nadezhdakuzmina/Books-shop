export const getCost = cart =>
  cart.reduce((sum, item) => {
    return sum + item.price * item.counter;
  }, 0);
