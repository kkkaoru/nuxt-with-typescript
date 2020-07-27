const CAN_ACTIVATE_MOCK_ROUTE_VALUE = '1';

export function isAvailableMockRoute(): boolean {
  return process.env.NUXT_USE_MOCK_DIRECTORIES === CAN_ACTIVATE_MOCK_ROUTE_VALUE;
}
