import camelcaseKeys from 'camelcase-keys';

export function convertToCamelKeys<T>(r: unknown) {
  return (camelcaseKeys(r, { deep: true }) as unknown) as T;
}
