import { CarouselController } from '@/utils/carousel';

export type UseCarouselControllerPlugin = {
  controller: CarouselController;
  next: Function;
  prev: Function;
};

export function userCarouselController(): UseCarouselControllerPlugin {
  const controller = new CarouselController();
  const next = () => {
    controller.next();
  };
  const prev = () => {
    controller.prev();
  };
  return {
    controller,
    next,
    prev,
  };
}
