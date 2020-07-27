function canControlScroll(): boolean {
  return typeof document !== 'undefined' && typeof window !== 'undefined';
}

const FIX_GAP_BODY_CLASS = 'body__fix-gap';

export function disabledScroll() {
  if (!canControlScroll()) {
    return;
  }
  const scrollY: number = document.scrollingElement
    ? document.scrollingElement.scrollTop
    : document.querySelector('html').scrollTop;
  document.body.classList.add(FIX_GAP_BODY_CLASS);
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
}

export function enabledScroll() {
  if (!canControlScroll()) {
    return;
  }
  const scrollY: number = parseInt(document.body.style.top || '0');
  document.body.classList.remove(FIX_GAP_BODY_CLASS);
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, scrollY * -1);
}
