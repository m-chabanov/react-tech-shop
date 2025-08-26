import { getHttp } from '@/services/http';
const allTypesEndpoint = 'all-types.json';

const getAllTypes = () => {
  return getHttp(allTypesEndpoint);
};

export { getAllTypes };
