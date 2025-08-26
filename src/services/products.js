import { getHttp } from '@/services/http';
const allProductsEndpoint = 'all-products.json';

const getAllProducts = () => {
  return getHttp(allProductsEndpoint);
};

export { getAllProducts };
