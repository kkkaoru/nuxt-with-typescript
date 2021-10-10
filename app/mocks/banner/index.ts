import { Banner } from '@/types/banner';

const mockBanner: Banner = {
  id: 0,
  name: 'SAMPLE BANNER 1',
  linkUrl: 'https://placeholder.com/',
  imageUrl: 'https://via.placeholder.com/1920x1080',
};

export const mockBannerHasOne: Banner[] = [mockBanner];

export const mockBanners: Banner[] = [
  mockBanner,
  {
    id: 1,
    name: 'SAMPLE BANNER 2',
    linkUrl: 'https://placehold.jp/',
    imageUrl: 'https://placehold.jp/24/cc9999/993333/1920x1080.png',
  },
  {
    id: 2,
    name: 'SAMPLE BANNER 1',
    linkUrl: 'https://placekitten.com/',
    imageUrl: 'https://placekitten.com/1920/1080',
  },
];
