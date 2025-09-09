export const syncCartWithLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};
