import { pathToApi } from '@/config/config';

export function getHttp(endPoint) {
  return fetch(`${pathToApi}/${endPoint}`)
    .then((response) => response.json())
    .catch((error) => {
      return {
        error,
        translationKey: 'errors.somethingWentWrong',
      };
    });
}

// TO ADD
// postHttp
// putHttp
// deleteHttp
