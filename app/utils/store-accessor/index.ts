/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import BannerStore from '@/store/banners';

let bannerStore: BannerStore;

function initializeStores(store: Store<any>): void {
  bannerStore = getModule(BannerStore, store);
}

export { initializeStores, bannerStore };
