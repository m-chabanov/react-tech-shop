import { getHttp } from '@/services/http';
const allManufacturersEndpoint = 'all-manufacturers.json';

const getAllManufacturers = () => {
  return getHttp(allManufacturersEndpoint);
};

export { getAllManufacturers };
