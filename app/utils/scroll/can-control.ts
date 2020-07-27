export function canControlScroll(): boolean {
  return typeof document !== 'undefined' && typeof window !== 'undefined';
}
