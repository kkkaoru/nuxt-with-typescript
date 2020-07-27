import { FlickingOptions } from '@egjs/flicking';
import { commonAnimationDuration } from './animation';

export const bannerOptions = {
  gap: 0,
  circular: true,
  hanger: 0,
  anchor: 0,
  autoResize: true,
  renderExternal: true,
  duration: commonAnimationDuration,
} as FlickingOptions;

export const licenseCardOptions = {
  gap: 20,
  circular: true,
  hanger: 0,
  anchor: 0,
  autoResize: true,
  renderExternal: true,
  duration: commonAnimationDuration,
} as FlickingOptions;
