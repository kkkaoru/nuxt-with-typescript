import snakecaseKeys from 'snakecase-keys';

export function convertToSnakeKeys<T>(r: unknown) {
  return (snakecaseKeys(r, { deep: true }) as unknown) as T;
}
