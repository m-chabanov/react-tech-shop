export function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

export function isExpectedArrayFormat(arr) {
  return Array.isArray(arr) && arr.every(isObject);
}
