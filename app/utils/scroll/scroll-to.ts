import { canControlScroll } from './can-control';

export function scrollToElement(idNameWithHash: string) {
  const idName = idNameWithHash.replace('#', '');
  if (!canControlScroll || idName === '') {
    return;
  }
  const element = document.getElementById(decodeURIComponent(idName));
  if (element === null) {
    return;
  }
  window.scrollTo(0, element.getBoundingClientRect().y);
}
