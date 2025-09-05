import { getHttp } from '@/services/http';
const allProductsEndpoint = 'all-products.json';

const getAllProducts = () => {
  return getHttp(allProductsEndpoint);
};

const calculateDiscount = (price) => {
  const { currentPrice, percentage } = price;
  return Math.round(currentPrice - currentPrice * (percentage / 100));
};

// TO DELETE: There's no need to use this methods with real API.
// It's created for Back-End response timing emulation
const getAllProductsDelayed = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getHttp(allProductsEndpoint));
    }, 1500);
  });
};

export { getAllProducts, getAllProductsDelayed, calculateDiscount };
