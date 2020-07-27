import Flicking, { Plugin } from '@egjs/flicking';

export class CarouselController implements Plugin {
  private flicking: Flicking | null = null;

  init(flicking: Flicking) {
    this.flicking = flicking;
  }

  destroy() {}
  prev() {
    if (this.flicking === null) {
      return;
    }
    this.flicking.prev();
  }

  next() {
    if (this.flicking === null) {
      return;
    }
    this.flicking.next();
  }
}
