import get from 'lodash-es/get';
import { isExpectedArrayFormat } from './helpers';

export function filterBy(arr, propertyKey, value = true) {
  const isExpectedFormat = isExpectedArrayFormat(arr);

  if (isExpectedFormat) {
    return arr.filter((item) => {
      const itemValue = get(item, propertyKey);
      return value === true ? !!itemValue === value : itemValue === value;
    });
  }
  throw new Error(
    'filterBy() expects an array of objects as the first argument'
  );
}

export function findBy(arr, propertyKey, value = true) {
  const isExpectedFormat = isExpectedArrayFormat(arr);

  if (isExpectedFormat) {
    return arr.find((item) => {
      const itemValue = get(item, propertyKey);
      return value === true ? !!itemValue === value : itemValue === value;
    });
  }
  throw new Error('findBy() expects an array of objects as the first argument');
}

export function mapBy(arr, propertyKey) {
  const isExpectedFormat = isExpectedArrayFormat(arr);

  if (isExpectedFormat) {
    return arr.map((item) => {
      return get(item, propertyKey);
    });
  }
  throw new Error('mapBy() expects an array of objects as the first argument');
}
