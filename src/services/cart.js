import { calculateDiscount } from '@/services/products';

const syncCartWithLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const countTotal = (cart) => {
  return cart.reduce((accumulator, currentValue) => {
    const price = currentValue.price.hasDiscount
      ? calculateDiscount(currentValue.price)
      : currentValue.price.currentPrice;
    return accumulator + price * currentValue.quantity;
  }, 0);
};

const confirmAndSaveOrder = (data) => {
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(data);
  localStorage.setItem('orders', JSON.stringify(orders));
};

export { syncCartWithLocalStorage, countTotal, confirmAndSaveOrder };
